const filterOptions = ["Web Application", "Mobile Application", "UI/UX Design"];

const PortfolioFilter = ({ setSelectFilterProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectFilterProject(e.target.value);
      }}
      className="grow rounded-lg border-2 bg-dark-100 px-8 py-2 text-sm text-dark-900 focus:outline-none dark:border-violet-400 dark:bg-dark-600 dark:font-medium dark:text-gray-100"
    >
      <option className="sm:text-md text-sm">All Projects</option>
      {filterOptions.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default PortfolioFilter;
