// components/Nav.tsx
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  const links = [
    { href: "/", label: t("home") },
    { href: "/#a-propos", label: t("about") },
    { href: "/projects", label: t("projects") },
    { href: "/cv", label: t("cv") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-100 dark:border-gray-800 px-6 md:px-20 py-5">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-xl tracking-wide text-gray-900 dark:text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Alexis VO
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link, index) => (
            <span key={link.href} className="flex items-center gap-6">
              <Link
                href={link.href}
                className="group relative text-xs uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
              {index < links.length - 1 && (
                <span className="w-px h-3 bg-gray-300 dark:bg-gray-700" />
              )}
            </span>
          ))}
          <span className="w-px h-3 bg-gray-300 dark:bg-gray-700" />
          <LocaleSwitcher />
          <ThemeToggle />
        </nav>

        {/* Bouton hamburger mobile */}
        <div className="flex md:hidden items-center gap-4">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="text-gray-700 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile déplié */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 mt-6 pb-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}