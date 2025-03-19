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
- Code blocks (inline and multi-line)
- Tables

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

## Need More Help?

If you need more examples or have questions about adding blog posts, check out the code in `src/data/blogTemplate.js` for additional reference.
