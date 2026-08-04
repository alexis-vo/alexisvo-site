// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

import { SITE_URL, SITE_NAME } from "@/lib/constants";
import "../globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PersonSchema from "@/components/PersonSchema";
import ThemeScript from "@/components/ThemeScript";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

const locales = ["fr", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Alexis VO — Élève ingénieur CentraleSupélec, Maths & Finance",
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${playfair.variable} antialiased flex flex-col min-h-screen transition-colors`}
      >
        <ThemeScript />
        <NextIntlClientProvider messages={messages}>
          <PersonSchema />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}