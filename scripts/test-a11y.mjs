/**
 * Accessibility guardrail.
 *
 * Serves the built Storybook, opens every story in a real browser and runs axe
 * against it. A real browser matters: axe cannot evaluate colour, focus or
 * computed roles in a simulated DOM.
 *
 * Colour contrast is deliberately excluded here and covered by
 * scripts/test-contrast.mjs, which measures the tokens directly rather than
 * sampling whatever happens to be rendered in a story.
 *
 * Usage:
 *   node scripts/test-a11y.mjs           build if needed, then test
 *   node scripts/test-a11y.mjs --skip-build   reuse storybook-static
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const STATIC = join(ROOT, 'storybook-static');
const AXE = join(ROOT, 'node_modules/axe-core/axe.min.js');
const SKIP_BUILD = process.argv.includes('--skip-build');

/**
 * The single rule this suite does not evaluate, kept deliberately short: every
 * exclusion is a blind spot, so nothing is disabled here on suspicion.
 *
 * colour-contrast is measured by scripts/test-contrast.mjs directly against the
 * tokens, in both themes, including pairs no story happens to render. Running it
 * here as well would only re-report the documented exceptions.
 *
 * Verified against all stories with every rule enabled: no other rule fires, so
 * there is nothing else to exclude.
 */
const DISABLED_RULES = ['color-contrast'];

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2',
  '.map': 'application/json', '.ico': 'image/x-icon'
};

if (!SKIP_BUILD || !existsSync(STATIC)) {
  console.log('building storybook...');
  execSync('npx storybook build --quiet', { cwd: ROOT, stdio: 'inherit' });
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let path = join(STATIC, decodeURIComponent(url.pathname));
    if ((await stat(path).catch(() => null))?.isDirectory()) path = join(path, 'index.html');
    const body = await readFile(path);
    res.writeHead(200, { 'Content-Type': MIME[extname(path)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end('not found');
  }
});

await new Promise((r) => server.listen(0, r));
const port = server.address().port;
const base = `http://127.0.0.1:${port}`;

const index = JSON.parse(await readFile(join(STATIC, 'index.json'), 'utf8'));
const stories = Object.values(index.entries).filter((e) => e.type === 'story');

const axeSource = await readFile(AXE, 'utf8');
const browser = await chromium.launch();
const page = await browser.newPage();

const failures = [];
let checked = 0;

for (const story of stories) {
  await page.goto(`${base}/iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story`, {
    waitUntil: 'networkidle'
  });
  await page.waitForSelector('#storybook-root > *', { timeout: 10000 }).catch(() => {});
  await page.addScriptTag({ content: axeSource });

  const result = await page.evaluate(
    async (disabled) =>
      await window.axe.run('#storybook-root', {
        rules: Object.fromEntries(disabled.map((r) => [r, { enabled: false }])),
        resultTypes: ['violations']
      }),
    DISABLED_RULES
  );

  checked += 1;
  for (const v of result.violations) {
    failures.push({
      story: story.title + ' / ' + story.name,
      id: v.id,
      impact: v.impact,
      help: v.help,
      nodes: v.nodes.map((n) => n.html.slice(0, 120))
    });
  }
}

await browser.close();
server.close();

console.log(`a11y: ${checked} stories checked, ${failures.length} violation(s)`);
console.log(`      contrast excluded here, measured by npm run test:contrast`);

if (!failures.length) process.exit(0);

console.error();
for (const f of failures) {
  console.error(`  ${f.impact?.toUpperCase() ?? 'UNKNOWN'}  ${f.story}`);
  console.error(`    ${f.id}: ${f.help}`);
  for (const n of f.nodes) console.error(`      ${n}`);
  console.error();
}
process.exit(1);
