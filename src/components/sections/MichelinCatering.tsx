import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import michelinImg from "@/assets/michelin-dining.jpg";
import { UtensilsCrossed, Wine, Leaf } from "lucide-react";

const features = [
  { icon: UtensilsCrossed, title: "Michelin Chefs", desc: "Award-winning chefs crafting bespoke menus for every palate" },
  { icon: Wine, title: "Sommelier Curated", desc: "Rare vintages and champagnes from the world's finest vineyards" },
  { icon: Leaf, title: "Seasonal & Local", desc: "Farm-to-table ingredients sourced from artisan producers" },
];

const MichelinCatering = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">Culinary Excellence</p>
          <h2 className="font-display text-3xl md:text-5xl mb-8 text-foreground">In-house Michelin Catering</h2>
          <p className="font-body text-sm text-ivory-muted leading-relaxed mb-12">
            Every event deserves cuisine that matches its grandeur. Our in-house culinary team, led by Michelin-starred chefs, creates extraordinary dining experiences tailored to your vision.
          </p>
          <div className="space-y-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="flex gap-5 items-start"
              >
                <div className="w-12 h-12 border border-champagne/20 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-champagne" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-1 text-foreground">{f.title}</h3>
                  <p className="font-body text-sm text-ivory-muted">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img src={michelinImg} alt="Michelin dining" className="w-full h-[600px] object-cover" />
          <div className="absolute inset-0 border border-champagne/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default MichelinCatering;
