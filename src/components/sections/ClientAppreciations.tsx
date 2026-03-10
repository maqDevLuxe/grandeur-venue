import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Victoria Ashworth", role: "Bride, London Wedding", quote: "Grandeur transformed our wedding into something beyond our wildest dreams. Every detail was immaculate, every moment magical." },
  { name: "James Harrington III", role: "CEO, Harrington Capital", quote: "The corporate gala exceeded all expectations. Our 500 guests were captivated from the first moment to the last." },
  { name: "Countess Isabella de Medici", role: "Private Gala, Florence", quote: "No other venue company understands true luxury the way Grandeur does. They don't just host events—they create legacies." },
];

const ClientAppreciations = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">
            Testimonials
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="font-display text-3xl md:text-5xl text-foreground">
            Client Appreciations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * i }}
              className="glass-card p-10 hover-lift"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-champagne text-champagne" />
                ))}
              </div>
              <p className="font-body text-sm text-ivory-muted leading-relaxed mb-8 italic">"{t.quote}"</p>
              <div>
                <p className="font-display text-lg text-foreground">{t.name}</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-champagne mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientAppreciations;
