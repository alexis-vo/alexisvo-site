# alexisvo.fr

Personal portfolio — [alexisvo.fr](https://alexisvo.fr)

Personal website showcasing my background, academic and personal projects, resume, and a library of course notes and exam study sheets.

## ✨ Features

- **Home** — introduction, academic background, quote
- **Projects** — filterable gallery by category and technology, with PDF preview (research posters) for each project
- **Resume** — preview and direct PDF download
- **Notes & Study Sheets** — course notes and exam topics, filterable by type
- **Contact** — working contact form (via Formspree)
- **Light / dark mode** — manual toggle, with system preference detection
- **SEO** — sitemap, robots.txt, dynamic metadata, dynamically generated Open Graph image, Schema.org structured data

## 🛠️ Tech stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Formspree](https://formspree.io/) for the contact form
- Deployed on [Vercel](https://vercel.com/)

## 🚀 Running locally

\`\`\`bash
# Clone the repo
git clone https://github.com/alexis-vo/alexisvo-site.git
cd alexisvo-site

# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

The site is available at [http://localhost:3000](http://localhost:3000).

### Production build

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📁 Project structure

\`\`\`
app/
  page.tsx            # Home page
  projects/            # Project list + detail pages
  cv/                   # Resume page
  blog/                 # Notes & study sheets
  contact/               # Contact form
  sitemap.ts           # Sitemap generation
  robots.ts            # robots.txt
  opengraph-image.tsx   # Dynamically generated OG image
components/          # Reusable React components
data/                # Project and post data (projects.ts, posts.ts)
public/              # Static assets, PDFs (resume, posters)
\`\`\`

## 📄 License

All rights reserved — the source code is shared for technical and educational demonstration purposes. Personal content (resume, projects, text) remains my property.

## 📬 Contact

[alexisvo.fr/contact](https://alexisvo.fr/contact) · [LinkedIn](https://linkedin.com/in/alexis-vo) · [GitHub](https://github.com/alexis-vo)
