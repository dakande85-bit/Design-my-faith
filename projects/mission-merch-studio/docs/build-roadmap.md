# Build Roadmap

## Phase 0 — Repository setup

Status: Started.

- Create repo structure
- Add product spec
- Add database schema draft
- Add fulfilment workflow
- Create GitHub issues
- Connect to Vercel later

## Phase 1 — Clickable MVP UI

Goal: create a working front-end structure with sample data.

Build:

- Public homepage
- How it works page
- Product catalogue
- Campaign listing page
- Customer dashboard
- Product designer UI
- Checkout/order summary placeholder
- Admin dashboard
- Manual fulfilment order board
- Artwork review queue

Success criteria:

- A visitor understands the offer in under 10 seconds.
- A church can follow the path from product selection to order submission.
- Admin can see what needs review, production, or shipping.

## Phase 2 — Supabase foundation

Goal: replace sample data with real auth, database, and storage.

Build:

- Supabase project
- Auth
- Profiles
- Organisations
- Products
- Designs
- Orders
- Campaigns
- Storage buckets for artwork and previews
- Role-based route protection

Success criteria:

- A user can sign up.
- A user can create an organisation.
- A user can save a design/order draft.
- Admin can view submitted orders.

## Phase 3 — Artwork upload and review

Goal: make the manual fulfilment workflow real.

Build:

- Upload artwork
- Store original file
- Generate preview metadata
- Admin artwork review
- Approve/request changes
- Customer revision notes
- Print quality checklist

Success criteria:

- Customer uploads artwork.
- Admin can approve or request changes.
- Order status moves correctly.

## Phase 4 — Stripe Checkout

Goal: take real payments.

Build:

- Stripe Checkout session creation
- Payment success/cancel routes
- Order status update after payment
- Webhook verification
- Payment status display

Success criteria:

- Paid order becomes `Paid`.
- Failed/cancelled checkout does not enter production.

## Phase 5 — Fundraising campaigns

Goal: allow churches/missions/charities to create public campaign stores.

Build:

- Campaign creation flow
- Campaign approval
- Public campaign pages
- Campaign product listings
- Raised/profit tracking
- Manual payout tracking

Success criteria:

- A mission can create a campaign.
- Admin approves it.
- Supporters can order products connected to that campaign.

## Phase 6 — Production operations

Goal: make fulfilment manageable.

Build:

- Supplier cost fields
- Internal notes
- Production status board
- Shipping/tracking fields
- Order export CSV
- Packing checklist
- Email notifications

Success criteria:

- Admin can run manual production from the dashboard.
- Every order has a clear next action.

## Phase 7 — Automation later

Only after manual sales prove the model.

Possible additions:

- Background removal API
- Vectorizer API
- Supplier routing
- Gelato/Printful/Printify integration
- Stripe Connect payouts
- Template marketplace
- AI design assistant
