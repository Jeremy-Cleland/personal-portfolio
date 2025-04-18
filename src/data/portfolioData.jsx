import rfPrecisionRecall from "../assets/images/portfolio/SepsisPredictionPipeline/Final_random_forest_tuned_precision_recall_curve.webp";
import rfROC from "../assets/images/portfolio/SepsisPredictionPipeline/Final_random_forest_tuned_roc_curve.webp";

import lrPrecisionRecall from "../assets/images/portfolio/SepsisPredictionPipeline/Logistic_Regression_Tuned_precision_recall_curve.webp";

import lrROC from "../assets/images/portfolio/SepsisPredictionPipeline/Logistic_Regression_Tuned_roc_curve.webp";
import sepsisImage1 from "../assets/images/portfolio/SepsisPredictionPipeline/sepsis-prediction.webp";
import sepsisImage2 from "../assets/images/portfolio/SepsisPredictionPipeline/sepsisImage2.webp";
import xgboostPrecisionRecall from "../assets/images/portfolio/SepsisPredictionPipeline/XGBoost_Tuned_precision_recall_curve.webp";
import xgboostROC from "../assets/images/portfolio/SepsisPredictionPipeline/XGBoost_Tuned_roc_curve.webp";

import {
  SiNumpy,
  SiPandas,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

import classDistributionPie from "../assets/images/portfolio/plantdoc/class_distribution_pie.webp";
import classificationExamples from "../assets/images/portfolio/plantdoc/classification_examples.webp";
import confidenceDistribution from "../assets/images/portfolio/plantdoc/confidence_distribution.webp";
import confusionMatrix from "../assets/images/portfolio/plantdoc/confusion_matrix.webp";
import gradcamPred from "../assets/images/portfolio/plantdoc/gradcam_pred_1.webp";
import modelEvalDashboard from "../assets/images/portfolio/plantdoc/model_evaluation_dashboard.webp";
import precisionRecallCurves from "../assets/images/portfolio/plantdoc/precision_recall_curves.webp";
import rocCurves from "../assets/images/portfolio/plantdoc/roc_curves.webp";
import trainingHistory from "../assets/images/portfolio/plantdoc/training_history.webp";

import { SiOpencv, SiPytorch } from "react-icons/si";
import { createProject } from "./projectTemplate";

const iconStyle = "text-4xl mx-auto inline-block";

export const portfolioData = [
  {
    id: 1,
    name: "sepsis-prediction-pipeline",
    title: "Sepsis Prediction Pipeline",
    category: "AI/ML Project",
    description: "Advanced machine learning pipeline for early sepsis detection using Random Forest, XGBoost, and Logistic Regression models.",
    img: sepsisImage1,
    info: {
      date: "Oct 15, 2024",
      tags: ["Machine Learning", "Healthcare AI", "Data Science", "Python"],
    },
    images: [
      { id: 1, title: "Pipeline Overview", img: sepsisImage1 },
      { id: 2, title: "Results Dashboard", img: sepsisImage2 }
    ],
    details: {
      overview: `The pipeline involves a meticulous process for detecting sepsis using patient-level data:
      - **Data Handling:** Missing values handled via the MICE algorithm, with categorical encoding and robust scaling applied.
      - **Feature Engineering:** Automated column dropping, log transformation, and feature interaction analysis.
      - **Model Training:** Models include Random Forest, XGBoost, and Logistic Regression, optimized using Optuna.
      - **Evaluation:** Metrics such as AUROC, Precision, Recall, and F1 Score logged with custom visualization reports.
      - **Deployment:** Model registry supports versioning and metadata storage, enabling reproducibility.`,
      learnings: [
        "Handling class imbalance with advanced techniques like SMOTEENN.",
        "Optimizing hyperparameters effectively using Optuna.",
        "Understanding the trade-offs between interpretability and performance in models."
      ],
      technologies: [
        { id: 1, name: "Python", icon: <SiPython className={iconStyle} /> },
        { id: 2, name: "Scikit-learn", icon: <SiScikitlearn className={iconStyle} /> },
        { id: 3, name: "TensorFlow", icon: <SiTensorflow className={iconStyle} /> },
        { id: 4, name: "Pandas", icon: <SiPandas className={iconStyle} /> },
        { id: 5, name: "NumPy", icon: <SiNumpy className={iconStyle} /> },
        { id: 6, name: "Database Management", icon: <TbDatabase className={iconStyle} /> }
      ],
      features: [
        "Patient-level data splitting to ensure no data leakage.",
        "Comprehensive data preprocessing pipeline with iterative imputation (MICE), log transformation, and robust scaling.",
        "Automated feature engineering with redundant column removal, categorical encoding, and scaling.",
        "Advanced model evaluation with metrics logging, calibration plots, and feature importance analysis.",
        "Automated model registry with versioning, hyperparameter tracking, and artifact storage.",
        "Dynamic report generation with comprehensive visualizations (e.g., ROC, PR curves)."
      ],
      visualizations: [
        {
          id: 1,
          title: "ROC Curve - XGBoost",
          img: xgboostROC,
          description: "Receiver Operating Characteristic (ROC) curve showing near-perfect separation."
        },
        {
          id: 2,
          title: "Precision-Recall Curve - XGBoost",
          img: xgboostPrecisionRecall,
          description: "Precision-Recall curve for tuned XGBoost model."
        },
        {
          id: 3,
          title: "ROC Curve - Random Forest",
          img: rfROC,
          description: "Receiver Operating Characteristic (ROC) curve for tuned Random Forest model."
        },
        {
          id: 4,
          title: "Precision-Recall Curve - Random Forest",
          img: rfPrecisionRecall,
          description: "Precision-Recall curve for tuned Random Forest model."
        },
        {
          id: 5,
          title: "ROC Curve - Logistic Regression",
          img: lrROC,
          description: "Receiver Operating Characteristic (ROC) curve for tuned Logistic Regression model."
        },
        {
          id: 6,
          title: "Precision-Recall Curve - Logistic Regression",
          img: lrPrecisionRecall,
          description: "Precision-Recall curve for tuned Logistic Regression model."
        }
      ],
      performance: {
        randomForest: { auroc: 0.9760, f1: 0.5594, precision: 0.5280, recall: 0.5948 },
        xgboost: { auroc: 0.9998, f1: 0.2591, precision: 0.2399, recall: 0.8721 },
        logisticRegression: { auroc: 0.8955, f1: 0.7830, precision: 0.7164, recall: 0.8858 }
      },
      links: [
        { id: 1, title: "Repository", url: "https://github.com/Jeremy-Cleland/sepsis-early-detection" },
        { id: 2, title: "Documentation", url: "https://github.com/Jeremy-Cleland/sepsis-early-detection" }
      ],
      team: [
        { name: "Jeremy Cleland", role: "Graudate Student" },

      ]
    }
  },
  createProject({
    title: "PlantDoc: Plant Disease Classification",
    category: "Computer Vision Project",
    description: "State-of-the-art plant disease classification with CBAM-augmented ResNet18",
    mainImage: modelEvalDashboard,
    date: "Aug 17, 2025",
    tags: ["Computer Vision", "CNN", "Attention", "PyTorch"],
    overview: `PlantDoc is a complete implementation of a plant disease classification system using a CBAM (Convolutional Block Attention Module) augmented ResNet18 architecture. Plant diseases cause significant crop losses worldwide, and early, accurate detection is crucial for sustainable agriculture. This project implements a state-of-the-art deep learning approach to identify 39 plant disease classes using dual attention mechanisms for enhanced performance.`,
    technologies: [
      { id: 1, name: "Python", icon: <SiPython className={iconStyle} /> },
      { id: 2, name: "PyTorch", icon: <SiPytorch className={iconStyle} /> },
      { id: 3, name: "NumPy", icon: <SiNumpy className={iconStyle} /> },
      { id: 4, name: "Pandas", icon: <SiPandas className={iconStyle} /> },
      { id: 5, name: "OpenCV", icon: <SiOpencv className={iconStyle} /> }
    ],
    features: [
      "Integration of CBAM attention modules into ResNet18 architecture",
      "Advanced data augmentation and preprocessing with Albumentations",
      "Class balancing techniques for improved performance on imbalanced data",
      "Mixed precision training (FP16) and cosine annealing learning rate scheduling",
      "Comprehensive model evaluation dashboards with ROC, PR curves, and Grad-CAM visualizations"
    ],
    visualizations: [
      { id: 1, title: "Model Evaluation Dashboard", img: modelEvalDashboard, description: "Dashboard showing classification examples, confidence distributions, and confusion matrix" },
      { id: 2, title: "Classification Examples", img: classificationExamples, description: "Examples of correct vs incorrect classifications" },
      { id: 3, title: "Confidence Distribution", img: confidenceDistribution, description: "Prediction confidence histogram for correct and incorrect predictions" },
      { id: 4, title: "Confusion Matrix", img: confusionMatrix, description: "Confusion matrix across all classes" },
      { id: 5, title: "Class Distribution", img: classDistributionPie, description: "Dataset class distribution pie chart" },
      { id: 6, title: "Precision-Recall Curves", img: precisionRecallCurves, description: "Precision-Recall curves for top-performing model" },
      { id: 7, title: "ROC Curves", img: rocCurves, description: "ROC curves for top-performing model" },
      { id: 8, title: "Training History", img: trainingHistory, description: "Training confidence and accuracy evolution over epochs" },
      { id: 9, title: "Grad-CAM Visualization", img: gradcamPred, description: "Grad-CAM heatmap highlighting disease regions" }
    ],
    performance: {
      v1: { accuracy: 0.9746, precision: 0.9921, recall: 0.9917 },
      v2: { accuracy: 0.9671, precision: 0.9921, recall: 0.9917 }
    },
    links: [
      { id: 1, title: "Repository", url: "https://github.com/Jeremy-Cleland/PlantDoc" },
      { id: 2, title: "Live Demo", url: "https://jeremy-cleland.github.io/PlantDoc/" }
    ],
    team: [
      { name: "Jeremy Cleland", role: "Graudate Student" }
    ]
  })
];

// Template for adding new AI/ML projects:
// 1. Add project images to /src/assets/images/portfolio/your-project-name/
// 2. Import images at the top of this file
// 3. Use the createProject helper or follow this structure:
//
// OPTION 1: Using the project template helper (recommended)
//
// import { createProject } from "./projectTemplate.js";
// import mainImage from "../assets/images/portfolio/project-name/main.webp";
// import { SiPython, SiReact } from "react-icons/si";
//
// const iconStyle = "text-4xl mx-auto inline-block";
//
// const newProject = createProject({
//   title: "My Amazing Project",
//   category: "AI/ML Project",
//   description: "Short description for card view",
//   mainImage: mainImage,
//   date: "Oct 15, 2024",
//   tags: ["Tag1", "Tag2", "Tag3"],
//   overview: `
// # Project Overview
//
// This project uses **markdown** for rich text formatting.
//
// ## Key Points
//
// - You can use **bold** and *italic* text
// - You can create [links](https://example.com)
// - You can add \`inline code\`
//
// ### Implementation Details
//
// \`\`\`python
// def example_function():
//     return "This is a code block"
// \`\`\`
// `,
//   technologies: [
//     { id: 1, name: "Python", icon: <SiPython className={iconStyle} /> },
//     { id: 2, name: "React", icon: <SiReact className={iconStyle} /> }
//   ],
//   links: [
//     { id: 1, title: "Repository", url: "https://github.com/..." }
//   ]
// });
//
// Then add this to the portfolioData array below.
//
// OPTION 2: Manual creation following template structure


