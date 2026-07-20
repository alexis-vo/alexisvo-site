// app/projects/page.tsx
import ProjectsList from "@/components/ProjectsList";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projets — Alexis Vo",
  description: "Découvrez mes projets.",
};

export default function ProjectsPage() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-5xl mx-auto">
      <FadeIn>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Projets
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Une sélection de projets techniques et personnels.
        </p>
      </FadeIn>

      <ProjectsList projects={projects} />
    </section>
  );
}