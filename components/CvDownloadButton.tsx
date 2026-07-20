// components/CvDownloadButton.tsx
"use client";

export default function CvDownloadButton() {
  return (
    <button
      onClick={() => {
        const link = document.createElement("a");
        link.href = "/cv_alexis-vo.pdf";
        link.download = "CV_Alexis_VO.pdf";
        link.click();
      }}
      className="px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
    >
      Télécharger le PDF
    </button>
  );
}