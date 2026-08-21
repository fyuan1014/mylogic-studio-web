import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NarrativeFlowLegalPage: React.FC = () => {
  useEffect(() => { document.title = 'NarrativeFlow Legal | MyLogix Studio'; }, []);
  return <div className="legal-page"><section className="legal-hero"><div className="legal-shell"><p className="eyebrow">NarrativeFlow</p><h1>NarrativeFlow App Legal Documents</h1><p>Access important legal information about the NarrativeFlow app.</p></div></section><section className="legal-overview"><div className="legal-shell"><div className="legal-about"><div><h2>About NarrativeFlow</h2><p>NarrativeFlow combines AI-assisted image creation and editing, multilingual voice synthesis, and scene compilation in one creative workflow.</p><p>It supports creators, educators, and businesses that need to move from an initial visual concept to narrated video content.</p></div><div className="legal-product-mark" aria-hidden="true">NF</div></div><p>Review these documents to understand how we handle data and the terms governing use of NarrativeFlow.</p><div className="legal-card-grid"><Link className="legal-doc-card" to="/narrativeflow/privacy-policy"><span>Privacy</span><h3>Privacy Policy</h3><p>Information about how data is handled when you use NarrativeFlow.</p></Link><Link className="legal-doc-card" to="/narrativeflow/terms-of-service"><span>Terms</span><h3>Terms of Service</h3><p>Terms and conditions governing use of the app and its services.</p></Link></div></div></section></div>;
};

export default NarrativeFlowLegalPage;
