// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;      // miniature pour la carte (peut être vide = placeholder)
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
  image: "/images/projects/blaise-alumni.png",
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
    image: "/images/projects/nextcloud.png",
    poster: "/posters/nextcloud-wireguard.pdf",
    posterOrientation: "landscape",
  },
  {
  slug: "micro-go",
  title: "Compilateur micro Go",
  description:
    "Réalisation d'un compilateur micro Go dans le cadre d'un projet de fin de semestre du module Compilation.",
  stack: ["OCaml", "Compilation", "MIPS"],
  image: "/images/projects/micro-go.png",
  poster: "/posters/rapport-micro-go.pdf",
  posterOrientation: "portrait",
  },
  {
  slug: "fairness",
  title: "Fairness en imagerie médicale",
  description:
    "Étude de la fairness d'un modèle ResNet18 de classification de radiographies thoraciques NIH Chest X-ray 14. Identification des biais et interprétations.",
  stack: ["Python", "Deep Learning", "Fairness in AI"],
  image: "/images/projects/chest.jpeg",
  poster: "/posters/rapport-fairness.pdf",
  posterOrientation: "landscape",
  },
  {
  slug: "jfp16",
  title: "Journées Franciliennes de la Programmation — 16ème édition.",
  description:
    "Implémentation du jeu Hanabi et extensions",
  stack: ["Algorithmique", "Automates", "Théorie des jeux"],
  image: "/images/projects/hanabi.jpg",
  poster: "/posters/jfp16.pdf",
  posterOrientation: "portrait",
  link: "https://usr.lmf.cnrs.fr/~conchon/jfp16/"
  },
  {
  slug: "jfp15",
  title: "Journées Franciliennes de la Programmation — 15ème édition.",
  description:
    "Codecs de compression d'images",
  stack: ["Algorithmique", "Compression de données", "Structures de données"],
  image: "/images/projects/jfp15.png",
  poster: "/posters/jfp15.pdf",
  posterOrientation: "portrait",
  link: "https://usr.lmf.cnrs.fr/~kn/jfp15/"
  },
  {
  slug: "projet-sai",
  title: "IA Dots & Boxes — Stratégies adversariales hybrides",
  description:
    "Implémentation et comparaison de stratégies de jeu pour Dots & Boxes, de l'aléatoire  au glouton, jusqu'à Minimax, Alpha-Beta et Monte Carlo Tree Search. ",
  stack: ["Java", "Intelligence Artificielle", "Théorie des jeux"],
  image: "/images/projects/pipopipette.svg",
  poster: "/posters/rapport-sai.pdf",
  posterOrientation: "portrait",
  },
];