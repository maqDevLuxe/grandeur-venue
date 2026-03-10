import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import corporateImg from "@/assets/corporate-event.jpg";
import BookingCTA from "@/components/sections/BookingCTA";
import { Presentation, Users, Globe, Award } from "lucide-react";

const capabilities = [
  { icon: Presentation, title: "Conferences & Summits", desc: "State-of-the-art AV, staging, and breakout rooms for up to 5,000 attendees" },
  { icon: Users, title: "Team Retreats", desc: "Exclusive venues for leadership offsites and team-building experiences" },
  { icon: Globe, title: "Product Launches", desc: "Dramatic reveal spaces with immersive technology and brand integration" },
  { icon: Award, title: "Awards Galas", desc: "Black-tie venues with red carpet arrivals and celebrity-grade production" },
];

const CorporatePage = () => (
  <SmoothScroll>
    <CustomCursor />
    <Navbar />
    <main>
      <section className="relative h-[70vh] overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 6 }} className="absolute inset-0">
          <img src={corporateImg} alt="Corporate event" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 flex items-end pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-4">Corporate Events</p>
            <h1 className="font-display text-4xl md:text-7xl text-foreground">Elevate Your <span className="italic text-champagne">Brand</span></h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i }} className="glass-card p-8 hover-lift group">
              <div className="w-14 h-14 border border-champagne/20 flex items-center justify-center mb-6 group-hover:border-champagne/40 transition-colors">
                <c.icon className="w-6 h-6 text-champagne" />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{c.title}</h3>
              <p className="font-body text-sm text-ivory-muted leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding border-y border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl mb-6 text-foreground">Trusted by Fortune 500</h2>
          <p className="font-body text-sm text-ivory-muted max-w-xl mx-auto leading-relaxed mb-16">
            The world's most prestigious companies choose Grandeur for events that reflect their stature and ambition.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[{ v: "500+", l: "Corporate Events" }, { v: "200+", l: "Global Brands" }, { v: "50+", l: "Countries Served" }, { v: "100%", l: "Repeat Clients" }].map((m, i) => (
              <motion.div key={m.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 * i }}>
                <p className="font-display text-4xl md:text-5xl text-champagne mb-2">{m.v}</p>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-ivory-muted">{m.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </main>
    <Footer />
  </SmoothScroll>
);

export default CorporatePage;
