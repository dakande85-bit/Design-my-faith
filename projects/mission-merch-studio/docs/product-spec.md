# Mission Merch Studio Product Spec

## Summary

Mission Merch Studio is a Christian custom merchandise platform for churches, missionaries, charities, ministries, and Christian events.

The platform lets organisations create or submit product designs, place orders, and track manual fulfilment.

## Core promise

> Design online. We check the artwork. We produce and deliver.

## MVP scope

The MVP is not a full Canva clone and does not automate fulfilment with Gelato or other suppliers.

The MVP should focus on:

- Clear public website
- Product catalogue
- Simple product customiser UI
- Artwork upload
- Order submission
- Manual artwork review
- Admin fulfilment dashboard
- Fundraising campaign concept
- Supabase-ready structure
- Stripe Checkout later

## Public pages

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

## Customer dashboard routes

- `/dashboard`
- `/dashboard/organisation`
- `/dashboard/designs`
- `/dashboard/orders`
- `/dashboard/campaigns`
- `/designer`
- `/checkout`

## Admin routes

- `/admin`
- `/admin/orders`
- `/admin/artwork-review`
- `/admin/products`
- `/admin/campaigns`
- `/admin/organisations`

## Roles

### Customer / organisation owner

Can manage their organisation, designs, orders, and campaigns.

### Designer / team member

Can create and edit designs for an organisation.

### Admin

Can approve organisations, manage products, review artwork, update fulfilment status, and manage campaigns.

## Design editor MVP

The first design editor should be practical, not advanced.

Required UI:

- Product selector
- Colour selector
- Size/quantity selector
- Front/back toggle
- Upload artwork panel
- Remove background placeholder
- Vectorise artwork placeholder
- Add text/scripture input
- Font selector placeholder
- Mockup preview area
- Print quality checklist
- Save design button
- Continue to checkout button

## Product categories

- T-shirts
- Hoodies
- Sweatshirts
- Tote bags
- Mugs
- Posters
- Journals / notebooks

## Fundraising campaigns

Campaign pages should allow a church, missionary, or charity to sell merch for a cause.

Sample campaign types:

- Youth mission trip
- Church building fund
- Community outreach project
- Worship night merch
- Charity support campaign

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

## Non-goals for MVP

- No Gelato integration
- No automated supplier routing
- No complex Canva clone
- No automatic payouts to charities yet
- No complex marketplace logic yet
- No AI image generation in the first version

## Later features

- Stripe Checkout
- Stripe Connect for campaign payouts
- Background removal API
- Vectorizer API
- Supabase Storage uploads
- Order email notifications
- Public campaign checkout
- Supplier automation
- Gelato or other POD integration
