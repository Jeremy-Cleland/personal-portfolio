/**
 * Script to generate the RSS feed
 * This is called during the build process by the npm script
 */

// Use require syntax for Node.js environment
import fs from 'fs';
import path from 'path';

// Import the generateRssFeed function
// Note: We need to use dynamic import since the module uses ES modules syntax
async function main() {
  try {
    // Dynamically import the ES module
    const { generateRssFeed } = await import('../src/utils/rssGenerator.js');
    
    // Generate the RSS XML content
    const rssContent = generateRssFeed();
    
    // Ensure the public directory exists
    const publicDir = path.resolve('./public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write the RSS feed to the public directory
    fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssContent);
    
    console.log('✅ RSS feed generated successfully at ./public/rss.xml');
  } catch (error) {
    console.error('❌ Error generating RSS feed:', error);
    process.exit(1);
  }
}

// Run the main function
main(); 