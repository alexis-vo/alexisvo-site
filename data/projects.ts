// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;      // miniature pour la carte (peut être vide = placeholder)
  poster?: string;     // chemin vers le PDF du poster
  link?: string;        // lien externe optionnel (GitHub, démo...)
};

export const projects: Project[] = [
  {
    slug: "site-personnel",
    title: "Site personnel",
    description:
      "Portfolio développé de A à Z avec Next.js, TypeScript et Tailwind CSS, déployé sur Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "",
    poster: "/posters/site-personnel.pdf",
    link: "https://github.com/TON_PSEUDO/alexisvo-site",
  },
  {
    slug: "serveur-nextcloud",
    title: "Serveur personnel Nextcloud + VPN",
    description:
      "Configuration d'un serveur Ubuntu avec Nextcloud (NAS personnel) et WireGuard pour un accès distant sécurisé.",
    stack: ["Ubuntu Server", "Nextcloud", "WireGuard"],
    image: "",
    poster: "/posters/serveur-nextcloud.pdf",
  },
];