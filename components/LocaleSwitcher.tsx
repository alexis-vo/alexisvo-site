// components/LocaleSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const otherLocale = locale === "fr" ? "en" : "fr";

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className="px-2 py-1 rounded-lg border border-gray-300 dark:border-gray-700 text-xs font-medium uppercase text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      {otherLocale}
    </Link>
  );
}