import { createContext, useEffect, useMemo, useState } from "react";
import client from "../utils/contentful.js";

export const PortfolioContext = createContext();

export const PortfolioProvider = (props) => {
  const [portfolioProject, setPortfolioProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchPortfolioProject, setSearchPortfolioProject] = useState("");
  const [selectFilterProject, setSelectFilterProject] = useState("");

  // Fetch portfolio projects from Contentful
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await client.getEntries({
          content_type: 'portfolioProject',
          order: '-fields.date',
        });
        
        console.log('Contentful response:', response);
        
        // Transform Contentful data to match your app's format
        const formattedProjects = response.items.map(item => {
          // Format additional images if they exist
          const additionalImages = item.fields.additionalImages 
            ? item.fields.additionalImages.map((img, index) => ({
                id: index + 1,
                title: img.fields.title || `Image ${index + 1}`,
                img: img.fields.file.url,
                description: img.fields.description || ""
              }))
            : [];
            
          return {
            id: item.sys.id,
            name: item.fields.slug,
            title: item.fields.title,
            category: item.fields.category || "Other",
            description: item.fields.description || "",
            img: item.fields.mainImage?.fields.file.url,
            info: {
              date: item.fields.date ? new Date(item.fields.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : "",
              tags: item.fields.tags || [],
            },
            images: additionalImages,
            details: {
              overview: item.fields.overview || "",
              links: [
                item.fields.githubUrl ? { id: 1, title: "Repository", url: item.fields.githubUrl } : null,
                item.fields.liveDemoUrl ? { id: 2, title: "Live Demo", url: item.fields.liveDemoUrl } : null
              ].filter(Boolean),
              technologies: item.fields.technologiesUsed || []
            }
          };
        });
        
        console.log('Formatted projects:', formattedProjects);
        setPortfolioProject(formattedProjects);
      } catch (error) {
        console.error("Error fetching portfolio projects:", error);
        setError("Failed to load portfolio projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const searchPortfolioByTitle = useMemo(() => {
    if (!searchPortfolioProject) return portfolioProject;
    
    return portfolioProject.filter((item) => {
      const result = item.title
        .toLowerCase()
        .includes(searchPortfolioProject.toLowerCase());
      return result;
    });
  }, [portfolioProject, searchPortfolioProject]);

  const selectProjectsByCategory = useMemo(() => {
    if (!selectFilterProject) return portfolioProject;

    return portfolioProject.filter((item) => 
      item.category.toLowerCase().includes(selectFilterProject.toLowerCase())
    );
  }, [portfolioProject, selectFilterProject]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    portfolioProject,
    loading,
    error,
    setPortfolioProject,
    searchPortfolioProject,
    setSearchPortfolioProject,
    searchPortfolioByTitle,
    selectFilterProject,
    setSelectFilterProject,
    selectProjectsByCategory,
  }), [
    portfolioProject,
    loading,
    error,
    searchPortfolioProject,
    searchPortfolioByTitle,
    selectFilterProject,
    selectProjectsByCategory
  ]);

  return (
    <PortfolioContext.Provider value={contextValue}>
      {props.children}
    </PortfolioContext.Provider>
  );
};
