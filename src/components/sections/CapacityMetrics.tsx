import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const metrics = [
  { value: "50+", label: "Exclusive Venues" },
  { value: "12", label: "Countries" },
  { value: "5,000", label: "Max Capacity" },
  { value: "24/7", label: "Concierge Service" },
];

const CapacityMetrics = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className="text-center"
            >
              <p className="font-display text-5xl md:text-6xl text-champagne mb-3">{m.value}</p>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-ivory-muted">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapacityMetrics;
