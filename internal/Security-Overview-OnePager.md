# Icarus Foundry — Security Overview (Client One‑Pager)

> **Purpose:** Provide a clear, plain‑English summary of how we handle access, data, and operational security for the 14‑Day AI Ops Sprint.

## Summary
Icarus Foundry builds and deploys automation workflows into your existing tools (e.g., Outlook, PM software, ticketing, spreadsheets). We focus on **least privilege**, **draft-first defaults**, and **monitoring/rollback** so workflows are safe to operate.

## Access Controls
- **Least privilege:** We request only the permissions required to deliver the agreed workflows.
- **MFA:** Multi‑factor authentication is enabled on Provider-managed accounts where available.
- **Role-based access:** Access is limited to personnel directly involved in delivering your Sprint.
- **Access revocation:** We can remove access promptly upon request or upon project completion.

## Data Handling
- We process only the data necessary to perform the services described in the SOW.
- We avoid copying/exporting data unless required for implementation, troubleshooting, or testing.
- Where feasible, we minimize sensitive data stored in logs.

## Outbound Communications Safety
- Default mode is **draft-first** (your team approves messages before sending).
- If you choose auto-send for certain message types, we apply **guardrails**:
  - pre-approved templates and categories
  - escalation to human review for exceptions
  - rate limits/throttles where appropriate
  - kill switch to disable automation if needed

## Monitoring and Rollback
- We implement basic monitoring and logging to detect workflow failures.
- We maintain the ability to **disable** workflows quickly if an issue is detected.

## Subprocessors / Third‑Party Services
We may rely on reputable third‑party services to deliver the Sprint (e.g., hosting, analytics, AI model provider, messaging provider). A subprocessor list can be provided on request.

## Incident Response
- If we become aware of a security incident affecting your data, we will notify you without undue delay per the agreed DPA/contract terms.

## Data Retention & Deletion
- We retain data only as long as necessary to provide the services.
- Upon termination/completion, we delete or return data per the DPA/SOW, subject to reasonable backup/archival practices and legal requirements.

## Client Responsibilities (Important)
Security is shared. You are responsible for:
- ensuring your internal access controls are appropriate
- providing correct contact data and communication policies
- confirming you have required consent for resident communications (especially SMS)

## Contact
Security / delivery contact: **[NAME / EMAIL]**
