import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// contact"}</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            Get In Touch<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { icon: Mail, label: "Email", value: "gotgothot.99@gmail.com", href: "mailto:gotgothot.99@gmail.com" },
            { icon: Phone, label: "Phone", value: "062-739-5866", href: "tel:+66627395866" },
            { icon: Github, label: "GitHub", value: "Khone3", href: "https://github.com/Khone3" },
            { icon: Linkedin, label: "LinkedIn", value: "Thanakrit T.", href: "https://www.linkedin.com/in/thanakrit-thuakthao-73829a284/" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="card-surface p-5 hover:border-glow transition-all duration-300 group block"
            >
              <item.icon size={18} className="text-primary mb-3 group-hover:text-glow transition-colors" />
              <p className="font-mono text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm text-foreground group-hover:text-primary transition-colors truncate">{item.value}</p>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center gap-2 text-muted-foreground text-sm"
        >
          <MapPin size={14} />
          <span>Chonburi, Thailand</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
