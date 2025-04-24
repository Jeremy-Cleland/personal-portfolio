import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { useMemo } from 'react';

const RichTextRenderer = ({ content }) => {
  if (!content) {
    return null;
  }

  // Memoize options to prevent recreation on every render
  const options = useMemo(() => ({
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.CODE]: (text) => <code className="bg-gray-100 dark:bg-dark-700 p-1 rounded font-mono text-sm">{text}</code>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-3xl font-ChillaxBold font-bold mb-4 mt-8">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-ChillaxSemiBold font-semibold mb-3 mt-6">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-xl font-ChillaxMedium font-medium mb-2 mt-5">{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-lg font-ChillaxMedium font-medium mb-2 mt-4">{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-base font-ChillaxMedium font-medium mb-2 mt-3">{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-sm font-ChillaxMedium font-medium mb-2 mt-2">{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-8 mb-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-8 mb-4">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-1">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-orange-200 dark:border-orange-500 pl-4 py-1 mb-4 italic">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />,
      [BLOCKS.TABLE]: (node, children) => (
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            {children}
          </table>
        </div>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
      [BLOCKS.TABLE_CELL]: (node, children) => <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">{children}</td>,
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
        <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-bold text-left bg-gray-100 dark:bg-dark-700">
          {children}
        </th>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a 
          href={node.data.uri} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-orange-500 hover:text-orange-700 dark:hover:text-orange-300 underline"
        >
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const { url, contentType } = file;
        
        if (contentType.includes('image')) {
          return (
            <div className="my-6">
              <img 
                src={url} 
                alt={description || title || 'Embedded image'} 
                className="mx-auto rounded-lg shadow-md max-w-full" 
              />
              {description && (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {description}
                </p>
              )}
            </div>
          );
        } else if (contentType.includes('video')) {
          return (
            <div className="my-6">
              <video 
                controls 
                className="mx-auto rounded-lg shadow-md max-w-full"
              >
                <source src={url} type={contentType} />
                Your browser does not support the video tag.
              </video>
              {description && (
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {description}
                </p>
              )}
            </div>
          );
        } else {
          return (
            <div className="my-6">
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block p-4 border border-gray-300 dark:border-gray-700 rounded-lg text-center hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors"
              >
                📎 {title || 'Download file'}
              </a>
            </div>
          );
        }
      },
      // Add support for embedded entries
      [BLOCKS.EMBEDDED_ENTRY_BLOCK]: (node) => {
        // Handle embedded entries - implement based on your entry types
        const { contentType, fields } = node.data.target.sys;
        
        // Example implementation - customize according to your embedded entry types
        return (
          <div className="my-6 p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
            <p className="font-bold">{fields?.title || 'Embedded Entry'}</p>
            {fields?.description && <p>{fields.description}</p>}
          </div>
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        // Handle entry hyperlinks
        return (
          <span className="text-orange-500 hover:text-orange-700 dark:hover:text-orange-300 underline">
            {children}
          </span>
        );
      }
    },
  }), []); // Empty dependency array as options don't depend on props

  return <div className="rich-text">{documentToReactComponents(content, options)}</div>;
};

export default RichTextRenderer; 