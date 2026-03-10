import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import venueCastle from "@/assets/venue-castle.jpg";
import venueRooftop from "@/assets/venue-rooftop.jpg";
import venueGarden from "@/assets/venue-garden.jpg";
import heroBallroom from "@/assets/hero-ballroom.jpg";
import BookingCTA from "@/components/sections/BookingCTA";

const venues = [
  { name: "The Royal Ballroom", location: "London, UK", capacity: "800", sqft: "15,000", image: heroBallroom, features: ["Crystal Chandeliers", "Marble Flooring", "Grand Staircase"] },
  { name: "Castle Montefiore", location: "Tuscany, Italy", capacity: "400", sqft: "22,000", image: venueCastle, features: ["Historic Architecture", "Vineyard Views", "Private Chapel"] },
  { name: "Skyline Terrace", location: "New York, USA", capacity: "300", sqft: "8,000", image: venueRooftop, features: ["360° City Views", "Retractable Roof", "Helipad Access"] },
  { name: "Jardin du Château", location: "Paris, France", capacity: "600", sqft: "30,000", image: venueGarden, features: ["Formal Gardens", "Orangery", "Fountain Court"] },
];

const VenuesPage = () => (
  <SmoothScroll>
    <CustomCursor />
    <Navbar />
    <main>
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">Our Venues</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl md:text-6xl text-foreground mb-6">
            Extraordinary Spaces
          </motion.h1>
          <p className="font-body text-sm text-ivory-muted max-w-xl leading-relaxed">
            Each venue in our portfolio has been personally curated for its architectural distinction, historical significance, and capacity to inspire wonder.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto space-y-16">
          {venues.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className={`relative overflow-hidden group ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={v.image} alt={v.name} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 border border-champagne/10" />
              </div>
              <div className="py-8">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-champagne mb-3">{v.location}</p>
                <h2 className="font-display text-3xl md:text-4xl mb-4 text-foreground">{v.name}</h2>
                <div className="flex gap-8 mb-6">
                  <div><p className="font-display text-2xl text-champagne">{v.capacity}</p><p className="font-body text-xs text-ivory-muted uppercase tracking-wider">Guests</p></div>
                  <div><p className="font-display text-2xl text-champagne">{v.sqft}</p><p className="font-body text-xs text-ivory-muted uppercase tracking-wider">Sq. Ft.</p></div>
                </div>
                <div className="flex flex-wrap gap-3 mb-8">
                  {v.features.map(f => (
                    <span key={f} className="font-body text-xs tracking-wider px-4 py-2 border border-champagne/20 text-ivory-muted">{f}</span>
                  ))}
                </div>
                <a href="#booking" className="font-body text-xs tracking-[0.2em] uppercase px-8 py-3 bg-champagne text-background hover:bg-champagne-light transition-all duration-300 inline-block">
                  Inquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <BookingCTA />
    </main>
    <Footer />
  </SmoothScroll>
);

export default VenuesPage;
