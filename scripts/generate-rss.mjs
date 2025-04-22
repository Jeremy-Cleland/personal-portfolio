/**
 * Script to generate the RSS feed
 * This is called during the build process by the npm script
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.resolve(__dirname, '../dist/rss.xml');

// Define the blog data directly here to avoid issues with image imports
const blogData = [
  {
    title: "Essential Considerations for AI Ethics",
    slug: "ai-ethics-considerations",
    description: "Exploring the critical ethical considerations when developing AI applications and how they impact society.",
    date: "March 15, 2024",
    author: "Jeremy Cleland",
    categories: ["AI Ethics", "Machine Learning"],
    tags: ["AI", "Ethics", "Responsible AI", "AI Safety"],
    content: "AI ethics content here..." // shortened for clarity
  },
  {
    title: "Building Robust Machine Learning Pipelines",
    slug: "ml-pipeline-essentials",
    description: "A comprehensive guide to creating reliable, scalable, and maintainable machine learning pipelines.",
    date: "February 28, 2024",
    author: "Jeremy Cleland",
    categories: ["Data Science", "Machine Learning"],
    tags: ["ML Ops", "Pipelines", "Data Engineering", "Best Practices"],
    content: "ML Pipeline content here..." // shortened for clarity
  },
  {
    title: "Rust vs TypeScript: When to Choose Each",
    slug: "rust-vs-typescript",
    description: "A detailed comparison of Rust and TypeScript, exploring their strengths, weaknesses, and ideal use cases.",
    date: "January 10, 2024",
    author: "Jeremy Cleland",
    categories: ["Programming Languages", "Web Development"],
    tags: ["Rust", "TypeScript", "Performance", "Developer Experience"],
    content: "Rust vs TypeScript content here..." // shortened for clarity
  }
];

/**
 * Generates an RSS 2.0 feed XML file from blog data
 * @returns {string} The RSS XML content
 */
function generateRssFeed() {
  // Sort blog posts by date (newest first)
  const sortedPosts = [...blogData].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // Base RSS feed metadata
  const siteMeta = {
    title: "Jeremy Cleland - Software Engineer",
    description: "Thoughts on AI, software engineering, and tech trends from Jeremy Cleland",
    site_url: "https://dev.clelandco.com",
    feed_url: "https://dev.clelandco.com/rss.xml",
    language: "en",
    pubDate: new Date().toUTCString(),
    ttl: "60", // Time to live in minutes
  };

  // Start building the XML
  let rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteMeta.title}</title>
    <description>${siteMeta.description}</description>
    <link>${siteMeta.site_url}</link>
    <pubDate>${siteMeta.pubDate}</pubDate>
    <lastBuildDate>${siteMeta.pubDate}</lastBuildDate>
    <ttl>${siteMeta.ttl}</ttl>
    <language>${siteMeta.language}</language>
    <atom:link href="${siteMeta.feed_url}" rel="self" type="application/rss+xml" />
`;

  // Add each blog post as an item
  sortedPosts.forEach(post => {
    // Format the date to RFC 822 format
    const pubDate = new Date(post.date).toUTCString();
    
    // Create a summary from the description
    const summary = post.description || "";
    
    // Generate category tags
    const categoryTags = post.categories
      .map(category => `    <category>${escapeXml(category)}</category>`)
      .join('\n');
    
    // Create the item entry
    rssXml += `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteMeta.site_url}/blog/post/${post.slug}</link>
      <guid isPermaLink="true">${siteMeta.site_url}/blog/post/${post.slug}</guid>
      <pubDate>${pubDate}</pubDate>
${categoryTags}
      <description>${escapeXml(summary)}</description>
      <content:encoded><![CDATA[${post.content || ''}]]></content:encoded>
    </item>
`;
  });

  // Close XML tags
  rssXml += `  </channel>
</rss>`;

  return rssXml;
}

/**
 * Helper function to escape XML special characters
 * @param {string} text - The text to escape
 * @returns {string} Escaped XML text
 */
function escapeXml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Main function to generate and write the RSS feed
 */
async function main() {
  try {
    const rss = generateRssFeed();
    fs.writeFileSync(OUTPUT_PATH, rss);
    console.log(`✅ RSS feed generated successfully at ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('❌ Error generating RSS feed:', error);
    process.exit(1);
  }
}

// Run the main function
main();