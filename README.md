# Celine Nova — Links

A personal link hub for **Celine Nova**, designed as a lightweight alternative to hosted link-in-bio services.

**Live site:** https://celinenovalinks.vercel.app/  
**Personal website:** https://melanilaurents.com/

This is a standalone personal website. It is not the LensLab application, and does not contain the Heavenly or Daydreamers products.

## What it does

The home page provides one mobile-friendly destination for a public identity and links:

- Identity header, icon, and layered editorial background imagery.
- Social links to YouTube, X, Instagram, TikTok, and Spotify.
- Contact shortcuts for email, Telegram, and Discord.
- Prominent links to the personal site, GitHub, LinkedIn, and projects.
- A latest-YouTube-video component that can suppress old content.
- A small link-button tuning interaction.

**Source of truth:** The currently rendered URLs are in [`app/page.tsx`](app/page.tsx). A visible icon is not necessarily a configured personal profile: for example, the current Discord link points to the general Discord website. Review external destinations before sharing the site.

## Architecture

```text
Visitor / browser
      |
      v
Next.js App Router
  app/layout.tsx       -> page document and metadata
  app/page.tsx         -> link hub and embedded components
      |
      +-- components/ButtonTune.tsx
      |
      +-- components/YoutubeLatest.tsx
      |      |
      |      +-- app/api/youtube/route.ts
      |      +-- lib/youtube.ts
      |      +-- lib/relative-time.ts
      |
      +-- css/linkree.css
      +-- public/assets/
      |
      v
Vercel deployment and HTTP response headers
```

The site uses **Next.js 16**, **React 19**, **TypeScript**, and straightforward CSS. Next.js is the web framework, React renders components, and TypeScript provides typed JavaScript.

The `app/` directory is the Next.js App Router entry point. `public/` contains assets served by URL. `vercel.json` configures selected response headers, including clickjacking and browser capability restrictions.

The YouTube channel identifier and stale-video threshold are defined in [`lib/site.ts`](lib/site.ts). The site currently sets a **120-day** stale-content cutoff. The specific fallback, caching, and data-loading behavior should be checked in the YouTube route/component source when editing them.

## Repository map

| File or folder | Purpose |
| --- | --- |
| `app/page.tsx` | Profile layout, social/contact/project links, page structure |
| `app/layout.tsx` | Global document, metadata, shared styles |
| `app/api/youtube/route.ts` | Server route for YouTube data |
| `components/YoutubeLatest.tsx` | Latest-video display |
| `components/ButtonTune.tsx` | Interactive button treatment |
| `css/linkree.css` | Layout, visual style, responsive treatment |
| `lib/site.ts` | YouTube configuration and permitted analytics click identifiers |
| `lib/youtube.ts` | YouTube-related data functions |
| `lib/relative-time.ts` | Human-readable time formatting |
| `public/assets/` | Local graphics and photographic background files |
| `vercel.json` | Vercel-specific HTTP header configuration |
| `CLAUDE.md` | Repository instructions for coding agents |

## Run locally

Requires a supported Node.js runtime and npm.

```bash
git clone https://github.com/melanikshrestha-boop/celinenovalinks.git
cd celinenovalinks
npm ci
npm run dev
```

Open http://127.0.0.1:3000/ (unless the development server reports a different port).

The available scripts are:

```bash
npm run dev     # Next.js development server, bound to 127.0.0.1
npm run build   # production build
npm run start   # serve a previously built app
```

Do not assume a local build deploys the live Vercel project. Hosting configuration and deployment permissions are managed separately.

## Update content

**Change links:** Edit the relevant anchor in `app/page.tsx`. Check the destination, accessible label, external-link security attributes, and mobile behavior.

**Change visuals:** Edit `css/linkree.css` or selected images under `public/assets/`. Keep sufficient contrast, readable focus states, and an effective responsive layout.

**Change latest-video logic:** Inspect `components/YoutubeLatest.tsx`, `app/api/youtube/route.ts`, `lib/youtube.ts`, and `lib/site.ts`. Avoid introducing client-side API secrets. Keep rate limits, failure handling, and stale-content behavior in mind.

**Change the site identity:** Update the page title/metadata, displayed name, image alt text, social labels, and public links together. Avoid breaking existing URLs without a redirect.

## Security and reliability

- Do not commit API keys, tokens, personal credentials, or local `.env` files.
- Treat upstream YouTube data as potentially missing, stale, or unavailable.
- Verify that outbound links point to intended destinations.
- Keep browser security headers compatible with embedded use and any third-party content.
- Avoid collecting visitor data without a documented purpose and suitable notice/consent.
- Build and test before requesting a Vercel deployment.

## Scope and status

This README describes the source as inspected on **October 10, 2026**. It does not assert that every Vercel deployment is current, that every external social URL is a personal profile, or that third-party APIs always respond.

The site is intentionally small: one personally controlled destination for a public online presence, not a general-purpose social network or a commercial link-management product.
