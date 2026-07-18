// components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-6 md:px-20 py-8 mt-20 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
      <p>© {year} Alexis VO. Tous droits réservés.</p>

      <div className="flex gap-5">

        <a href="https://github.com/alexis-vo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          GitHub
        </a>

        <a href="https://linkedin.com/in/alexis-vo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          LinkedIn
        </a>

        <a href="mailto:alexis.vo@student-cs.fr"
          className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}