/**
 * Project Template Generator
 * 
 * This utility creates consistent project structures for the portfolio
 * by generating a boilerplate project object that follows the data schema.
 */


const iconStyle = "text-4xl mx-auto inline-block";

/**
 * Creates a new portfolio project with the specified properties
 * @param {Object} projectData - The project data
 * @returns {Object} A properly formatted project object
 */
export const createProject = (projectData) => {
  const {
    // Required fields
    title,
    category,
    description,
    mainImage,
    date,
    tags,
    overview,

    // Optional fields with defaults
    id = null,
    name = null,
    additionalImages = [],
    technologies = [],
    features = null,
    performance = null,
    visualizations = null,
    learnings = null,
    links = [],
    team = []
  } = projectData;

  // Generate ID and kebab-case name if not provided
  const projectId = id || Math.floor(Date.now() / 1000);
  const projectName = name || title.toLowerCase().replace(/\s+/g, '-');

  // Build the complete project object
  return {
    id: projectId,
    name: projectName,
    title,
    category,
    description,
    img: mainImage,
    info: {
      date,
      tags,
    },
    images: [
      { id: 1, title: title, img: mainImage },
      ...additionalImages.map((img, index) => ({
        id: index + 2,
        title: img.title || `${title} Image ${index + 1}`,
        img: img.img
      }))
    ],
    details: {
      overview,
      technologies,
      ...(features && { features }),
      ...(performance && { performance }),
      ...(visualizations && { visualizations }),
      ...(learnings && { learnings }),
      links,
      team
    }
  };
};

/**
 * Available icons for technologies (for easy reference):
 * 
 * import { 
 *   SiPython, SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiAngular, 
 *   SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiScikitlearn, 
 *   SiPytorch, SiTensorflow, SiKeras, SiPandas, SiNumpy, SiJupyter, SiGit,
 *   SiDocker, SiKubernetes, SiAmazonaws, SiMicrosoftazure, SiGooglecloud
 * } from "react-icons/si";
 * 
 * To use:
 * { id: 1, name: "React", icon: <SiReact className={iconStyle} /> }
 */

/**
 * Markdown usage examples for project sections:
 * 
 * Headers:
 * # Main Header
 * ## Subheader
 * ### Smaller header
 * 
 * Text styling:
 * **Bold text**
 * *Italic text*
 * ***Bold and italic***
 * 
 * Lists:
 * - Bullet point 1
 * - Bullet point 2
 *   - Nested point
 * 
 * 1. Numbered item 1
 * 2. Numbered item 2
 * 
 * Links:
 * [Link text](https://example.com)
 * 
 * Code:
 * `inline code`
 * 
 * ```python
 * # Code block
 * def example():
 *     return "Hello world"
 * ```
 * 
 * Tables:
 * | Column 1 | Column 2 |
 * | -------- | -------- |
 * | Cell 1   | Cell 2   |
 * | Cell 3   | Cell 4   |
 */

/**
 * Example usage:
 * 
 * import mainImage from "../assets/images/portfolio/ProjectName/main.webp";
 * import { createProject } from "./projectTemplate";
 * import { SiReact } from "react-icons/si";
 * 
 * const iconStyle = "text-4xl mx-auto inline-block";
 * 
 * const newProject = createProject({
 *   title: "My Amazing Project",
 *   category: "AI/ML Project",
 *   description: "Short description for card view",
 *   mainImage: mainImage,
 *   date: "Oct 15, 2024",
 *   tags: ["Tag1", "Tag2", "Tag3"],
 *   overview: "Detailed project description...",
 *   technologies: [
 *     { id: 1, name: "React", icon: <SiReact className={iconStyle} /> }
 *   ],
 *   links: [
 *     { id: 1, title: "Repository", url: "https://github.com/..." }
 *   ]
 * });
 */ 