import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import weddingImg from "@/assets/wedding-setup.jpg";
import magicalImg from "@/assets/magical-event.jpg";

const GalaWedding = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl md:text-5xl text-foreground"
          >
            Gala & Wedding Excellence
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden group"
          >
            <img src={weddingImg} alt="Luxury wedding setup" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-[0.97]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-display text-3xl mb-3 text-foreground">Dream Weddings</h3>
              <p className="font-body text-sm text-ivory-muted leading-relaxed">
                From intimate ceremonies to grand celebrations, every detail orchestrated to perfection with bespoke floral design, lighting, and coordination.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden group"
          >
            <img src={magicalImg} alt="Luxury gala event" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-[0.97]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-display text-3xl mb-3 text-foreground">Black-Tie Galas</h3>
              <p className="font-body text-sm text-ivory-muted leading-relaxed">
                Spectacular galas with world-class entertainment, Michelin-caliber dining, and immersive atmospheres that leave guests in awe.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GalaWedding;
