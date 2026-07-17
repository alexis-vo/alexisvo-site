// components/About.tsx
export default function About() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
        Parcours
      </h2>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
          <span className="text-sm text-gray-500 sm:w-40 shrink-0">
            2024 — présent
          </span>
          <div>
            <h3 className="font-semibold text-gray-900">
              CentraleSupélec — Cursus ingénieur généraliste
            </h3>
            <p className="text-gray-600 mt-1">
              Admis en 1A, avec un intérêt marqué pour les mathématiques
              financières et la data science.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
          <span className="text-sm text-gray-500 sm:w-40 shrink-0">
            2022 — 2024
          </span>
          <div>
            <h3 className="font-semibold text-gray-900">
              Double Licence Mathématiques-Informatique
            </h3>
            <p className="text-gray-600 mt-1">
              Université Paris-Saclay. Formation exigeante alliant
              mathématiques rigoureuses et fondamentaux en informatique.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
          <span className="text-sm text-gray-500 sm:w-40 shrink-0">
            Stages
          </span>
          <div>
            <h3 className="font-semibold text-gray-900">
              École Polytechnique
            </h3>
            <p className="text-gray-600 mt-1">
              Finance quantitative (modélisation Black-Scholes, Monte Carlo)
              et data science / humanités numériques (projet Mus&apos;X).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}