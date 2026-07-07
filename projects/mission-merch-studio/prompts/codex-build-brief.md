# Codex Build Brief — Mission Merch Studio

Use this brief when asking Codex or another coding agent to build the first app version from GitHub.

## Goal

Build the first clickable MVP for Mission Merch Studio inside this repository.

Mission Merch Studio is a Christian manual-fulfilment custom merchandise platform for churches, missionaries, charities, ministries, and Christian events.

Do not integrate Gelato or automated fulfilment in MVP.

## Build location

Create the app under:

```text
projects/mission-merch-studio/app/
```

## Recommended stack

- Next.js or Vite/React
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- Sample data first
- Supabase-ready architecture

## Required pages

Public:

- `/`
- `/how-it-works`
- `/churches`
- `/missionaries`
- `/charities`
- `/products`
- `/campaigns`
- `/pricing`
- `/contact`
- `/start-designing`

Customer:

- `/dashboard`
- `/dashboard/organisation`
- `/dashboard/designs`
- `/dashboard/orders`
- `/dashboard/campaigns`
- `/designer`
- `/checkout`

Admin:

- `/admin`
- `/admin/orders`
- `/admin/artwork-review`
- `/admin/products`
- `/admin/campaigns`
- `/admin/organisations`

## Required components

- PublicHeader
- PublicFooter
- HeroSection
- UseCaseCards
- ProductCard
- CampaignCard
- PricingCards
- DashboardSidebar
- AdminSidebar
- OrderStatusBadge
- MockupPreview
- PrintQualityChecklist
- UploadArtworkPanel
- OrderCard

## Brand direction

Clean, premium, modern Christian design platform. Avoid cheesy religious visual clichés. Use off-white, deep charcoal/navy, soft gold accent, spacious layout, rounded cards, subtle gradients.

## MVP constraints

- No Gelato mention in UI.
- No automated fulfilment.
- No Stripe implementation yet; placeholder only.
- No complex Canva clone.
- Build design/order/review/manual fulfilment workflow.

## Success criteria

- User can understand the platform from the homepage.
- User can navigate product catalogue and designer UI.
- User can see checkout/order summary.
- Admin can see order fulfilment board and artwork review queue.
- Sample data is isolated and easy to replace with Supabase later.
