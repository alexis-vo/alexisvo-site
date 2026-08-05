// components/About.tsx
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Background
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        <FadeIn delay={0}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:w-40 shrink-0">
              2026 — present
            </span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                CentraleSupélec — General Engineering Program
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Admitted in first year, with a strong interest in quantitative
                finance and data science.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:w-40 shrink-0">
              2023 — 2026
            </span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Université Paris-Saclay — Dual Bachelor&apos;s in Mathematics and Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Demanding program combining rigorous mathematics with computer
                science fundamentals.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:w-40 shrink-0">
              Internships
            </span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                École Polytechnique
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                - Quantitative finance at CMAP: modeling Black-Scholes, Monte Carlo, Cox-Ross-Rubinstein models<br />
                - Data science in digital humanities at Mus&apos;X.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}