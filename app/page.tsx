import { LeftSidebar } from "./components/LeftSidebar";
import { RightSidebar } from "./components/RightSidebar";
import { MobileHeader, MobileDock } from "./components/MobileChrome";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Credentials from "./sections/Credentials";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="selection:bg-neutral-800 selection:text-neutral-100">
      <MobileHeader />
      <MobileDock />

      <div className="mx-auto grid min-h-screen w-full max-w-[1740px] grid-cols-1 lg:grid-cols-[280px_minmax(0,800px)_280px] lg:justify-center">
        <LeftSidebar />

        <main className="min-w-0 border-x border-dashed border-neutral-200 px-5 pb-24 sm:px-10 lg:px-16 lg:pb-0">
          <Hero />
          <Experience />
          <Education />
          <Credentials />
          <Projects />
          <TechStack />
          <Footer />
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}
