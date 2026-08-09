// components/Hero.tsx
"use client";

import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6 md:px-12">
      <div className="hero-animate w-full max-w-3xl flex flex-col sm:flex-row items-center gap-8 sm:gap-12 py-16 px-8 md:px-12 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-zinc-900">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 rounded-full overflow-hidden border border-gray-200 dark:border-gray-800">
          <Image
            src="/images/profile.png"
            alt="Photo of Alexis Vo"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Engineering Student • CentraleSupélec • Université Paris-Saclay
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Alexis VO
          </h1>

          <p
            className="text-xl italic text-gray-600 dark:text-gray-300"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            &quot;Shaping my future&quot;
          </p>


          <div className="mt-2 flex items-center gap-4">
            <button
              onClick={() => {
                window.open("/cv_alexis-vo.pdf", "_blank", "noopener,noreferrer");

                const link = document.createElement("a");
                link.href = "/cv_alexis-vo.pdf";
                link.download = "CV_Alexis_VO.pdf";
                link.click();
              }}
              aria-label="Download my resume"
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors overflow-hidden"
            >
              <Image
                src="/images/cv-icon.png"
                alt="Download my resume"
                width={24}
                height={24}
                className="dark:invert"
              />
            </button>

            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}