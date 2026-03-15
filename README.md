# MacroLab Platform v2

Developer-deployable Next.js foundation for MacroLab Singapore, positioned as a geo-economic observatory for Singapore.

## What changed in v2
- Upgraded the homepage prototype into a deployable Next.js App Router project
- Added route handlers for the main MacroLab data surfaces
- Added Zod schemas for domain contracts
- Included a lightweight developer console at `/dashboard`
- Added Claude Skills scaffolding for the 4 automation-heavy workflows:
  - shock tracking
  - regime classification
  - sector scoring
  - insight drafting

## Core routes
- `/`
- `/dashboard`
- `/api/health`
- `/api/global-shocks`
- `/api/stress-index`
- `/api/macro-regime`
- `/api/sector-exposure`
- `/api/transmission-channels`
- `/api/indicators`
- `/api/insights`

## Local setup
```bash
npm install
npm run dev
```

## Build for production
```bash
npm install
npm run build
npm run start
```

## Suggested next implementation steps
1. Replace demo payloads in `lib/data.ts` with ETL-backed data access.
2. Add scheduled jobs to refresh shock status, regime scores, and sector exposure.
3. Store historical time series in a database or object store.
4. Add authentication if the platform will include paid or restricted intelligence.
5. Add charting components once live data arrives.
