"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

type Step = {
  id: string;
  tick: string;
  year: string;
  title: string;
  badges: string[];
  paragraphs: string[];
};

const steps: Step[] = [
  {
    id: "l1",
    tick: "L1",
    year: "Year 1",
    title: "The Foundations",
    badges: ["Scientific Baccalaureate", "Mathematics", "Computer Science", "Advanced Mathematics elective", "A Summer-Long Internship in data science"],
    paragraphs: [
      "I had been admitted to several prestigious « Classes Préparatoires aux Grandes Écoles » in Paris. Despite this, I chose the Bachelor’s Double Degree in Mathematics and Computer Science at Université Paris-Saclay—not as a fallback, but because it offered an actual double degree, whereas « CPGE » primarily provide preparation for competitive entrance exams, with no guarantee of admission. The workload is just as demanding, but spread over three years rather than two, leaving more room to pursue personal projects alongside my studies.",
      "I was looking for an environment that would cultivate humility through sustained effort over time, rather than through the intense, short-lived pressure of a binary competitive exam. That first year was above all a process of trial and error: learning how I actually work before I could truly commit to it.",
    ],
  },
  {
    id: "l2",
    tick: "L2",
    year: "Year 2",
    title: "The Rise",
    badges: ["A summer internship in quantitative finance", "A Sustainable Pace", "Momentum", "Discipline", "Growth", "Ambition", "Consistency", "Transformation"],
    paragraphs: [
      "My approach was built gradually—not by following a predefined formula, but by experimenting, adjusting, and keeping what genuinely worked for me. I alternated between group work, where I could challenge my reasoning against others, and independent study, where I could explore topics in greater depth. My routine eventually settled around a few non-negotiable habits: waking up early, going for a run and taking a cold shower in the morning, intensive training on Friday evenings, and Saturday mornings dedicated to competition-style problems under real exam conditions.",
      "There were periods of doubt, when results did not immediately reflect the effort I was putting in, or when I found myself competing alongside exceptionally strong students. What kept me going was the belief that the resources needed to improve are more accessible than ever today—and that progress therefore depends largely on what I choose to make of them. Alongside my studies, I launched Blaise Alumni, a network designed to foster connections and networking among students—a mindset I had embraced long before the project itself. I pursued personal growth through intensive sports training and through reading great authors, seeking to develop a broader perspective beyond the boundaries of academia. I was curious about almost everything, and that curiosity proved to be just as formative as academic work itself. None of this came from having extra time on my hands. Saying that we “don’t have time” is often simply a way of avoiding responsibility for our priorities.",
    ],
  },
  {
    id: "l3",
    tick: "L3",
    year: "Year 3",
    title: "The Competitive Exams",
    badges: ["CentraleSupélec", "Télécom Paris", "Mines Paris", "IMT Atlantique", "ENSTA Paris", "ENSAE", "Polytechnique — admissible"],
    paragraphs: [
      "The results came in gradually: I was admitted to CentraleSupélec and Télécom Paris after strong performances in the oral examinations—a genuine source of satisfaction, and a reward that felt worthy of the work I had put in. Being admitted to the next stage of the École Polytechnique selection process confirmed that I had reached the level required there as well, even though I ultimately did not secure admission.",
      "I do not see it as a failure: a competitive exam depends on the level of the cohort in a given year, not solely on the work you put in. What matters is having given yourself every opportunity to succeed—and I did that wholeheartedly. I chose CentraleSupélec for its ecosystem: a strong alumni network, international partnerships, a long-standing reputation, and double-degree programs that aligned exactly with what I was looking for.",
    ],
  },
  {
    id: "bilan",
    tick: "Finally",
    year: "Overview",
    title: "Key Takeaways",
    badges: [],
    paragraphs: [
      "If I had to summarize the choice between a preparatory class and a double degree for someone who is still deciding, I would say this: a preparatory class suits those who need a strong framework and a teacher to structure their path. A double degree is better suited to those who prefer to manage themselves, guided by a mentor rather than directed by a master. The intensity is comparable—I would even say higher in a double degree, where projects and genuine teamwork are added to the workload and have to be integrated continuously.",
      "There is no weekly assessment system like in preparatory classes: what is valued is consistency over time, rather than a final competitive exam decided over just a few weeks. It is this emphasis on consistency, rather than performance under pure time pressure, that has shaped the way I approach work today.",
      "If you would like to learn more about my journey so far, feel free to reach out. I would be happy to share more about my experience.",
    ],
  },
];

export default function ParcoursTimeline() {
  const [openId, setOpenId] = useState<string | null>("l3");

  return (
    <section id="journey" className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-4">
          My Journey — Paris-Saclay Double Degree, 2023–2026
        </div>
        <h2
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "normal" }}
        >
          Three years spent building my own method,
          <span className="italic"> not following someone else’s.</span>
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
          Admitted to Parisian preparatory classes, I chose the university path for its autonomy and double degree. Three years of steadily building momentum, culminating in admissions to CentraleSupélec, Télécom Paris, Mines Paris, IMT Atlantique, ENSTA Parisn ENSAE — and eligibility for the École Polytechnique entrance exams.
        </p>

        <div className="relative">
          <div className="absolute top-2 bottom-2 left-[23px] w-px bg-gray-300 dark:bg-gray-700 hidden md:block" />

          {steps.map((s) => {
            const isOpen = openId === s.id;
            return (
              <FadeIn key={s.id}>
                <div className="relative mb-4 md:pl-16">
                  <div className="hidden md:flex flex-col items-center absolute left-0 top-1 w-12">
                    <div
                      className={`w-3 h-3 rounded-full border-2 z-10 border-gray-300 dark:border-gray-700 ${
                        isOpen ? "bg-gray-900 dark:bg-white" : "bg-white dark:bg-black"
                      }`}
                    />
                    <div className="text-[10px] mt-1 text-gray-500 dark:text-gray-400">{s.tick}</div>
                  </div>

                  <div
                    className={`w-full border rounded-lg px-4 py-4 md:px-6 md:py-5 transition-colors duration-200 ${
                      isOpen
                        ? "bg-white/70 dark:bg-black/40 border-gray-100 dark:border-gray-800"
                        : "border-transparent"
                    }`}
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onClick={() => setOpenId(isOpen ? null : s.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenId(isOpen ? null : s.id);
                        }
                      }}
                      className="cursor-pointer select-none -m-1 p-1 rounded"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="flex items-baseline gap-3">
                          <span className="text-xs text-gray-500 dark:text-gray-400 md:hidden">{s.tick}</span>
                          <span className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-300">
                            {s.year}
                          </span>
                        </div>
                        <span
                          className="text-xl leading-none text-gray-500 dark:text-gray-400 transition-transform duration-200"
                          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                        >
                          +
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mt-1 text-gray-900 dark:text-white">
                        {s.title}
                      </h3>
                    </div>

                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        {s.badges.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {s.badges.map((b) => (
                              <span
                                key={b}
                                className="text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        )}
                        {s.paragraphs.map((p, idx) => (
                          <p
                            key={idx}
                            className="text-sm md:text-base leading-relaxed mb-3 last:mb-0 text-gray-600 dark:text-gray-300 select-text"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
