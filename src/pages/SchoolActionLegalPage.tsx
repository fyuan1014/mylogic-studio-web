import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SchoolActionLegalPage: React.FC = () => {
  useEffect(() => {
    document.title = 'SchoolAction Legal | MyLogix Studio';
    document.documentElement.lang = 'en';
  }, []);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-shell">
          <p className="eyebrow">SchoolAction</p>
          <h1>SchoolAction App Legal Documents</h1>
          <p>Privacy and service terms for the AI-assisted school-notice action planner.</p>
        </div>
      </section>
      <section className="legal-overview">
        <div className="legal-shell">
          <div className="legal-about">
            <div>
              <h2>About SchoolAction</h2>
              <p>SchoolAction helps adult caregivers turn one school notice into a source-grounded action plan, translation, reply draft, calendar suggestion, and reminder.</p>
              <p>AI can miss details. Families remain responsible for checking every date, amount, requirement, and recipient against the original notice or with the school.</p>
            </div>
            <div className="legal-product-mark" aria-hidden="true">SA</div>
          </div>
          <p>Review the documents in English, Simplified Chinese, or Spanish.</p>
          <div className="legal-card-grid">
            <Link className="legal-doc-card" to="/schoolaction/en/privacy-policy">
              <span>Privacy · 隐私 · Privacidad</span>
              <h3>Privacy Policy</h3>
              <p>How notices, AI processing, local history, product events, and purchases are handled.</p>
            </Link>
            <Link className="legal-doc-card" to="/schoolaction/en/terms-of-service">
              <span>Terms · 条款 · Términos</span>
              <h3>Terms of Service</h3>
              <p>Rules, purchase terms, AI limitations, and the requirement to verify the original notice.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolActionLegalPage;
