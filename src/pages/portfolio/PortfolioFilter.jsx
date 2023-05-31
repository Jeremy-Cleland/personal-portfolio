const filterOptions = ["Web Application", "Mobile Application", "UI/UX Design"];

const PortfolioFilter = ({ setSelectFilterProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectFilterProject(e.target.value);
      }}
      className="grow rounded-xl border-[1px] bg-dark-100 px-8 py-2 font-SourceCodePro text-sm  text-dark-900 focus:outline-none dark:border-violet-400/60 dark:bg-dark-600 dark:text-gray-200"
    >
      <option className="sm:text-md text-sm ">All Projects</option>
      {filterOptions.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default PortfolioFilter;
