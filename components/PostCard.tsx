// components/PostCard.tsx
import { Link } from "@/i18n/navigation";
import { Post } from "@/data/posts";

const categoryLabels: Record<string, string> = {
  "lecture-notes": "Lecture Notes",
  colles: "Khôlle",
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 flex flex-col gap-3 hover:shadow-md dark:hover:border-gray-600 transition-all bg-white dark:bg-zinc-900"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs px-2 py-1 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black">
          {categoryLabels[post.category]}
        </span>
        {post.subject.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300"
          >
            {s}
          </span>
        ))}
      </div>

      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
        {post.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {post.description}
      </p>

      <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">
        {new Date(post.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
    </Link>
  );
}