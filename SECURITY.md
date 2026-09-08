# Security

This repo ships CSS, JSON and documentation. It has no runtime dependencies, no server, no user input and no secrets. The security surface is the dev toolchain and the supply chain behind it.

## What is checked

`npm audit --audit-level=high` runs in CI and fails on high and critical advisories. Moderate and low advisories are reported and recorded here rather than blocking, because every dependency in this repo is a dev dependency that never reaches a consumer.

## Accepted advisories

| Advisory | Severity | Path | Why it is accepted |
| --- | --- | --- | --- |
| Valibot `record()` issue paths can make `flatten()` throw on inherited Object property names | Moderate | `valibot` via `@storybook/mcp` and `@storybook/addon-mcp` | Reachable only through the Storybook MCP server, which binds to localhost during `npm run dev`. It is not built into `storybook-static` and never runs in a consumer's product. Revisit when Storybook updates its valibot range. |

Reviewed 2026-08-11.

## Reporting

This is an internal brand system with no public deployment. Raise anything you find directly with Ygor Yan Braga.

## What is deliberately not here

- **No secrets scanning.** There are no credentials in this repo and nothing in it authenticates anywhere. If that changes, add gitleaks to CI before the first credential lands.
- **No SBOM.** Not warranted for a repo with no runtime dependencies.
- **No dependency pinning beyond the lockfile.** `npm ci` in CI installs from `package-lock.json`, which is the control that matters here.
