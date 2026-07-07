# Agent Instructions

## Repository purpose

This repository is for Design my Faith projects: Christian technology, ministry tools, faith-based commerce, media, and design platforms.

## Source of truth

GitHub is the source of truth. Do not rely on Lovable as the primary editing environment. Lovable may be used only for visual reference or deliberately approved prototype work.

## Active project: Mission Merch Studio

Mission Merch Studio is a manual-fulfilment custom merchandise platform for churches, missionaries, charities, ministries, and Christian events.

Do not integrate Gelato, Printful, Printify, or other automated fulfilment providers in the first MVP unless explicitly requested.

## MVP principles

- Build practical workflows before advanced automation.
- Manual fulfilment first.
- Clean Christian premium brand direction, not cheesy or overdecorated.
- Use clear customer journeys for churches, missionaries, charities, and ministries.
- Keep code modular and easy to connect to Supabase, Stripe, and file storage later.

## Preferred stack

- Next.js or Vite/React, depending on the existing app scaffold
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- Supabase for auth, database, and storage
- Stripe Checkout for payments later
- Vercel for deployment

## Coding rules

- Keep feature work on branches.
- Prefer small, focused pull requests.
- Do not hard-code secrets.
- Use environment variables for API keys.
- Use sample data only when database integration is not yet active.
- Keep manual fulfilment statuses consistent with the product spec.

## Manual fulfilment statuses

- Draft
- Awaiting Payment
- Paid
- Awaiting Artwork Review
- Artwork Approved
- Needs Customer Changes
- In Production
- Ready to Ship
- Shipped
- Completed
- Cancelled
- Refunded
