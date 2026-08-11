// app/notes/[slug]/page.tsx
import { notes } from "@/data/notes";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return {};

  return {
    title: `${note.title} — Alexis Vo`,
    description: note.description,
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto flex flex-col gap-8">
      <Link
        href="/notes"
        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
      >
        ← Retour aux notes
      </Link>

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {note.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{note.description}</p>
      </div>

      <div className="w-full border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
        <iframe
          src={note.pdf}
          className="w-full h-[85vh]"
          title={note.title}
        />
      </div>
    </section>
  );
}
