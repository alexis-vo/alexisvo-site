// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alexis Vo — Ingénieur CentraleSupélec | Maths, IA, Finance",
  description:
    "Portfolio d'Alexis Vo, étudiant ingénieur à CentraleSupélec, spécialisé en mathématiques financières, IA et finance quantitative.",
  openGraph: {
    title: "Alexis Vo",
    description:
      "Étudiant ingénieur à CentraleSupélec, maths financières, IA et finance quantitative.",
    url: "https://alexisvo.fr",
    siteName: "Alexis Vo",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}