// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

import PersonSchema from "@/components/PersonSchema";

import { SITE_URL, SITE_NAME } from "@/lib/constants";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Alexis VO - CentraleSupélec",
  description:
    "Portfolio d'Alexis VO, élève ingénieur à CentraleSupélec, spécialisé en mathématiques financières, IA et finance quantitative.",
  openGraph: {
    title: "Alexis VO",
    description:
      "Élève ingénieur à CentraleSupélec, maths financières, IA et finance quantitative.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldBeDark = stored === 'dark' || (!stored && prefersDark);
                if (shouldBeDark) document.documentElement.classList.add('dark');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${playfair.variable} antialiased flex flex-col min-h-screen transition-colors`}
      >
        <PersonSchema />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}