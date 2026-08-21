import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="site-shell footer-grid">
      <Link className="brand brand-footer" to="/" aria-label="MyLogix Studio home">
        <img className="brand-mark" src="/logo192.png" width="40" height="40" loading="lazy" alt="" />
        <span className="brand-name"><span>MyLogix</span> Studio</span>
      </Link>
      <p>Websites, apps, and data solutions shaped around real business opportunities.</p>
      <nav aria-label="Footer navigation">
        <Link to="/#services">Services</Link>
        <Link to="/products">Products</Link>
        <Link to="/#contact">Contact</Link>
        <Link to="/privacy_policy">Legal</Link>
      </nav>
      <div className="footer-legal">
        <Link to="/colorcrafter/legal">ColorCrafter Legal</Link>
        <Link to="/narrativeflow/legal">NarrativeFlow Legal</Link>
      </div>
      <p className="copyright">© 2026 MyLogix Studio LLC. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
