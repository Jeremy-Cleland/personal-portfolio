import { useEffect } from 'react';

/**
 * Component that adds Schema.org structured data for the blog listing page
 */
export default function BlogIndexSchema({ posts = [], baseUrl = 'https://dev.clelandco.com' }) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'Jeremy Cleland - Artifcal Intellgence Engineer Blog',
      'description': 'Insights and tutorials on AI, machine learning, and software development',
      'url': `${baseUrl}/blog`,
      'author': {
        '@type': 'Person',
        'name': 'Jeremy Cleland',
        'url': baseUrl
      },
      'publisher': {
        '@type': 'Person',
        'name': 'Jeremy Cleland',
        'url': baseUrl
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `${baseUrl}/blog`
      },
      'blogPost': posts.map(post => ({
        '@type': 'BlogPosting',
        'headline': post.title,
        'description': post.description,
        'datePublished': new Date(post.date).toISOString(),
        'url': `${baseUrl}/blog/post/${post.slug}`,
        'author': {
          '@type': 'Person',
          'name': post.author || 'Jeremy Cleland'
        },
        'keywords': [...post.categories, ...post.tags].join(','),
        'image': post.thumbnailImage
          ? `${baseUrl}${post.thumbnailImage.src || post.thumbnailImage}`
          : `${baseUrl}/logo.png`
      }))
    };

    // Check if schema script exists already
    let scriptTag = document.querySelector('#blog-index-schema');
    if (scriptTag) {
      scriptTag.remove(); // Remove existing one to update
    }

    // Create new script tag with schema data
    scriptTag = document.createElement('script');
    scriptTag.id = 'blog-index-schema';
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptTag);

    // Cleanup
    return () => {
      const script = document.querySelector('#blog-index-schema');
      if (script) {
        script.remove();
      }
    };
  }, [posts, baseUrl]);

  return null; // This component doesn't render anything visually
} 