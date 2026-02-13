import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

import img1 from "../img/activity/EEC Hakathon 2026.JPG";
import img2 from "../img/activity/Innovation 2025.JPG";
import img3 from "../img/activity/Innovation Award 2025.JPG";
import img4 from "../img/activity/Smart Sign.JPG";

const activities = [
  {
    src: img1,
    title: "EEC Hackathon 2025",
    description: "Top Star for Health & Well-being Award + Presentation Award",
  },
  {
    src: img3,
    title: "Innovation Award 2025",
    description: "1st Place Winner – Undergraduate Level",
  },
  {
    src: img2,
    title: "Innovation 2025",
    description: "Showcasing innovation projects at university level",
  },
  {
    src: img4,
    title: "Smart Sign Project",
    description: "AI-powered Thai Sign Language translation system",
  },
];

const Activity = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? activities.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === activities.length - 1 ? 0 : c + 1));

  return (
    <section id="activity" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header – matches Awards/Projects style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">
            {"// activity"}
          </p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            Activities<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-surface p-2 md:p-4 hover:border-glow transition-all duration-300"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg aspect-video bg-secondary group">
            <img
              src={activities[current].src}
              alt={activities[current].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="font-mono text-sm md:text-base font-semibold text-white mb-1">
                {activities[current].title}
              </h3>
              <p className="text-white/70 text-xs md:text-sm">
                {activities[current].description}
              </p>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:border-glow hover:text-primary transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:border-glow hover:text-primary transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>

            {/* Image counter badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-background/80 border border-border rounded-full px-3 py-1">
              <Camera size={12} className="text-primary" />
              <span className="font-mono text-xs text-foreground">
                {current + 1}/{activities.length}
              </span>
            </div>
          </div>

          {/* Thumbnail dots */}
          <div className="flex items-center justify-center gap-2 mt-4 pb-2">
            {activities.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activity;
