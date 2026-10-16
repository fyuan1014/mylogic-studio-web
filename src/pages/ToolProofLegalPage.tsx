import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ToolProofLegalPage: React.FC = () => {
  useEffect(() => { document.title = 'ToolProof Legal | MyLogix Studio'; }, []);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-shell">
          <p className="eyebrow">ToolProof</p>
          <h1>ToolProof App Legal Documents</h1>
          <p>Privacy and service terms for the seller-focused tool identification, pricing, and listing assistant.</p>
        </div>
      </section>
      <section className="legal-overview">
        <div className="legal-shell">
          <div className="legal-about">
            <div>
              <h2>About ToolProof</h2>
              <p>ToolProof helps sellers document used tools, identify supported models, review market evidence, estimate pricing, and prepare editable listing content.</p>
              <p>ToolProof is decision-support software. Sellers remain responsible for verifying identity, ownership, condition, safety, included components, and listing accuracy.</p>
            </div>
            <div className="legal-product-mark" aria-hidden="true">TP</div>
          </div>
          <p>Review these documents to understand how ToolProof handles evidence and the terms governing use of the App.</p>
          <div className="legal-card-grid">
            <Link className="legal-doc-card" to="/toolproof/privacy-policy">
              <span>Privacy</span>
              <h3>Privacy Policy</h3>
              <p>How account data, tool photos, OCR, analysis results, and purchase records are handled.</p>
            </Link>
            <Link className="legal-doc-card" to="/toolproof/terms-of-service">
              <span>Terms</span>
              <h3>Terms of Service</h3>
              <p>Rules and limitations for ToolProof identification, pricing, listing, and purchase features.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolProofLegalPage;
