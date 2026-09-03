# celinenovalinks

Canonical page is now `https://melanilaurents.com/links` (hidden route on the Celine Nova site — not in the header). This Vercel app 301s there so old bios do not show `*.vercel.app`.

Live (legacy host): `https://celinenovalinks.vercel.app/` → melanilaurents.com/links

`npx vercel --prod` aliases `my-linkree.vercel.app` only. After every prod deploy, also run:

```
npx vercel alias set <deployment-url> celinenovalinks.vercel.app
```

Desktop is Linktree’s phone-on-field. Stage is `36.25rem` wide, `1.25rem` gap at the **top only**, flush to the bottom (`height: calc(100svh - 1.25rem)`, top corners `1.5rem`, bottom square). Extra viewport is a light-blur copy of the same stills — the photo must still be readable, not a mud wash. Never cream paper beside the photo. Phone is full-bleed. Do not grow the column with `vw`.

Do not restore a share/DM stamp. Discord stays `https://discord.com/` until Melani sends a real invite.

**USC HUD is dead (2026-09-03).** Do not remount `.usc-hud`, `UscMark`, two logos, a footer bar, the whip line, or `currently studying CS + business at USC`. No replacement bottom chrome. Email `mshresth@usc.edu` on the mail icon stays.
