/**
 * Script to generate the RSS feed
 * This is called during the build process by the npm script
 */

// Import the writeRssFeed function
import { writeRssFeed } from '../src/utils/rssGenerator.js';

async function main() {
  try {
    await writeRssFeed();
    console.log('✅ RSS feed generated successfully at ./public/rss.xml');
  } catch (error) {
    console.error('❌ Error generating RSS feed:', error);
    process.exit(1);
  }
}

// Run the main function
main();