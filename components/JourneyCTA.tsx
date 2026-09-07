// components/JourneyCTA.tsx
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function JourneyCTA() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto">
      <FadeIn>
        <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-white dark:bg-zinc-900">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Want to know more about my path?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              My academic background and the story behind three years of
              preparation, doubts, and admissions exams.
            </p>
          </div>
          <Link
            href="/journey"
            className="shrink-0 px-5 py-2.5 rounded-full text-sm font-medium bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity"
          >
            Discover my journey →
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}