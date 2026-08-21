import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const palette = ['#1e2744', '#516268', '#9d5540', '#b1aa73', '#d3cbc0'];

const ProductsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Products | MyLogix Studio';
  }, []);

  return (
    <div className="products-page">
      <section className="page-hero" aria-labelledby="products-title"><div className="site-shell page-hero-grid"><div><p className="eyebrow">Products</p><h1 id="products-title">Creative tools made understandable.</h1></div><p>Our products show how MyLogix Studio carries an idea through interface design, backend processing, release, and support.</p></div></section>

      <section className="section product-section" id="colorcrafter" aria-labelledby="colorcrafter-title">
        <div className="site-shell product-grid">
          <div className="product-visual">
            <div className="product-window product-window-original"><div className="window-bar"><span>Original</span><span>01</span></div><img src="/images/products/dance-original.jpg" width="960" height="1822" loading="lazy" alt="Renoir's Dance at Bougival before paint-by-number processing" /></div>
            <div className="product-window product-window-result"><div className="window-bar"><span>Color Map</span><span>02</span></div><img src="/images/products/dance-color-map.png" width="960" height="1822" loading="lazy" alt="Dance at Bougival transformed into a simplified ColorCrafter color map" /></div>
            <div className="palette-rack" aria-label="Sample ColorCrafter palette">{palette.map(color => <span key={color} style={{ backgroundColor: color }} />)}</div>
          </div>
          <div className="product-copy"><p className="eyebrow">Product 01</p><h2 id="colorcrafter-title">ColorCrafter turns personal photos into art you can make by hand.</h2><p>Choose a photo, simplify it into numbered color regions, and create a printable project or explore the finished colors digitally.</p><dl className="product-facts"><div><dt>Input</dt><dd>Your Own Photo</dd></div><div><dt>Output</dt><dd>Printable Numbered Art</dd></div><div><dt>Platform</dt><dd>iPhone & iPad</dd></div></dl><div className="button-row"><a className="button button-ink" href="https://apps.apple.com/us/app/colorcrafter-paint-by-numbers/id6745644936" target="_blank" rel="noopener noreferrer">View on the App Store <span aria-hidden="true">↗</span></a><a className="text-link" href="#colorcrafter-demo">See the Process</a></div><Link className="legal-inline-link" to="/colorcrafter/legal">ColorCrafter Legal Documents</Link></div>
        </div>
      </section>

      <section className="section colorcrafter-demo-section" id="colorcrafter-demo" aria-labelledby="demo-title">
        <div className="site-shell">
          <div className="demo-intro"><p className="eyebrow">From Photo to Palette</p><h2 id="demo-title">See the transformation without uploading a photo.</h2><p>This visual walkthrough shows the core ColorCrafter flow: start with an image, divide it into paintable regions, then refill the regions with a simplified palette.</p></div>
          <figure className="process-demo" aria-describedby="demo-caption">
            <div className="demo-stage"><div className="demo-stage-bar"><span>Original Photo</span><span>01</span></div><div className="demo-image-frame"><img src="/images/products/dance-original.jpg" width="960" height="1822" loading="lazy" alt="Original photograph before ColorCrafter processing" /></div><p>Begin with a meaningful image.</p></div>
            <div className="demo-arrow" aria-hidden="true"><span>→</span><small>Segment</small></div>
            <div className="demo-stage demo-stage-segmented"><div className="demo-stage-bar"><span>Numbered Regions</span><span>02</span></div><div className="demo-image-frame"><img src="/images/products/dance-color-map.png" width="960" height="1822" loading="lazy" alt="Simplified artwork divided into paintable regions" /><div className="segment-grid" aria-hidden="true"><span style={{ left: '27%', top: '19%' }}>3</span><span style={{ left: '62%', top: '27%' }}>7</span><span style={{ left: '42%', top: '48%' }}>2</span><span style={{ left: '70%', top: '63%' }}>5</span><span style={{ left: '31%', top: '77%' }}>8</span></div></div><p>Reduce detail into clear color regions.</p></div>
            <div className="demo-arrow" aria-hidden="true"><span>→</span><small>Refill</small></div>
            <div className="demo-stage demo-stage-refilled"><div className="demo-stage-bar"><span>Refilled Preview</span><span>03</span></div><div className="demo-image-frame"><img src="/images/products/dance-color-map.png" width="960" height="1822" loading="lazy" alt="ColorCrafter preview refilled with a simplified color palette" /><div className="demo-swatch-row" aria-hidden="true">{palette.map(color => <span key={color} style={{ backgroundColor: color }} />)}</div></div><p>Preview the palette before painting.</p></div>
            <figcaption id="demo-caption">A representative ColorCrafter transformation using a sample image. No upload, account, or login is required.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section secondary-product-section" id="narrativeflow" aria-labelledby="narrativeflow-title"><div className="site-shell secondary-product-card"><div><p className="eyebrow">Product 02</p><h2 id="narrativeflow-title">NarrativeFlow brings images, narration, and video assembly into one creative flow.</h2></div><div><p>NarrativeFlow combines AI-assisted image creation and editing, multilingual voice synthesis, and scene compilation for creators, educators, and businesses.</p><Link className="text-link" to="/narrativeflow/legal">NarrativeFlow Legal Documents <span aria-hidden="true">↗</span></Link></div></div></section>
    </div>
  );
};

export default ProductsPage;
