import fs from 'fs';
import { blogData } from '../data/blogData.js';

/**
 * Generates an RSS 2.0 feed XML file from blog data
 * @returns {string} The RSS XML content
 */
export function generateRssFeed() {
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
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
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
 * Writes the RSS feed to the public directory
 * Only works when running in Node.js environment
 */
export function writeRssFeed() {
  try {
    const rss = generateRssFeed();
    fs.writeFileSync('./public/rss.xml', rss);
    console.log('RSS feed generated successfully at ./public/rss.xml');
  } catch (error) {
    console.error('Error writing RSS feed:', error);
  }
}

// For use in build scripts
if (typeof window === 'undefined' && typeof require !== 'undefined' && require.main === module) {
  writeRssFeed();
}