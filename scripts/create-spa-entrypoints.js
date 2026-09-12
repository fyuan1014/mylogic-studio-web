const fs = require('fs');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(buildDirectory, 'index.html');
const sitemapPath = path.join(buildDirectory, 'sitemap.xml');

if (!fs.existsSync(indexPath)) {
  throw new Error('build/index.html was not found. Run this script after react-scripts build.');
}

const routes = new Set(['/privacy_policy']);

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const locations = sitemap.matchAll(/<loc>https:\/\/www\.mylogicstudio\.com([^<]*)<\/loc>/g);

  for (const match of locations) {
    const pathname = match[1].replace(/\/$/, '');
    if (pathname) routes.add(pathname);
  }
}

for (const route of routes) {
  const routeDirectory = path.join(buildDirectory, route.replace(/^\//, ''));
  fs.mkdirSync(routeDirectory, { recursive: true });
  fs.copyFileSync(indexPath, path.join(routeDirectory, 'index.html'));
}

console.log(`Created ${routes.size} static SPA entry points for GitHub Pages.`);
