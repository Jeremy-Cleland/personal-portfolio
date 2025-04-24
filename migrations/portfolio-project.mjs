// migrations/portfolio-project.mjs

export default function (migration) {
  // Create the Content Type
  const portfolioProject = migration.createContentType("portfolioProject", {
    name: "Portfolio Project",
    displayField: "title",
  });

  // Title field
  portfolioProject.createField("title", {
    name: "Title",
    type: "Symbol",
    required: true,
    validations: [{ unique: true }],
  });

  // Slug field
  portfolioProject
    .createField("slug", {
      name: "Slug",
      type: "Symbol",
      required: true,
      validations: [{ unique: true }],
    })
    .appearance({
      widgetId: "slugEditor",
      settings: { generateFrom: "title" },
    });

  // Category field (single-select dropdown)
  portfolioProject
    .createField("category", {
      name: "Category",
      type: "Symbol",
      validations: [
        { in: ["Web App", "ML Project", "Data Visualization", "Other"] },
      ],
    })
    .appearance({ widgetId: "dropdown" });

  // Description
  portfolioProject.createField("description", {
    name: "Description",
    type: "Symbol",
  });

  // Date
  portfolioProject.createField("date", {
    name: "Date",
    type: "Date",
  });

  // Main Image
  portfolioProject.createField("mainImage", {
    name: "Main Image",
    type: "Link",
    linkType: "Asset",
    validations: [{ linkMimetypeGroup: ["image"] }],
  });

  // Additional Images
  portfolioProject.createField("additionalImages", {
    name: "Additional Images",
    type: "Array",
    items: {
      type: "Link",
      linkType: "Asset",
      validations: [{ linkMimetypeGroup: ["image"] }],
    },
  });

  // Tags
  portfolioProject.createField("tags", {
    name: "Tags",
    type: "Array",
    items: {
      type: "Symbol",
      validations: [{ size: { max: 20 } }],
    },
  });

  // Overview (markdown)
  portfolioProject
    .createField("overview", {
      name: "Overview",
      type: "Text",
    })
    .appearance({
      widgetId: "markdown",
    });

  // GitHub URL
  portfolioProject.createField("githubUrl", {
    name: "GitHub URL",
    type: "Symbol",
    validations: [
      { regexp: { pattern: "^(https?:\\/\\/)?(www\\.)?github\\.com\\/.+" } },
    ],
  });

  // Live Demo URL
  portfolioProject.createField("liveDemoUrl", {
    name: "Live Demo URL",
    type: "Symbol",
    validations: [{ regexp: { pattern: "^(https?:\\/\\/).*" } }],
  });

  // Technologies Used
  portfolioProject.createField("technologiesUsed", {
    name: "Technologies Used",
    type: "Array",
    items: {
      type: "Symbol",
    },
  });

  // Publish the content type
  portfolioProject.publish();
}
