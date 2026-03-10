import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl tracking-wider gold-gradient-text">GRANDEUR</Link>
            <p className="font-body text-sm text-ivory-muted mt-4 leading-relaxed max-w-sm">
              Curating the world's most extraordinary venues for events that transcend expectation. Where architectural grandeur meets impeccable service.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-champagne mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["Home", "Venues", "Weddings", "Corporate"].map(l => (
                <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="font-body text-sm text-ivory-muted hover:text-champagne transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-champagne mb-6">Contact</h4>
            <div className="flex flex-col gap-3 font-body text-sm text-ivory-muted">
              <p>concierge@grandeur.com</p>
              <p>+44 (0) 20 7946 0958</p>
              <p>Mayfair, London W1K</p>
            </div>
          </div>
        </div>
        <div className="luxury-divider mb-8" />
        <p className="font-body text-xs text-muted-foreground text-center tracking-wider">
          © 2026 Grandeur. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
