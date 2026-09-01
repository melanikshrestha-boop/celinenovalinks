import type { Metadata } from "next";
import "../css/linkree.css";

export const metadata: Metadata = {
  title: "Celine Nova",
  alternates: { canonical: "https://celinenovalinks.vercel.app/" },
  icons: {
    // Square Eren only. Never a C. Never a gold ring. Path changes when Chrome caches a C.
    // Do not add app/favicon.ico — Next hashes it and Chrome prefers the C.
    icon: [
      { url: "/assets/eren-stay10.png?v=stay10", type: "image/png", sizes: "256x256" },
      { url: "/assets/eren-stay10.png?v=stay10", type: "image/png", sizes: "48x48" },
      { url: "/assets/eren-stay10.png?v=stay10", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      {
        url: "/assets/eren-stay10.png?v=stay10",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/assets/eren-stay10.png?v=stay10", type: "image/png" }],
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
