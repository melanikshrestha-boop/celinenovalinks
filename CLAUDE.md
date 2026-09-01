# celinenovalinks

Live: `https://celinenovalinks.vercel.app/`

`npx vercel --prod` aliases `my-linkree.vercel.app` only. After every prod deploy, also run:

```
npx vercel alias set <deployment-url> celinenovalinks.vercel.app
```

Desktop is Linktree’s phone-on-field. Stage is `36.25rem` × `calc(100svh - 2.5rem)` (580×942 on a 1512×982 laptop — same as Linktree’s card) with `1.5rem` corners. Extra viewport is a faded still. Phone is full-bleed. Do not grow the column with `vw`.

Do not restore a share/DM stamp. Discord stays `https://discord.com/` until Melani sends a real invite.
