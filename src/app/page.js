import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import SectionDivider  from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Ticker />

      <SectionDivider scene="loading scene_01 // player profile" />
      <About />

      <SectionDivider scene="loading scene_02 // quests log" />
      <Projects />

      <SectionDivider scene="loading scene_03 // achievements" />
      <Achievements />

      <SectionDivider scene="loading scene_04 // inventory" />
      <Interests />

      <SectionDivider scene="loading scene_05 // contact" />
      <Contact />
    </main>
  );
}