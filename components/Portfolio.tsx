import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import ProjectsView from "./ProjectsView";
import BlogsSection from "@/components/BlogsSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white font-cormorant dark:bg-stone-950 dark:text-stone-100">
      <Navbar />
      <main className="max-w-170 mx-auto px-6 pt-12 pb-3">
        <Hero />
        <Experience />
        <Projects />
        {/* <Quote /> */}
      </main>
      <ProjectsView />
      <BlogsSection />
      <Footer />
    </div>
  );
}
