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
    title: "Groundwork",
    badges: ["Discover", "Rigor", "Logic", "Methods", "Programming", "Reasoning", "A Summer-Long Internship in data science"],
    paragraphs: [
      "I had been admitted to several prestigious « Classes Préparatoires aux Grandes Écoles ».\
      Despite this, I chose the Bachelor’s Double Degree in Mathematics and Computer Science at Université Paris-Saclay,\
      not as a fallback, but because it offered an actual double degree, whereas « CPGE » primarily provide preparation\
      for competitive entrance exams, with no guarantee of admission. The workload is just as demanding,\
      but spread over three years rather than two, leaving more room to pursue personal projects alongside my studies.",
      "I was looking for an environment that would cultivate humility through sustained effort over time,\
      rather than through the intense, short-lived pressure of a binary competitive exam.\
      That first year was above all a process of trial and error: learning how I actually work before\
      I could truly commit to it.",
    ],
  },
  {
    id: "l2",
    tick: "L2",
    year: "Year 2",
    title: "Momentum",
    badges: ["A summer internship in quantitative finance", "A Sustainable Pace", "Deepening", "Discipline", "Growth", "Ambition", "Consistency", "Transformation", "Abstraction", "Modeling"],
    paragraphs: [
      "I built my approach over the months by trying things and learning from mistakes instead of following a strict plan.\
      I moved back and forth between working with others and studying alone.\
      Working with others helped me test and sharpen my thoughts.\
      Studying alone let me dive deeper into the subjects that fascinated me most.",
      "Finally a handful of habits settled into my life: early mornings,\
      a run followed by a cold shower to kick off each day hard practice sessions,\
      on Friday evenings and Saturday mornings devoted to solving competition‑style problems while mimicking real exam conditions.",
      "This method worked for me; it might not work for others. Yes, I admit it sounds very like personal development influencer\
      when put that way, but the discipline I’ve instilled in myself allowed me to get the grades I wanted and the academic record\
      I needed to keep believing in my academic goals.",
      "I really discovered something within myself that I had never before imagined I could do.\
      It was like a light bulb moment that allowed me to discipline myself every day and stay on the right path.",
      "There were periods of doubt, when results did not immediately reflect the effort I was putting in,\
      or when I found myself competing alongside exceptionally strong students.\
      What kept me going was the belief that the resources needed to improve are more accessible than ever today\
      (especially with the rise of AI) and that progress therefore depends largely on what I choose to make of them.\
      I pursued personal growth through sports training and through reading great authors, seeking to develop a broader perspective beyond the boundaries of academia.\
      I was curious about almost everything, and that curiosity proved to be just as formative as academic work itself.\
      None of this came from having extra time on my hands. For me, saying that we \"don’t have time\" is often simply\
      a way of avoiding responsibility for our priorities.",
    ],
  },
  {
    id: "l3",
    tick: "L3",
    year: "Year 3",
    title: "The entrance exams for the Grandes Écoles",
    badges: ["CentraleSupélec", "Télécom Paris", "Mines Paris", "IMT Atlantique", "ENSTA Paris", "ENSAE", "Polytechnique"],
    paragraphs: [
      "This third year of my dual degree program, especially the first semester, was a real challenge for me.\
      It was very grueling, both emotionally and academically. The course load was very heavy.\
      But thanks to the discipline I imposed on myself in the preceding months, and thanks to my self-directed studying during summer break,\
      I was able to stay on track and achieve the results I wanted. This semester was very intense, but my efforts payed off...",
      "The results came in gradually: I was admitted to CentraleSupélec and Télécom Paris after strong performances in the oral examinations.\
      A genuine source of satisfaction, and a reward that felt worthy of the work I had put in.\
      Being admitted to the next stage of the École polytechnique selection process confirmed\
      that I had reached the level required there as well,\
      even though I ultimately did not secure admission.",
      "But here are a few lessons I've learned from this...",
      "I do not see it as a failure: a competitive exam depends on the level of the cohort in a given year, not solely on the work you put in.\
      What matters is having given yourself every opportunity to succeed, and I did that wholeheartedly.\
      I chose CentraleSupélec for its ecosystem: a strong alumni network, international partnerships, a long-standing reputation, and double-degree programs that aligned exactly with what I was looking for.",
      "CentraleSupélec's entrepreneurial spirit is also a major asset that led me to choose this renowned school."
    ],
  },
  {
    id: "bilan",
    tick: "Finally",
    year: "Overview",
    title: "Key Takeaways",
    badges: [],
    paragraphs: [
      "Cette première partie de mes études supérieure se termine.\
      Mais ce n'est qu'un chapitre qui se ferme et un nouveau qui s'ouvre.\
      La route est encore longue, mais une chose est sûre, c'est que je l'ai choisie et j'en suis fier.",
      "For someone who is still deciding between a preparatory class and a double degree:\
      I would say that a preparatory class suits those who need a strong framework\
      and a teacher to structure their path whereas a double degree is better suited to those\
      who prefer to manage themselves, guided by a mentor rather than directed by a master.\
      The intensity is comparable. I would even say sometimes higher in a double degree,\
      where projects and genuine teamwork are added to the workload and have to be integrated continuously during three years.\
      There is no weekly assessment system like in preparatory classes:\
      what is valued is consistency over time, rather than a final competitive exam decided over just a few weeks.\
      It is this emphasis on consistency, rather than performance under pure time pressure,\
      that has shaped the way I approach work today.",
      "If you're still on the fence, look into the CPES (Multidisciplinary Higher Education Program),\
      which are offered both in high school-like preparatory classes, and at the university level.\
      This could be a good compromise.",
      "If you would like to learn more about my journey so far, feel free to reach out. I would be happy to share more about my experience.",
    ],
  },
];

export default function ParcoursTimeline() {
  const [openId, setOpenId] = useState<string | null>("null");

  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-4">
          My Journey — Paris-Saclay Double Degree, 2023–2026
        </div>
        <h2
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          From a dual Bachelor's in mathematics and computer science to,
          <span className="italic"> CentraleSupélec engineering school.</span>
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
          Admitted to Classes Préparatoires aux Grandes Écoles
          (two-year intensive preparatory program for competitive entrance examinations to French grandes écoles),
          I chose the university path for its autonomy and double degree.
          Three years of steadily building momentum, culminating in admissions to CentraleSupélec, Télécom Paris, Mines Paris, IMT Atlantique, ENSTA Paris, ENSAE - and eligibility for the prestigious École polytechnique entrance exams.
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
