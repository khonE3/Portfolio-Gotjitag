import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SMARTSIGN",
    subtitle: "AI Detected Sign Language",
    period: "Aug - Dec 2025",
    role: "Frontend Developer & UI/UX Designer",
    description:
      "Designed end-to-end UI/UX and product flow, built a responsive frontend with real-time video display and interactive UI components. Collaborated with backend and AI teams to integrate AI-powered features via APIs.",
    tech: ["React", "Tailwind CSS", "WebSocket", "REST API", "Figma"],
    highlights: [
      "🏆 NSC 2025 – 1st Place Winner (Eastern)",
      "🏆 EEC Hackathon – Top Star Award & Presentation Award",
      "🏆 Innovation Award 2025 – 1st Place (Undergraduate)",
    ],
  },
  {
    title: "MindcareAI",
    subtitle: "Mental Health Consultation App",
    period: "Dec 2025 - Present",
    role: "Software Engineer (Backend)",
    description:
      "Developed backend services using Go (Gin, Fiber) following Clean Architecture in a microservices-based system. Implemented JWT auth, Apple Sign-In, API Gateway routing, and real-time features with WebSocket and Redis.",
    tech: ["Go", "Gin", "Fiber", "Redis", "WebSocket", "Docker", "Jenkins"],
    highlights: [
      "Microservices architecture",
      "Real-time chat with WebSocket",
      "CI/CD with Jenkins & Docker",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// projects"}</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            Featured Work<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-surface p-6 md:p-8 hover:border-glow transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-mono font-bold gradient-text">{project.title}</h3>
                    <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-primary">{project.period}</p>
                  <p className="text-xs text-muted-foreground mt-1">{project.role}</p>
                </div>
              </div>

              <p className="text-secondary-foreground leading-relaxed mb-6 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-mono bg-secondary text-primary rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {project.highlights.length > 0 && (
                <div className="border-t border-border pt-4">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.highlights.map((h) => (
                      <span key={h} className="text-xs text-muted-foreground">{h}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
