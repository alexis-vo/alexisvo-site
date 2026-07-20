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
];