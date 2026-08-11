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
    title: "Fiche Méthode : Calcul intégral — Techniques d'intégration",
    description:
      "Fiche méthode complète sur les techniques d'intégration : primitives usuelles, intégration par parties, changements de variable, règles de Bioche, décomposition en éléments simples, intégrales impropres et techniques avancées (dérivation sous le signe intégrale, fonctions Gamma et Bêta).",
    category: "method",
    subject: ["Mathématiques"],
    pdf: "/blog/fiche_calcul_intégral.pdf",
    date: "2026-08-11",
  },
  {
    slug: "k0",
    title: "Khôlle 0 - Grille d'évaluation",
    description:
      "Grille de critères utilisée pour l'évaluation lors des colles : présentation, rigueur du raisonnement, maîtrise du cours et qualité des réponses aux questions.",
    category: "colles",
    subject: ["Mathematics"],
    pdf: "/blog/k0.pdf",
    date: "2026-08-10",
  },
  {
    slug: "k1",
    title: "Khôlle 1 - Somme",
    description:
      "Somme arithmético-géométriques ; Coefficients binomiaux, formule de Vandermonde ; Identité de Lagrnage et inégalité de Cauchy-Schwarz",
    category: "colles",
    subject: ["Mathematics"],
    pdf: "/blog/k1_suj.pdf",
    date: "2026-08-10",
  },
  {
    slug: "electricity-premiere",
    title: "Electricity — Full Course",
    description:
      "Course notes on fundamental electrical quantities: charge, current, voltage, resistance, power, and energy.",
    category: "lecture-notes",
    subject: ["Physics"],
    pdf: "/blog/cours_elec_premiere.pdf",
    date: "2026-08-10",
  },
];

export const posts = rawPosts.sort((a, b) => b.date.localeCompare(a.date));
