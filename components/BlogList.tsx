// components/BlogList.tsx
"use client";

import { useState } from "react";
import { Post, PostCategory } from "@/data/posts";
import PostCard from "./PostCard";
import FadeIn from "./FadeIn";

const tabs: { key: PostCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "lecture-notes", label: "Lecture Notes" },
  { key: "colles", label: "Khôlles" },
];

export default function BlogList({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<PostCategory | "all">("all");

  const filtered =
    active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex gap-2 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              active === tab.key
                ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No content in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 80}>
              <PostCard post={post} />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}