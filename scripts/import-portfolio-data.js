import pkg from "contentful-management";
const { createClient } = pkg;

// Your Contentful Management Token and Space ID
const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.VITE_CONTENTFUL_SPACE_ID;

// Create management client
const client = createClient({
  accessToken,
});

async function importSepsisProject() {
  try {
    console.log("Importing Sepsis Prediction Pipeline project...");

    // Get space and environment
    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment("master");

    // Check if entry already exists
    try {
      const existingEntry = await environment.getEntry(
        "sepsis-prediction-pipeline",
      );
      console.log("Sepsis project entry already exists, updating...");

      // Update fields
      existingEntry.fields = createSepsisEntryFields();

      // Update the entry
      const updatedEntry = await existingEntry.update();

      // Publish the entry
      if (!updatedEntry.isPublished()) {
        await updatedEntry.publish();
      } else {
        await updatedEntry.unpublish();
        await updatedEntry.publish();
      }

      console.log("Updated and published existing Sepsis project entry");
      return;
    } catch (error) {
      // Entry doesn't exist, will create new one
      console.log("Creating new Sepsis project entry...");
    }

    // Create a new entry
    const entry = await environment.createEntry("portfolioProject", {
      sys: {
        id: "sepsis-prediction-pipeline",
      },
      fields: createSepsisEntryFields(),
    });

    // Publish the entry
    await entry.publish();

    console.log(
      "Sepsis Prediction Pipeline project imported and published successfully!",
    );
  } catch (error) {
    console.error("Error importing Sepsis project:", error);
  }
}

function createSepsisEntryFields() {
  return {
    title: { "en-US": "Sepsis Prediction Pipeline" },
    slug: { "en-US": "sepsis-prediction-pipeline" },
    category: { "en-US": "ML Project" },
    description: {
      "en-US":
        "Advanced machine learning pipeline for early sepsis detection using Random Forest, XGBoost, and Logistic Regression models.",
    },
    date: { "en-US": "2024-10-15T00:00:00Z" },

    mainImage: {
      "en-US": {
        sys: { type: "Link", linkType: "Asset", id: "42j1CAVCKRoEyqLxXIeXZz" },
      },
    },
    additionalImages: {
      "en-US": [
        {
          sys: {
            type: "Link",
            linkType: "Asset",
            id: "2FDBnZb1EHj0DpNsIkieKo",
          },
        },
        {
          sys: {
            type: "Link",
            linkType: "Asset",
            id: "7FDDYDkMjYtBZnr8Hslq3A",
          },
        },
      ],
    },

    tags: {
      "en-US": ["Machine Learning", "Healthcare AI", "Data Science", "Python"],
    },

    overview: {
      "en-US":
        "The pipeline involves a meticulous process for detecting sepsis using patient-level data:\n\n- **Data Handling:** Missing values handled via MICE, categorical encoding & robust scaling.\n- **Feature Engineering:** Automated column dropping, log transforms & feature interactions.\n- **Model Training:** Random Forest, XGBoost, Logistic Regression tuned via Optuna.\n- **Evaluation:** AUROC, Precision, Recall, F1 logged with custom visual reports.\n- **Deployment:** Model registry with versioning & metadata for reproducibility.",
    },

    technologiesUsed: {
      "en-US": [
        "Python",
        "Scikit-learn",
        "TensorFlow",
        "Pandas",
        "NumPy",
        "Database Management",
      ],
    },

    features: {
      "en-US": [
        "Patient-level data splitting to avoid leakage",
        "Iterative imputation (MICE), log transform & robust scaling",
        "Automated feature engineering & encoding",
        "Optuna-driven hyperparameter search",
        "Full metrics logging & calibration plots",
        "Model registry with versioned artifacts",
      ],
    },

    visualizations: {
      "en-US": [
        {
          title: "ROC Curve – XGBoost",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "1g11tl6RWVpkLIbQFbDW6W",
            },
          },
          description:
            "Receiver Operating Characteristic curve for tuned XGBoost (AUC=0.96).",
        },
        {
          title: "Precision-Recall Curve – XGBoost",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "4u7tqN1iRrXLBWg6a1zygi",
            },
          },
          description: "Precision-Recall curve for tuned XGBoost.",
        },
        {
          title: "ROC Curve – Random Forest",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "4gesgCvyD7LJmEPtQ7zfS7",
            },
          },
          description: "ROC curve for tuned Random Forest (AUC=0.97).",
        },
        {
          title: "Precision-Recall Curve – Random Forest",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "Vw8whkcLi73AyG2MXE0Fq",
            },
          },
          description: "Precision-Recall curve for tuned Random Forest.",
        },
        {
          title: "ROC Curve – Logistic Regression",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "5sOAAuP9B05TWbhcsFtBgl",
            },
          },
          description: "ROC curve for tuned Logistic Regression (AUC=0.90).",
        },
        {
          title: "Precision-Recall Curve – Logistic Regression",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "56A9BE9RUosBl4bdsNyLzq",
            },
          },
          description: "Precision-Recall curve for tuned Logistic Regression.",
        },
      ],
    },

    performance: {
      "en-US": {
        randomForest: {
          auroc: 0.976,
          f1: 0.5594,
          precision: 0.528,
          recall: 0.5948,
        },
        xgboost: {
          auroc: 0.9998,
          f1: 0.2591,
          precision: 0.2399,
          recall: 0.8721,
        },
        logisticRegression: {
          auroc: 0.8955,
          f1: 0.783,
          precision: 0.7164,
          recall: 0.8858,
        },
      },
    },

    links: {
      "en-US": [
        {
          title: "Repository",
          url: "https://github.com/Jeremy-Cleland/sepsis-early-detection",
        },
        {
          title: "Documentation",
          url: "https://github.com/Jeremy-Cleland/sepsis-early-detection",
        },
      ],
    },

    team: {
      "en-US": [{ name: "Jeremy Cleland", role: "Graduate Student" }],
    },
  };
}

async function importPlantDocProject() {
  try {
    console.log("Importing PlantDoc project...");

    // Get space and environment
    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment("master");

    // Check if entry already exists
    try {
      const existingEntry = await environment.getEntry(
        "plantdoc-plant-disease-classification",
      );
      console.log("PlantDoc project entry already exists, updating...");

      // Update fields
      existingEntry.fields = createPlantDocEntryFields();

      // Update the entry
      const updatedEntry = await existingEntry.update();

      // Publish the entry
      if (!updatedEntry.isPublished()) {
        await updatedEntry.publish();
      } else {
        await updatedEntry.unpublish();
        await updatedEntry.publish();
      }

      console.log("Updated and published existing PlantDoc project entry");
      return;
    } catch (error) {
      // Entry doesn't exist, will create new one
      console.log("Creating new PlantDoc project entry...");
    }

    // Create a new entry
    const entry = await environment.createEntry("portfolioProject", {
      sys: {
        id: "plantdoc-plant-disease-classification",
      },
      fields: createPlantDocEntryFields(),
    });

    // Publish the entry
    await entry.publish();

    console.log("PlantDoc project imported and published successfully!");
  } catch (error) {
    console.error("Error importing PlantDoc project:", error);
  }
}

function createPlantDocEntryFields() {
  return {
    title: { "en-US": "PlantDoc: Plant Disease Classification" },
    slug: { "en-US": "plantdoc-plant-disease-classification" },
    category: { "en-US": "ML Project" },
    description: {
      "en-US":
        "State-of-the-art plant disease classification with CBAM-augmented ResNet18",
    },
    date: { "en-US": "2024-08-17T00:00:00Z" },

    mainImage: {
      "en-US": {
        sys: { type: "Link", linkType: "Asset", id: "6e2odzWNmBeE7xlzL82PAY" },
      },
    },
    additionalImages: {
      "en-US": [
        {
          sys: {
            type: "Link",
            linkType: "Asset",
            id: "1k1jyIgGrcXtYqCuPNaQ09",
          },
        },
      ],
    },

    tags: { "en-US": ["Computer Vision", "CNN", "Attention", "PyTorch"] },

    overview: {
      "en-US":
        "PlantDoc is a complete implementation of a plant disease classification system using a CBAM (Convolutional Block Attention Module) augmented ResNet18 architecture. Plant diseases cause significant crop losses worldwide, and early, accurate detection is crucial for sustainable agriculture. This project implements a state-of-the-art deep learning approach to identify 39 plant disease classes using dual attention mechanisms for enhanced performance.",
    },

    technologiesUsed: {
      "en-US": ["Python", "PyTorch", "NumPy", "Pandas", "OpenCV"],
    },

    features: {
      "en-US": [
        "Integration of CBAM attention modules into ResNet18 architecture",
        "Advanced data augmentation and preprocessing with Albumentations",
        "Class balancing techniques for improved performance on imbalanced data",
        "Mixed precision training (FP16) and cosine annealing learning rate scheduling",
        "Comprehensive model evaluation dashboards with ROC, PR curves, and Grad-CAM visualizations",
      ],
    },

    visualizations: {
      "en-US": [
        {
          title: "Model Evaluation Dashboard",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "77dePmtCQnsvV8Zj2bI7Yf",
            },
          },
          description:
            "Dashboard showing classification examples, confidence distributions, and confusion matrix",
        },
        {
          title: "Classification Examples",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "1Gs6DlPO2KL1Dom3Tf23mZ",
            },
          },
          description: "Examples of correct vs incorrect classifications",
        },
        {
          title: "Confidence Distribution",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "2FFlFvnqHiIy1p0JiXklUT",
            },
          },
          description:
            "Prediction confidence histogram for correct and incorrect predictions",
        },
        {
          title: "Confusion Matrix",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "6LBOTfGqLGUhVYFTIuLkw8",
            },
          },
          description: "Confusion matrix across all classes",
        },
        {
          title: "Class Distribution Pie",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "424qneb6tGcaOtUiNP1XWS",
            },
          },
          description: "Dataset class distribution pie chart",
        },
        {
          title: "Precision-Recall Curves",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "6cQX7jAoNLtnqVmh9UCI24",
            },
          },
          description: "Precision-Recall curves for top-performing model",
        },
        {
          title: "ROC Curves",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "SwBXm8TdViwx8gUenUQX4",
            },
          },
          description: "ROC curves for top-performing model",
        },
        {
          title: "Training History",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "2r0Ke2MzKT6MlbLuc14p25",
            },
          },
          description: "Training confidence and accuracy evolution over epochs",
        },
        {
          title: "Grad-CAM Visualization",
          img: {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: "1k1jyIgGrcXtYqCuPNaQ09",
            },
          },
          description: "Grad-CAM heatmap highlighting disease regions",
        },
      ],
    },

    performance: {
      "en-US": {
        v1: { accuracy: 0.9746, precision: 0.9921, recall: 0.9917 },
        v2: { accuracy: 0.9671, precision: 0.9921, recall: 0.9917 },
      },
    },

    links: {
      "en-US": [
        {
          title: "Repository",
          url: "https://github.com/Jeremy-Cleland/PlantDoc",
        },
        {
          title: "Live Demo",
          url: "https://jeremy-cleland.github.io/PlantDoc/",
        },
      ],
    },

    team: {
      "en-US": [{ name: "Jeremy Cleland", role: "Graduate Student" }],
    },
  };
}

// Run the import
async function runImport() {
  try {
    // First update the content model
    console.log("Starting import process...");

    // Import both projects
    await importSepsisProject();
    await importPlantDocProject();

    console.log("All projects imported successfully!");
  } catch (error) {
    console.error("Error during import process:", error);
  }
}

runImport().catch(console.error);
