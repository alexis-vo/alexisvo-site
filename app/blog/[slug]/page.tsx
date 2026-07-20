// app/blog/[slug]/page.tsx
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} — Alexis Vo`,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto flex flex-col gap-8">
      <Link
        href="/blog"
        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
      >
        ← Retour aux notes
      </Link>

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {post.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
      </div>

      <div className="w-full border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
        <iframe
          src={post.pdf}
          className="w-full h-[85vh]"
          title={post.title}
        />
      </div>
    </section>
  );
}