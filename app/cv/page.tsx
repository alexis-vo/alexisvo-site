// app/cv/page.tsx
export const metadata = {
  title: "CV — Alexis Vo",
  description: "Consultez et téléchargez le CV d'Alexis Vo.",
};

export default function CvPage() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto flex flex-col items-center gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Mon CV
        </h1>
        <p className="text-gray-600">
          Aperçu ci-dessous, ou téléchargement direct au format PDF.
        </p>
      </div>

      
     <a   href="/cv_alexis-vo.pdf"
        download
        className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
      >
        Télécharger le PDF
      </a>

      <div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <iframe
          src="/cv_alexis-vo.pdf"
          className="w-full h-[80vh]"
          title="Aperçu du CV d'Alexis Vo"
        />
      </div>

      <p className="text-sm text-gray-500 text-center max-w-md">
        Cette version présente l&apos;essentiel de mon profil.{" "}
        <a href="/contact" className="underline hover:text-gray-800">
            Contactez-moi
        </a>{" "}
        pour toute question ou pour échanger davantage sur mon parcours.
        </p>
    </section>
  );
}