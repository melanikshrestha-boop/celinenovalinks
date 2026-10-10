# Celine Nova Links — Coding Agent Instructions

## Project identity

This repository is **celinenovalinks**, the personal link-in-bio website for **Celine Nova**.

- Live Vercel URL: https://celinenovalinks.vercel.app/
- Personal site: https://melanilaurents.com/
- Source: https://github.com/melanikshrestha-boop/celinenovalinks
- Stack: Next.js 16 App Router, React 19, TypeScript, CSS.
- Deployment target: Vercel.

**Do not confuse this repository with LensLab/Celinen.** Heavenly and Daydreamers are products in a separate repository. Do not import their architecture, UI conventions, accounts, or deployment assumptions here.

## Engineering objectives

1. Keep the page fast, uncluttered, mobile-friendly, accessible, and reliable.
2. Preserve its personal editorial identity, layered photography, and existing links unless a change is requested.
3. Avoid unnecessary dependencies, tracking infrastructure, server infrastructure, or abstraction layers.
4. Prefer a small, well-tested change over a broad redesign.
5. Never claim a production deployment, link verification, or API result without checking it.

## Before editing

- Read `README.md`, `package.json`, `app/page.tsx`, `app/layout.tsx`, `css/linkree.css`, and the files directly relevant to the request.
- Inspect current git status and branch; preserve unrelated changes.
- Check for open pull requests or concurrent modifications before creating overlapping work.
- Understand whether a request is documentation-only, UI-only, link-content, server logic, or deployment-related.

## Source ownership

| Concern | Primary files |
| --- | --- |
| Profile and outbound links | `app/page.tsx` |
| Page metadata and root layout | `app/layout.tsx` |
| Visual design and responsive behavior | `css/linkree.css` |
| YouTube card | `components/YoutubeLatest.tsx` |
| YouTube server route | `app/api/youtube/route.ts` |
| YouTube helpers and limits | `lib/youtube.ts`, `lib/site.ts` |
| Relative timestamps | `lib/relative-time.ts` |
| Interactive link styling | `components/ButtonTune.tsx` |
| Image/icon assets | `public/assets/`, `public/icon.png`, `public/favicon.ico` |
| Hosting headers | `vercel.json` |

## Product behavior and constraints

- Preserve direct access to important external links. Do not invent profile URLs.
- Treat the existing Discord link as an external generic destination until a real personal/community destination is explicitly supplied.
- Keep YouTube failures and stale results graceful; if content is unavailable, do not invent a recent upload.
- `lib/site.ts` owns the channel ID, 120-day stale threshold, and permitted analytics click identifiers.
- Treat social URLs, channel IDs, email addresses, and personal images as intentional content; never replace them from a guess.
- Make interactive controls keyboard accessible. Give icon-only links meaningful accessible names.
- Retain appropriate `rel="noopener noreferrer"` for outbound new-tab links.
- Maintain responsive layout at phone and desktop widths, avoiding horizontal overflow.
- Avoid gratuitous entrance animations and large JavaScript bundles on a minimal link page.
- Do not introduce cookies, analytics beacons, or identifiers without an explicit feature request and documented privacy implications.

## Security

- Do not expose secrets in client components, `NEXT_PUBLIC_*` variables, git history, logs, or README examples.
- Keep HTTP security header changes scoped and test embeds/iframes if the policy changes.
- Do not weaken the Content Security Policy just to make unrelated third-party code work.
- Do not make outbound API calls on behalf of the user without a clearly specified feature.
- Never edit or deploy another repository as a side effect.

## Verification

Run the relevant checks after making a change:

```bash
npm ci
npm run build
```

For visual changes, inspect at narrow and wide viewport sizes, confirm focus/hover states, and check image layout and loading. For links, inspect the actual href values and avoid asserting destination availability unless verified. For YouTube changes, check successful, stale, empty, and upstream-error cases.

Do not invent passing test results.

## Git and delivery

- Use a focused branch and pull request for substantial changes.
- Do not push straight to `main`, force-push, or deploy unless requested.
- Avoid touching generated or unrelated files unnecessarily.
- Report changed files, checks actually run, unresolved risks, and PR/commit information.
- For documentation-only updates, explicitly say that no runtime or production behavior changed.

## Scope

This file defines how coding agents should work on this **personal links website**. It is not the primary product requirements document for Heavenly, Daydreamers, or any other external project.
