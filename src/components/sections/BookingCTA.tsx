import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CalendarDays } from "lucide-react";

const BookingCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="booking" ref={ref} className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
          <CalendarDays className="w-12 h-12 text-champagne mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl mb-6 text-foreground">Check Venue Availability</h2>
          <p className="font-body text-sm text-ivory-muted max-w-xl mx-auto mb-12 leading-relaxed">
            Begin your journey towards an unforgettable event. Our concierge team will curate a bespoke venue selection tailored to your vision.
          </p>

          <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-champagne block mb-3 text-left">Your Name</label>
                <input type="text" placeholder="Enter your name" className="w-full bg-muted/50 border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-champagne/40 outline-none transition-colors" />
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-champagne block mb-3 text-left">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full bg-muted/50 border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-champagne/40 outline-none transition-colors" />
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-champagne block mb-3 text-left">Event Date</label>
                <input type="date" className="w-full bg-muted/50 border border-border px-4 py-3 font-body text-sm text-foreground focus:border-champagne/40 outline-none transition-colors" />
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-champagne block mb-3 text-left">Guest Count</label>
                <input type="number" placeholder="Number of guests" className="w-full bg-muted/50 border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-champagne/40 outline-none transition-colors" />
              </div>
            </div>
            <button className="w-full font-body text-xs tracking-[0.2em] uppercase py-4 bg-champagne text-background hover:bg-champagne-light transition-all duration-300">
              Check Availability
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTA;
