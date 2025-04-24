import pkg from "contentful-management";
const { createClient } = pkg;

// Your Contentful Management Token and Space ID
const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.VITE_CONTENTFUL_SPACE_ID;

// Create management client
const client = createClient({
  accessToken,
});

// Helper function to delay execution
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function createBlogPostContentType() {
  try {
    console.log("Creating Blog Post content type...");

    // Get space and environment
    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment("master");

    // Check if content type already exists
    let contentType;
    try {
      contentType = await environment.getContentType("blogPost");
      console.log("Blog Post content type already exists. Skipping creation.");
    } catch (error) {
      // Content type doesn't exist, create it
      console.log("Creating new Blog Post content type...");
      contentType = await environment.createContentType({
        sys: {
          id: "blogPost",
        },
        name: "Blog Post",
        displayField: "title",
        fields: [
          {
            id: "title",
            name: "Title",
            type: "Symbol",
            required: true,
            validations: [{ unique: true }],
          },
          {
            id: "slug",
            name: "Slug",
            type: "Symbol",
            required: true,
            validations: [{ unique: true }],
          },
          {
            id: "category",
            name: "Category",
            type: "Symbol",
            required: true,
            validations: [{ in: ["AI", "Web Dev", "Data Science", "General"] }],
          },
          {
            id: "description",
            name: "Description",
            type: "Symbol",
            validations: [{ size: { max: 160 } }],
          },
          {
            id: "content",
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
          },
          {
            id: "author",
            name: "Author",
            type: "Symbol",
          },
          {
            id: "date",
            name: "Date",
            type: "Date",
            required: true,
          },
          {
            id: "featuredImage",
            name: "Featured Image",
            type: "Link",
            linkType: "Asset",
            required: true,
            validations: [{ linkMimetypeGroup: ["image"] }],
          },
          {
            id: "tags",
            name: "Tags",
            type: "Array",
            items: {
              type: "Symbol",
              validations: [{ size: { max: 20 } }],
            },
          },
          {
            id: "seoTitle",
            name: "SEO Title",
            type: "Symbol",
            validations: [{ size: { max: 60 } }],
          },
          {
            id: "seoDescription",
            name: "SEO Description",
            type: "Symbol",
            validations: [{ size: { max: 155 } }],
          },
          {
            id: "seoKeywords",
            name: "SEO Keywords",
            type: "Symbol",
            validations: [{ size: { max: 100 } }],
          },
        ],
      });
    }

    // Publish the content type
    if (!contentType.isPublished()) {
      console.log("Publishing Blog Post content type...");
      await contentType.publish();

      // Wait a moment for the content type to be properly published
      console.log("Waiting for content type to be available...");
      await delay(3000);
    }

    // Now update editor interfaces
    try {
      console.log("Updating editor interfaces...");
      const editorInterface =
        await environment.getEditorInterfaceForContentType("blogPost");

      // Set editor interfaces for specific fields
      const slugControl = editorInterface.controls.find(
        (control) => control.fieldId === "slug",
      );
      if (slugControl) {
        slugControl.widgetId = "slugEditor";
        slugControl.settings = { generateFrom: "title" };
      }

      const categoryControl = editorInterface.controls.find(
        (control) => control.fieldId === "category",
      );
      if (categoryControl) {
        categoryControl.widgetId = "dropdown";
      }

      // Update the editor interface
      await editorInterface.update();
      console.log("Editor interfaces updated successfully!");
    } catch (error) {
      console.warn(
        "Warning: Could not update editor interfaces:",
        error.message,
      );
    }

    console.log("Blog Post content type setup completed!");
  } catch (error) {
    console.error("Error creating Blog Post content type:", error);
  }
}

async function createPortfolioProjectContentType() {
  try {
    console.log("Creating Portfolio Project content type...");

    // Get space and environment
    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment("master");

    // Check if content type already exists
    let contentType;
    try {
      contentType = await environment.getContentType("portfolioProject");
      console.log(
        "Portfolio Project content type already exists. Skipping creation.",
      );
    } catch (error) {
      // Content type doesn't exist, create it
      console.log("Creating new Portfolio Project content type...");
      contentType = await environment.createContentType({
        sys: {
          id: "portfolioProject",
        },
        name: "Portfolio Project",
        displayField: "title",
        fields: [
          {
            id: "title",
            name: "Title",
            type: "Symbol",
            required: true,
            validations: [{ unique: true }],
          },
          {
            id: "slug",
            name: "Slug",
            type: "Symbol",
            required: true,
            validations: [{ unique: true }],
          },
          {
            id: "category",
            name: "Category",
            type: "Symbol",
            validations: [
              { in: ["Web App", "ML Project", "Data Visualization", "Other"] },
            ],
          },
          {
            id: "description",
            name: "Description",
            type: "Symbol",
          },
          {
            id: "date",
            name: "Date",
            type: "Date",
          },
          {
            id: "mainImage",
            name: "Main Image",
            type: "Link",
            linkType: "Asset",
            validations: [{ linkMimetypeGroup: ["image"] }],
          },
          {
            id: "additionalImages",
            name: "Additional Images",
            type: "Array",
            items: {
              type: "Link",
              linkType: "Asset",
              validations: [{ linkMimetypeGroup: ["image"] }],
            },
          },
          {
            id: "tags",
            name: "Tags",
            type: "Array",
            items: {
              type: "Symbol",
              validations: [{ size: { max: 20 } }],
            },
          },
          {
            id: "overview",
            name: "Overview",
            type: "Text",
          },
          {
            id: "githubUrl",
            name: "GitHub URL",
            type: "Symbol",
            validations: [
              {
                regexp: {
                  pattern: "^(https?:\\/\\/)?(www\\.)?github\\.com\\/.+",
                },
              },
            ],
          },
          {
            id: "liveDemoUrl",
            name: "Live Demo URL",
            type: "Symbol",
            validations: [{ regexp: { pattern: "^(https?:\\/\\/).*" } }],
          },
          {
            id: "technologiesUsed",
            name: "Technologies Used",
            type: "Array",
            items: {
              type: "Symbol",
            },
          },
        ],
      });
    }

    // Publish the content type
    if (!contentType.isPublished()) {
      console.log("Publishing Portfolio Project content type...");
      await contentType.publish();

      // Wait a moment for the content type to be properly published
      console.log("Waiting for content type to be available...");
      await delay(3000);
    }

    // Now update editor interfaces
    try {
      console.log("Updating editor interfaces...");
      const editorInterface =
        await environment.getEditorInterfaceForContentType("portfolioProject");

      // Set editor interfaces for specific fields
      const slugControl = editorInterface.controls.find(
        (control) => control.fieldId === "slug",
      );
      if (slugControl) {
        slugControl.widgetId = "slugEditor";
        slugControl.settings = { generateFrom: "title" };
      }

      const categoryControl = editorInterface.controls.find(
        (control) => control.fieldId === "category",
      );
      if (categoryControl) {
        categoryControl.widgetId = "dropdown";
      }

      const overviewControl = editorInterface.controls.find(
        (control) => control.fieldId === "overview",
      );
      if (overviewControl) {
        overviewControl.widgetId = "markdown";
      }

      // Update the editor interface
      await editorInterface.update();
      console.log("Editor interfaces updated successfully!");
    } catch (error) {
      console.warn(
        "Warning: Could not update editor interfaces:",
        error.message,
      );
    }

    console.log("Portfolio Project content type setup completed!");
  } catch (error) {
    console.error("Error creating Portfolio Project content type:", error);
  }
}

// Run the content type creation
async function init() {
  try {
    await createBlogPostContentType();
    await createPortfolioProjectContentType();
    console.log("All content types created successfully!");
  } catch (error) {
    console.error("Error in content type creation:", error);
  }
}

init();
