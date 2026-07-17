// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projets — Alexis Vo",
  description: "Découvrez les projets réalisés par Alexis Vo.",
};

export default function ProjectsPage() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Projets</h1>
      <p className="text-gray-600 mb-12">
        Une sélection de projets techniques et personnels.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}