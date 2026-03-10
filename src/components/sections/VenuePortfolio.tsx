import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import venueCastle from "@/assets/venue-castle.jpg";
import venueRooftop from "@/assets/venue-rooftop.jpg";
import venueGarden from "@/assets/venue-garden.jpg";
import heroBallroom from "@/assets/hero-ballroom.jpg";

const venues = [
  { name: "The Royal Ballroom", location: "London, UK", capacity: "800 guests", image: heroBallroom },
  { name: "Castle Montefiore", location: "Tuscany, Italy", capacity: "400 guests", image: venueCastle },
  { name: "Skyline Terrace", location: "New York, USA", capacity: "300 guests", image: venueRooftop },
  { name: "Jardin du Château", location: "Paris, France", capacity: "600 guests", image: venueGarden },
];

const VenuePortfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4"
        >
          Our Collection
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-display text-3xl md:text-5xl mb-16 text-foreground"
        >
          The Venue Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {venues.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className="relative group overflow-hidden cursor-pointer"
              style={{ height: hovered === i ? "500px" : "350px", transition: "height 0.6s cubic-bezier(0.4,0,0.2,1)" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={v.image}
                alt={v.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass-card p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-champagne mb-2">{v.location}</p>
                  <h3 className="font-display text-2xl mb-2 text-foreground">{v.name}</h3>
                  <p className="font-body text-sm text-ivory-muted">{v.capacity}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenuePortfolio;
