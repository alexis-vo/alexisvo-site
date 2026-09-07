// components/Skills.tsx
import FadeIn from "./FadeIn";

const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "OCaml", "C++", "C", "Java", "TypeScript"],
  },
  {
    label: "Web & Frameworks",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Quantitative Finance & Data",
    items: ["Quantitative Finance", "Deep Learning", "Data Analysis", "Pandas", "NumPy"],
  },
  {
    label: "Algorithms & Theory",
    items: ["Algorithms", "Data Structures", "Graph Theory", "Game Theory", "Compilation"],
  },
  {
    label: "Systems & Networking",
    items: ["Linux / Ubuntu Server", "Networking (TCP/UDP)", "WireGuard"],
  },
  {
    label: "Tools",
    items: ["Git", "LaTeX", "CMake"],
  },
];

export default function Skills() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Skills
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-6">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.label} delay={index * 60}>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
              <span className="text-sm text-gray-500 dark:text-gray-400 sm:w-48 shrink-0">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-zinc-900"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}