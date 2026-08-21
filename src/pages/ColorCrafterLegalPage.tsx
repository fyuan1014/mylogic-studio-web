import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ColorCrafterLegalPage: React.FC = () => {
  useEffect(() => { document.title = 'ColorCrafter Legal | MyLogix Studio'; }, []);
  return <div className="legal-page"><section className="legal-hero"><div className="legal-shell"><p className="eyebrow">ColorCrafter</p><h1>ColorCrafter App Legal Documents</h1><p>Access important legal information about the ColorCrafter app.</p></div></section><section className="legal-overview"><div className="legal-shell"><div className="legal-about"><div><h2>About ColorCrafter</h2><p>ColorCrafter is an iOS application that lets people create paint-by-number artwork from their own images, including photographs of loved ones, pets, or memorable places.</p><p>The app transforms photos into paint-by-number templates that can be printed and colored by hand or explored digitally.</p></div><div className="legal-product-mark" aria-hidden="true">CC</div></div><p>Review these documents to understand how we handle data and the terms governing use of ColorCrafter.</p><div className="legal-card-grid"><Link className="legal-doc-card" to="/colorcrafter/privacy-policy"><span>Privacy</span><h3>Privacy Policy</h3><p>Information about how data is handled when you use ColorCrafter.</p></Link><Link className="legal-doc-card" to="/colorcrafter/terms-of-service"><span>Terms</span><h3>Terms of Service</h3><p>Terms and conditions governing use of the app and its services.</p></Link></div></div></section></div>;
};

export default ColorCrafterLegalPage;
