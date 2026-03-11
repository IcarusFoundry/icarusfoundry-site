# Messaging Setup Checklist (Client-Owned Accounts)

**Applies to:** Outbound Messaging Add‑On (Email + SMS)

**Rule:** Messaging runs through **client-owned** provider accounts. We can assist setup/configuration, but we do not run outbound resident messaging from Provider-owned subaccounts.

---

## 1) Choose providers (client decision)
### SMS
- Provider: **[Twilio / other]**
- Phone number type: **[Local / Toll-free / Short code]**

### Email
- Sending method: **[Outlook / SMTP provider / transactional email provider]**
- From address: **info@icarusfoundry.com** (or client-owned domain if applicable)

---

## 2) SMS Readiness (required for auto-send)
### Account + access
- [ ] Client creates provider account
- [ ] Provider team granted admin/delegated access sufficient to configure numbers, messaging services, webhooks

### Compliance / registration (where applicable)
- [ ] A2P/10DLC brand registration submitted (US long-code)
- [ ] Campaign registered with accurate use-case description
- [ ] If toll-free: verification submitted (if required)

### Sender identity
- [ ] Purchase/configure phone number(s)
- [ ] Configure Messaging Service (or equivalent) and attach numbers

### Opt-out handling
- [ ] Confirm STOP/UNSUBSCRIBE keywords behavior
- [ ] Confirm opt-out suppression is enforced
- [ ] Define opt-in/consent source of truth (client policy/system)

### Sending rules
- [ ] Quiet hours defined (e.g., 8pm–8am local)
- [ ] Rate limits / throttling set (to avoid bursts)
- [ ] Escalation rules defined (when to route to human)

### Templates + categories
- [ ] Approved message categories for auto-send (confirmations, status updates, etc.)
- [ ] Approved templates (exact wording) + prohibited phrases list

---

## 3) Email Readiness
### Sending identity
- [ ] Confirm FROM address + display name
- [ ] If sending from a domain we control, set up mailbox and permissions
- [ ] If sending from a client domain, ensure client sets up mailbox access/delegation

### Deliverability (recommended)
- [ ] SPF configured
- [ ] DKIM configured
- [ ] DMARC policy set (even p=none to start)

### Routing + compliance
- [ ] Define which emails can auto-send vs draft-first
- [ ] Add disclaimers if required by client policy

---

## 4) Technical Integration
- [ ] Webhooks configured (delivery receipts, failures, inbound replies if applicable)
- [ ] Logging enabled (category, timestamp, status, error codes) — minimize PII in logs
- [ ] Kill switch implemented (ability to disable automation quickly)

---

## 5) Testing + Launch
### Test plan
- [ ] Test numbers/emails list (internal only)
- [ ] “Happy path” tests for each category
- [ ] Failure mode tests (provider outage, invalid number/email, permission errors)

### Pilot rollout
- [ ] Pilot group identified
- [ ] Draft-first period completed (recommended)
- [ ] Client signs off on enabling any auto-send categories

### Go-live checklist
- [ ] Monitoring confirmed active
- [ ] Rate limits confirmed
- [ ] Opt-out confirmed working
- [ ] Support/escalation contact confirmed

---

## 6) What we need from the client (copy/paste request)
Please provide:
- Provider choice (SMS + Email)
- Admin access/delegation to the accounts
- Approved message categories + template wording
- Quiet hours and escalation contacts
- Confirmation of consent/opt-out policy
