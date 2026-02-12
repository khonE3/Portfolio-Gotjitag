import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Awards />
      <Education />
      <Contact />
      <footer className="py-8 text-center border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">
          © 2025 Thanakrit Thuakthao. Built with React + Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Index;
