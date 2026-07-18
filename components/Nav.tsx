// components/Nav.tsx
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="w-full px-6 md:px-20 py-5 flex justify-between items-center border-b border-gray-100 dark:border-gray-800 dark:bg-black">
      <Link href="/" className="font-semibold text-lg tracking-tight dark:text-white">
        Alexis Vo
      </Link>

      <nav className="flex gap-6 items-center text-sm">
        <Link href="/" className="hover:text-gray-500 transition-colors dark:text-gray-300">
          Accueil
        </Link>
        <Link href="/projects" className="hover:text-gray-500 transition-colors dark:text-gray-300">
          Projets
        </Link>
        <Link href="/cv" className="hover:text-gray-500 transition-colors dark:text-gray-300">
          CV
        </Link>
        <Link href="/contact" className="hover:text-gray-500 transition-colors dark:text-gray-300">
          Contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}