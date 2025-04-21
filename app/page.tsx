import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsList from "@/components/ProjectsList";
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
        <ProjectsList />
        <Contact />
      </div>
    </main>
  );
}
