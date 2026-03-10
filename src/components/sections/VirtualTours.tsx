import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play, Maximize2 } from "lucide-react";
import heroBallroom from "@/assets/hero-ballroom.jpg";

const VirtualTours = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">
            Immersive Experience
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="font-display text-3xl md:text-5xl text-foreground">
            Virtual Venue Tours
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative group cursor-pointer overflow-hidden"
        >
          <img src={heroBallroom} alt="Virtual tour preview" className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-champagne flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-background/30 backdrop-blur-sm">
              <Play className="w-8 h-8 text-champagne ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 right-6 glass-card p-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Maximize2 className="w-4 h-4 text-champagne" />
            <span className="font-body text-xs text-ivory-muted">360° Tour Available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualTours;
