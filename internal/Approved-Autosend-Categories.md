# Default Approved Auto‑Send Categories (Safe Starter Set)

**Purpose:** Standardize what we’re willing to auto-send early without drama.

**Default stance:** Draft-first. Auto-send is opt-in, per category, with client-approved templates.

---

## Category 1 — Receipt Confirmation (Maintenance)
**When:** Resident submits a maintenance request.

**Allowed:**
- Confirmation we received it
- What happens next
- How to add details

**Template (SMS):**
“Hi {resident_name} — we received your maintenance request for {property_name}. Our team is reviewing it now. If this is an emergency (fire/gas/medical), call 911. Reply with any additional details.”

**Template (Email):**
Subject: We received your maintenance request

“Hi {resident_name},

We received your maintenance request for {property_name}. Our team is reviewing it now and will follow up with next steps.

If this is an emergency (fire/gas/medical), call 911.

Thanks,
{pm_team_name}”

---

## Category 2 — Scheduling / Appointment Confirmation
**When:** Appointment is scheduled/confirmed.

**Template (SMS):**
“Confirmed: maintenance appointment at {property_name} on {date} between {window}. Reply YES to confirm or reply to reschedule.”

**Notes:** If you support replies, route inbound responses to a human or a controlled rescheduling flow.

---

## Category 3 — Status Update (Vendor Assigned / En Route / Completed)
**When:** Ticket status changes in the PM system.

**Allowed:**
- “Vendor scheduled”
- “Technician en route”
- “Work marked complete”

**Template (SMS):**
“Update for {property_name}: {status_update}. If you have questions, reply here and our team will help.”

---

## Category 4 — Missing Information Request (Low Risk)
**When:** Request can’t be processed due to missing basics.

**Template (SMS):**
“Quick question so we can help: can you confirm {missing_field}? Reply with {example_answer}.”

**Guardrail:** Do not ask for highly sensitive information over SMS.

---

## Category 5 — Leasing Follow‑Up (Prospects)
**When:** Prospect inquiry received.

**Template (SMS):**
“Hi {first_name} — thanks for your interest in {property_name}. Want to schedule a tour? Reply with a day/time that works, or call {phone_number}.”

**Guardrails:** Only if consent is documented; otherwise draft-first or email-only.

---

## Category 6 — Payment Reminder (Optional / Higher Risk)
**Default:** Draft-first unless client provides compliant language and policy.

**Notes:** Avoid threatening language. Ensure alignment with client policy and applicable rules.

---

## Global Guardrails (applies to all auto-send)
- No legal/eviction threats, no discriminatory language.
- No emergency guidance beyond “call 911 / emergency services.”
- No sending sensitive personal details.
- Quiet hours enforced.
- Rate limiting enabled.
- Kill switch available.
- Exceptions route to human.

---

## Client Approval Checklist (before enabling auto-send)
- Category enabled (Yes/No)
- Template approved (exact wording)
- Quiet hours confirmed
- Escalation contact confirmed
- Consent policy confirmed (especially SMS)
