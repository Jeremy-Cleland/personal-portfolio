import { createContext, useEffect, useMemo, useState } from "react";
import client from "../utils/contentful.js";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // State for blog data and filters
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  // Fetch data from Contentful
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await client.getEntries({
          content_type: 'blogPost',
          order: '-fields.date',
        });
        
        // Transform Contentful data to match your app's format
        const formattedPosts = response.items.map(item => ({
          id: item.sys.id,
          title: item.fields.title,
          slug: item.fields.slug,
          description: item.fields.description || "",
          thumbnailImage: item.fields.featuredImage?.fields.file.url,
          date: item.fields.date,
          author: item.fields.author || "Jeremy Cleland",
          categories: [item.fields.category], // Map the single category to categories array
          tags: item.fields.tags || [],
          content: item.fields.content,
          featured: false, // Default value as it's not in Contentful model
          seo: {
            title: item.fields.seoTitle || item.fields.title,
            description: item.fields.seoDescription || item.fields.description || "",
            keywords: item.fields.seoKeywords || item.fields.tags?.join(', ') || ""
          }
        }));
        
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filtered posts based on search term
  const searchFilteredPosts = useMemo(() => {
    if (!searchTerm) return posts;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return posts.filter((post) => {
      // Search in title, description, content, tags, and categories
      return (
        post.title.toLowerCase().includes(lowerSearchTerm) ||
        post.description.toLowerCase().includes(lowerSearchTerm) ||
        (post.content && typeof post.content === 'string' && post.content.toLowerCase().includes(lowerSearchTerm)) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)) ||
        post.categories.some(category => category.toLowerCase().includes(lowerSearchTerm))
      );
    });
  }, [posts, searchTerm]);

  // Filtered posts based on category
  const categoryFilteredPosts = useMemo(() => {
    if (!categoryFilter) return searchFilteredPosts;

    return searchFilteredPosts.filter((post) =>
      post.categories.some(category => 
        category.toLowerCase() === categoryFilter.toLowerCase()
      )
    );
  }, [searchFilteredPosts, categoryFilter]);

  // Filtered posts based on tag
  const filteredPosts = useMemo(() => {
    if (!tagFilter) return categoryFilteredPosts;

    return categoryFilteredPosts.filter((post) =>
      post.tags.some(tag => tag.toLowerCase() === tagFilter.toLowerCase())
    );
  }, [categoryFilteredPosts, tagFilter]);

  // Get all unique categories from posts
  const categories = useMemo(() => {
    const categories = new Set();
    posts.forEach(post => {
      post.categories.forEach(category => categories.add(category));
    });
    return Array.from(categories).sort();
  }, [posts]);

  // Get all unique tags from posts
  const tags = useMemo(() => {
    const tags = new Set();
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  // Get featured posts
  const featuredPosts = useMemo(() => {
    return posts.filter(post => post.featured);
  }, [posts]);

  // Get post by slug
  const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug);
  };

  // Get related posts
  const getRelatedPosts = (postId, limit = 3) => {
    const post = posts.find(p => p.id === postId);
    if (!post) return [];

    // Filter out current post and sort by relevance (tag/category match)
    const otherPosts = posts.filter(p => p.id !== postId);

    // Score posts by number of matching tags and categories
    const scoredPosts = otherPosts.map(p => {
      const matchingTags = p.tags.filter(tag => post.tags.includes(tag)).length;
      const matchingCategories = p.categories.filter(cat => post.categories.includes(cat)).length;

      return {
        ...p,
        relevanceScore: matchingTags * 2 + matchingCategories * 3  // Weight categories more
      };
    });

    // Sort by relevance score and return top N
    return scoredPosts
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit);
  };

  // Filter posts by tag (simple method for UI)
  const filterByTag = (tag) => {
    if (tag === "all") {
      setTagFilter("");
    } else {
      setTagFilter(tag);
    }
    setSearchTerm("");
  };

  // Search posts (simple method for UI)
  const searchPosts = (query) => {
    setSearchTerm(query);
    setTagFilter("");
    setCategoryFilter("");
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    posts,
    setPosts,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    tagFilter,
    setTagFilter,
    filteredPosts,
    categories,
    tags,
    featuredPosts,
    getPostBySlug,
    getRelatedPosts,
    filterByTag,
    searchPosts
  }), [
    posts,
    loading,
    error,
    searchTerm,
    categoryFilter,
    tagFilter,
    filteredPosts,
    categories,
    tags,
    featuredPosts
  ]);

  return (
    <BlogContext.Provider value={contextValue}>
      {children}
    </BlogContext.Provider>
  );
}; 