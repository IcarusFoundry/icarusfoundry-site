# Icarus Foundry — 14‑Day AI Ops Sprint (SOP)

**Public promise:** In 14 days, ship **2 workflows minimum** (often **2–4 depending on complexity**) into the client’s real systems.

**Default stance:** Draft‑first. Auto‑send only when the client is comfortable and the message type is appropriate.

**Email vs SMS reality (important):**
- **Email auto‑send** can typically be enabled faster for pre‑approved templates/categories.
- **SMS auto‑send** may require registration/compliance steps (e.g., A2P/10DLC where applicable) plus explicit template/category approval. If registration can’t be completed within the sprint window, SMS auto‑send becomes a **post‑sprint roadmap item** while draft‑first stays available.

---

## Definition of Done (Sprint)
By Day 14 we deliver:
- **2–4 production workflows** live in the client’s real systems
- **Guardrails** (policy + permissions + escalation paths)
- **Monitoring + rollback** (errors visible; safe recovery)
- **Documentation + runbook** (ops + troubleshooting)
- **Training + handoff** (ownership clarified)
- **30‑day optimization roadmap** (next workflows + tuning)

---

## Pre‑Sprint (T‑7 to T‑1)
**Goal:** Remove access friction and lock scope.
- Confirm client **Workflow Owner** + backup
- Confirm systems in scope (email/PM tool/CRM/spreadsheets)
- Confirm compliance posture + any restrictions (PII, communications policy)
- Schedule:
  - Day 1 kickoff (60 min)
  - Two build check‑ins (30 min each)
  - Day 12 launch (30 min)
  - Day 13 training (45–60 min)
  - Day 14 exec readout (30 min)
- Create shared project space (folder + notes + decision log)

**Artifacts created:**
- Client Intake (filled)
- Draft Design Doc skeleton
- Access checklist

---

## Day‑by‑Day Plan

### Day 1 — Kickoff + Workflow Selection
**Outputs:** Locked workflows, success metrics, approval model.
- Confirm 1–2 workflows to start + why now
- Define 2–3 success metrics (pick from: response time, touches/ticket, hours saved, vacancy days, lead→tour conversion)
- Decide approval mode per workflow:
  - Draft‑first (default)
  - Guardrailed auto‑send (specific message categories)
  - Full auto (rare)
- Capture constraints: tone, compliance, escalation, do‑not‑send rules

### Day 2 — Process Mapping (Current State)
**Outputs:** Current state map + pain points + edge cases.
- Map steps + decision points + exceptions
- Identify bottlenecks, handoffs, and where information lives
- Collect sample inputs/outputs (emails, tickets, templates)

### Day 3 — Solution Design (Future State)
**Outputs:** Design Doc v1, test plan, rollout plan.
- Future state flow
- Inputs/outputs + templates
- Integrations + permissions
- Guardrails + escalation
- Monitoring + logging plan

### Days 4–6 — Build Workflow #1
**Outputs:** Workflow #1 in staging/pilot.
- Implement happy path
- Add approvals + guardrails
- Add logging + basic monitoring
- Pilot with a small set of real items

### Days 7–8 — Build Workflow #2
**Outputs:** Workflow #2 in staging/pilot.
- Same pattern as Workflow #1

### Days 9–10 — QA + Failure Modes + Performance
**Outputs:** QA signoff checklist completed.
- Edge cases
- Permission failures
- “Bad input” testing
- Safety checks (PII exposure, tone drift)
- Rollback tested

### Day 11 — Rollout Packaging
**Outputs:** Launch plan + training plan.
- Pilot → full rollout schedule
- Owner assignments
- Support + escalation expectations

### Day 12 — Launch (Pilot → Production)
**Outputs:** Production launch + issue list.
- Launch to pilot group
- Fix quickly
- Confirm logs/monitoring are working

### Day 13 — Training + Runbooks
**Outputs:** Runbook + training complete.
- Train workflow users
- Train admin/owner
- Deliver runbooks

### Day 14 — Exec Readout + Roadmap
**Outputs:** Readout deck/email + 30‑day roadmap.
- What shipped
- Early metrics + baseline comparison
- Recommendations: next 2–4 workflows

---

## Required Templates (included below)
- Kickoff agenda
- Design Doc outline
- QA checklist
- Runbook outline
- Training agenda
- Exec readout outline

---

## Kickoff Agenda (60 min)
1) Objectives + definition of done
2) Workflow #1 selection + metric
3) Workflow #2 selection + metric
4) Approvals + guardrails (draft vs auto)
5) Access + timelines
6) Next 48 hours: what we need from client

---

## Design Doc Outline (1–2 pages)
- Workflow name + owner
- Current state summary
- Future state flow (bullets)
- Inputs + outputs
- Systems + permissions
- Guardrails + escalation
- Monitoring/logging
- Test cases
- Rollout plan

---

## QA Checklist
- Happy path works end‑to‑end
- Edge cases identified and handled
- Permission failures handled gracefully
- Draft vs auto-send behavior matches policy
- Logging captured (who/what/when)
- Monitoring alerts fire on failure
- Rollback works

---

## Runbook Outline
- What the workflow does
- When to use it
- When NOT to use it
- How to review outputs (drafts/approvals)
- Common errors + fixes
- Escalation path
- Owner/admin contacts

---

## Training Agenda (45–60 min)
- Walkthrough (real examples)
- What changed vs old process
- Approval steps
- Common failure modes
- Q&A

---

## Exec Readout Outline (30 min)
- What shipped (2–4 bullets)
- Metrics (baseline vs now)
- Risks/limitations
- 30‑day roadmap
