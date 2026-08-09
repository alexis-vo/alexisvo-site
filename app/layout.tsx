// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Fraunces } from "next/font/google";

import { SITE_URL, SITE_NAME } from "@/lib/constants";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PersonSchema from "@/components/PersonSchema";
import ThemeScript from "@/components/ThemeScript";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Alexis VO — Engineering Student, CentraleSupélec, Math & Finance",
  description:
    "Portfolio of Alexis VO, engineering student at CentraleSupélec, specialized in quantitative finance, AI, and data science.",
  openGraph: {
    title: "Alexis VO",
    description:
      "Engineering student at CentraleSupélec, quantitative finance, AI and data science.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} antialiased flex flex-col min-h-screen transition-colors`}
      >
        <ThemeScript />
        <PersonSchema />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});