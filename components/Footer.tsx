// components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-6 md:px-20 py-8 mt-20 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
      <p>© {year} Alexis Vo. Tous droits réservés.</p>

      <div className="flex gap-5">
        
          href="https://github.com/alexisvo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-colors"
        >
          GitHub
        </a>
        
          href="https://linkedin.com/in/alexis-vo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-colors"
        >
          LinkedIn
        </a>
        
          href="mailto:alexis.vo@student-cs.fr"
          className="hover:text-gray-800 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}