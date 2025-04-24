import pkg from "contentful-management";
const { createClient } = pkg;

// Your Contentful Management Token and Space ID
const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.VITE_CONTENTFUL_SPACE_ID;

// Create management client
const client = createClient({
  accessToken,
});

async function updatePortfolioContentType() {
  try {
    console.log("Updating Portfolio Project content type...");

    // Get space and environment
    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment("master");

    // Get the existing content type
    const contentType = await environment.getContentType("portfolioProject");
    console.log(
      "Found Portfolio Project content type. Adding missing fields...",
    );

    // Add features field if it doesn't exist
    if (!contentType.fields.find((field) => field.id === "features")) {
      contentType.fields.push({
        id: "features",
        name: "Features",
        type: "Array",
        items: {
          type: "Symbol",
        },
        required: false,
        localized: false,
        omitted: false,
      });
      console.log("Added features field");
    }

    // Add visualizations field if it doesn't exist
    if (!contentType.fields.find((field) => field.id === "visualizations")) {
      contentType.fields.push({
        id: "visualizations",
        name: "Visualizations",
        type: "Array",
        items: {
          type: "Object",
          validations: [],
          linkType: null,
        },
        required: false,
        localized: false,
        omitted: false,
      });
      console.log("Added visualizations field");
    }

    // Add performance field if it doesn't exist
    if (!contentType.fields.find((field) => field.id === "performance")) {
      contentType.fields.push({
        id: "performance",
        name: "Performance",
        type: "Object",
        required: false,
        localized: false,
        omitted: false,
      });
      console.log("Added performance field");
    }

    // Add links field if it doesn't exist
    if (!contentType.fields.find((field) => field.id === "links")) {
      contentType.fields.push({
        id: "links",
        name: "Links",
        type: "Array",
        items: {
          type: "Object",
          validations: [],
          linkType: null,
        },
        required: false,
        localized: false,
        omitted: false,
      });
      console.log("Added links field");
    }

    // Add team field if it doesn't exist
    if (!contentType.fields.find((field) => field.id === "team")) {
      contentType.fields.push({
        id: "team",
        name: "Team",
        type: "Array",
        items: {
          type: "Object",
          validations: [],
          linkType: null,
        },
        required: false,
        localized: false,
        omitted: false,
      });
      console.log("Added team field");
    }

    // Update and publish the content type
    const updatedContentType = await contentType.update();

    // Check if it's already published and publish if needed
    if (!updatedContentType.isPublished()) {
      await updatedContentType.publish();
      console.log("Published updated content type");
    } else {
      // If already published, we need to republish to apply changes
      console.log(
        "Content type already published, republishing with changes...",
      );
      await updatedContentType.unpublish();
      await updatedContentType.publish();
    }

    console.log("Portfolio Project content type updated successfully!");
  } catch (error) {
    console.error("Error updating Portfolio Project content type:", error);
  }
}

// Run the update
updatePortfolioContentType()
  .then(() => console.log("Done!"))
  .catch(console.error);
