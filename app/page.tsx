import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="relative">
      <SmoothScroll />
      <Navbar />
      <div className="">
        <Hero />
        <Skills />
        <ProjectsGrid />
        <Contact />
      </div>
    </main>
  );
}
