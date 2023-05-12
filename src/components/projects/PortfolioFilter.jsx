const filterOptions = ["Web Application", "Mobile Application", "UI/UX Design"];

const PortfolioFilter = ({ setSelectFilterProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectFilterProject(e.target.value);
      }}
      className="px-4 py-2 text-sm bg-gray-200 border rounded-lg sm:text-md text-dark-900 dark:border-violet-400 dark:bg-darkTheme-300 dark:font-medium dark:text-gray-200 sm:px-6"
    >
      <option className="text-sm sm:text-md">All Projects</option>
      {filterOptions.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default PortfolioFilter;
