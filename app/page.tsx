import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import FloatingImage from "./components/FloatingImage";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
    <Hero />
    <About />
    <Features />
    <FloatingImage />
    <Contact />
    </main>
  );
}
