/** @type {import('@storybook/html-vite').StorybookConfig} */
export default {
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  // No .mdx glob until an .mdx file exists, otherwise Storybook warns on every
  // boot about a pattern that matches nothing.
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    /**
     * Serves an MCP endpoint at http://localhost:6006/mcp while `npm run dev`
     * is running. This is the SOURCE OF TRUTH leg of the harness: an agent
     * connected here reads the real components rather than guessing markup.
     * See README.md for how to connect Claude Code to it.
     */
    '@storybook/addon-mcp'
  ],
  // Serves the brand assets at a stable path so static files such as the
  // favicon can reference them without going through the bundler.
  staticDirs: [{ from: '../assets', to: '/brand' }],
  core: {
    disableTelemetry: true,
    // Storybook release notifications are noise inside a brand tool.
    disableWhatsNewNotifications: true
  }
};
