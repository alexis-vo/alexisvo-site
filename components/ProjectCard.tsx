// components/ProjectCard.tsx
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md dark:hover:border-gray-600 transition-all bg-white dark:bg-zinc-900"
    >
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {project.description}
      </p>

      <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
        {new Date(project.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
    </Link>
  );
}