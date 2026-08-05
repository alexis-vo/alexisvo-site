// components/AboutMe.tsx
import FadeIn from "./FadeIn";

export default function AboutMe() {
  return (
    <section id="about" className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
          About
        </h2>

        <p className="text-base text-gray-600 dark:text-gray-300 text-left">
          From a Dual Bachelor&apos;s in Mathematics and Computer Science at
          Université Paris-Saclay to CentraleSupélec, including internships in
          quantitative finance and data science at École Polytechnique.
        </p>
      </FadeIn>
    </section>
  );
}