import { motion as m } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiCalendar, FiClock, FiFacebook, FiLinkedin, FiList, FiShare2, FiTwitter } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import profilePic from "../../assets/images/profilePic.webp";
import BlogPostSchema from "../../components/Schema/BlogPostSchema";
import Card from "../../components/reusable/Card.jsx";
import MarkdownRenderer from "../../components/reusable/MarkdownRenderer.jsx";
import { BlogContext } from "../../context/BlogContext.jsx";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getPostBySlug, getRelatedPosts } = useContext(BlogContext);
  const [showToc, setShowToc] = useState(false);
  const [headings, setHeadings] = useState([]);
  const articleRef = useRef(null);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const post = getPostBySlug(slug);

  // Extract headings from content for TOC
  useEffect(() => {
    if (post) {
      // Use regex to extract all headings (## Heading) from markdown content
      const headingRegex = /^(#{2,3})\s+(.+)$/gm;
      const matches = [...post.content.matchAll(headingRegex)];
      
      const extractedHeadings = matches.map((match, index) => {
        const level = match[1].length; // Number of # symbols
        const text = match[2];
        const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
        
        return {
          id,
          text,
          level,
          index
        };
      });
      
      setHeadings(extractedHeadings);
    }
  }, [post]);

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

    // Cleanup on unmount
    return () => {
      document.title = "Jeremy Cleland - Portfolio";
    };
  }, [post, navigate]);

  // Scroll to heading when clicking TOC item
  const scrollToHeading = (id) => {
    const headingElement = document.getElementById(id);
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!post) return null;

  // Get related posts
  const relatedPosts = getRelatedPosts(post.id, 2);

  // Share to social media
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(post.title);
  const pageDescription = encodeURIComponent(post.description);

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${pageTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}&summary=${pageDescription}`
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      }).catch(err => {
        console.error('Share failed:', err);
      });
    } else {
      // Fallback if Web Share API isn't available
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 3000);
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto"
    >
      {/* Add Schema.org structured data */}
      <BlogPostSchema post={post} />
      
      <Card shadow={true}>
        {/* Back to blog link */}
        <div className="mx-auto max-w-3xl px-4 lg:px-0">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center rounded-lg bg-white border-2 border-orange-400/30 px-3 py-2 font-SourceCodePro text-sm text-gray-700 transition-colors hover:border-orange-400/50 hover:bg-orange-50 hover:text-orange-600 dark:bg-dark-600 dark:text-gray-300 dark:border-orange-400/30 dark:hover:border-orange-400/50 dark:hover:bg-dark-700 dark:hover:text-orange-400"
          >
            <FiArrowLeft className="mr-2" />
            Back to all posts
          </Link>
        </div>

        {/* Featured image - removed rounded-lg from this div */}
        <div className="relative mb-12 h-64 w-full overflow-hidden sm:h-80 md:h-96 lg:h-[30rem]">
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
                  <span key={index} className="rounded-full bg-orange-400 border-2 border-orange-400 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
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
                <div className="relative">
                  <button
                    onClick={sharePost}
                    className="flex items-center text-white hover:text-orange-400 transition-colors"
                    aria-label="Share this post"
                  >
                    <FiShare2 className="mr-2" />
                    <span>Share</span>
                  </button>
                  {showShareTooltip && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-orange-400 px-3 py-1 text-xs text-white shadow-lg border border-orange-500">
                      URL copied!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 lg:px-0">
          {/* Post description/summary */}
          <div className="mb-8 rounded-lg border border-orange-400/20 bg-gray-50 p-6 dark:border-orange-400/30 dark:bg-dark-900">
            <p className="font-Fira text-base italic text-gray-700 dark:text-gray-300">
              {post.description}
            </p>
          </div>

          {/* Social Sharing Buttons (Desktop) */}
          <div className="hidden lg:block sticky top-40 float-left -ml-20 space-y-4">
            <a
              href={shareUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-orange-600 hover:text-white dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-orange-500 dark:hover:text-white"
              aria-label="Share on Twitter"
            >
              <FiTwitter />
            </a>
            <a
              href={shareUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-orange-600 hover:text-white dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-orange-500 dark:hover:text-white"
              aria-label="Share on LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={shareUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-orange-600 hover:text-white dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-orange-500 dark:hover:text-white"
              aria-label="Share on Facebook"
            >
              <FiFacebook />
            </a>
          </div>

          {/* Social Sharing Buttons (Mobile) */}
          <div className="mb-8 flex justify-center space-x-4 lg:hidden">
            <a
              href={shareUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-orange-600 hover:text-white dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-orange-500 dark:hover:text-white"
              aria-label="Share on Twitter"
            >
              <FiTwitter />
            </a>
            <a
              href={shareUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-orange-600 hover:text-white dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-orange-500 dark:hover:text-white"
              aria-label="Share on LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={shareUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-orange-600 hover:text-white dark:bg-dark-900 dark:text-gray-300 dark:hover:bg-orange-400 dark:hover:text-white"
              aria-label="Share on Facebook"
            >
              <FiFacebook />
            </a>
          </div>

          {/* Table of Contents - Desktop */}
          {headings.length > 0 && (
            <div className="hidden lg:block sticky top-8 float-right ml-8 w-64 rounded-lg border border-orange-400/30 bg-gray-50 p-4 dark:border-orange-400/30 dark:bg-dark-900">
              <h4 className="mb-3 flex items-center font-ChillaxBold text-base text-dark-900 dark:text-white">
                <FiList className="mr-2" />
                Table of Contents
              </h4>
              <nav className="toc-nav">
                <ul className="space-y-2 text-sm">
                  {headings.map((heading) => (
                    <li 
                      key={heading.id}
                      style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}
                    >
                      <button
                        onClick={() => scrollToHeading(heading.id)}
                        className="text-left text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400"
                      >
                        {heading.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Table of Contents - Mobile Toggle */}
          {headings.length > 0 && (
            <div className="lg:hidden mb-6">
              <button 
                onClick={() => setShowToc(!showToc)}
                className="flex w-full items-center justify-between rounded-lg border border-orange-400/30 bg-gray-50 p-4 dark:border-orange-400/30 dark:bg-dark-900"
              >
                <span className="flex items-center font-ChillaxBold text-dark-900 dark:text-white">
                  <FiList className="mr-2" />
                  Table of Contents
                </span>
                <svg 
                  className={`h-5 w-5 transform transition-transform ${showToc ? 'rotate-180' : ''} text-gray-600 dark:text-gray-300`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showToc && (
                <div className="mt-2 rounded-lg border border-orange-400/30 bg-gray-50 p-4 dark:border-orange-400/30 dark:bg-dark-900">
                  <nav className="toc-nav">
                    <ul className="space-y-2 text-sm">
                      {headings.map((heading) => (
                        <li 
                          key={heading.id}
                          style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}
                        >
                          <button
                            onClick={() => {
                              scrollToHeading(heading.id);
                              setShowToc(false);
                            }}
                            className="text-left text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400"
                          >
                            {heading.text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          )}

          {/* Main content */}
          <article ref={articleRef} className="mb-12">
            <MarkdownRenderer 
              content={post.content}
              enhanceToc={true} // Signal to add ids to headings for TOC
            />
          </article>

          {/* Tags */}
          <div className="mb-12 rounded-lg border border-orange-400/30 bg-gray-50 p-6 dark:border-orange-400/30 dark:bg-dark-900">
            <div className="mb-2 font-ChillaxBold text-lg text-dark-900 dark:text-white">Topics</div>
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog?tag=${tag}`}
                  className="rounded-full bg-white border-2 border-orange-400/30 px-3 py-1 text-sm text-gray-700 transition-colors hover:border-orange-400/50 hover:bg-orange-50 hover:text-orange-600 dark:bg-dark-600 dark:text-gray-300 dark:border-orange-400/30 dark:hover:border-orange-400/50 dark:hover:bg-dark-700 dark:hover:text-orange-400"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author section */}
          <div className="mb-12 rounded-lg border border-orange-400/30 bg-gray-50 p-6 shadow-sm dark:border-orange-400/30 dark:bg-dark-900">
            <div className="flex items-center">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                <img 
                  src={profilePic} 
                  alt={post.author} 
                  className="h-full w-full object-cover"
                />
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
                    className="group flex flex-col overflow-hidden rounded-lg border border-orange-400/30 bg-white shadow-sm transition-all hover:shadow-md dark:border-orange-400/30 dark:bg-dark-900" 
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
                      <h3 className="mb-2 font-ChillaxBold text-lg font-semibold text-dark-900 group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
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