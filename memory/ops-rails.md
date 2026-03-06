# Ops / Execution Rails

## Outbound Go/No-Go
Greenlight requires:
- Compliance status: Green (explicit approval)
- Suppression list enforced (DNC/opt-out)
- Recording policy decided + disclosures aligned
- Script version approved + frozen
- Time windows set + enforced

If any are Red: **no outbound**. Build internal assets only.

## Web deployment
- Repo root = site root
- Preferred: GitHub + Cloudflare Pages + Cloudflare DNS
- Conventions: `index.html`, `styles.css`, `assets/` at repo root
- Done: domain live + HTTPS + canonical redirect + CTA works + OG image set

## Experiment discipline
- One variable at a time (provider A/B, then area code A/B)
- Track per 1,000 dials: answer rate, spam label, DM reached, qualified, transfers
- Winner thresholds: >=20% answer lift OR >=15% qualified transfer lift; disqualify if spam label materially worse

## Memory rule
If Caligula goes silent >3 minutes during active work: save context/decisions/next steps.

## Source
- Workspace: `OPERATIONS.md`
- Session memory: [2026-03-04.md](./2026-03-04.md)
