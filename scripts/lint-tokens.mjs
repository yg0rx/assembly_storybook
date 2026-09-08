/**
 * Token guardrail.
 *
 * The component layer may only read custom properties. A raw colour, a raw
 * radius or an off-scale spacing value in css/ means a value was declared
 * outside the source of truth, which is exactly the drift this repo exists to
 * stop. dist/ and tokens/ are exempt because that is where values are declared.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = JSON.parse(readFileSync(join(ROOT, 'tokens/tokens.source.json'), 'utf8'));

const SCAN_DIRS = ['css', 'stories'];
const SPACE_SCALE = new Set(
  src.primitives.filter((t) => t.group === 'space').map((t) => t.value)
);
const RADIUS_SCALE = new Set(
  src.primitives.filter((t) => t.group === 'radius').map((t) => t.value)
);

/** Values allowed to appear literally, because no token could express them. */
const ALLOWED_LITERALS = new Set([
  '0', '0px', '1px', '100%', 'auto', 'none', 'transparent', 'currentColor', 'inherit'
]);

/**
 * Off-grid spacing kept on purpose, because the component reproduces supplied
 * artwork exactly. Same shape as the contrast exceptions: a reason and an owner,
 * and the lint fails on a stale entry so a cleanup cannot leave one behind.
 */
const gridPath = join(ROOT, 'knowledge/grid-exceptions.json');
const gridExceptions = existsSync(gridPath)
  ? JSON.parse(readFileSync(gridPath, 'utf8')).exceptions
  : [];
const usedExceptions = new Set();

const grandfathered = (file, value) => {
  const rel = relative(ROOT, file);
  const hit = gridExceptions.find((e) => e.file === rel && e.values.includes(value));
  if (hit) usedExceptions.add(`${rel}::${value}`);
  return Boolean(hit);
};

const walk = (dir) => {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(css|js|mjs)$/.test(entry)) out.push(p);
  }
  return out;
};

const problems = [];
const add = (file, line, rule, detail) =>
  problems.push({ file: relative(ROOT, file), line, rule, detail });

for (const dir of SCAN_DIRS) {
  const full = join(ROOT, dir);
  let files;
  try { files = walk(full); } catch { continue; }

  for (const file of files) {
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((raw, i) => {
      const n = i + 1;
      // Strip comments, font-face src URLs and numeric HTML entities before
      // matching. `&#8594;` is a right arrow, not a colour.
      const line = raw
        .replace(/\/\*.*?\*\//g, '')
        .replace(/url\([^)]*\)/g, '')
        .replace(/&#\d+;/g, '');
      if (!line.trim() || line.trim().startsWith('*') || line.trim().startsWith('//')) return;

      // 1. Raw hex colours.
      for (const m of line.matchAll(/#[0-9a-fA-F]{3,8}\b/g)) {
        add(file, n, 'raw-hex', `${m[0]} should be a var(--color-*) or a semantic alias`);
      }

      // 2. Raw rgb/hsl functions.
      for (const m of line.matchAll(/\b(rgba?|hsla?)\(/g)) {
        add(file, n, 'raw-color-fn', `${m[1]}() should be color-mix() over a token`);
      }

      // 3. Off-scale px values on spacing properties.
      const spacing = line.match(/\b(margin|padding|gap|row-gap|column-gap)[a-z-]*:\s*([^;]+)/);
      if (spacing) {
        for (const m of spacing[2].matchAll(/(?<![\w-])(\d+(?:\.\d+)?px)/g)) {
          if (SPACE_SCALE.has(m[1]) || ALLOWED_LITERALS.has(m[1])) continue;
          if (grandfathered(file, m[1])) continue;
          add(file, n, 'off-scale-space', `${m[1]} is not on the spacing scale, use var(--space-*)`);
        }
      }

      // 4. Off-scale border-radius.
      const radius = line.match(/\bborder-radius:\s*([^;]+)/);
      if (radius) {
        for (const m of radius[1].matchAll(/(\d+(?:\.\d+)?px)/g)) {
          if (!RADIUS_SCALE.has(m[1]) && !ALLOWED_LITERALS.has(m[1])) {
            add(file, n, 'off-scale-radius', `${m[1]} is not on the radius scale, use var(--radius-*)`);
          }
        }
      }

      // 5. Focus suppressed without a replacement in the same rule.
      if (/outline:\s*(none|0)\b/.test(line)) {
        add(file, n, 'focus-removed', 'outline: none is never approved. See knowledge/accessibility.md s2');
      }
    });
  }
}

// A grid exception that no longer matches anything is stale and must go, the
// same rule the contrast exceptions follow.
for (const e of gridExceptions) {
  for (const v of e.values) {
    if (!usedExceptions.has(`${e.file}::${v}`)) {
      problems.push({
        file: 'knowledge/grid-exceptions.json',
        line: 0,
        rule: 'stale-exception',
        detail: `${e.file} no longer uses ${v}. Remove it from the exception.`
      });
    }
  }
}

const byRule = problems.reduce((acc, p) => {
  (acc[p.rule] ??= []).push(p);
  return acc;
}, {});

if (!problems.length) {
  console.log(`tokens: clean. ${SCAN_DIRS.join(', ')} declare no values of their own.`);
  process.exit(0);
}

console.error(`\n${problems.length} token violation(s):\n`);
for (const [rule, list] of Object.entries(byRule)) {
  console.error(`  ${rule} (${list.length})`);
  for (const p of list) console.error(`    ${p.file}:${p.line}  ${p.detail}`);
  console.error();
}
console.error('A value that is not a token means the token is missing. Add it to tokens/tokens.source.json and rebuild.');
process.exit(1);
