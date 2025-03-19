import { motion as m } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BlogContext } from "../../context/BlogContext";
import BlogCard from "./BlogCard";

const Blog = () => {
  const { filteredPosts, tags, filterByTag, searchPosts } = useContext(BlogContext);
  const [activeTag, setActiveTag] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // SEO setup
  useEffect(() => {
    // Set document title
    document.title = "Blog | Jeremy's Portfolio";

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Read my latest thoughts on AI, machine learning, and software development.";

    // Add structured data for SEO
    let structuredDataScript = document.querySelector('#blog-structured-data');
    if (structuredDataScript) {
      structuredDataScript.remove();
    }

    structuredDataScript = document.createElement('script');
    structuredDataScript.id = 'blog-structured-data';
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "headline": "Jeremy's Tech Blog",
      "description": "Insights and tutorials on AI, machine learning, and software development",
      "author": {
        "@type": "Person",
        "name": "Jeremy"
      }
    });
    document.head.appendChild(structuredDataScript);

    // Cleanup on unmount
    return () => {
      document.title = "Jeremy Cleland - Portfolio";
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, []);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
    filterByTag(tag);
    setSearchQuery("");
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchPosts(query);
    setActiveTag("all");
  };

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 md:py-16"
    >
      <div className="mb-10 text-center">
        <m.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 font-ChillaxBold text-3xl font-bold text-dark-900 dark:text-white md:text-4xl lg:text-5xl"
        >
          Blog
        </m.h1>
        <m.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto max-w-2xl font-Fira text-base text-gray-600 dark:text-gray-300 md:text-lg"
        >
          Thoughts, tutorials, and insights on AI, machine learning, and software development
        </m.p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12">
        {/* Search Bar */}
        <div className="mx-auto mb-8 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-10 text-gray-700 placeholder-gray-500 shadow-sm transition focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:border-gray-600 dark:bg-dark-800 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-violet-500 dark:focus:ring-violet-700/20"
            />
            <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
          </div>
        </div>

        {/* Tag Cloud */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => handleTagClick("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeTag === "all"
              ? "bg-violet-600 text-white dark:bg-violet-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeTag === tag
                ? "bg-violet-600 text-white dark:bg-violet-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-5xl">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-dark-800">
            <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">No posts found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => handleTagClick("all")}
              className="mt-4 rounded-md bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:hover:bg-violet-800/30"
            >
              View all posts
            </button>
          </div>
        )}
      </div>
    </m.main>
  );
};

export default Blog;
