// app/contact/page.tsx
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Alexis Vo",
  description: "Contactez Alexis Vo pour toute opportunité professionnelle.",
};

export default function ContactPage() {
  return (
    <section className="px-6 md:px-20 py-20 max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Me contacter
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Une question, une opportunité ? N&apos;hésitez pas à m&apos;écrire.
        </p>
      </div>

      <ContactForm />
    </section>
  );
}