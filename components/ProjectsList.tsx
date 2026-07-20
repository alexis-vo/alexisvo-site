// components/ProjectsList.tsx
"use client";

import { useMemo, useState } from "react";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeIn from "./FadeIn";

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.stack.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [projects]);

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  const filtered =
    activeTags.length === 0
      ? projects
      : projects.filter((p) => p.stack.some((t) => activeTags.includes(t)));

  return (
    <div>
      <div className="flex gap-2 mb-10 flex-wrap">
        <button
          onClick={() => setActiveTags([])}
          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
            activeTags.length === 0
              ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
              : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          Tous
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              activeTags.includes(tag)
                ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          Aucun projet ne correspond à ces critères.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 80}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}