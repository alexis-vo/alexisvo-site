// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  date: string; // format ISO : "2026-01-15"
  poster?: string;     // chemin vers le PDF du poster
  posterOrientation?: "portrait" | "landscape";
  link?: string;        // lien externe optionnel (GitHub, démo...)
};

export const projects: Project[] = [
  {
  slug: "blaise-alumni",
  title: "Groupe Blaise Alumni",
  description:
    "Groupe des anciens élèves et étudiants du lycée Blaise Pascal d'Orsay. Accompagnement personnalisé, conception de supports pédagogiques, préparations aux examens et concours, réseautage...",
  stack: ["Entrepreunariat", "Communication", "Création de contenu", "Réseautage"],
  date: "2026",
  poster: "/posters/blaise-alumni.pdf",
  posterOrientation: "landscape",
  link: "https://linktr.ee/blaise.alumni",
  },
  {
    slug: "serveur-nextcloud",
    title: "Serveur personnel Nextcloud + VPN",
    description:
      "Configuration d'un serveur Ubuntu avec Nextcloud (NAS personnel) et WireGuard pour un accès distant sécurisé.",
    stack: ["Ubuntu Server", "Nextcloud", "WireGuard"],
    date: "2026",
    poster: "/posters/nextcloud-wireguard.pdf",
    posterOrientation: "landscape",
  },
  {
  slug: "micro-go",
  title: "Compilateur micro Go",
  description:
    "Réalisation d'un compilateur micro Go dans le cadre d'un projet de fin de semestre du module Compilation.",
  stack: ["OCaml", "Compilation", "MIPS"],
  date: "2026",
  poster: "/posters/rapport-micro-go.pdf",
  posterOrientation: "portrait",
  },
  {
  slug: "fairness",
  title: "Fairness en imagerie médicale",
  description:
    "Étude de la fairness d'un modèle ResNet18 de classification de radiographies thoraciques NIH Chest X-ray 14. Identification des biais et interprétations.",
  stack: ["Python", "Deep Learning", "Fairness in AI"],
  date: "2026",
  poster: "/posters/rapport-fairness.pdf",
  posterOrientation: "landscape",
  },
  {
  slug: "jfp16",
  title: "Journées Franciliennes de la Programmation — 16ème édition.",
  description:
    "Implémentation du jeu Hanabi et extensions. Classés 2ème sur 15 équipes.",
  stack: ["Algorithmique", "Automates", "Théorie des jeux"],
  date: "2026",
  poster: "/posters/jfp16.pdf",
  posterOrientation: "portrait",
  link: "https://usr.lmf.cnrs.fr/~conchon/jfp16/"
  },
  {
  slug: "jfp15",
  title: "Journées Franciliennes de la Programmation — 15ème édition.",
  description:
    "Codecs de compression d'images. Classés 4ème sur 16 équipes.",
  stack: ["Algorithmique", "Compression de données", "Structures de données"],
  date: "2026",
  poster: "/posters/jfp15.pdf",
  posterOrientation: "portrait",
  link: "https://usr.lmf.cnrs.fr/~kn/jfp15/"
  },
  {
  slug: "projet-sai",
  title: "IA Dots & Boxes — Stratégies adversariales hybrides.",
  description:
    "Implémentation et comparaison de stratégies de jeu pour Dots & Boxes, de l'aléatoire  au glouton, jusqu'à Minimax, Alpha-Beta et Monte Carlo Tree Search. Classés 2ème sur 10 équipes du tournoi final.",
  stack: ["Java", "Intelligence Artificielle", "Théorie des jeux"],
  date: "2026",
  poster: "/posters/rapport-sai.pdf",
  posterOrientation: "portrait",
  },
  {
  slug: "compression-huffman",
  title: "Compression de texte — Algorithme de Huffman",
  description:
    "Implémentation en OCaml d'un compresseur/décompresseur de fichiers texte par codage de Huffman, avec gestion des fichiers binaires, file de priorité pour la construction de l'arbre, et fonctionnalités de statistiques (taux de compression, fréquences des caractères). Testé sur de gros corpus (Bible, Coran) avec un taux de compression de 61,85%.",
  stack: ["OCaml", "Algorithmique", "Compression de données"],
  date: "2026",
  poster: "/posters/rapport-ipf.pdf",
  posterOrientation: "portrait",
},
{
  slug: "circuits-booleens-graphes",
  title: "Circuits booléens et graphes",
  description:
    "Bibliothèque Python de graphes orientés (OpenDigraph) appliquée à la modélisation et l'évaluation de circuits booléens acycliques. Implémentation d'algorithmes de graphe (Dijkstra, tri topologique, plus long chemin), de synthèse de circuits depuis des formules propositionnelles, et étude de cas (half-adder, additionneurs, vérification de code de Hamming).",
  stack: ["Python", "Algorithmique", "Théorie des graphes"],
  date: "2026",
  poster: "/posters/rapport-bool.pdf",
  posterOrientation: "portrait",
},
{
  slug: "momies-et-pyramides",
  title: "Des momies et des pyramides",
  description:
    "Extension d'un moteur de labyrinthe 3D en Processing (Java) pour générer deux modèles procéduraux : une pyramide obtenue par empilement de labyrinthes de tailles décroissantes avec sol désertique modulé par bruit de Perlin, et une momie articulée construite par révolution de quad-strips (bandelettes à couleur et rayon variables) organisée en PShape(GROUP). Gestion de la lumière et des shaders selon la position du personnage (intérieur sombre / extérieur clair), déplacement aléatoire de la momie dans le labyrinthe, et fonctionnalités bonus (boussole dynamique, changement de niveau).",
  stack: ["Processing", "Java", "Infographie 3D", "Génération procédurale"],
  date: "2026",
  poster: "/posters/projet-igsd.pdf",
  posterOrientation: "portrait",
},
{
  slug: "jarnac",
  title: "Jarnac",
  description:
    "Implémentation en C++ du jeu de lettres Jarnac : moteur de jeu, contrôleur et vue en mode texte compilés via CMake. Étude de la complexité des méthodes de recherche dans le dictionnaire et conception d'une IA de formation de mots pondérée par longueur et difficulté, optimisée par réduction du dictionnaire et recherche restreinte aux anagrammes des mots du plateau. Extensions : choix de la langue (français/anglais), taille du plateau, contraintes de longueur des mots, mode multijoueur et IA vs IA.",
  stack: ["C++", "CMake", "Algorithmique", "Structures de données"],
  date: "2026",
  poster: "/posters/rapport-jarnac.pdf",
  posterOrientation: "portrait",
},
{
  slug: "programmation-reseaux-tcp-udp",
  title: "Programmation réseaux TCP/UDP",
  description:
    "Implémentation en C de clients et serveurs communiquant selon les protocoles TCP et UDP, avec un launcher interactif pour choisir le protocole, le rôle et un mode développeur. Serveur TCP multi-threadé (thread console pour les commandes CLEAR/SHUTDOWN et thread de communication), gestion des connexions/déconnexions, et manipulation des sockets via socket(), bind(), connect(), send() et recv().",
  stack: ["C", "Programmation réseau", "Sockets", "Multithreading"],
  date: "2026",
  poster: "/posters/rapport-reseaux.pdf",
  posterOrientation: "portrait",
},
{
  slug: "algebre-lineaire-2-notes-de-cours",
  title: "Algèbre Linéaire II — Notes de cours (OLMA252)",
  description:
    "Notes de cours co-écrites avec l'enseignant du module OLMA252 à l'Université Paris-Saclay, à destination de l'ensemble de la promotion LDD2. Le document couvre les espaces euclidiens, l'orthogonalité et les bases orthonormales, les isométries et adjoints, les déterminants, ainsi que la réduction des endomorphismes (valeurs propres, polynôme caractéristique, trigonalisation, théorème de Cayley-Hamilton), avec un appendice de rappels d'algèbre linéaire 1 et des questions de compréhension corrigées après chaque exposé. Contribution : relecture et correction du document.",
  stack: ["Algèbre linéaire", "LaTeX", "Mathématiques"],
  date: "2026",
  poster: "/posters/linalg2-2024-2025.pdf",
  posterOrientation: "portrait",
  link: "https://janschuetz.perso.math.cnrs.fr/"
},
{
  slug: "marathon-orsay-mathematiques",
  title: "Marathon d'Orsay de Mathématiques 2024–2025",
  description:
    "Participation au Marathon d'Orsay de Mathématiques, concours annuel de résolution de problèmes organisé par l'Université Paris-Saclay (Laboratoire de Mathématiques d'Orsay, financé par la Fondation Mathématique Jacques Hadamard). Résolution de 2 problèmes du marathon complet, valant le titre de Marathonien fuchsien arithmétique de deuxième espèce.",
  stack: ["Mathématiques", "Résolution de problèmes"],
  date: "2026",
  poster: "/posters/marathon-math2425.pdf",
  posterOrientation: "portrait",
  link: "https://www.imo.universite-paris-saclay.fr/marathon/"
},
{
  slug: "atelier-mathenjeans-distributif",
  title: "Atelier MATh.en.JEANS — Opérations distributives",
  description:
    "Atelier de recherche MATh.en.JEANS (Faculté des Sciences d'Orsay, encadré par Pierre Pansu et Aurélien Perdriaud) autour d'une question ouverte : la multiplication est distributive par rapport à l'addition, mais existe-t-il une opération distributive par rapport à la multiplication ? À partir de l'idée que le logarithme transforme la multiplication en une addition déguisée, exploration de nouvelles lois de composition construites par analogie, et étude de leurs propriétés algébriques (distributivité, structures induites).",
  stack: ["Algèbre", "Structures algébriques", "Recherche mathématique"],
  date: "2026",
  poster: "/posters/Distributif.pdf",
  posterOrientation: "landscape",
  link: "https://www.mathenjeans.fr/content/Faculte-des-Sciences-dOrsay-2023-2024",
},
];