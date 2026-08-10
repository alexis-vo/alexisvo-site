// data/projects.ts
export type ProjectCategory = "LDD1" | "LDD2" | "LDD3" | "Personal project";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  date: string; // ISO : "2026-01"
  poster?: string;
  posterOrientation?: "portrait" | "landscape";
  link?: string;
};

const rawProjects: Project[] = [
  {
    slug: "blaise-alumni",
    category: "Personal project",
    title: "Blaise Alumni Group",
    description:
      "Alumni and student network from Lycée Blaise Pascal in Orsay. Personalized tutoring, design of educational materials, exam and admissions prep, networking...",
    stack: ["Entrepreneurship", "Communication", "Content Creation", "Networking"],
    date: "2024-07",
    poster: "/posters/blaise-alumni.pdf",
    posterOrientation: "landscape",
    link: "https://linktr.ee/blaise.alumni",
  },
  {
    slug: "nextcloud-server",
    category: "Personal project",
    title: "Personal Nextcloud Server + VPN",
    description:
      "Set up of an Ubuntu server with Nextcloud (personal NAS) and WireGuard for secure remote access.",
    stack: ["Ubuntu Server", "Nextcloud", "WireGuard"],
    date: "2026-07",
    poster: "/posters/nextcloud-wireguard.pdf",
    posterOrientation: "landscape",
  },
  {
    slug: "micro-go",
    category: "LDD3",
    title: "Micro Go Compiler",
    description:
      "Implementation of a Micro Go compiler as part of a semester-end project for the Compilation module.",
    stack: ["OCaml", "Compilation", "MIPS"],
    date: "2025-11",
    poster: "/posters/rapport-micro-go.pdf",
    posterOrientation: "portrait",
  },
  {
    slug: "fairness",
    category: "LDD3",
    title: "Fairness in Medical Imaging",
    description:
      "Study of the fairness of a ResNet18 model for classifying chest X-rays from the NIH Chest X-ray 14 dataset. Bias identification and interpretation.",
    stack: ["Python", "Deep Learning", "Fairness in AI"],
    date: "2026-04",
    poster: "/posters/rapport-fairness.pdf",
    posterOrientation: "landscape",
  },
  {
    slug: "jfp16",
    category: "Personal project",
    title: "Journées Franciliennes de la Programmation — 16th edition",
    description:
      "Implementation of the Hanabi game and extensions. Ranked 2nd out of 15 teams.",
    stack: ["Algorithms", "Automata", "Game Theory"],
    date: "2026-06",
    poster: "/posters/jfp16.pdf",
    posterOrientation: "portrait",
    link: "https://usr.lmf.cnrs.fr/~conchon/jfp16/",
  },
  {
    slug: "jfp15",
    category: "Personal project",
    title: "Journées Franciliennes de la Programmation — 15th edition",
    description: "Image compression codecs. Ranked 4th out of 16 teams.",
    stack: ["Algorithms", "Data Compression", "Data Structures"],
    date: "2025-05",
    poster: "/posters/jfp15.pdf",
    posterOrientation: "portrait",
    link: "https://usr.lmf.cnrs.fr/~kn/jfp15/",
  },
  {
    slug: "dots-and-boxes-ai",
    category: "LDD3",
    title: "Dots & Boxes AI — Hybrid Adversarial Strategies",
    description:
      "Implementation and comparison of game strategies for Dots & Boxes, from random and greedy approaches to Minimax, Alpha-Beta, and Monte Carlo Tree Search. Ranked 2nd out of 10 teams in the final tournament.",
    stack: ["Java", "Artificial Intelligence", "Game Theory"],
    date: "2026-05",
    poster: "/posters/rapport-sai.pdf",
    posterOrientation: "portrait",
  },
  {
    slug: "huffman-compression",
    category: "LDD2",
    title: "Text Compression — Huffman Algorithm",
    description:
      "OCaml implementation of a text file compressor/decompressor using Huffman coding, with binary file handling, a priority queue for tree construction, and statistics features (compression ratio, character frequencies). Tested on large corpora (Bible, Quran) with a compression ratio of 61.85%.",
    stack: ["OCaml", "Algorithms", "Data Compression"],
    date: "2025-01",
    poster: "/posters/rapport-ipf.pdf",
    posterOrientation: "portrait",
  },
  {
    slug: "boolean-circuits-graphs",
    category: "LDD2",
    title: "Boolean Circuits and Graphs",
    description:
      "Python library of directed graphs (OpenDigraph) applied to the modeling and evaluation of acyclic Boolean circuits. Implementation of graph algorithms (Dijkstra, topological sort, longest path), circuit synthesis from propositional formulas, and case studies (half-adder, adders, Hamming code verification).",
    stack: ["Python", "Algorithms", "Graph Theory"],
    date: "2025-06",
    poster: "/posters/rapport-bool.pdf",
    posterOrientation: "portrait",
  },
  {
    slug: "mummies-and-pyramids",
    category: "LDD2",
    title: "Mummies and Pyramids",
    description:
      "Extension of a 3D maze engine in Processing (Java) to procedurally generate two models: a pyramid built by stacking mazes of decreasing size with a desert floor modulated by Perlin noise, and an articulated mummy built by revolving quad-strips (bands with variable color and radius) organized as a PShape(GROUP). Lighting and shader handling based on the character's position (dark interior / bright exterior), random mummy movement within the maze, and bonus features (dynamic compass, level switching).",
    stack: ["Processing", "Java", "3D Computer Graphics", "Procedural Generation"],
    date: "2025-04",
    poster: "/posters/projet-igsd.pdf",
    posterOrientation: "portrait",
  },
  {
    slug: "jarnac",
    category: "LDD1",
    title: "Jarnac",
    description:
      "C++ implementation of the Jarnac word game: game engine, controller, and text-mode view, compiled via CMake. Study of dictionary search method complexity and design of a word-forming AI weighted by length and difficulty, optimized through dictionary reduction and search restricted to anagrams of board words. Extensions: language choice (French/English), board size, word length constraints, multiplayer mode, and AI vs AI.",
    stack: ["C++", "CMake", "Algorithms", "Data Structures"],
    date: "2023-12",
    poster: "/posters/rapport-jarnac.pdf",
    posterOrientation: "portrait",
  },
  {
    slug: "tcp-udp-networking",
    category: "LDD2",
    title: "TCP/UDP Network Programming",
    description:
      "C implementation of clients and servers communicating over the TCP and UDP protocols, with an interactive launcher to choose the protocol, role, and a developer mode. Multi-threaded TCP server (console thread for CLEAR/SHUTDOWN commands and a communication thread), connection/disconnection handling, and socket manipulation via socket(), bind(), connect(), send(), and recv().",
    stack: ["C", "Network Programming", "Sockets", "Multithreading"],
    date: "2024-12",
    poster: "/posters/rapport-reseaux.pdf",
    posterOrientation: "portrait",
  },
  {
    slug: "linear-algebra-2-lecture-notes",
    category: "LDD2",
    title: "Linear Algebra II — Lecture Notes (OLMA252)",
    description:
      "Lecture notes co-written with the instructor of the OLMA252 module at Université Paris-Saclay, intended for the entire LDD2 cohort. The document covers Euclidean spaces, orthogonality and orthonormal bases, isometries and adjoints, determinants, and the reduction of endomorphisms (eigenvalues, characteristic polynomial, triangularization, Cayley-Hamilton theorem), with an appendix reviewing linear algebra 1 and corrected comprehension questions after each lecture. Contribution: proofreading and correction of the document.",
    stack: ["Linear Algebra", "LaTeX", "Mathematics"],
    date: "2025-03",
    poster: "/posters/linalg2-2024-2025.pdf",
    posterOrientation: "portrait",
    link: "https://janschuetz.perso.math.cnrs.fr/",
  },
  {
    slug: "orsay-math-marathon",
    category: "Personal project",
    title: "Orsay Mathematics Marathon 2024–2025",
    description:
      "Participation in the Orsay Mathematics Marathon, an annual problem-solving competition organized by Université Paris-Saclay (Laboratoire de Mathématiques d'Orsay, funded by the Fondation Mathématique Jacques Hadamard). Solved 2 problems of the full marathon, earning the title of 'Marathonien fuchsien arithmétique de deuxième espèce.'",
    stack: ["Mathematics", "Problem Solving"],
    date: "2025-02",
    poster: "/posters/marathon-math2425.pdf",
    posterOrientation: "portrait",
    link: "https://www.imo.universite-paris-saclay.fr/marathon/",
  },
  {
    slug: "mathenjeans-distributive-workshop",
    category: "Personal project",
    title: "MATh.en.JEANS Workshop — Distributive Operations",
    description:
      "MATh.en.JEANS research workshop (Faculté des Sciences d'Orsay, supervised by Pierre Pansu and Aurélien Perdriaud) exploring an open question: multiplication is distributive over addition, but does an operation distributive over multiplication exist? Starting from the idea that the logarithm turns multiplication into a disguised addition, exploration of new composition laws built by analogy, and study of their algebraic properties (distributivity, induced structures).",
    stack: ["Algebra", "Algebraic Structures", "Mathematical Research"],
    date: "2024-03",
    poster: "/posters/Distributif.pdf",
    posterOrientation: "landscape",
    link: "https://www.mathenjeans.fr/content/Faculte-des-Sciences-dOrsay-2023-2024",
  },
  {
    slug: "forbidden-island",
    category: "LDD2",
    title: "Forbidden Island",
    description:
      "Java digital adaptation of the cooperative board game Forbidden Island, with a Swing graphical interface. MVC architecture (board and zone model, keyboard/mouse interaction controller, graphical view) with inheritance for special tiles (Temple, Helipad), progressive island flooding, artifact collection, turn-based system, and role abilities (Engineer, Pilot). Polished interface: animated pawns, dynamic images based on zone state, sound handling.",
    stack: ["Java", "Swing", "Object-Oriented Programming", "MVC"],
    date: "2025-04",
    poster: "/posters/rapport-pogl.pdf",
    posterOrientation: "portrait",
  },
  {
    slug: "maze",
    category: "LDD1",
    title: "Maze",
    description:
      "Mathematical study of mazes viewed as combinatorial structures: enumeration of n×m pseudo-mazes, computation of the maximum number of walls by recurrence, a general formula for the cardinality of the set of pseudo-mazes, and proof of the existence and uniqueness of a path to the exit in a maze. Establishment of necessary and sufficient conditions (number of walls, connectivity) for a pseudo-maze to be a true maze.",
    stack: ["Combinatorics", "Graph Theory", "Mathematical Proof"],
    date: "2024-05",
    poster: "/posters/rapport-projetMI.pdf",
    posterOrientation: "portrait",
  },
];

export const projects = rawProjects.sort((a, b) => b.date.localeCompare(a.date));
