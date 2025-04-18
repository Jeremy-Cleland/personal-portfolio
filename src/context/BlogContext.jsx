import { createContext, useMemo, useState } from "react";
import { blogData } from "../data/blogData.js";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // State for blog data and filters
  const [posts, setPosts] = useState(blogData);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  // Filtered posts based on search term
  const searchFilteredPosts = useMemo(() => {
    if (!searchTerm) return posts;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return posts.filter((post) => {
      // Search in title, description, content, tags, and categories
      return (
        post.title.toLowerCase().includes(lowerSearchTerm) ||
        post.description.toLowerCase().includes(lowerSearchTerm) ||
        post.content.toLowerCase().includes(lowerSearchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)) ||
        post.categories.some(category => category.toLowerCase().includes(lowerSearchTerm))
      );
    });
  }, [posts, searchTerm]);

  // Filtered posts based on category
  const categoryFilteredPosts = useMemo(() => {
    if (!categoryFilter) return searchFilteredPosts;

    return searchFilteredPosts.filter((post) =>
      post.categories.includes(categoryFilter)
    );
  }, [searchFilteredPosts, categoryFilter]);

  // Filtered posts based on tag
  const filteredPosts = useMemo(() => {
    if (!tagFilter) return categoryFilteredPosts;

    return categoryFilteredPosts.filter((post) =>
      post.tags.includes(tagFilter)
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

  return (
    <BlogContext.Provider
      value={{
        posts,
        setPosts,
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
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}; 