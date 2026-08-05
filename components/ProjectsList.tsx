// components/ProjectsList.tsx
"use client";

import { useMemo, useState } from "react";
import { Project, ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeIn from "./FadeIn";

const VISIBLE_TAGS_COUNT = 8;
const categories: ProjectCategory[] = ["LDD1", "LDD2", "LDD3", "Personal project"];

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [showAllTags, setShowAllTags] = useState(false);

  const sortedTags = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) =>
      p.stack.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1))
    );
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, [projects]);

  const visibleTags = showAllTags
    ? sortedTags
    : sortedTags.slice(0, VISIBLE_TAGS_COUNT);

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesTags =
      activeTags.length === 0 || p.stack.some((t) => activeTags.includes(t));
    return matchesCategory && matchesTags;
  });

  return (
    <div>
      {/* Filter by category */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
            activeCategory === "all"
              ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
              : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          All categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              activeCategory === cat
                ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Separator */}
      <div className="h-px bg-gray-100 dark:bg-gray-800 mb-4" />

      {/* Filter by tags */}
      <div className="flex gap-2 mb-10 flex-wrap items-center">
        <button
          onClick={() => setActiveTags([])}
          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
            activeTags.length === 0
              ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
              : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          }`}
        >
          All
        </button>

        {visibleTags.map((tag) => (
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

        {sortedTags.length > VISIBLE_TAGS_COUNT && (
          <button
            onClick={() => setShowAllTags(!showAllTags)}
            className="px-4 py-2 rounded-full text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors underline"
          >
            {showAllTags ? "Voir moins" : `+${sortedTags.length - VISIBLE_TAGS_COUNT} autres`}
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No projects match these criteria.
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