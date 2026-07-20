// components/AboutMe.tsx
import FadeIn from "./FadeIn";

export default function AboutMe() {
  return (
    <section id="a-propos" className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
          À propos
        </h2>

        <p className="text-base text-gray-600 dark:text-gray-300 text-left">
          De la Double Licence Mathématiques-Informatique de l&apos;Université
          Paris-Saclay à CentraleSupélec, en passant par des stages en
          finance quantitative et data science à l&apos;École polytechnique.
        </p>
      </FadeIn>
    </section>
  );
}