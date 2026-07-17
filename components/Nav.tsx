// components/Nav.tsx
import Link from "next/link";

export default function Nav() {
  return (
    <header className="w-full px-6 md:px-20 py-5 flex justify-between items-center border-b border-gray-100">
      <Link href="/" className="font-semibold text-lg tracking-tight">
        Alexis VO
      </Link>

      <nav className="flex gap-6 text-sm">
        <Link href="/" className="hover:text-gray-500 transition-colors">
          Accueil
        </Link>
        <Link href="/cv" className="hover:text-gray-500 transition-colors">
          CV
        </Link>
        <Link href="/projects" className="hover:text-gray-500 transition-colors">
          Projets
        </Link>
        <Link href="/contact" className="hover:text-gray-500 transition-colors">
          Contact
        </Link>
        
      </nav>
    </header>
  );
}