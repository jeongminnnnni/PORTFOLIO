import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { SideProjects } from "@/components/sections/SideProjects";
import { Lessons } from "@/components/sections/Lessons";
import { Education } from "@/components/sections/Education";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SideProjects />
        <Lessons />
        <Education />
      </main>
      <Footer />
    </>
  );
}
