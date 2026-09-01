import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink overflow-x-hidden relative font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
