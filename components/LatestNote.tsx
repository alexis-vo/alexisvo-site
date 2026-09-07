// components/LatestNote.tsx
import Link from "next/link";
import { notes } from "@/data/notes";
import FadeIn from "./FadeIn";

export default function LatestNote() {
  const latest = notes[0];

  if (!latest) return null;

  return (
    <FadeIn delay={80}>
      <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col gap-4 bg-white dark:bg-zinc-900 h-full">
        <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Latest Note
        </span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {latest.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {latest.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300">
            {latest.category}
          </span>
          {latest.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/notes"
          className="text-sm font-medium text-gray-900 dark:text-white mt-2 hover:underline underline-offset-4"
        >
          See all notes →
        </Link>
      </div>
    </FadeIn>
  );
}