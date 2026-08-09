// data/posts.ts
export type PostCategory = "lecture-notes" | "colles";

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: PostCategory;
  subject: string[];
  pdf: string;
  date: string; // ISO : "2026-07-18"
};

export const posts: Post[] = [
  {
    slug: "integration-methods",
    title: "Integration Methods: IBP, Partial Fractions, Bioche's Rules",
    description:
      "Course notes covering integration by parts, partial fraction decomposition, and Bioche's rules for trigonometric integrals.",
    category: "lecture-notes",
    subject: ["Mathematics"],
    pdf: "/blog/integration-methods.pdf",
    date: "2026-05-10",
  },
  {
    slug: "analysis-oral-exam-mpsi",
    title: "Oral Exam Topic — Analysis (MPSI)",
    description:
      "Oral exam topic on numerical sequences and convergence criteria.",
    category: "colles",
    subject: ["Mathematics"],
    pdf: "/blog/analysis-oral-exam-mpsi.pdf",
    date: "2026-06-02",
  },
].sort((a, b) => b.date.localeCompare(a.date));