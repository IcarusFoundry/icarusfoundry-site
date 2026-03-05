# OPERATIONS.md — Default Rails (Caligula × Julius)

This is the boring playbook that preserves speed.

## 1) Go/No-Go Checklist (Outbound / Automation)

**Greenlight requires:**
- **Compliance status:** Green (explicit approval for the channel + script positioning)
- **Suppression list:** Ready + enforced (DNC/opt-out captured and honored)
- **Recording policy:** Decided (record / no record) + disclosures aligned
- **Script version:** Approved + frozen for the test window
- **Time windows:** Set and enforced

**If any are Red:**
- No outbound.
- Build internal assets only (scripts, lists, infra, landing pages, analytics).

## 2) Default Deployment Path (Web)

**Rule:** repo root = site root.

**Preferred stack:**
- GitHub repo
- Cloudflare Pages
- Cloudflare Registrar/DNS

**Conventions:**
- `index.html`, `styles.css` at repo root
- `assets/` at repo root
- Avoid nested publish directories unless absolutely necessary

**Definition of done (site):**
- Domain live + HTTPS
- Canonical host chosen + redirect set (www ↔ apex)
- Primary CTA works (Calendly or form endpoint)
- Social preview (OG image) set

## 3) Experiment Discipline (A/B Tests)

**One variable at a time.**
- Week 1: Provider A/B (same metro/number style)
- Week 2: Area code A/B (same provider)

**Track per 1,000 dials:**
- Human answer rate
- Spam label rate
- DM reached rate
- Qualified rate (DM + pain + wherewithal)
- Transfer connect rate

**Winner thresholds:**
- >=20% relative lift in human answer rate OR
- >=15% lift in qualified transfers per 1,000 dials
- Disqualify if spam label rate is materially worse or call stability is poor

## 4) “Definition of Done” per Sprint

Every sprint ends with a measurable outcome.

Examples:
- **Website sprint:** domain live + CTA linked + lead capture verified
- **Outreach sprint:** 7-day A/B completed + decision made + next test queued
- **Automation sprint:** 2 workflows in production + monitoring + rollback plan

## 5) Memory Rule

If Caligula goes silent for **>3 minutes** during an active working session, Julius writes a short memory note:
- current context
- decisions made
- open questions / next steps
