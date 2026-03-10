import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import weddingImg from "@/assets/wedding-setup.jpg";
import venueGarden from "@/assets/venue-garden.jpg";
import venueCastle from "@/assets/venue-castle.jpg";
import venueRooftop from "@/assets/venue-rooftop.jpg";

const inspirations = [
  { image: weddingImg, title: "Classic Elegance", style: "Timeless grandeur" },
  { image: venueGarden, title: "Garden Romance", style: "Natural beauty" },
  { image: venueCastle, title: "Gothic Majesty", style: "Historic drama" },
  { image: venueRooftop, title: "Modern Luxe", style: "Contemporary chic" },
];

const DesignInspiration = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}} className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">
            Aesthetics
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="font-display text-3xl md:text-5xl text-foreground">
            Event Design Inspiration
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {inspirations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="relative group overflow-hidden cursor-pointer aspect-[3/4]"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-champagne mb-1">{item.style}</p>
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignInspiration;
