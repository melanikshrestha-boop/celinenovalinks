# celinenovalinks

Live: `https://celinenovalinks.vercel.app/`

`npx vercel --prod` aliases `my-linkree.vercel.app` only. After every prod deploy, also run:

```
npx vercel alias set <deployment-url> celinenovalinks.vercel.app
```

Desktop is Linktree’s phone-on-field: the column stays phone-sized (`22rem` inside a `24.5rem` stage). Extra viewport is a faded/blurred still, not a stretched HUD. Phone is full-bleed. Do not grow the column with `vw`.

Do not restore a share/DM stamp. Discord stays `https://discord.com/` until Melani sends a real invite.
