import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { Contact, Footer } from "@/components/Contact";
import NeuralNetwork from "@/components/NeuralNetwork";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden relative">
      <NeuralNetwork />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
