// app/[locale]/contact/page.tsx
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import FadeIn from "@/components/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: `${t("title")} — Alexis Vo`,
    description:
      locale === "en"
        ? "Contact me for any professional opportunity."
        : "Contactez-moi pour toute opportunité professionnelle.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <section className="px-6 md:px-20 py-20 max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
      <FadeIn>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {t("title")}
          </h1>
        </div>
      </FadeIn>

      <FadeIn className="w-full">
        <ContactForm />
      </FadeIn>

      <FadeIn>
        <SocialLinks />
      </FadeIn>
    </section>
  );
}