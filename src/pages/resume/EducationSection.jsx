import { useContext } from "react";

import Card from "../../components/reusable/Card.jsx";

import { AboutMeContext } from "../../context/AboutMeContext.jsx";

const EducationSection = () => {
  const { resume } = useContext(AboutMeContext);
  return (
    <Card>
      <div className="my-5 border-b-[1px] border-violet-400/60 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200">
        <h4 className="text-center font-Fira text-lg tracking-tight md:text-left ">
          <span className="text-base text-violet-400"> {">"} </span> Edcuation
          Timeline
        </h4>
      </div>
      <ul className="mx-auto my-5 max-w-7xl rounded-lg  p-4 font-Fira text-sm dark:bg-dark-900 dark:text-dark-100 lg:p-8">
        {resume.education.map((school, index) => (
          <li key={index}>
            <div className="grid max-w-6xl overflow-hidden rounded-lg p-4 hover:bg-violet-400/50 hover:dark:bg-violet-400/20  md:grid-cols-5 lg:p-6 xl:grid-cols-12">
              <h3 className="my-2  font-SourceCodePro text-sm font-bold underline underline-offset-4 md:col-span-4 md:col-start-2 md:ml-0 xl:col-span-9 xl:col-start-3">
                {school.institution} - {school.location}
              </h3>
              <h3 className="my-2  font-SourceCodePro text-sm font-bold md:col-span-4 md:col-start-2 md:ml-0 xl:col-span-9 xl:col-start-3">
                {school.degree}
              </h3>
              <time
                dateTime=""
                className="row-start-1 my-2 font-SourceCodePro font-bold dark:text-gray-400 md:col-start-1 xl:col-span-2"
              >
                {school.graduationYear}
              </time>
              <div className="my-2 ml-8 dark:text-gray-300 md:col-span-4 md:col-start-2 md:ml-0 xl:col-span-9 xl:col-start-3">
                {school.bulletPoints.map((bullet, index) => (
                  <p key={index} className="my-4">
                    <span className="text-base text-violet-400"> {">"} </span>
                    {bullet}
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default EducationSection;
