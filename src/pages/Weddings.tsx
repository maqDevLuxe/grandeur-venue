import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import weddingImg from "@/assets/wedding-setup.jpg";
import venueGarden from "@/assets/venue-garden.jpg";
import BookingCTA from "@/components/sections/BookingCTA";
import { Heart, Flower2, Music, Camera } from "lucide-react";

const services = [
  { icon: Heart, title: "Ceremony Design", desc: "Bespoke ceremony spaces from intimate chapels to grand ballrooms" },
  { icon: Flower2, title: "Floral Artistry", desc: "World-renowned floral designers creating breathtaking arrangements" },
  { icon: Music, title: "Entertainment", desc: "From orchestras to DJs, curated entertainment for every moment" },
  { icon: Camera, title: "Photography & Film", desc: "Award-winning photographers and cinematographers" },
];

const WeddingsPage = () => (
  <SmoothScroll>
    <CustomCursor />
    <Navbar />
    <main>
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 6 }} className="absolute inset-0">
          <img src={weddingImg} alt="Luxury wedding" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 flex items-end pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">Weddings</p>
            <h1 className="font-display text-4xl md:text-7xl text-foreground">Your Forever <span className="italic text-champagne">Begins</span></h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i }} className="glass-card p-8 hover-lift group">
              <div className="w-14 h-14 border border-champagne/20 flex items-center justify-center mb-6 group-hover:border-champagne/40 transition-colors">
                <s.icon className="w-6 h-6 text-champagne" />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="font-body text-sm text-ivory-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">The Experience</p>
            <h2 className="font-display text-3xl md:text-5xl mb-8 text-foreground">Every Detail, Perfected</h2>
            <p className="font-body text-sm text-ivory-muted leading-relaxed mb-6">
              From the first consultation to the final dance, our dedicated wedding team ensures every moment is crafted with precision and passion. We believe your wedding should be as unique as your love story.
            </p>
            <p className="font-body text-sm text-ivory-muted leading-relaxed">
              With access to the world's most stunning venues, Michelin-starred catering, and a network of elite artisans, we transform your vision into an unforgettable celebration.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <img src={venueGarden} alt="Garden wedding" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 border border-champagne/10" />
          </div>
        </div>
      </section>
      <BookingCTA />
    </main>
    <Footer />
  </SmoothScroll>
);

export default WeddingsPage;
