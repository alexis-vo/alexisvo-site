// components/ThemeScript.tsx
"use client";

import { useLayoutEffect } from "react";

export default function ThemeScript() {
  useLayoutEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);

    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  return null;
}