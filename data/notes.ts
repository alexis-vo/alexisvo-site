// data/notes.ts

export type Subject = "Mathematics" | "Physics" | "Computer Science";

export type NoteTag = "lecture-notes" | "colles" | "method";

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
    tags: ["method"],
    pdf: "/notes/met_int.pdf",
    date: "2026-08-11",
  },
  {
    slug: "k0",
    title: "Khôlle 0 - Assessment criteria",
    description:
      "Assessment criteria used during oral examinations: presentation, rigor of reasoning, mastery of the course material, and quality of answers to questions.",
    category: "Mathematics",
    tags: ["colles"],
    pdf: "/notes/k0.pdf",
    date: "2026-08-10",
  },
  {
    slug: "k1",
    title: "Khôlle 1 - Sums",
    description:
      "Arithmetico-geometric sums ; Binomial coefficients, Vandermonde's identity ; Lagrange's identity and the Cauchy–Schwarz inequality",
    category: "Mathematics",
    tags: ["colles"],
    pdf: "/notes/k1_suj.pdf",
    date: "2026-08-10",
  },
  {
    slug: "electricity-premiere",
    title: "Electricity — Full Course in French",
    description:
      "Course notes on fundamental electrical quantities: charge, current, voltage, resistance, power, and energy.",
    category: "Physics",
    tags: ["lecture-notes"],
    pdf: "/notes/cours_elec_premiere.pdf",
    date: "2026-08-10",
  },
];

export const notes = rawNotes.sort((a, b) => b.date.localeCompare(a.date));
