// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpqvprnz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-lg">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm text-gray-600 dark:text-gray-300">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm text-gray-600 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </button>

      {status === "success" && (
        <p className="text-green-600 dark:text-green-400 text-sm">Message envoyé avec succès !</p>
      )}
      {status === "error" && (
        <p className="text-red-600 dark:text-red-400 text-sm">
          Une erreur est survenue, veuillez réessayer plus tard.
        </p>
      )}
    </form>
  );
}