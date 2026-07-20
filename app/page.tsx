// app/page.tsx
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <About />
    </main>
  );
}