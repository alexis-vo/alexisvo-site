// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
    >
      <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm font-medium">
            {project.title}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold text-lg text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}