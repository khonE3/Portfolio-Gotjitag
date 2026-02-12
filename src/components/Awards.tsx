import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const awards = [
  {
    title: "National Software Contest (NSC) 2025",
    result: "1st Place Winner – Eastern Region",
    project: "Smart Sign – Health, Disability & Elderly Category",
    note: "Qualified for National Final Round",
    icon: Trophy,
  },
  {
    title: "EEC Hackathon 2025",
    result: "Top Star for Health & Well-being Award + Presentation Award",
    project: "Smart Sign Project",
    note: "Prize: 13,000 THB",
    icon: Trophy,
  },
  {
    title: "Innovation Award 2025",
    result: "1st Place Winner – Undergraduate Level",
    project: "Kasetsart University Kamphaeng Saen Campus",
    note: "Prize: 12,000 THB",
    icon: Trophy,
  },
  {
    title: "Entrepreneurship & Startup Camp #2",
    result: "Participant",
    project: "2-day startup project competition",
    note: "",
    icon: Award,
  },
  {
    title: "Barcamp Bangsaen #3",
    result: "Attendee",
    project: "Software testing & AI technologies conference",
    note: "",
    icon: Award,
  },
];

const Awards = () => {
  return (
    <section id="awards" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// awards"}</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            Awards & Activities<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-surface p-5 hover:border-glow transition-all duration-300"
            >
              <award.icon size={20} className="text-primary mb-3" />
              <h3 className="font-mono text-sm font-semibold text-foreground mb-1">{award.title}</h3>
              <p className="text-primary text-xs font-semibold mb-2">{award.result}</p>
              <p className="text-muted-foreground text-xs">{award.project}</p>
              {award.note && <p className="text-muted-foreground text-xs mt-1 italic">{award.note}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
