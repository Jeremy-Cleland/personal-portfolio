import { useContext } from "react";
import { motion as m } from "framer-motion";
import { SingleProjectContext } from "../../context/SingleProjectContext.jsx";

const ProjectOverview = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 1,
        delay: 0.3,
      }}
      className="mb-16 flex flex-col gap-0 md:gap-10"
    >
      {/* Overview Section */}
      <div className="mb-7">
        <m.h3 className="my-5 border-b-2 border-violet-400 py-5 text-center font-SourceCodePro text-sm font-bold leading-4 tracking-wide text-dark-900 dark:border-dark-100 dark:text-dark-100">
          Overview
        </m.h3>
        <p className="mb-2 font-Fira text-sm font-medium leading-6 whitespace-pre-line">
          {singleProjectData.details.overview}
        </p>
      </div>

      {/* Technologies Section */}
      <div className="mb-7">
        <m.h3 className="my-5 border-b-2 border-violet-400 py-5 text-center font-SourceCodePro text-sm font-bold leading-4 tracking-wide text-dark-900 dark:border-dark-100 dark:text-dark-100">
          Technologies
        </m.h3>
        <div className="flex w-full flex-wrap gap-5 text-center font-SourceCodePro text-dark-900 dark:text-dark-100 lg:gap-10">
          {singleProjectData.details.technologies.map((tech) => (
            <m.div
              whileHover={{ scale: 1.05, color: "#A38CF3" }}
              transition={{ duration: 0.3 }}
              className="mx-auto flex flex-col items-center justify-center gap-1 text-xs lg:text-sm"
              key={tech.id}
            >
              {tech.icon}
              {tech.name}
            </m.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      {singleProjectData.details.features && (
        <div className="mb-7">
          <m.h3 className="my-5 border-b-2 border-violet-400 py-5 text-center font-SourceCodePro text-sm font-bold leading-4 tracking-wide text-dark-900 dark:border-dark-100 dark:text-dark-100">
            Key Features
          </m.h3>
          <ul className="list-disc pl-6 font-Fira text-sm font-medium leading-6">
            {singleProjectData.details.features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Performance Metrics Section */}
      {singleProjectData.details.performance && (
        <div className="mb-7">
          <m.h3 className="my-5 border-b-2 border-violet-400 py-5 text-center font-SourceCodePro text-sm font-bold leading-4 tracking-wide text-dark-900 dark:border-dark-100 dark:text-dark-100">
            Performance Metrics
          </m.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(singleProjectData.details.performance).map(
              ([model, metrics]) => (
                <div
                  key={model}
                  className="p-4 rounded-lg bg-violet-50 dark:bg-dark-800"
                >
                  <h4 className="font-ChillaxBold mb-2 text-center capitalize">
                    {model}
                  </h4>
                  <div className="space-y-1 text-sm">
                    {Object.entries(metrics).map(([metric, value]) => (
                      <p key={metric} className="flex justify-between">
                        <span className="capitalize">{metric}:</span>
                        <span className="font-medium">{value.toFixed(4)}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      )}

      {/* Visualizations Section */}
      {singleProjectData.details.visualizations && (
        <div className="mb-7">
          <m.h3 className="my-5 border-b-2 border-violet-400 py-5 text-center font-SourceCodePro text-sm font-bold leading-4 tracking-wide text-dark-900 dark:border-dark-100 dark:text-dark-100">
            Visualizations
          </m.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {singleProjectData.details.visualizations.map((viz) => (
              <div key={viz.id} className="space-y-2">
                <m.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={viz.img}
                  alt={viz.title}
                  className="mx-auto h-auto max-w-full rounded-lg lg:max-w-xl"
                />
                <h4 className="font-ChillaxBold text-center">{viz.title}</h4>
                <p className="text-sm text-center text-violet-600 dark:text-violet-400">
                  {viz.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Learnings Section */}
      {singleProjectData.details.learnings && (
        <div className="mb-7">
          <m.h3 className="my-5 border-b-2 border-violet-400 py-5 text-center font-SourceCodePro text-sm font-bold leading-4 tracking-wide text-dark-900 dark:border-dark-100 dark:text-dark-100">
            Key Learnings
          </m.h3>
          <ul className="list-disc pl-6 font-Fira text-sm font-medium leading-6">
            {singleProjectData.details.learnings.map((learning, index) => (
              <li key={index} className="mb-2">
                {learning}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Team Section */}
      {singleProjectData.details.team && (
        <div className="mb-7">
          <m.h3 className="my-5 border-b-2 border-violet-400 py-5 text-center font-SourceCodePro text-sm font-bold leading-4 tracking-wide text-dark-900 dark:border-dark-100 dark:text-dark-100">
            Team
          </m.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {singleProjectData.details.team.map((member, index) => (
              <div key={index} className="text-center p-4">
                <h4 className="font-ChillaxBold mb-1">{member.name}</h4>
                <p className="text-sm text-violet-600 dark:text-violet-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </m.div>
  );
};

export default ProjectOverview;
