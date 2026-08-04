# alexisvo.fr

Portfolio personnel — [alexisvo.fr](https://alexisvo.fr)

Site vitrine qui présente mon parcours, mes projets académiques et personnels, mon CV, ainsi qu'une bibliothèque de fiches de cours et sujets de khôlles.

## ✨ Fonctionnalités

- **Accueil** — présentation, parcours académique, citation
- **Projets** — galerie filtrable par catégorie et par technologie, avec aperçu PDF (posters de recherche) pour chaque projet
- **CV** — aperçu et téléchargement direct au format PDF
- **Notes & Khôlles** — fiches de cours et sujets de colles, filtrables par type
- **Contact** — formulaire fonctionnel (via Formspree)
- **Mode clair / sombre** — bascule manuelle, avec détection de la préférence système
- **FR / EN** — internationalisation complète de l'interface et du contenu
- **SEO** — sitemap, robots.txt, metadata dynamiques, image Open Graph générée à la volée, données structurées Schema.org

## 🛠️ Stack technique

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) pour l'internationalisation
- [Formspree](https://formspree.io/) pour le formulaire de contact
- Déployé sur [Vercel](https://vercel.com/)

## 🚀 Lancer le projet en local

```bash
# Cloner le repo
git clone https://github.com/alexis-vo/alexisvo.git
cd alexisvo

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
npm run build
npm run start
```

## 📁 Structure du projet

```
app/
  [locale]/          # Pages (FR/EN), via next-intl
    page.tsx           # Accueil
    projects/           # Liste + détail des projets
    cv/                  # Page CV
    blog/                # Notes & khôlles
    contact/             # Formulaire de contact
  sitemap.ts          # Génération du sitemap
  robots.ts           # robots.txt
  opengraph-image.tsx  # Image OG générée dynamiquement
components/          # Composants React réutilisables
data/                # Données des projets et fiches (projects.ts, posts.ts)
messages/            # Fichiers de traduction (fr.json, en.json)
i18n/                # Configuration next-intl
public/              # Assets statiques, PDF (CV, posters)
```

## 📄 Licence

Tous droits réservés — le code source est partagé à titre de démonstration technique et pédagogique. Le contenu personnel (CV, projets, textes) reste ma propriété.

## 📬 Contact

[alexisvo.fr/contact](https://alexisvo.fr/contact) · [LinkedIn](https://linkedin.com/in/alexis-vo) · [GitHub](https://github.com/alexis-vo)
