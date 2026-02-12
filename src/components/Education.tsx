import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// education"}</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            Education<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-surface p-8 max-w-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <GraduationCap size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-mono text-lg font-bold text-foreground">
                Kasetsart University Sriracha Campus
              </h3>
              <p className="text-primary text-sm font-medium mt-1">
                Digital Science and Technology
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Faculty of Science · 2023 – Present
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                <span className="text-xs text-muted-foreground font-mono">GPAX</span>
                <span className="text-lg font-mono font-bold text-primary">3.33</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
