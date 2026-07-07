# Design my Faith

Design my Faith is the working repository for Christian digital products, ministry tools, design systems, and faith-based commerce experiments.

## Active project

### Mission Merch Studio

A manual-fulfilment custom merchandise platform for churches, missionaries, charities, ministries, and Christian events.

Core idea:

> Custom Christian merch for churches, missions, and ministries. Design online, submit your order, and we handle artwork review, production, and delivery.

Project folder:

```text
projects/mission-merch-studio/
```

## Vercel deployment

This repository now includes a deployable React/Vite MVP shell for Mission Merch Studio.

Vercel can be imported from the repository root because `vercel.json` is configured to build the app from:

```text
projects/mission-merch-studio
```

Recommended Vercel settings if you configure it manually:

```text
Framework Preset: Vite
Install Command: npm install --prefix projects/mission-merch-studio
Build Command: npm run build --prefix projects/mission-merch-studio
Output Directory: projects/mission-merch-studio/dist
```

Local commands:

```bash
npm run install:app
npm run dev
npm run build
```

## Build rule

GitHub is the source of truth. Lovable should only be used for visual reference or limited prototyping when explicitly approved.

Preferred workflow:

```text
GitHub repo -> feature branch -> pull request -> review -> merge -> Vercel deploy
```

## Current MVP focus

- Public website structure
- Customer/organisation dashboard
- Manual fulfilment admin dashboard
- Product designer UI
- Artwork upload/review workflow
- Supabase-ready database schema
- Stripe Checkout later
- No Gelato or automated fulfilment in the first version
