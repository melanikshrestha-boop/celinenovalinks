# celinenovalinks

Live: `https://celinenovalinks.vercel.app/`

`npx vercel --prod` aliases `my-linkree.vercel.app` only. After every prod deploy, also run:

```
npx vercel alias set <deployment-url> celinenovalinks.vercel.app
```

Column size is one pair: `--sheet: clamp(20rem, 42vw, 60rem)` then `width: var(--sheet)` and `font-size: calc(var(--sheet) / 20)` so type/icons/buttons grow with the card. No `min()`, no `max-width`, no `@media` font/width lock. Horizontal center is flex `align-items: center` on `.poster` only.

Do not restore a share/DM stamp. Discord stays `https://discord.com/` until Melani sends a real invite.
