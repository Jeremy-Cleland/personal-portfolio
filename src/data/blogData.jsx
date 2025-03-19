import { createBlogPost } from "./blogTemplate.js";

// Temporarily use existing portfolio images until blog-specific images are created
import placeholderImage1 from "../assets/images/portfolio/SepsisPredictionPipeline/sepsis-prediction.png";
import placeholderImage2 from "../assets/images/portfolio/SepsisPredictionPipeline/sepsisImage2.png";

/**
 * Blog data containing all blog posts
 * New posts will appear at the top of the list (latest first)
 */
export const blogData = [
  // Example post using the createBlogPost helper
  createBlogPost({
    title: "Essential Considerations for AI Ethics",
    slug: "ai-ethics-considerations",
    description: "Exploring the critical ethical considerations when developing AI applications and how they impact society.",
    thumbnailImage: placeholderImage1,
    date: "March 15, 2024",
    author: "Jeremy Cleland",
    categories: ["AI Ethics", "Machine Learning"],
    tags: ["AI", "Ethics", "Responsible AI", "AI Safety"],
    content: `
# Essential Considerations for AI Ethics

When developing AI systems, ethics should be a primary consideration from the start. This post explores key ethical dimensions that AI engineers and data scientists should consider.

## Transparency and Explainability

AI systems should be designed to be as transparent as possible, with decision-making processes that can be explained to users. This is especially important in high-stakes areas like healthcare, finance, and legal applications.

### Practical Steps for Explainability

- Use inherently interpretable models when possible
- Implement post-hoc explanation techniques for complex models
- Document model limitations and assumptions
- Provide confidence scores with predictions

## Fairness and Bias

AI systems can perpetuate and amplify societal biases if not carefully designed. Ensuring fairness across different demographic groups is essential.

\`\`\`python
# Example: Testing a model for demographic parity
def check_demographic_parity(predictions, sensitive_attribute):
    """
    Check if model predictions have similar rates across different groups
    """
    groups = set(sensitive_attribute)
    prediction_rates = {}
    
    for group in groups:
        group_indices = [i for i, attr in enumerate(sensitive_attribute) if attr == group]
        group_predictions = [predictions[i] for i in group_indices]
        prediction_rates[group] = sum(group_predictions) / len(group_predictions)
    
    # Compare rates across groups
    return prediction_rates
\`\`\`

## Privacy and Data Protection

AI systems often rely on vast amounts of data, which can include sensitive personal information. Protecting privacy while building effective models is a balancing act.

## Human Oversight and Control

While AI can automate decisions, humans should maintain appropriate oversight and control, especially for consequential decisions.

## Conclusion

Embedding ethical considerations into AI development isn't just good practice—it's becoming essential as regulations and public expectations evolve. By addressing these concerns proactively, we can build AI systems that are not only powerful but also trustworthy and beneficial.
    `
  }),

  createBlogPost({
    title: "Building Robust Machine Learning Pipelines",
    slug: "ml-pipeline-essentials",
    description: "A comprehensive guide to creating reliable, scalable, and maintainable machine learning pipelines.",
    thumbnailImage: placeholderImage2,
    date: "February 28, 2024",
    author: "Jeremy Cleland",
    categories: ["Data Science", "Machine Learning"],
    tags: ["ML Ops", "Pipelines", "Data Engineering", "Best Practices"],
    content: `

# Building Robust Machine Learning Pipelines



A well-designed ML pipeline can make the difference between a proof-of-concept that never sees production and a reliable ML system that delivers value. This post covers key considerations for building robust ML pipelines.

## Components of an ML Pipeline

A complete ML pipeline typically includes:

1. **Data ingestion and validation**
2. **Data preprocessing and feature engineering**
3. **Model training and validation**
4. **Model evaluation**
5. **Model deployment and monitoring**

## Data Validation

Validating input data is critical for maintaining pipeline reliability.

\`\`\`python
import pandas as pd
from typing import Dict, List

def validate_dataset(data: pd.DataFrame, schema: Dict[str, str], required_columns: List[str]) -> bool:
    """
    Validate that a dataframe matches expected schema and contains required columns
    
    Args:
        data: DataFrame to validate
        schema: Dictionary mapping column names to expected types
        required_columns: List of columns that must be present
        
    Returns:
        True if validation passes, raises exception otherwise
    """
    # Check required columns
    missing_columns = set(required_columns) - set(data.columns)
    if missing_columns:
        raise ValueError(f"Missing required columns: {missing_columns}")
    
    # Check column types
    for col, expected_type in schema.items():
        if col in data.columns:
            actual_type = data[col].dtype
            if not str(actual_type).startswith(expected_type):
                raise TypeError(f"Column {col} has type {actual_type}, expected {expected_type}")
    
    return True
\`\`\`

#### Feature Engineering

Feature engineering should be consistent between training and inference.

## Model Versioning

Keeping track of model versions is essential for reproducibility and rollback capabilities.

## Monitoring and Alerts

Once deployed, models need continuous monitoring for:

- Data drift
- Model performance degradation
- System health metrics

## Conclusion

Building robust ML pipelines requires careful consideration of many factors beyond just model accuracy. By implementing proper validation, testing, versioning, and monitoring, you can create ML systems that are reliable and maintainable in production environments.
    `
  })
];

// IMPORTANT: After running the app, create the following files:
// 1. src/assets/images/blog/ai-ethics-considerations.jpg
// 2. src/assets/images/blog/ml-pipeline-essentials.jpg
// And replace the placeholder imports with the actual blog images 