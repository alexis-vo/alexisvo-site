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
        Hello world!<br></br>
        I’m someone who enjoys making good work with good people.<br></br>
        I’m curious, dependable, and easy to work with.<br></br>
        I take ownership, communicate clearly, and care about the details without losing sight of the bigger picture.<br></br>
        I like solving real problems, learning as I go, and bringing a calm, practical energy to a team.<br></br>
        This portfolio is a look at what I build, how I think, and the projects that have taught me the most.<br></br>
        I recently enrolled at the CentraleSupélec engineering school after completing an intensive dual bachelor's degree in mathematics and computer science at Université Paris-Saclay (France).
        </p>
        <br></br>
        <p className="text-base text-gray-600 dark:text-gray-300 text-right">
  <a
    href="https://en.wikipedia.org/wiki/Francis_Drake"
    target="_blank"
    className="font-bold italic no-underline text-inherit"
  >
    Sic Parvis Magna
  </a>
</p>
      </FadeIn>
    </section>
  );
}