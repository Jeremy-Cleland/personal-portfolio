import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

/**
 * Markdown renderer component that converts markdown text to formatted HTML
 * Uses react-markdown with GitHub Flavored Markdown support
 */
const MarkdownRenderer = ({ content, className }) => {
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
          h1: ({ node, ...props }) => (
            <h1 
              className="text-3xl font-bold mt-10 mb-6 leading-tight font-ChillaxBold text-dark-900 dark:text-white" 
              {...props} 
            />
          ),
          h2: ({ node, ...props }) => (
            <h2 
              className="text-2xl font-semibold mt-10 mb-5 pb-2 border-b border-gray-200 dark:border-gray-700 font-ChillaxBold text-dark-900 dark:text-white" 
              {...props} 
            />
          ),
          h3: ({ node, ...props }) => (
            <h3 
              className="text-xl font-medium mt-8 mb-4 font-ChillaxBold text-gray-800 dark:text-gray-100" 
              {...props} 
            />
          ),
          h4: ({ node, ...props }) => (
            <h4 
              className="text-lg font-medium mt-6 mb-3 font-ChillaxBold text-gray-700 dark:text-gray-200" 
              {...props} 
            />
          ),
          p: ({ node, ...props }) => (
            <p className="my-5 leading-7 text-gray-800 dark:text-gray-200" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a 
              className="text-violet-600 dark:text-violet-400 font-medium no-underline hover:underline" 
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
              <div className="overflow-hidden rounded-lg my-6 mx-0 bg-dark-800 border border-gray-700">
                <SyntaxHighlighter
                  style={atomDark}
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
                className="px-1.5 py-0.5 rounded-md font-SourceCodePro bg-gray-100 text-violet-700 dark:bg-dark-700 dark:text-violet-300"
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
              className="border-l-4 border-violet-400 pl-6 py-1 my-6 font-medium italic bg-gray-50 dark:bg-dark-700 rounded-r-lg pr-4 text-gray-700 dark:text-gray-300" 
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
  className: PropTypes.string
};

export default MarkdownRenderer; 