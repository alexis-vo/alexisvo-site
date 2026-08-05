// components/Footer.tsx
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-6 md:px-20 py-8 mt-20 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
      <p>© {year} Alexis VO. All rights reserved. No vibe coding.</p>
      <SocialLinks />
    </footer>
  );
}