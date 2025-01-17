import sepsisImage1 from "../assets/images/portfolio/SepsisPredictionPipeline/sepsis-prediction.png";
import sepsisImage2 from "../assets/images/portfolio/SepsisPredictionPipeline/sepsisImage2.png";

import {
  SiPython,
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

const iconStyle = "text-4xl mx-auto inline-block";

export const portfolioData = [
  {
    id: 1,
    name: "Sepsis-Prediction-Pipeline",
    title: "Sepsis Prediction Pipeline",
    category: "AI/ML Project",
    description: "An advanced machine learning pipeline designed to predict sepsis onset using patient data.",
    img: sepsisImage1,
    info: {
      date: "Oct 15, 2024",
      tags: ["Machine Learning", "Data Science", "AI"],
    },
    images: [
      { id: 1, title: "Pipeline Overview", img: sepsisImage1 },
      { id: 2, title: "Results Dashboard", img: sepsisImage2 }
    ],
    details: {
      overview: "The Sepsis Prediction Pipeline is a comprehensive AI-driven solution designed to predict the onset of sepsis in patients. This pipeline incorporates data preprocessing, feature engineering, class imbalance handling, and advanced machine learning models like Random Forest, XGBoost, and Logistic Regression.",
      technologies: [
        { id: 1, name: "Python", icon: <SiPython className={iconStyle} /> },
        { id: 2, name: "Scikit-learn", icon: <SiScikitlearn className={iconStyle} /> },
        { id: 3, name: "TensorFlow", icon: <SiTensorflow className={iconStyle} /> },
        { id: 4, name: "Pandas", icon: <SiPandas className={iconStyle} /> },
        { id: 5, name: "NumPy", icon: <SiNumpy className={iconStyle} /> },
        { id: 6, name: "Database Management", icon: <TbDatabase className={iconStyle} /> }
      ],
      links: [
        { id: 1, title: "Repository", url: "https://github.com/Jeremy-Cleland/sepsis-early-detection" },
        { id: 2, title: "Documentation", url: "https://github.com/Jeremy-Cleland/sepsis-early-detection" }
      ]
    }
  }
  // Future AI/ML projects can be added here following the same structure
];





  // Template for adding a new AI/ML project:
  // First, import your project images at the top of the file:
  // import projectImage1 from "../assets/images/portfolio/YourProject/main.png";
  // import projectImage2 from "../assets/images/portfolio/YourProject/detail.png";
  // 
  // Then add your project object:
  // {
  //   id: portfolioData.length + 1,           // Automatically increments ID
  //   name: "Project-Name-With-Dashes",       // URL-friendly name for routing
  //   title: "Human Readable Project Title",   // Displayed title
  //   category: "AI/ML Project",              // Choose category:
  //                                           // - "AI/ML Project"
  //                                           // - "Data Science"
  //                                           // - "Computer Vision"
  //                                           // - "Natural Language Processing"
  //   description: "One-line project summary shown in cards", // Keep it concise
  //   img: projectImage1,                     // Main image for portfolio cards
  //   info: {
  //     date: "MMM DD, YYYY",                 // Project completion date
  //     tags: [                               // Relevant technologies/concepts
  //       "Machine Learning",
  //       "Neural Networks",
  //       "Computer Vision",
  //       // Add more tags
  //     ],
  //   },
  //   images: [                               // Project images for detail view
  //     { id: 1, title: "Main View", img: projectImage1 },
  //     { id: 2, title: "Results", img: projectImage2 }
  //     // Add more images as needed
  //   ],
  //   details: {
  //     overview: "Comprehensive project description including: \n" +
  //              "- Problem being solved\n" +
  //              "- Technical approach\n" +
  //              "- Key features\n" +
  //              "- Results and impact",
  //     technologies: [                       // Tech stack with icons
  //       { id: 1, name: "Python", icon: <SiPython className={iconStyle} /> },
  //       { id: 2, name: "TensorFlow", icon: <SiTensorflow className={iconStyle} /> },
  //       // Import and add more tech icons from react-icons
  //       // Available icon sets: Si (Simple Icons), Tb (Tabler), etc.
  //     ],
  //     links: [                             // Project links
  //       { id: 1, title: "Repository", url: "https://github.com/username/repo" },
  //       { id: 2, title: "Documentation", url: "https://your-docs-site.com" },
  //       { id: 3, title: "Live Demo", url: "https://your-demo-site.com" }
  //       // Add more relevant links
  //     ]
  //   }
  // }

