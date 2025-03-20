import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

/**
 * Markdown renderer component that converts markdown text to formatted HTML
 * Uses react-markdown with GitHub Flavored Markdown support
 */
const MarkdownRenderer = ({ content, className, enhanceToc }) => {
  return (
    <div className={`
      prose prose-lg max-w-none 
      dark:prose-invert 
      
      /* Base heading styles */
      prose-headings:font-ChillaxBold
      prose-headings:tracking-tight
      prose-headings:text-dark-900 
      dark:prose-headings:text-white
      
      ${className || ''}
    `}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, children, ...props }) => {
            // Generate an ID for ToC linking if enhanceToc is true
            const id = enhanceToc ? children.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-') : undefined;
            return (
              <h1 
                id={id}
                className="text-3xl font-bold mt-10 mb-6 leading-tight font-ChillaxBold text-dark-900 dark:text-white" 
                {...props} 
              >
                {children}
              </h1>
            );
          },
          h2: ({ node, children, ...props }) => {
            // Generate an ID for ToC linking if enhanceToc is true
            const id = enhanceToc ? children.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-') : undefined;
            return (
              <h2 
                id={id}
                className="text-2xl font-semibold mt-10 mb-5 pb-2 border-b border-orange-400/30 dark:border-orange-400/30 font-ChillaxBold text-dark-900 dark:text-white" 
                {...props} 
              >
                {children}
              </h2>
            );
          },
          h3: ({ node, children, ...props }) => {
            // Generate an ID for ToC linking if enhanceToc is true
            const id = enhanceToc ? children.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-') : undefined;
            return (
              <h3 
                id={id}
                className="text-xl font-medium mt-8 mb-4 font-ChillaxBold text-gray-800 dark:text-gray-100" 
                {...props} 
              >
                {children}
              </h3>
            );
          },
          h4: ({ node, children, ...props }) => {
            // Generate an ID for ToC linking if enhanceToc is true
            const id = enhanceToc ? children.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-') : undefined;
            return (
              <h4 
                id={id}
                className="text-lg font-medium mt-6 mb-3 font-ChillaxBold text-gray-700 dark:text-gray-200" 
                {...props} 
              >
                {children}
              </h4>
            );
          },
          p: ({ node, ...props }) => (
            <p className="my-5 leading-7 text-gray-800 dark:text-gray-200" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a 
              className="text-orange-600 dark:text-orange-400 font-medium no-underline hover:underline" 
              {...props} 
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="my-5 list-disc pl-5" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="my-5 list-decimal pl-5" {...props} />
          ),
          // Syntax highlighting for inline code
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="overflow-hidden rounded-lg my-6 mx-0 bg-dark-600 border border-dark-200">
                <div className="flex items-center justify-between px-4 py-2 bg-dark-900 border-b border-dark-700">
                  <span className="text-xs font-medium uppercase text-gray-400">{match[1]}</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-orange-600/60"></div>
                    <div className="w-3 h-3 rounded-full bg-orange-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-orange-400/60"></div>
                  </div>
                </div>
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    padding: '1rem',
                    borderRadius: 0,
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    backgroundColor: 'transparent',
                  }}
                  codeTagProps={{
                    className: 'font-SourceCodePro'
                  }}
                  wrapLines={true}
                  wrapLongLines={true}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code
                className="px-1.5 py-0.5 rounded-lg font-SourceCodePro bg-gray-100 text-orange-700 dark:bg-dark-900 dark:text-orange-400"
                {...props}
              >
                {children}
              </code>
            );
          },
          // Removed pre component since SyntaxHighlighter handles it
          img: ({ node, ...props }) => (
            <img 
              className="rounded-lg shadow-md mx-auto my-8" 
              {...props} 
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote 
              className="border-l-4 border-orange-600 pl-6 py-1 my-6 font-medium italic bg-gray-50 dark:bg-dark-600 rounded-r-lg pr-4 text-gray-700 dark:text-gray-300" 
              {...props} 
            />
          ),
          table: ({ node, ...props }) => (
            <div className="my-8 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-gray-50 dark:bg-dark-900" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th 
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300" 
              {...props} 
            />
          ),
          td: ({ node, ...props }) => (
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr 
              className="transition-colors hover:bg-gray-50 dark:hover:bg-dark-600" 
              {...props} 
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

MarkdownRenderer.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  enhanceToc: PropTypes.bool
};

export default MarkdownRenderer; 