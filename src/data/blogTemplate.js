/**
 * Blog Post Template Generator
 * 
 * This utility creates consistent blog post structures
 * by generating a standardized blog post object.
 */

/**
 * Creates a new blog post with the specified properties
 * @param {Object} blogData - The blog post data
 * @returns {Object} A properly formatted blog post object
 */
export const createBlogPost = (blogData) => {
  const {
    // Required fields
    title,
    slug,
    description,
    thumbnailImage,
    date,
    author,
    content,

    // Optional fields with defaults
    id = null,
    categories = [],
    tags = [],
    readingTime = null,
    relatedPosts = [],
    featured = false,
    metaTitle = null,
    metaDescription = null,
    metaKeywords = null,
  } = blogData;

  // Generate ID if not provided
  const postId = id || Math.floor(Date.now() / 1000);

  // Estimate reading time if not provided (based on 200 words per minute)
  const estimatedReadingTime = readingTime || Math.ceil(content.split(/\s+/).length / 200);

  // Build SEO metadata if not explicitly provided
  const seoTitle = metaTitle || title;
  const seoDescription = metaDescription || description;
  const seoKeywords = metaKeywords || [...tags, ...categories].join(', ');

  // Format date properly
  const publishDate = new Date(date);
  const formattedDate = date.includes(",") ? date : publishDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Build the complete blog post object
  return {
    id: postId,
    title,
    slug,
    description,
    thumbnailImage,
    date: formattedDate,
    author,
    categories,
    tags,
    content,
    readingTime: estimatedReadingTime,
    relatedPosts,
    featured,
    seo: {
      title: seoTitle,
      description: seoDescription,
      keywords: seoKeywords
    }
  };
};

/**
 * Example usage:
 * 
 * import { createBlogPost } from "./blogTemplate.js";
 * import thumbnailImage from "../assets/images/blog/example-post.jpg";
 * 
 * const newBlogPost = createBlogPost({
 *   title: "How to Build an AI Model",
 *   slug: "how-to-build-an-ai-model",
 *   description: "A step-by-step guide for beginners",
 *   thumbnailImage: thumbnailImage,
 *   date: "March 15, 2024",
 *   author: "Your Name",
 *   categories: ["AI", "Tutorials"],
 *   tags: ["Machine Learning", "Python", "AI"],
 *   content: `
 *     # How to Build an AI Model
 *     
 *     This is the content of your blog post in Markdown format. You can use **bold**,
 *     *italic*, and other Markdown features.
 *     
 *     ## Heading 2
 *     
 *     - List item 1
 *     - List item 2
 *     
 *     ### Code Example
 *     
 *     \`\`\`python
 *     def hello_world():
 *         print("Hello, world!")
 *     \`\`\`
 *   `
 * });
 */ 