import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import ProjectsView from "./ProjectsView";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-stone-50/50 font-cormorant">
      <Navbar />
      <main className="max-w-170 mx-auto px-6 pt-12 pb-3">
        <Hero />
        <Experience />
        <Projects />
        {/* <Quote /> */}
      </main>
        <ProjectsView/>
      <Footer />
    </div>
  );
}
