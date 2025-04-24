// migrations/00-blog-post.mjs

export default function (migration) {
  // Create the Content Type
  const blogPost = migration.createContentType("blogPost", {
    name: "Blog Post",
    displayField: "title",
  });

  // Title field
  blogPost.createField("title", {
    name: "Title",
    type: "Symbol",
    required: true,
    validations: [{ unique: true }],
  });

  // Slug field
  blogPost
    .createField("slug", {
      name: "Slug",
      type: "Symbol",
      required: true,
      validations: [{ unique: true }],
    })
    .appearance({
      widgetId: "slugEditor", // use the slug widget
      settings: { generateFrom: "title" },
    });

  // Category field (single-select dropdown)
  blogPost
    .createField("category", {
      name: "Category",
      type: "Symbol",
      required: true,
      validations: [{ in: ["AI", "Web Dev", "Data Science", "General"] }],
    })
    .appearance({ widgetId: "dropdown" });

  // Description (excerpt)
  blogPost.createField("description", {
    name: "Description",
    type: "Symbol",
    validations: [{ size: { max: 160 } }],
  });

  // Content (Rich text)
  blogPost.createField("content", {
    name: "Content",
    type: "RichText",
    required: true,
    validations: [
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "table",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],
      },
    ],
  });

  // Author
  blogPost.createField("author", {
    name: "Author",
    type: "Symbol",
  });

  // Date
  blogPost.createField("date", {
    name: "Date",
    type: "Date",
    required: true,
  });

  // Featured Image
  blogPost.createField("featuredImage", {
    name: "Featured Image",
    type: "Link",
    linkType: "Asset",
    required: true,
    validations: [{ linkMimetypeGroup: ["image"] }],
  });

  // Tags (free‐form list of symbols, max 20 chars each)
  blogPost.createField("tags", {
    name: "Tags",
    type: "Array",
    items: {
      type: "Symbol",
      validations: [{ size: { max: 20 } }],
    },
  });

  // SEO fields
  blogPost.createField("seoTitle", {
    name: "SEO Title",
    type: "Symbol",
    validations: [{ size: { max: 60 } }],
  });

  blogPost.createField("seoDescription", {
    name: "SEO Description",
    type: "Symbol",
    validations: [{ size: { max: 155 } }],
  });

  blogPost.createField("seoKeywords", {
    name: "SEO Keywords",
    type: "Symbol",
    validations: [{ size: { max: 100 } }],
  });

  // Publish the content type
  blogPost.publish();
}
