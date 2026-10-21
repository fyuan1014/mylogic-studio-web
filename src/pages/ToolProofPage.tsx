import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const flow = [
  ['Photograph the evidence', 'Start with the tool, its label, included items, and visible wear. ToolProof asks only for the next photo that improves the listing.'],
  ['Review what is known', 'Catalogue matches stay separate from seller-provided and AI-generated identities. Unverified model claims remain visibly unverified.'],
  ['Finish the listing', 'Confirm condition and testing, edit the draft, then copy or share platform-ready text and ordered photos.'],
];

const ToolProofPage: React.FC = () => {
  useEffect(() => { document.title = 'ToolProof | Used-tool listing assistant'; }, []);

  return (
    <div className="toolproof-page">
      <section className="toolproof-hero" aria-labelledby="toolproof-title">
        <div className="site-shell toolproof-hero-grid">
          <div className="toolproof-hero-copy">
            <p className="toolproof-kicker">ToolProof · iPhone seller workspace</p>
            <h1 id="toolproof-title">Turn tool photos into a listing you can defend.</h1>
            <p className="toolproof-lede">Identify visible markings, document condition, review price evidence, and prepare an editable listing for eBay, Facebook Marketplace, or Craigslist.</p>
            <div className="button-row">
              <a className="button toolproof-primary" href="mailto:mls@mylogicstudio.com?subject=ToolProof%20review">Request review access</a>
              <a className="text-link" href="#toolproof-flow">See the seller flow</a>
            </div>
            <p className="toolproof-scope">Seller listing assistance—not authentication, appraisal, safety certification, or a promise that an item will sell.</p>
          </div>

          <div className="toolproof-workcard" aria-label="Representative ToolProof listing result">
            <div className="toolproof-card-rail"><span>Evidence track</span><strong>3 / 3</strong></div>
            <div className="toolproof-tool-heading">
              <div><small>Your listing</small><strong>Impact driver</strong></div>
              <span className="toolproof-stamp">AI draft · review</span>
            </div>
            <p className="toolproof-observation">Visible brand and category supported. Exact model still needs a readable nameplate.</p>
            <div className="toolproof-price-row">
              <span>Price evidence</span>
              <strong>Current asking prices</strong>
              <small>Not completed sales</small>
            </div>
            <div className="toolproof-finish-row"><span>Finish listing</span><strong>2 details left →</strong></div>
          </div>
        </div>
      </section>

      <section className="toolproof-proofbar" aria-label="ToolProof trust principles">
        <div className="site-shell">
          <span>Evidence before claims</span><span>Seller edits stay in control</span><span>Publication is provider-confirmed</span>
        </div>
      </section>

      <section className="toolproof-section" id="toolproof-flow" aria-labelledby="toolproof-flow-title">
        <div className="site-shell">
          <div className="toolproof-section-heading">
            <p className="toolproof-kicker">Photo → review → listing</p>
            <h2 id="toolproof-flow-title">A short workflow with visible limits.</h2>
            <p>The app stays useful when a model is outside the reviewed catalogue, but it does not quietly turn an AI guess into a verified identity.</p>
          </div>
          <ol className="toolproof-flow-list">
            {flow.map(([title, description], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="toolproof-section toolproof-evidence-section" aria-labelledby="toolproof-trust-title">
        <div className="site-shell toolproof-evidence-grid">
          <div>
            <p className="toolproof-kicker">Identity provenance</p>
            <h2 id="toolproof-trust-title">Useful without pretending certainty.</h2>
            <p>Every result carries one evidence state. Seller corrections improve the listing but do not promote an unverified model into the reviewed catalogue.</p>
          </div>
          <div className="toolproof-stamp-stack">
            <div className="toolproof-trust-card verified"><span>Catalogue verified</span><p>Reviewed model evidence rules passed.</p></div>
            <div className="toolproof-trust-card seller"><span>Seller provided</span><p>The seller supplied or corrected the identity; model remains unverified.</p></div>
            <div className="toolproof-trust-card ai"><span>AI draft · review</span><p>Visible evidence supports a useful draft, not an exact-model guarantee.</p></div>
          </div>
        </div>
      </section>

      <section className="toolproof-section" aria-labelledby="toolproof-marketplaces-title">
        <div className="site-shell">
          <div className="toolproof-section-heading compact">
            <p className="toolproof-kicker">Marketplace handoff</p>
            <h2 id="toolproof-marketplaces-title">The action label matches what actually happens.</h2>
          </div>
          <div className="toolproof-table-wrap">
            <table className="toolproof-capability-table">
              <thead><tr><th>Destination</th><th>ToolProof prepares</th><th>Who publishes</th></tr></thead>
              <tbody>
                <tr><th>eBay</th><td data-label="ToolProof prepares">Editable text, ordered photos, copy/share and eBay handoff</td><td data-label="Who publishes">Seller finishes in eBay. Direct publishing remains gated until eBay approval.</td></tr>
                <tr><th>Facebook Marketplace</th><td data-label="ToolProof prepares">Platform-formatted draft, photos and persistent copy-text fallback</td><td data-label="Who publishes">Seller completes the listing in Facebook.</td></tr>
                <tr><th>Craigslist</th><td data-label="ToolProof prepares">Post text, ordered photos and browser/share handoff</td><td data-label="Who publishes">Seller completes the post in Craigslist.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="toolproof-affiliation">ToolProof is not affiliated with or endorsed by eBay, Facebook, or Craigslist.</p>
        </div>
      </section>

      <section className="toolproof-section toolproof-data-section" aria-labelledby="toolproof-data-title">
        <div className="site-shell toolproof-data-grid">
          <div><p className="toolproof-kicker">Data and pricing</p><h2 id="toolproof-data-title">Private evidence. Plain-language price limits.</h2></div>
          <div className="toolproof-data-list">
            <article><h3>Photos</h3><p>Tool photos are private and retained for a bounded period so the seller can finish the workflow. Account and inspection deletion controls are available in the app.</p></article>
            <article><h3>AI analysis</h3><p>Images and structured observations support identification and draft generation. ToolProof prohibits invented specifications, accessories, function, authenticity, safety, and recall claims.</p></article>
            <article><h3>Market evidence</h3><p>Active listings are labeled asking prices—not completed sales. ToolProof withholds a sold range when there is not enough qualified completed-sale evidence.</p></article>
          </div>
        </div>
      </section>

      <section className="toolproof-review-section" aria-labelledby="toolproof-review-title">
        <div className="site-shell toolproof-review-card">
          <div><p className="toolproof-kicker">Review and support</p><h2 id="toolproof-review-title">Need access or implementation details?</h2><p>Reviewers can request a TestFlight build and a guided seller-flow walkthrough from MyLogix Studio LLC.</p></div>
          <div className="toolproof-review-links">
            <a className="button toolproof-primary" href="mailto:mls@mylogicstudio.com?subject=ToolProof%20review">mls@mylogicstudio.com</a>
            <Link to="/toolproof/privacy-policy">Privacy Policy</Link>
            <Link to="/toolproof/terms-of-service">Terms of Service</Link>
            <Link to="/toolproof/legal">Legal overview</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolProofPage;
