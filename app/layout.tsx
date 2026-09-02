import type { Metadata } from "next";
import "../css/linkree.css";

export const metadata: Metadata = {
  title: "Celine Nova",
  alternates: { canonical: "https://celinenovalinks.vercel.app/" },
  icons: {
    // Square Eren only. Never a C. Never a gold ring. Path changes when Chrome caches a C.
    // Do not add app/favicon.ico — Next hashes it and Chrome prefers the C.
    icon: [
      { url: "/assets/eren-all.png?v=all1", type: "image/png", sizes: "32x32" },
      { url: "/assets/eren-all.png?v=all1", type: "image/png", sizes: "48x48" },
      { url: "/assets/eren-all.png?v=all1", type: "image/png", sizes: "256x256" },
    ],
    apple: [
      {
        url: "/assets/eren-all.png?v=all1",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/assets/eren-all.png?v=all1", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `.identity img{width:28px;height:28px;object-fit:cover;border-radius:0}.bg,.bg img{position:absolute;inset:0}.bg img{width:100%;height:100%;object-fit:cover;display:block}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
