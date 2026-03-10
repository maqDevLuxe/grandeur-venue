import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  "Rothschild Events", "Maison Laurent", "The Belmont Group", 
  "Astoria Luxe", "Crown & Sceptre", "Veritas Occasions"
];

const ElitePlanners = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4"
        >
          Trusted By The World's Finest
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-display text-3xl md:text-4xl mb-16 text-foreground"
        >
          Elite Event Partners
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="font-display text-lg text-ivory-muted/60 hover:text-champagne transition-colors duration-300 py-4"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElitePlanners;
