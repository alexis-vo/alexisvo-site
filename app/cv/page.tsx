// app/cv/page.tsx
import CvDownloadButton from "@/components/CvDownloadButton";

export const metadata = {
  title: "CV — Alexis VO",
  description: "Consulter et télécharger mon CV.",
};

export default function CvPage() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-4xl mx-auto flex flex-col items-center gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Mon CV
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Aperçu ci-dessous, ou téléchargement direct au format PDF.
        </p>
      </div>

      <CvDownloadButton />

      <div className="w-full border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
        <iframe
          src="/cv_alexis-vo.pdf"
          className="w-full h-[80vh]"
          title="Aperçu du CV d'Alexis Vo"
        />
      </div>
    </section>
  );
}