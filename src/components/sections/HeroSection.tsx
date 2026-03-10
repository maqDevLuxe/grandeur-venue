import { motion } from "framer-motion";
import heroBg from "@/assets/hero-ballroom.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img src={heroBg} alt="Grand luxury ballroom" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-6">
            Where Grandeur Meets Occasion
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 max-w-3xl text-foreground">
            Venues That
            <br />
            <span className="italic text-champagne">Transcend</span>
            <br />
            Expectation
          </h1>
          <p className="font-body text-sm md:text-base text-ivory-muted max-w-lg mb-10 leading-relaxed">
            Curating the world's most extraordinary spaces for events that redefine magnificence.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#booking" className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 bg-champagne text-background hover:bg-champagne-light transition-all duration-300">
              Explore Venues
            </a>
            <a href="#portfolio" className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 border border-champagne/30 text-champagne hover:bg-champagne/10 transition-all duration-300">
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
