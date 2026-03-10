import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const counters = [
  { target: 2847, label: "Events Hosted", suffix: "+" },
  { target: 156, label: "Wedding Celebrations", suffix: "" },
  { target: 98, label: "Client Satisfaction", suffix: "%" },
  { target: 42, label: "Industry Awards", suffix: "" },
];

const AnimatedCounter = ({ target, suffix, start }: { target: number; suffix: string; start: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let current = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, 30);
    return () => clearInterval(interval);
  }, [start, target]);
  return <>{count.toLocaleString()}{suffix}</>;
};

const EventCounters = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">
          Our Legacy
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="font-display text-3xl md:text-5xl mb-16 text-foreground">
          Unforgettable Events Hosted
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
            >
              <p className="font-display text-5xl md:text-6xl text-champagne mb-3">
                <AnimatedCounter target={c.target} suffix={c.suffix} start={isVisible} />
              </p>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-ivory-muted">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCounters;
