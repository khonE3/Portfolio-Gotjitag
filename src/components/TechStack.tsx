import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Languages",
    icon: "💻",
    items: ["JavaScript", "TypeScript", "Golang", "Java", "C", "Python"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    items: ["Next.js", "Nuxt.js", "React", "Vue", "React Native", "Tailwind CSS", "DaisyUI", "Vite"],
  },
  {
    title: "Backend & Runtime",
    icon: "⚙️",
    items: ["Fiber", "Gin", "FastAPI", "Node.js", "Express.js", "Bun", "uv"],
  },
  {
    title: "AI / LLM",
    icon: "🤖",
    items: ["MCP", "LangChain", "RAG", "LLM Apps"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & BaaS",
    icon: "☁️",
    items: ["AWS", "Firebase", "Supabase"],
  },
  {
    title: "DevOps & CI/CD",
    icon: "🔧",
    items: ["Docker", "Kubernetes", "Git", "GitHub Actions", "Jenkins", "Playwright", "n8n"],
  },
  {
    title: "Tools",
    icon: "🛠️",
    items: ["VS Code", "DBeaver", "Figma", "FileZilla", "Postman"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const TechStack = () => {
  return (
    <section id="techstack" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// tech_stack"}</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            Technologies<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {techCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="card-surface p-5 hover:border-glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{cat.icon}</span>
                <h3 className="font-mono text-sm font-semibold text-primary">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
