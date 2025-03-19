import { motion as m } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import BlogIndexSchema from "../../components/Schema/BlogIndexSchema";
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

    // Cleanup on unmount
    return () => {
      document.title = "Jeremy Cleland - Portfolio";
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
      {/* Add structured data */}
      <BlogIndexSchema posts={filteredPosts} />
      
      <div className="mb-10 text-center">
        <m.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 font-ChillaxBold text-3xl font-bold text-dark-900 dark:text-gray-200 md:text-4xl lg:text-5xl"
        >
          Blog
        </m.h1>
        <m.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}  
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto max-w-2xl font-Fira text-base text-dark-900 dark:text-gray-200 md:text-lg"
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
              className="w-full rounded-lg border border-orange-400 bg-white px-4 py-3 pl-10 text-dark-900 placeholder-gray-400 shadow-sm transition focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400/30 dark:border-orange-600 dark:bg-dark-900 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-orange-500 dark:focus:ring-orange-400/20"
            />
            <FiSearch className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>

        {/* Tag Cloud */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => handleTagClick("all")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeTag === "all"
              ? "bg-orange-400 text-white shadow-md transform scale-105 border-2 border-orange-400"
              : "bg-white text-gray-700 border-2 border-orange-400/30 hover:border-orange-400/50 hover:bg-orange-50 dark:bg-dark-800 dark:text-gray-300 dark:border-orange-400/30 dark:hover:border-orange-400/50 dark:hover:bg-dark-700"
              }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeTag === tag
                ? "bg-orange-400 text-white shadow-md transform scale-105 border-2 border-orange-400"
                : "bg-white text-gray-700 border-2 border-orange-400/30 hover:border-orange-400/50 hover:bg-orange-50 dark:bg-dark-800 dark:text-gray-300 dark:border-orange-400/30 dark:hover:border-orange-400/50 dark:hover:bg-dark-700"
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
          <div className="mx-auto max-w-md rounded-lg border border-orange-400/30 bg-white p-8 text-center dark:border-orange-600/30 dark:bg-dark-800">
            <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">No posts found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => handleTagClick("all")}
              className="mt-4 rounded-md bg-orange-400 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-500"
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
