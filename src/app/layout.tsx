import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Script from "next/script";

import { I18nProvider } from "@/i18n/I18nProvider";
import { SpotifyPlayer } from "@/components/ui/SpotifyPlayer";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Norway History, Culture and Tourism | School Portfolio",
    template: "%s | Norway School Portfolio",
  },
  description:
    "Explore a student-made English portfolio about Norway, with a compiled overview of Norwegian history, culture, geography, football, tourism, language and society.",
  keywords: [
    "Norway history",
    "Norwegian culture",
    "Norway school portfolio",
    "Norway geography",
    "Norway tourism",
    "Norwegian society",
    "Norway English project",
    "history and culture of Norway",
    "Norway educational website",
  ],
  authors: [{ name: "Mateus A. Caetani" }],
  creator: "Mateus A. Caetani",
  publisher: "Mateus A. Caetani",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Norway History, Culture and Tourism | School Portfolio",
    description:
      "A compiled educational guide to Norway, covering history, culture, geography, football, tourism, language and society.",
    siteName: "Norway School Portfolio",
    images: [
      {
        url: "/images/cover/hero-norway.webp",
        width: 1200,
        height: 630,
        alt: "Norwegian landscape, Vikings and Norwegian culture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norway History, Culture and Tourism | School Portfolio",
    description:
      "A compiled educational guide to Norway with history, culture, geography, football, tourism, language and society.",
    images: ["/images/cover/hero-norway.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#0f172a",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>
        <I18nProvider>
          {children}

          <SpotifyPlayer />
        </I18nProvider>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7YNP1GN30P"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7YNP1GN30P');
        `}
      </Script>
    </html>
  );
}
