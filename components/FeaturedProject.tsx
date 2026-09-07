// components/FeaturedProject.tsx
import Link from "next/link";
import { projects } from "@/data/projects";
import FadeIn from "./FadeIn";

export default function FeaturedProject() {
  const featured = projects.find((p) => p.slug === "quantlab") ?? projects[0];

  return (
    <FadeIn>
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col gap-4 bg-white dark:bg-zinc-900 h-full">
        <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Featured Project
        </span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {featured.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {featured.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {featured.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href="/projects"
          className="text-sm font-medium text-gray-900 dark:text-white mt-2 hover:underline underline-offset-4"
        >
          See all projects →
        </Link>
      </div>
    </FadeIn>
  );
}