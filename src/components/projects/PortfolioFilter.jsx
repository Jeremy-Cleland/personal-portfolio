const filterOptions = ["Web Application", "Mobile Application", "UI/UX Design"];

const PortfolioFilter = ({ setSelectFilterProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectFilterProject(e.target.value);
      }}
      className="sm:text-md rounded-lg border bg-gray-200 px-4 py-2 text-sm text-dark-900 dark:border-violet-400 dark:bg-darkTheme-300 dark:font-medium dark:text-gray-200 sm:px-6"
    >
      <option className="sm:text-md text-sm">All Projects</option>
      {filterOptions.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default PortfolioFilter;
