/**
 * Script to generate a sitemap.xml file
 * This should be called during the build process
 */

import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://dev.clelandco.com';
const OUTPUT_PATH = './public/sitemap.xml';

/**
 * Generates a sitemap XML file with all pages and posts
 */
export async function generateSitemap() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  // Start XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n';

  // Main pages
  const mainPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/portfolio', priority: '0.9', changefreq: 'monthly' },
    { url: '/blog', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/resume', priority: '0.7', changefreq: 'monthly' },
  ];

  // Add main pages
  mainPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${page.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Hardcoded project pages from portfolioData (to avoid import errors with image files)
  // These match what's in the portfolioData.jsx file
  const portfolioProjects = [
    { name: "sepsis-prediction-pipeline" },
    { name: "plantdoc-plant-disease-classification" }
  ];
  
  portfolioProjects.forEach(project => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}/portfolio/project/${project.name}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += '  </url>\n';
  });

  // Close XML
  xml += '</urlset>';

  // Write to file
  fs.writeFileSync(OUTPUT_PATH, xml);
  console.log(`✅ Sitemap generated successfully at ${OUTPUT_PATH}`);
}

// Main function
async function main() {
  try {
    await generateSitemap();
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the script if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
} 