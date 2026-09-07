// app/journey/page.tsx
import About from "@/components/About";
import ParcoursTimeline from "@/components/ParcoursTimeline";

export const metadata = {
  title: "Background & Journey — Alexis Vo",
  description:
    "Academic background, internships, and the personal story behind my path from a Dual Bachelor's at Université Paris-Saclay to CentraleSupélec — how I prepared for the admissions exams, my mindset, and what I learned along the way.",
};

export default function JourneyPage() {
  return (
    <main>
      <About />
      <ParcoursTimeline />
    </main>
  );
}