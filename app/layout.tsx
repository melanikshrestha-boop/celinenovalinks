import type { Metadata } from "next";
import "../css/linkree.css";

export const metadata: Metadata = {
  title: "Celine Nova",
  alternates: { canonical: "https://celinenovalinks.vercel.app/" },
  icons: {
    icon: [
      { url: "/favicon.ico?v=eren1", sizes: "any" },
      { url: "/assets/eren.png?v=eren1", type: "image/png" },
    ],
    apple: "/assets/eren.png?v=eren1",
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
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
