import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/venues", label: "Venues" },
  { to: "/weddings", label: "Weddings" },
  { to: "/corporate", label: "Corporate" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl tracking-wider gold-gradient-text">
          GRANDEUR
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                location.pathname === l.to ? "text-champagne" : "text-ivory-muted hover:text-champagne"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#booking"
            className="font-body text-xs tracking-[0.2em] uppercase px-6 py-2.5 border border-champagne/30 text-champagne hover:bg-champagne hover:text-background transition-all duration-300"
          >
            Book a Venue
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-champagne">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-navbar border-t border-champagne/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm tracking-[0.2em] uppercase text-ivory-muted hover:text-champagne transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
