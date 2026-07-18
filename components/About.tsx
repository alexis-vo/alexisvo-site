// components/About.tsx
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Parcours
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        <FadeIn delay={0}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:w-40 shrink-0">
              2026 — aujourd&apos;hui
            </span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                CentraleSupélec — Cursus ingénieur généraliste
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Admis en 1A, avec un intérêt marqué pour les mathématiques
                financières et la data science.
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
                Université Paris-Saclay — Double Licence Mathématiques-Informatique
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Formation exigeante alliant
                mathématiques rigoureuses et fondamentaux en informatique.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:w-40 shrink-0">
              Stages
            </span>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                École polytechnique
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                - Finance quantitative au CMAP : modélisation des modèles Black-Scholes, Monte Carlo, Cox-Ross-Rubinstein<br></br>
                - Data science en humanités numériques au Mus&apos;X.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}