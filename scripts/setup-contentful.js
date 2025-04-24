import { exec } from "child_process";
import pkg from "contentful-management";
import { promisify } from "util";
const { createClient } = pkg;

const execAsync = promisify(exec);

// Your Contentful Management Token and Space ID
const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.VITE_CONTENTFUL_SPACE_ID;

async function setupContentful() {
  try {
    console.log("Starting Contentful setup process...");

    // Step 1: Update the Portfolio Project content model
    console.log("Step 1: Updating the Portfolio Project content model...");
    const updateModelResult = await execAsync(
      "node scripts/update-portfolio-model.js",
    );
    console.log(updateModelResult.stdout);

    // Wait a bit for the content model to be properly updated
    console.log("Waiting for content model updates to propagate...");
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Step 2: Import the portfolio data
    console.log("Step 2: Importing portfolio project data...");
    const importDataResult = await execAsync(
      "node scripts/import-portfolio-data.js",
    );
    console.log(importDataResult.stdout);

    console.log("Contentful setup completed successfully!");
  } catch (error) {
    console.error("Error during Contentful setup:", error);
    if (error.stdout) console.log("Output:", error.stdout);
    if (error.stderr) console.error("Error output:", error.stderr);
  }
}

setupContentful().catch(console.error);
