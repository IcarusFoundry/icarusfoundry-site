# Internal Policy — Messaging Account Ownership

## Rule
For outbound messaging workflows (Email + SMS), Icarus Foundry requires **client-owned provider accounts**.

- The client owns:
  - the messaging provider account (e.g., Twilio)
  - phone numbers / sender identities
  - brand/campaign registrations (A2P/10DLC where applicable)
  - billing and usage charges

- Icarus Foundry may assist with setup/configuration **as part of the messaging add-on**, but we do not operate outbound resident messaging under Provider-owned subaccounts.

## Rationale
- Reduces Provider liability exposure
- Cleaner consent/compliance ownership
- Cleaner offboarding (client keeps numbers + history)

## Implementation notes
- Require admin access (or delegated access) sufficient to configure:
  - sender identities/numbers
  - templates/categories
  - opt-out handling
  - webhooks/logging as needed
- If the client cannot create/own the account, outbound messaging should be scoped as **draft-first only** until ownership is resolved.
