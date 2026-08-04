// components/AboutMe.tsx
"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

export default function AboutMe() {
  const t = useTranslations("aboutMe");

  return (
    <section id="a-propos" className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
          {t("title")}
        </h2>

        <p className="text-base text-gray-600 dark:text-gray-300 text-left">
          {t("text")}
        </p>
      </FadeIn>
    </section>
  );
}