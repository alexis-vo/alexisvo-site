// app/blog/page.tsx
import { posts } from "@/data/posts";
import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Notes & Khôlles — Alexis Vo",
  description:
    "Lecture notes and oral exam topics in mathematics, AI, and finance.",
};

export default function BlogPage() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        Notes & Khôlles
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-12">
        Lecture notes and oral exam topics in mathematics, AI, and finance.
      </p>

      <BlogList posts={posts} />
    </section>
  );
}