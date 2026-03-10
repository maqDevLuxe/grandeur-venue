import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import magicalEvent from "@/assets/magical-event.jpg";

const FullWidthEvent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={magicalEvent} alt="Magical event setup" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">Creating Magic</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl italic text-foreground">
            Where Dreams Take Form
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FullWidthEvent;
