import { motion as m } from "framer-motion";
import { useContext, useEffect } from "react";
import { FiArrowLeft, FiCalendar, FiClock, FiShare2 } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "../../components/reusable/Card.jsx";
import MarkdownRenderer from "../../components/reusable/MarkdownRenderer.jsx";
import { BlogContext } from "../../context/BlogContext.jsx";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getPostBySlug, getRelatedPosts } = useContext(BlogContext);

  const post = getPostBySlug(slug);

  useEffect(() => {
    // Redirect if post not found
    if (!post) {
      navigate("/blog", { replace: true });
      return;
    }

    // Inject SEO metadata
    document.title = post.seo.title;

    // Create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = post.seo.description;

    // Create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = post.seo.keywords;

    // Add structured data for SEO (Schema.org)
    let structuredDataScript = document.querySelector('#structured-data');
    if (structuredDataScript) {
      structuredDataScript.remove();
    }

    structuredDataScript = document.createElement('script');
    structuredDataScript.id = 'structured-data';
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.innerHTML = JSON.stringify(post.structuredData);
    document.head.appendChild(structuredDataScript);

    // Cleanup on unmount
    return () => {
      document.title = "Jeremy Cleland - Portfolio";
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, [post, navigate]);

  if (!post) return null;

  // Get related posts
  const relatedPosts = getRelatedPosts(post.id, 2);

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      });
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      alert("URL copied to clipboard!");
    }
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto"
    >
      <Card shadow={true}>
        {/* Back to blog link */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center rounded-md bg-gray-50 px-3 py-2 font-SourceCodePro text-sm text-violet-600 transition-colors hover:bg-violet-50 dark:bg-dark-700 dark:text-violet-400 dark:hover:bg-dark-600"
          >
            <FiArrowLeft className="mr-2" />
            Back to all posts
          </Link>
        </div>

        {/* Featured image */}
        <div className="relative mb-12 h-64 w-full rounded-lg overflow-hidden sm:h-80 md:h-96 lg:h-[30rem]">
          <img
            src={post.thumbnailImage}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>

          {/* Categories overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                {post.categories.map((category, index) => (
                  <span key={index} className="rounded-full bg-violet-600/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {category}
                  </span>
                ))}
              </div>

              <h1 className="mb-4 font-ChillaxBold text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200">
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2" />
                  <span>{post.readingTime} min read</span>
                </div>
                <button
                  onClick={sharePost}
                  className="flex items-center text-white hover:text-violet-200"
                >
                  <FiShare2 className="mr-2" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0">
          {/* Post description/summary */}
          <div className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-dark-700">
            <p className="font-Fira text-base italic text-gray-700 dark:text-gray-300">
              {post.description}
            </p>
          </div>

          {/* Main content */}
          <article className="mb-12">
            <MarkdownRenderer content={post.content} />
          </article>

          {/* Tags */}
          <div className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-dark-700">
            <div className="mb-2 font-ChillaxBold text-lg text-dark-900 dark:text-white">Topics</div>
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog?tag=${tag}`}
                  className="rounded-full bg-white px-3 py-1 text-sm text-gray-800 shadow-sm transition-colors hover:bg-violet-50 hover:text-violet-700 dark:bg-dark-600 dark:text-gray-200 dark:hover:bg-dark-500"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author section */}
          <div className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-dark-700">
            <div className="flex items-center">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-violet-200 dark:bg-violet-900">
                <div className="flex h-full w-full items-center justify-center font-ChillaxBold text-xl text-violet-700 dark:text-violet-300">
                  {post.author.charAt(0)}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-ChillaxBold text-lg font-semibold text-dark-900 dark:text-white">
                  {post.author}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  AI and Machine Learning Engineer
                </p>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-8">
              <h2 className="mb-6 font-ChillaxBold text-2xl font-bold text-dark-900 dark:text-white">
                Related Posts
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-dark-800"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={relatedPost.thumbnailImage}
                        alt={relatedPost.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60"></div>
                    </div>
                    <div className="flex flex-grow flex-col p-4">
                      <h3 className="mb-2 font-ChillaxBold text-lg font-semibold text-dark-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
                        {relatedPost.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
                        {relatedPost.description}
                      </p>
                      <div className="mt-auto text-sm text-gray-500 dark:text-gray-400">
                        {relatedPost.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </m.div>
  );
};

export default BlogPost; 