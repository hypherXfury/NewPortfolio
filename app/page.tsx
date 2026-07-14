"use client";

import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <div className="relative min-h-full w-full selection:bg-neutral-800 selection:text-neutral-100">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
