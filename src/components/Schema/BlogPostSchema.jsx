import { useEffect } from 'react';

/**
 * Component that adds Schema.org structured data for blog posts
 * This helps search engines better understand and display your content
 */
export default function BlogPostSchema({ post, baseUrl = 'https://dev.clelandco.com' }) {
  useEffect(() => {
    if (!post) return;

    const publishDate = new Date(post.date).toISOString();
    const authorName = post.author || 'Jeremy Cleland';
    const imageUrl = post.thumbnailImage 
      ? `${baseUrl}${post.thumbnailImage.src || post.thumbnailImage}` 
      : `${baseUrl}/logo.webp`;

    // Generate the JSON-LD schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `${baseUrl}/blog/post/${post.slug}`
      },
      'headline': post.title,
      'description': post.description,
      'image': imageUrl,
      'author': {
        '@type': 'Person',
        'name': authorName,
        'url': baseUrl
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Jeremy Cleland',
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/logo.webp`
        }
      },
      'datePublished': publishDate,
      'dateModified': publishDate,
      'keywords': [...post.categories, ...post.tags].join(',')
    };

    // Check if schema script exists already
    let scriptTag = document.querySelector('#blog-post-schema');
    if (scriptTag) {
      scriptTag.remove(); // Remove existing one to update
    }

    // Create new script tag with schema data
    scriptTag = document.createElement('script');
    scriptTag.id = 'blog-post-schema';
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptTag);

    // Cleanup
    return () => {
      const script = document.querySelector('#blog-post-schema');
      if (script) {
        script.remove();
      }
    };
  }, [post, baseUrl]);

  return null; // This component doesn't render anything visually
} 