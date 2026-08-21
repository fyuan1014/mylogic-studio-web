import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LegalHubPage: React.FC = () => {
  useEffect(() => { document.title = 'Privacy & Legal | MyLogix Studio'; }, []);
  return <div className="legal-page">
    <section className="legal-hero"><div className="legal-shell"><p className="eyebrow">Privacy & Legal</p><h1>Product-specific policies, kept clear and separate.</h1><p>ColorCrafter and NarrativeFlow process different kinds of content and use different services. Review the legal documents for the product you use.</p></div></section>
    <section className="legal-directory"><div className="legal-shell legal-card-grid">
      <article className="legal-product-card"><span>Product 01</span><h2>ColorCrafter</h2><p>Legal information for the paint-by-number application and its image-processing services.</p><div className="legal-card-links"><Link to="/colorcrafter/privacy-policy">Privacy Policy</Link><Link to="/colorcrafter/terms-of-service">Terms of Service</Link><Link to="/colorcrafter/legal">Legal Overview</Link></div></article>
      <article className="legal-product-card"><span>Product 02</span><h2>NarrativeFlow</h2><p>Legal information for AI-assisted image, narration, and video-generation services.</p><div className="legal-card-links"><Link to="/narrativeflow/privacy-policy">Privacy Policy</Link><Link to="/narrativeflow/terms-of-service">Terms of Service</Link><Link to="/narrativeflow/legal">Legal Overview</Link></div></article>
    </div></section>
    <section className="web-privacy-notice" aria-labelledby="website-privacy-title"><div className="legal-shell legal-copy"><p className="eyebrow">Website Privacy</p><h2 id="website-privacy-title">MyLogix Studio Website Privacy Notice</h2><p className="legal-updated">Last updated: August 20, 2026</p><p>This public website does not provide user accounts, login, registration, or photo-upload features. Visiting the site does not require you to submit personal information.</p><h2>Information You Choose to Share</h2><p>If you contact MyLogix Studio by email, we receive the information you include so we can respond to your inquiry and maintain ordinary business correspondence.</p><h2>Hosting and Technical Information</h2><p>The website is delivered through third-party hosting infrastructure. The hosting provider may process basic technical request information, such as IP address, browser type, requested pages, and timestamps, for security, reliability, and abuse prevention.</p><h2>Product Policies</h2><p>The ColorCrafter and NarrativeFlow apps have separate privacy practices. Use the product links above for the policy that applies to you.</p><h2>Contact</h2><address><strong>MyLogix Studio LLC</strong><br />Clinton, MA 01510<br />Email: <a href="mailto:mls@mylogicstudio.com">mls@mylogicstudio.com</a></address></div></section>
  </div>;
};

export default LegalHubPage;
