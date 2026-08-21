import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const palette = ['#1e2744', '#516268', '#9d5540', '#b1aa73', '#d3cbc0'];

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'MyLogix Studio | Websites, Apps & Data Solutions';
  }, []);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <ul className="hero-capabilities" aria-label="Core capabilities"><li>Websites</li><li>Apps</li><li>Data Technology</li></ul>
            <h1 id="hero-title">Clear technology for real business opportunities.</h1>
            <p className="hero-lede">MyLogix Studio designs clear business websites, focused mobile and web applications, and dependable data systems. We work from the real opportunity—whether it starts with customer trust, an inefficient workflow, fragmented information, or a useful dataset.</p>
            <div className="button-row"><a className="button button-primary" href="#contact">Discuss Your Opportunity</a><a className="text-link" href="#services">Explore Capabilities <span aria-hidden="true">↘</span></a></div>
            <p className="hero-note"><span className="status-dot" aria-hidden="true" /> Practical technology for businesses at different stages and scales.</p>
          </div>
          <figure className="system-map" aria-labelledby="system-map-title">
            <figcaption id="system-map-title"><span>What We Change</span><strong>From an opportunity to a working system</strong></figcaption>
            <div className="system-flow">
              <div className="flow-column flow-inputs"><span className="flow-label">What You Bring</span><div className="flow-node">A Customer Need</div><div className="flow-node">Business Data</div><div className="flow-node">Growth Potential</div></div>
              <div className="flow-connector" aria-hidden="true"><span /></div>
              <div className="flow-core"><span className="core-orbit" aria-hidden="true" /><svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true"><path d="M8 31 18 17l9 12 13-16" /><circle cx="8" cy="31" r="3" /><circle cx="18" cy="17" r="3" /><circle cx="27" cy="29" r="3" /><circle cx="40" cy="13" r="3" /></svg><strong>MyLogix</strong><span>Frame + Design + Build</span></div>
              <div className="flow-connector" aria-hidden="true"><span /></div>
              <div className="flow-column flow-outputs"><span className="flow-label">What You Get</span><div className="flow-node flow-node-good">A Credible Presence</div><div className="flow-node flow-node-good">Clearer Decisions</div><div className="flow-node flow-node-good">Room to Scale</div></div>
            </div>
            <div className="map-proof"><span className="proof-tag">Studio Focus</span><span>Useful digital systems shaped around a real business need.</span></div>
          </figure>
        </div>
      </section>

      <section className="trust-strip" aria-label="Studio capabilities"><div className="site-shell trust-inner"><p>Designed around the business, its customers, and the decisions ahead.</p><ul><li>Business Websites</li><li>Mobile & Web Apps</li><li>Data Integration</li><li>Data Products</li></ul></div></section>

      <section className="section services-section" id="services" aria-labelledby="services-title">
        <div className="site-shell">
          <div className="section-heading services-intro"><p className="eyebrow">Useful Technology, Sized Right</p><h2 id="services-title">Start with what helps now. Add more when the opportunity earns it.</h2><p>Some opportunities need a persuasive website. Others need an application, a reliable data pipeline, a decision dashboard, or a carefully documented dataset. The scope follows the business case.</p></div>
          <div className="service-grid">
            <article className="service-card"><div className="service-card-header"><p className="service-mode">Present</p><div className="service-symbol" aria-hidden="true">⌂</div></div><div className="service-card-copy"><h3>Business Website Design & Delivery</h3><p>Fast, credible websites shaped around the organization, its audience, and the action visitors should take.</p></div><ul className="service-list"><li>Small-business and service websites</li><li>Campaign, product, and lead-generation pages</li><li>Content structure, launch, and support</li></ul></article>
            <article className="service-card"><div className="service-card-header"><p className="service-mode">Build</p><div className="service-symbol" aria-hidden="true">↗</div></div><div className="service-card-copy"><h3>Apps & Workflow Tools</h3><p>Focused tools for customers, staff, and operations—from a tested prototype to a maintainable mobile or web product.</p></div><ul className="service-list"><li>iOS and responsive web apps</li><li>Internal tools and client portals</li><li>API and service integration</li></ul></article>
            <article className="service-card service-card-accent"><div className="service-card-header"><p className="service-mode">Clean + Connect</p><div className="service-symbol" aria-hidden="true">⌁</div></div><div className="service-card-copy"><h3>Data Integration & Processing</h3><p>Reliable workflows that collect, clean, combine, and move information so teams can stop reconciling it by hand.</p></div><ul className="service-list"><li>Data cleanup and standardization</li><li>Scheduled processing and reporting</li><li>Database and system integration</li></ul></article>
            <article className="service-card service-card-explore"><div className="service-card-header"><p className="service-mode">Explore + Package</p><div className="service-symbol" aria-hidden="true">▥</div></div><div className="service-card-copy"><h3>Dashboards & Data Products</h3><p>Decision tools and useful datasets built around a defined buyer need, legitimate sources, clear provenance, and responsible licensing.</p></div><ul className="service-list"><li>Operational and market dashboards</li><li>Dataset research and documentation</li><li>Licensed, consent-respecting data products</li></ul></article>
          </div>
          <div className="opportunity-note"><span>How We Work</span><p>Every project starts with the specific organization: its audience, constraints, existing information, and desired outcome. The solution is shaped for that context instead of forcing every opportunity into the same package.</p></div>
        </div>
      </section>

      <section className="section product-section" id="product-proof" aria-labelledby="product-proof-title">
        <div className="site-shell product-grid">
          <div className="product-visual">
            <div className="product-window product-window-original"><div className="window-bar"><span>Original</span><span>01</span></div><img src="/images/products/dance-original.jpg" width="960" height="1822" loading="lazy" alt="Renoir's Dance at Bougival before paint-by-number processing" /></div>
            <div className="product-window product-window-result"><div className="window-bar"><span>Color Map</span><span>02</span></div><img src="/images/products/dance-color-map.png" width="960" height="1822" loading="lazy" alt="Dance at Bougival transformed into a simplified ColorCrafter color map" /></div>
            <div className="palette-rack" aria-label="Sample ColorCrafter palette">{palette.map(color => <span key={color} style={{ backgroundColor: color }} />)}</div>
          </div>
          <div className="product-copy"><p className="eyebrow">Product Proof</p><h2 id="product-proof-title">ColorCrafter shows how an idea becomes a working product.</h2><p>Our paint-by-number application combines interface design, image processing, cloud services, and ongoing product support. It is one example of the kind of complete system MyLogix Studio can deliver.</p><div className="button-row"><Link className="button button-ink" to="/products#colorcrafter">Explore Products <span aria-hidden="true">↗</span></Link><a className="text-link" href="https://apps.apple.com/us/app/colorcrafter-paint-by-numbers/id6745644936" target="_blank" rel="noopener noreferrer">View on the App Store</a></div></div>
        </div>
      </section>

      <section className="section approach-section" id="approach" aria-labelledby="approach-title">
        <div className="site-shell approach-grid"><div className="approach-intro"><p className="eyebrow">A Practical Build Process</p><h2 id="approach-title">Start with the opportunity. Build only what earns its place.</h2><p>Each engagement stays close to the people using the result and the outcome the business needs.</p></div><ol className="process-list"><li><span className="process-number">01</span><div><h3>Frame the useful problem.</h3><p>Map the audience, workflow, constraints, and one measurable improvement worth building toward.</p></div></li><li><span className="process-number">02</span><div><h3>Build the smallest reliable system.</h3><p>Prototype the riskiest part early, then create a clear and secure path from input to outcome.</p></div></li><li><span className="process-number">03</span><div><h3>Release, learn, and support.</h3><p>Put it into real use, watch what matters, and improve it with evidence.</p></div></li></ol></div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="site-shell contact-grid"><div><p className="eyebrow eyebrow-light">Websites, Apps & Data Opportunities</p><h2 id="contact-title">Is there a useful business opportunity technology could unlock?</h2></div><div className="contact-action"><p>Share the business, audience, information, or workflow involved. We’ll start with a focused conversation about whether a website, application, data system, or product makes sense.</p><a className="button button-coral" href="mailto:mls@mylogicstudio.com?subject=Business%20Technology%20Opportunity">Discuss an Opportunity <span aria-hidden="true">↗</span></a><address className="contact-details"><a href="mailto:mls@mylogicstudio.com">mls@mylogicstudio.com</a><span>Clinton, MA 01510</span></address></div></div></section>
    </>
  );
};

export default HomePage;
