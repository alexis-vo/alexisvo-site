// data/posts.ts
export type PostCategory = "lecture-notes" | "colles";

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: PostCategory;
  subject: string[];
  pdf: string;
  date: string; // format ISO : "2026-07-18"
};

export const posts: Post[] = [
  {
    slug: "integration-ipp-bioche",
    title: "Méthodes d'intégration : IPP, fractions partielles, règles de Bioche",
    description:
      "Fiche de cours couvrant l'intégration par parties, la décomposition en éléments simples et les règles de Bioche pour les intégrales trigonométriques.",
    category: "lecture-notes",
    subject: ["Mathématiques"],
    pdf: "/blog/integration-ipp-bioche.pdf",
    date: "2026-05-10",
  },
  {
    slug: "khole-analyse-mpsi",
    title: "Sujet de khôlle — Analyse (MPSI)",
    description:
      "Sujet de colle portant sur les suites numériques et les critères de convergence.",
    category: "colles",
    subject: ["Mathématiques"],
    pdf: "/blog/khole-analyse-mpsi.pdf",
    date: "2026-06-02",
  },
];