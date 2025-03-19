/**
 * Utility to generate an RSS feed for the blog
 * This can be called during build time or through an API route
 */

/**
 * Generates an RSS feed XML string from blog posts
 * @param {Array} posts - Array of blog post objects
 * @param {Object} siteInfo - Site information object
 * @returns {string} - RSS feed XML as a string
 */
export function generateRssFeed(posts, siteInfo) {
  const { title, description, siteUrl, language = 'en', copyright } = siteInfo;
  
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // Create RSS header
  let rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(title)}</title>
  <link>${siteUrl}</link>
  <description>${escapeXml(description)}</description>
  <language>${language}</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
  ${copyright ? `<copyright>${escapeXml(copyright)}</copyright>` : ''}
`;

  // Add items for each blog post
  sortedPosts.forEach(post => {
    const postUrl = `${siteUrl}/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();
    
    rss += `
  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${postUrl}</link>
    <guid>${postUrl}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${escapeXml(post.description)}</description>
    ${post.categories.map(category => 
      `<category>${escapeXml(category)}</category>`
    ).join('\n    ')}
  </item>`;
  });

  // Close RSS feed
  rss += `
</channel>
</rss>`;

  return rss;
}

/**
 * Helper function to escape XML special characters
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Example usage:
 * 
 * import { generateRssFeed } from '../utils/generateRssFeed';
 * import { blogData } from '../data/blogData';
 * import fs from 'fs';
 * import path from 'path';
 * 
 * const siteInfo = {
 *   title: "Jeremy Cleland's Blog",
 *   description: "AI, Machine Learning, and Software Development",
 *   siteUrl: "https://jeremycleland.com",
 *   language: "en",
 *   copyright: "© 2024 Jeremy Cleland. All rights reserved."
 * };
 * 
 * // Generate the RSS feed
 * const rssFeed = generateRssFeed(blogData, siteInfo);
 * 
 * // Write to file (during build time)
 * fs.writeFileSync(path.join(process.cwd(), 'public', 'rss.xml'), rssFeed);
 */ 