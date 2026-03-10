import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, KeyRound, Eye, Lock } from "lucide-react";

const features = [
  { icon: Shield, title: "Executive Protection", desc: "Discreet, professional security teams trained for high-profile events" },
  { icon: KeyRound, title: "Exclusive Access Control", desc: "Multi-tier credential systems with biometric verification" },
  { icon: Eye, title: "24/7 Surveillance", desc: "State-of-the-art monitoring systems throughout all venues" },
  { icon: Lock, title: "Privacy Guaranteed", desc: "NDAs and strict protocols ensuring complete confidentiality" },
];

const VIPSecurity = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">
            Your Safety, Our Priority
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="font-display text-3xl md:text-5xl text-foreground">
            VIP Security & Access
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className="glass-card p-8 hover-lift group"
            >
              <div className="w-14 h-14 border border-champagne/20 flex items-center justify-center mb-6 group-hover:border-champagne/40 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-champagne" />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{f.title}</h3>
              <p className="font-body text-sm text-ivory-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VIPSecurity;
