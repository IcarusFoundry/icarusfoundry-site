# Internal — Signing Packet Checklist (Close → Signed → Kickoff)

## Goal
Make it effortless to close on the discovery call and send a clean signing packet the same day.

---

## A) What we send immediately after a “Yes”
**Within 1 hour (same day):**
1) **Scope + Price recap email** (use `internal/Email-Templates.md`)
2) **Agreement packet** for e‑signature:
   - MSA (Master Services Agreement)
   - SOW (14‑Day AI Ops Sprint)
   - DPA / Data Handling Addendum (if handling resident PII)
   - Optional: NDA (only if client requests)
3) **Kickoff scheduling link** (or propose 2 kickoff times)

---

## B) Deal variables to confirm on the discovery call (so docs are clean)
### Commercial
- Start date (Option A / Option B)
- Pricing:
  - Sprint: $7,500 starting (final price if you’re standardizing)
  - Add‑on: Outbound Messaging (Email+SMS) +$3,500 flat (Yes/No)
- Payment schedule (recommend): 50% upfront / 50% Day 7 (or before launch)
- Billing entity name + address

### Scope
- Workflow #1 name + 1‑sentence outcome
- Workflow #2 name + 1‑sentence outcome
- Systems in scope (Outlook + PM software + any CRM/spreadsheets)
- Risk mode per workflow:
  - Draft‑first (default)
  - Guardrailed auto‑send categories (only if approved)

### Data / compliance
- Confirm resident PII involvement (Yes/No)
- Confirm communication channels used (Email/SMS/Both)
- Confirm client responsibility for consent/opt‑out policy (especially SMS)

---

## C) SOW (14‑Day Sprint) — required fields to fill
- Client legal name
- Sprint dates (Day 1 kickoff date; Day 14 end date)
- Deliverables:
  - 2 workflows minimum (2–4 depending on complexity)
  - Integrations list
  - Guardrails + approvals
  - Monitoring + rollback
  - Runbooks + training
  - 30‑day roadmap
- Acceptance criteria:
  - “Workflow operates as described in Design Doc and passes QA checklist”
- Out of scope:
  - Major data migrations
  - Net‑new system rebuilds
  - Custom app development beyond agreed integrations
- Client responsibilities:
  - Provide access, samples, and workflow owner responsiveness

---

## D) DPA / Data Handling Addendum — required fields to fill
- Client controller contact
- Categories of data (resident name/email/phone, maintenance notes, etc.)
- Subprocessors list (AI provider, hosting/logging, messaging provider)
- Retention/deletion timeline (on termination)
- Security measures summary (MFA, least privilege)
- Breach notification window

---

## E) Kickoff readiness checklist (send after signature)
**Client must provide before Day 1:**
- Workflow Owner + backup
- Access to:
  - Outlook mailbox(es) / shared inbox
  - PM tool (and sandbox/test tenant if available)
  - Any CRM/spreadsheets involved
- Samples:
  - 20–50 recent examples (tickets/emails/leads)
  - Approved templates and tone guidelines
- “Do not send” rules + escalation contacts

---

## F) Internal go/no-go before kickoff
- Signed docs received
- Invoice #1 paid
- Access confirmed (test login)
- Kickoff on calendar
- Internal project folder created + decision log started
