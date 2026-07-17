// app/projects/[slug]/page.tsx
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Alexis Vo`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto flex flex-col gap-8">
      <Link
        href="/projects"
        className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
      >
        ← Retour aux projets
      </Link>

      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {project.title}
        </h1>
        <p className="text-gray-600">{project.description}</p>
      </div>

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

      {project.link && (
        
        <a  href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-black hover:underline w-fit"
        >
          Voir le projet →
        </a>
      )}

      {project.poster && (
        <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <iframe
            src={project.poster}
            className="w-full h-[85vh]"
            title={`Poster — ${project.title}`}
          />
        </div>
      )}
    </section>
  );
}