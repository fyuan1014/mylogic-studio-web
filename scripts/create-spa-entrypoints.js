const fs = require('fs');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(buildDirectory, 'index.html');
const sitemapPath = path.join(buildDirectory, 'sitemap.xml');
const siteOrigin = 'https://www.mylogicstudio.com';

const routeMetadata = {
  '/products': {
    title: 'Products · MyLogix Studio | Stemmoire, TickerCase & ColorCrafter',
    description: 'Explore MyLogix Studio products including Stemmoire, an AI floral design and virtual flower-arranging application, plus TickerCase and ColorCrafter.',
    keywords: 'MyLogix Studio products, Stemmoire, AI floral design, virtual flower arranging, bouquet design, TickerCase, ColorCrafter',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${siteOrigin}/#organization`,
          name: 'MyLogix Studio LLC',
          url: `${siteOrigin}/`
        },
        {
          '@type': 'WebApplication',
          '@id': 'https://stemmoire.mylogicstudio.com/#application',
          name: 'Stemmoire',
          url: 'https://stemmoire.mylogicstudio.com/',
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'Web',
          description: 'An AI floral design and virtual flower-arranging application for turning flowers, artworks, and saved inspiration into realistic, buildable bouquet directions.',
          creator: { '@id': `${siteOrigin}/#organization` },
          mainEntityOfPage: { '@id': `${siteOrigin}/products#webpage` }
        },
        {
          '@type': 'WebPage',
          '@id': `${siteOrigin}/products#webpage`,
          name: 'Products · MyLogix Studio',
          url: `${siteOrigin}/products`,
          mainEntity: { '@id': 'https://stemmoire.mylogicstudio.com/#application' },
          about: { '@id': 'https://stemmoire.mylogicstudio.com/#application' }
        }
      ]
    }
  }
};

if (!fs.existsSync(indexPath)) {
  throw new Error('build/index.html was not found. Run this script after react-scripts build.');
}

const routes = new Set(['/privacy_policy']);

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceMeta(html, attribute, key, content) {
  const pattern = new RegExp(`<meta\\s+${attribute}=["']${key}["'][^>]*>`, 'i');
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(content)}">`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `${tag}</head>`);
}

function setCanonical(html, href) {
  const tag = `<link rel="canonical" href="${href}">`;
  const pattern = /<link\s+rel=["']canonical["'][^>]*>/i;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `${tag}</head>`);
}

function createRouteHtml(sourceHtml, route) {
  const canonical = `${siteOrigin}${route}`;
  const metadata = routeMetadata[route];
  let html = setCanonical(sourceHtml, canonical);

  if (!metadata) return html;

  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(metadata.title)}</title>`);
  html = replaceMeta(html, 'name', 'description', metadata.description);
  html = replaceMeta(html, 'name', 'keywords', metadata.keywords);
  html = replaceMeta(html, 'property', 'og:title', metadata.title);
  html = replaceMeta(html, 'property', 'og:description', metadata.description);
  html = replaceMeta(html, 'property', 'og:url', canonical);
  html = replaceMeta(html, 'name', 'twitter:title', metadata.title);
  html = replaceMeta(html, 'name', 'twitter:description', metadata.description);
  const structuredData = JSON.stringify(metadata.structuredData).replace(/</g, '\\u003c');
  html = html.replace('</head>', `<script type="application/ld+json">${structuredData}</script></head>`);
  return html;
}

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const locations = sitemap.matchAll(/<loc>https:\/\/www\.mylogicstudio\.com([^<]*)<\/loc>/g);

  for (const match of locations) {
    const pathname = match[1].replace(/\/$/, '');
    if (pathname) routes.add(pathname);
  }
}

const indexHtml = fs.readFileSync(indexPath, 'utf8');

for (const route of routes) {
  const routeDirectory = path.join(buildDirectory, route.replace(/^\//, ''));
  fs.mkdirSync(routeDirectory, { recursive: true });
  fs.writeFileSync(path.join(routeDirectory, 'index.html'), createRouteHtml(indexHtml, route));
}

console.log(`Created ${routes.size} static SPA entry points for GitHub Pages.`);
