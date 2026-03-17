# AI Agent Dev Setup - [Your Name]

## Workshop Cohort
- Name: [Your Name]
- Cohort: [Bootcamp / AI Agent Developer Cohort]

## Development Environment Checklist

1. Node.js installed
   - Command: `node --version`
   - Screenshot: `screenshots/node-version.png`

2. Git installed
   - Command: `git --version`
   - Screenshot: `screenshots/git-version.png`

3. VS Code Insider with GitHub Copilot enabled
   - Screenshot: `screenshots/vscode-insider-copilot.png`

4. Claude Desktop with all 4 MCP servers connected
   - Screenshot: `screenshots/claude-mcp-connected.png`

## MCP Servers Purpose and Functionality

- **Rolldice**: randomization and interactive game-based inputs for agent workflows.
- **Bootcamp AI Agent**: training agent for the bootcamp, provides AI coaching in development tasks.
- **Calendar Booking**: scheduling service to support booking events by agent conversations.
- **GitHub**: source control and workspace automation via MCP interface.

## Troubleshooting Notes

- Issue: MCP endpoint connection failures. Fix: verify local host names, adjust firewall/ports, and ensure Claude Desktop has correct certificate trust.
- Issue: GitHub token unauthorized. Fix: regenerate PAT with `repo`, `workflow`, and `read:user` scopes.
- Issue: Copilot disabled in VS Code Insider. Fix: update extension and sign in to correct account.

## Repository Structure

- `/mcp-configs/`
  - `claude-desktop-config.json`
  - `mcp-servers-list.md`
  - `connection-test.md`
- `reflection.md`
- `VERIFICATION.md`

## How to Verify

1. Add all screenshots to `/screenshots/`.
2. Confirm MCP server connectivity via `mcp-configs/connection-test.md` with real endpoint checks.
3. Commit to git with at least 5 meaningful commits.
4. Use process in `VERIFICATION.md` to prove operations.

