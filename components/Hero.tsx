// components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 md:px-12">
      <div className="w-full max-w-2xl text-center flex flex-col items-center gap-6 py-16 px-8 md:px-12 rounded-2xl border border-gray-200 shadow-sm bg-white">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Étudiant ingénieur • CentraleSupélec
        </p>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
          Alexis Vo
        </h1>

        <p className="text-lg text-gray-600">
          Passionné de mathématiques, IA et finance quantitative
        </p>

        <p className="text-base text-gray-500 max-w-xl">
          De la Double Licence Mathématiques-Informatique à CentraleSupélec, en
          passant par des stages en finance quantitative et data science à
          l&apos;École Polytechnique.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          
          <a  href="/cv.pdf"
            className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors text-center"
          >
            Télécharger mon CV
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-center"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}