// components/About.tsx
"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

export default function About() {
  const t = useTranslations("parcours");

  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
          {t("title")}
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        <FadeIn delay={0}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:w-40 shrink-0">
              {t("entry1.date")}
            </span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {t("entry1.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {t("entry1.text")}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:w-40 shrink-0">
              {t("entry2.date")}
            </span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {t("entry2.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {t("entry2.text")}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:w-40 shrink-0">
              {t("entry3.date")}
            </span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {t("entry3.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {t("entry3.text1")}<br />
                {t("entry3.text2")}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}