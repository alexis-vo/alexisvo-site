// data/notes.ts

export type Subject = "Mathematics" | "Physics" | "Computer Science";

export type NoteTag = "lecture-notes" | "colles" | "cheatsheet";

export type Note = {
  slug: string;
  title: string;
  description: string;
  category: Subject;
  tags: NoteTag[];
  pdf: string;
  date: string; // ISO : "2026-07-18"
};

const rawNotes: Note[] = [
  {
    slug: "fiche-methode-calcul-integral",
    title: "Method Sheet: Integral Calculus — Integration Techniques",
    description:
      "Complete method sheet covering: standard antiderivatives, integration by parts, substitutions, Bioche's rules, partial fraction decomposition, improper integrals, and advanced techniques such as differentiation under the integral sign and the Gamma and Beta functions.",
    category: "Mathematics",
    tags: ["cheatsheet"],
    pdf: "/notes/cheatsheet_integral.pdf",
    date: "2026-08-11",
  },
  {
    slug: "k0",
    title: "Khôlle 0 - Assessment criteria",
    description:
      "Assessment criteria used during oral examinations: presentation, rigor of reasoning, mastery of the course material, and quality of answers to questions.",
    category: "Mathematics",
    tags: ["colles"],
    pdf: "/notes/k_0_bareme.pdf",
    date: "2026-08-10",
  },
  {
    slug: "k1",
    title: "Khôlle 1 - Sums",
    description:
      "Arithmetico-geometric sums ; Binomial coefficients, Vandermonde's identity ; Lagrange's identity and the Cauchy–Schwarz inequality",
    category: "Mathematics",
    tags: ["colles"],
    pdf: "/notes/k_1_suj.pdf",
    date: "2026-08-10",
  },
  {
    slug: "electricity-premiere",
    title: "Electricity — Complet course for Première Générale",
    description:
      "Course notes on fundamental electrical quantities: charge, current, voltage, resistance, power, and energy. Document generated with the assistance of AI based on the information I provided.",
    category: "Physics",
    tags: ["lecture-notes"],
    pdf: "/notes/ln_elec_premiere.pdf",
    date: "2026-08-10",
  },
  {
    slug: "esp-ind-var",
    title: "Method Sheet: Probability — Expectation, Independence, and Variance",
    description:
      "Method sheet covering the fundamentals of probability: expectation and its properties, independence of events and random variables, variance, covariance, and standard computation techniques. Document generated with the assistance of AI based on the information I provided.",
    category: "Mathematics",
    tags: ["cheatsheet"],
    pdf: "/notes/cheatsheet_esp_var_ind.pdf",
    date: "2026-08-12",
  },
  {
  slug: "practice-sheet-choosing-epsilon-delta",
  title: "Practice Sheet: Choosing Epsilon (or Delta) Wisely",
  description:
    "Practice sheet on constructing rigorous epsilon and delta proofs, covering sums and products of convergent sequences, continuity of x² and √x, preservation of sign, and the relationship between limits, lim sup, and lim inf.",
  category: "Mathematics",
  tags: ["colles"],
  pdf: "/notes/k_choisir_eps.pdf",
  date: "2026-09-15",
  },
  {
  slug: "fiche-rappels-inegalite-cauchy-schwarz",
  title: "Reference Sheet: The Cauchy-Schwarz Inequality",
  description:
    "Cheatsheet on the Cauchy-Schwarz inequality, including its proof in real and complex inner-product spaces, standard forms for vectors, series, integrals, random variables, and matrices, equality cases, classical applications, common pitfalls, and its extension to Hölder's inequality.",
  category: "Mathematics",
  tags: ["cheatsheet"],
  pdf: "/notes/cheatsheet_cauchy_schwarz.pdf",
  date: "2026-09-15",
  },
  {
  slug: "fiche-rappels-norm-distance-metric-spaces",
  title: "Cheatsheet: Norms, Distances, and Metric Spaces",
  description:
    "Reference sheet introducing norms, induced distances, metric spaces, and normed vector spaces, with the axioms of norms and distances and the relationship between these mathematical structures.",
  category: "Mathematics",
  tags: ["cheatsheet"],
  pdf: "/notes/cheatsheet_norme_dist_em_diag.pdf",
  date: "2026-09-15",
  },
  {
  slug: "summary-algebraic-topological-structures",
  title: "Summary Sheet: Algebraic and Topological Structures",
  description:
    "Cheatsheet comparing vector spaces, metric spaces, normed vector spaces, norms, and norm-induced distances, with their defining axioms, key properties, and relationships.",
  category: "Mathematics",
  tags: ["cheatsheet"],
  pdf: "/notes/cheatsheet_norme_dist_em_tab.pdf",
  date: "2026-09-15",
  }
];

export const notes = rawNotes.sort((a, b) => b.date.localeCompare(a.date));
