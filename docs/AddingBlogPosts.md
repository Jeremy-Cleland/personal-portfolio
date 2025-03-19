# Adding Blog Posts

This guide explains how to add new blog posts to your website in a way that's optimized for SEO and maintainability.

## Quick Start

1. **Prepare Blog Images**
   - Save your blog post thumbnail image to `/src/assets/images/blog/`
   - Use descriptive filenames (e.g., `ai-ethics-considerations.jpg`)
   - Optimal size for thumbnails is 1200x630px (16:9 ratio)

2. **Edit the Blog Data File**
   - Open `src/data/blogData.jsx`
   - Import your images at the top of the file
   - Use the `createBlogPost` helper function to add a new post

## Using the Blog Post Template Helper

The easiest way to add a new blog post is to use the `createBlogPost` helper function:

```jsx
// In src/data/blogData.jsx
import { createBlogPost } from "./blogTemplate.js";
import thumbnailImage from "../assets/images/blog/my-post-image.jpg";

const newBlogPost = createBlogPost({
  title: "My New Blog Post Title",
  slug: "my-new-blog-post", // URL-friendly version of the title
  description: "A brief summary of what this blog post is about (140-160 characters for SEO)",
  thumbnailImage: thumbnailImage,
  date: "June 15, 2024",
  author: "Jeremy Cleland",
  categories: ["AI Ethics", "Machine Learning"],
  tags: ["AI", "Ethics", "ML Model", "Tutorial"],
  content: `
# My New Blog Post Title

This is the content of your blog post in Markdown format. You can use all the 
formatting features you'd expect from Markdown.

## Second-level heading

You can include:
- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)

### Code examples

\`\`\`python
def hello_world():
    print("Hello, world!")
\`\`\`

## Images

If you need to include images within your post content, first import them at the top of the file,
then reference them in an HTML img tag within your markdown.

## Conclusion

Summarize your post here.
  `,
  // Optional parameters
  featured: true, // Set to true to feature this post
  readingTime: 5, // Calculated automatically if not provided
  metaTitle: "Custom SEO Title | Your Site Name", // Optional custom SEO title
  metaDescription: "Custom SEO description that differs from the regular description", // Optional
  metaKeywords: "custom,seo,keywords", // Optional, defaults to tags + categories
});

// Then add the new post to the top of the blogData array
export const blogData = [
  newBlogPost, // New posts at the top (latest first)
  // ... existing posts
];
```

## Markdown Support

The blog post content supports full Markdown formatting, allowing you to create rich content with:

- Headers (# for main header, ## for subheader)
- Emphasis (**bold**, *italic*)
- Lists (ordered and unordered)
- Links
- Code blocks (inline and multi-line with syntax highlighting)
- Tables

## Table of Contents

The blog system automatically generates a table of contents based on your H2 and H3 headings. To ensure your headings appear correctly in the TOC:

1. Use `##` for main sections (H2)
2. Use `###` for subsections (H3)
3. Keep heading text concise and descriptive
4. The TOC is automatically displayed both on desktop (as a sticky sidebar) and on mobile (as a collapsible panel)

## Social Sharing

Your blog posts include social sharing functionality:

1. **Built-in Share Button**: Uses the Web Share API when available, with fallback to clipboard copy
2. **Social Media Links**: Direct links to share on Twitter, LinkedIn, and Facebook
3. **Desktop vs. Mobile**: Different sharing UIs optimized for each device type

To customize the sharing text:

- The post title and description are used as the default sharing text
- For custom sharing text, modify the `metaTitle` and `metaDescription` parameters

## RSS Feed

Your blog automatically generates an RSS feed for subscribers:

1. The feed is available at `/rss.xml`
2. It includes all your blog posts, sorted by date (newest first)
3. Each entry contains the post title, description, date, and categories
4. The feed is referenced in your `robots.txt` file for discovery

To update your RSS feed with new posts, the system automatically includes all posts in the `blogData.jsx` file.

## SEO Optimization

Each blog post is automatically optimized for search engines:

1. **Schema.org Markup**: Structured data helps search engines understand your content
2. **Meta Tags**: Title, description, and keywords are automatically generated
3. **Sitemap Integration**: New posts are listed in the sitemap.xml file
4. **Canonical URLs**: Each post has a clean, SEO-friendly URL structure

When adding a new post, remember to:

1. Update the `sitemap.xml` file with the new post URL
2. Use descriptive, keyword-rich titles and descriptions
3. Choose relevant categories and tags

## Important SEO Fields

Pay special attention to these fields for good SEO:

1. **title**: Should be descriptive and include keywords (50-60 characters)
2. **description**: A concise summary (140-160 characters)
3. **slug**: URL-friendly version of the title (use hyphens between words)
4. **tags** and **categories**: Help with content organization and SEO
5. **metaTitle**, **metaDescription**, **metaKeywords**: Optional custom SEO overrides

## Content Best Practices

For the best possible blog posts:

1. **Start with a strong intro**: Engage readers immediately
2. **Use headings to structure content**: Helps with readability and SEO
3. **Include code examples**: Make technical content practical
4. **Add appropriate tags and categories**: Improves discoverability
5. **Keep paragraphs short**: 2-3 sentences per paragraph for readability
6. **Use images strategically**: Break up text and illustrate concepts
7. **Conclude with key takeaways**: Summarize what readers should learn
8. **Structure for TOC**: Organize content with clear H2 and H3 headings
9. **Optimize for sharing**: Consider how your content will appear when shared

## Need More Help?

If you need more examples or have questions about adding blog posts, check out the code in `src/data/blogTemplate.js` for additional reference.
