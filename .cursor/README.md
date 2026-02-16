# Cursor MCP – Figma

This folder configures Figma MCP servers for Cursor (see `.cursor/mcp.json`).

## Servers in use

1. **figma-desktop** – Uses the Figma Desktop app.
   - Requires: [Figma Desktop](https://www.figma.com/downloads/) with MCP enabled in **Dev Mode**.
   - No token needed; the app serves MCP at `http://127.0.0.1:3845/mcp`.

2. **figma** – Uses [figma-developer-mcp](https://www.npmjs.com/package/figma-developer-mcp) (API token).
   - Requires: set `FIGMA_API_KEY` to your [Figma personal access token](https://help.figma.com/hc/en-us/articles/8085703771159).
   - Get a token: Figma → **Settings** → **Security** → **Personal access tokens** → **Generate new token** (read access is enough).

## Setup

- **Figma Desktop only:**  
  Install Figma Desktop, turn on Dev Mode, enable MCP. You can disable the `figma` (npx) server in Cursor MCP settings if you prefer.

- **Token only:**  
  Set your token in the environment, then restart Cursor:
  - Windows (PowerShell): `$env:FIGMA_API_KEY = "your-token"`
  - Windows (Command Prompt): `set FIGMA_API_KEY=your-token`
  - Or add `FIGMA_API_KEY` in your system environment variables.

- **Both:**  
  You can leave both servers enabled; use the one that fits your workflow.

After changing `mcp.json` or env vars, restart Cursor (or reload the window) so MCP picks up the config.
