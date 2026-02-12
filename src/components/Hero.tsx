import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div
            className="w-48 h-48 lg:w-64 lg:h-64 overflow-hidden box-glow rounded-2xl"
          >
            <img src={profileImg} alt="Thanakrit Thuakthao" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary animate-pulse" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-wider">
            {">"} hello_world<span className="animate-blink">_</span>
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-4">
            <span className="gradient-text">Thanakrit</span>
            <br />
            <span className="text-foreground">Thuakthao</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6">
            Software Engineer
          </p>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed text-sm md:text-base">
            Frontend-focused developer with backend understanding. Building responsive UIs with React, Vue, Next.js & Tailwind. Experienced with Go, Node.js, AI integrations, and DevOps workflows.
          </p>

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a href="https://github.com/Khone3" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/thanakrit-thuakthao-73829a284/" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gotgothot.99@gmail.com"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Mail size={20} />
            </a>
            <a href="tel:+66627395866"
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Phone size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
