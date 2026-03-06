# OpenClaw on Windows — Notes

## Known Issues / Fixes
- **Brave/Windows OpenClaw freeze**: disable browser **hardware acceleration**.

## Install / Troubleshooting (2026-03-05)
### PowerShell blocked scripts (`npm.ps1` / `openclaw.ps1`)
- Symptom: “running scripts is disabled on this system”
- Fix:
  - One-shot: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
  - Persistent (user): `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

### `npm ERR! spawn git ENOENT`
- Cause: Git not installed / not on PATH (especially in Admin context)
- Fix: `winget install --id Git.Git -e`

### Gateway / Scheduled Task
- Install succeeded: `openclaw --version` → **2026.3.2**
- Gateway install: `openclaw gateway install` creates Scheduled Task **OpenClaw Gateway** and writes token to `C:\Users\17033\.openclaw\openclaw.json`.
- If task exits immediately and manual run of `C:\Users\17033\.openclaw\gateway.cmd` says config is **unset**:
  - Start with: `openclaw gateway start --allow-unconfigured`

## Source sessions
- [2026-03-05.md](./2026-03-05.md)
- [2026-03-04.md](./2026-03-04.md)
