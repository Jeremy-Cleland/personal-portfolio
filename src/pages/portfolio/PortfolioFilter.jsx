const filterOptions = [
  "All Projects",
  "Web Application",
  "Mobile Application",
  "UI/UX Design",
];

const PortfolioFilter = ({ selectFilterProject, setSelectFilterProject }) => {
  return (
    <select
      value={selectFilterProject}
      onChange={(e) => {
        setSelectFilterProject(
          e.target.value === "All Projects" ? "" : e.target.value
        );
      }}
      className="mx-5 w-72 grow justify-end rounded-lg border-[1px] bg-dark-100 px-8 py-2 font-SourceCodePro text-sm text-dark-900 focus:outline-none  dark:border-violet-400/60 dark:bg-dark-600 dark:text-gray-200 "
    >
      {filterOptions.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default PortfolioFilter;
