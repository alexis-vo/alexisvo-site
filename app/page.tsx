// app/page.tsx
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Highlights from "@/components/Highlights";
import JourneyCTA from "@/components/JourneyCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Highlights />
      <JourneyCTA />
    </main>
  );
}