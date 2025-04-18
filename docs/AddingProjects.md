# Adding Projects to the Portfolio

This guide explains how to add new projects to your portfolio website in a simple, standardized way.

## Quick Start

1. **Prepare Project Images**
   - Save your main project image to `/src/assets/images/portfolio/your-project-name/`
   - Add any additional images to the same folder

2. **Edit the Portfolio Data File**
   - Open `src/data/portfolioData.jsx`
   - Import your images at the top of the file
   - Use the `createProject` helper function or manually add a new project object

## Using the Project Template Helper (Recommended)

The easiest way to add a new project is to use the `createProject` helper function:

```jsx
// In src/data/portfolioData.jsx
import { createProject } from "./projectTemplate.js";
import mainImage from "../assets/images/portfolio/project-name/main.webp";
import secondImage from "../assets/images/portfolio/project-name/second.webp";
import { SiPython, SiReact } from "react-icons/si";

const iconStyle = "text-4xl mx-auto inline-block";

const newProject = createProject({
  title: "My Amazing Project",
  category: "AI/ML Project", // Choose from: AI/ML Project, Data Science, Computer Vision, Natural Language Processing
  description: "Short description for card view",
  mainImage: mainImage,
  additionalImages: [
    { title: "Second Image", img: secondImage }
  ],
  date: "Oct 15, 2024",
  tags: ["Tag1", "Tag2", "Tag3"],
  overview: `
# Project Overview

This project uses **markdown** for rich text formatting.

## Key Points

- You can use **bold** and *italic* text
- You can create [links](https://example.com)
- You can add \`inline code\`

### Implementation Details

\`\`\`python
def example_function():
    return "This is a code block"
\`\`\`
`,
  technologies: [
    { id: 1, name: "Python", icon: <SiPython className={iconStyle} /> },
    { id: 2, name: "React", icon: <SiReact className={iconStyle} /> }
  ],
  links: [
    { id: 1, title: "Repository", url: "https://github.com/..." },
    { id: 2, title: "Live Demo", url: "https://example.com" }
  ],
  team: [
    { name: "Jeremy Cleland", role: "Graduate Student" }
  ]
});

// Then add newProject to the portfolioData array
export const portfolioData = [
  newProject,
  // ... other projects
];
```

## Markdown Support

The project details sections support Markdown formatting, allowing you to create rich content with:

- Headers (# for main header, ## for subheader)
- Emphasis (**bold**, *italic*)
- Lists (ordered and unordered)
- Links
- Code blocks (inline and multi-line)
- Tables

See the examples in `src/data/projectTemplate.js` for more details on Markdown usage.

## Available Technology Icons

You can import technology icons from `react-icons/si` for use in your project. Some common examples:

```jsx
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiAngular, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiScikitlearn, 
  SiPytorch, SiTensorflow, SiKeras, SiPandas, SiNumpy, SiJupyter, SiGit,
  SiDocker, SiKubernetes, SiAmazonaws, SiMicrosoftazure, SiGooglecloud
} from "react-icons/si";
```

## Optional Project Sections

In addition to the required fields, you can include these optional sections:

- `features`: String with markdown or Array of feature strings
- `performance`: String with markdown or Object with performance metrics
- `visualizations`: Array of visualization objects
- `learnings`: String with markdown or Array of learning points

## Need More Help?

If you need more examples or have questions about adding projects, check out the code in `src/data/projectTemplate.js` for additional reference.
