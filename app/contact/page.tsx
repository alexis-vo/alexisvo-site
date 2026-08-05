// app/contact/page.tsx
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Contact — Alexis VO",
  description: "Contact me for any professional opportunity.",
};

export default function ContactPage() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
      <FadeIn>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Get in Touch
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