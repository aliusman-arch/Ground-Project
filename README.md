# Local Grounds Booking System

## Overview
- **Version:** 1.0.0
- **Last Updated:** 2026-02-28
- **Status:** Refactoring Architecture
- **Core Purpose:** SaaS booking platform for local sports ground owners.
- **Critical Logic:** Time-slot generation & concurrency management.

## Tech Stack
- **Framework:** Next.js 15 (T3 Stack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + ui.aceternity + lenis
- **Database:** Prisma + PostgreSQL
- **API:** tRPC
- **Auth:** NextAuth.js
- **Payments:** Stripe
- **Analytics:** Tremor
- **Testing:** Vitest + Playwright

## Theme
- **Style:** Strict Neutral/Tech
- **Primary Color:** Indigo-600
- **Secondary Color:** Zinc-900 (Near Black)
- **Border Style:** 1px Solid Zinc-200
- **UI Philosophy:** Functional Minimalism (Utility over Decoration)

## Architecture
- **Routing:** Next.js App Router with (player) and (owner) Route Groups
- **Logic Center:** src/lib/slot-engine.ts (Concurrency & Slot Generation)
- **API Layer:** Modular tRPC routers (ground, booking, admin)
- **Component Strategy:** Atomic design: shadcn/ui base + domain-specific folders

## User Journeys
### Player
- Discovery
- Real-time Availability
- Booking/Payment

### Owner
- Inventory Control
- Operations Management
- Growth Analytics

## Current Status
- **Status:** UI/UX Initialization
- **Last Action:** Design System & Layout command generated
- **Completed Steps:**
  - Tech stack selection
  - Project initialization
  - Architectural refactor
  - Aceternity UI & Lenis Integration
  - Page requirements mapped
- **Next Immediate Step:** Shared Navbar Implementation
