// data/posts.ts
export type PostCategory = "lecture-notes" | "colles" | "method";

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: PostCategory;
  subject: string[];
  pdf: string;
  date: string; // ISO : "2026-07-18"
};

const rawPosts: Post[] = [
  {
    slug: "fiche-methode-calcul-integral",
    title: "Method Sheet: Integral Calculus — Integration Techniques",
    description:
      "Complete method sheet covering: standard antiderivatives, integration by parts, substitutions, Bioche’s rules, partial fraction decomposition, improper integrals, and advanced techniques such as differentiation under the integral sign and the Gamma and Beta functions.",
    category: "method",
    subject: ["Mathematics"],
    pdf: "/blog/fiche_calcul_intégral.pdf",
    date: "2026-08-11",
  },
  {
    slug: "k0",
    title: "Khôlle 0 - Assessment criteria",
    description:
      "Assessment criteria used during oral examinations: presentation, rigor of reasoning, mastery of the course material, and quality of answers to questions.",
    category: "colles",
    subject: ["Mathematics"],
    pdf: "/blog/k0.pdf",
    date: "2026-08-10",
  },
  {
    slug: "k1",
    title: "Khôlle 1 - Sums",
    description:
      "Arithmetico-geometric sums ; Binomial coefficients, Vandermonde’s identity ; Lagrange’s identity and the Cauchy–Schwarz inequality",
    category: "colles",
    subject: ["Mathematics"],
    pdf: "/blog/k1_suj.pdf",
    date: "2026-08-10",
  },
  {
    slug: "electricity-premiere",
    title: "Electricity — Full Course in French",
    description:
      "Course notes on fundamental electrical quantities: charge, current, voltage, resistance, power, and energy.",
    category: "lecture-notes",
    subject: ["Physics"],
    pdf: "/blog/cours_elec_premiere.pdf",
    date: "2026-08-10",
  },
];

export const posts = rawPosts.sort((a, b) => b.date.localeCompare(a.date));
