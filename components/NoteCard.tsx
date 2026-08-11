// components/NoteCard.tsx
import Link from "next/link";
import { Note, NoteTag } from "@/data/notes";

const tagLabels: Record<NoteTag, string> = {
  "lecture-notes": "Lecture Notes",
  colles: "Khôlle",
  method: "Method",
};

export default function NoteCard({ note }: { note: Note }) {
  return (
    <Link
      href={`/notes/${note.slug}`}
      className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md dark:hover:border-gray-600 transition-all bg-white dark:bg-zinc-900"
    >
      <div className="flex flex-wrap items-center gap-2">
        {note.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black"
          >
            {tagLabels[tag]}
          </span>
        ))}
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300">
          {note.category}
        </span>
      </div>

      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
        {note.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {note.description}
      </p>

      <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
        {new Date(note.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
    </Link>
  );
}
