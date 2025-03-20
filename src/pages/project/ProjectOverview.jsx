import { motion as m } from "framer-motion";
import { useContext } from "react";
import MarkdownRenderer from "../../components/reusable/MarkdownRenderer.jsx";
import { SingleProjectContext } from "../../context/SingleProjectContext.jsx";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
    }
  }
};

const headingVariants = {
  hidden: { opacity: 0, width: "0%" },
  visible: { 
    opacity: 1, 
    width: "100%",
    transition: { 
      duration: 0.6,
      ease: "easeOut",
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: 0.2 
    }
  }
};

const techVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const techItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Section header component for reuse
const SectionHeader = ({ title }) => (
  <m.div 
    className="my-5 border-b-[1px] border-orange-400/60 py-5 text-center font-SourceCodePro"
    variants={headingVariants}
  >
    <h3 className="text-center font-Fira text-lg tracking-tight text-dark-900 dark:text-gray-200 md:text-left">
      <span className="text-base text-orange-400"> {">"} </span> {title}
    </h3>
  </m.div>
);

const ProjectOverview = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <m.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.3
          }
        }
      }}
      className="mb-16 flex flex-col gap-10"
    >
      {/* Overview Section */}
      <m.div variants={sectionVariants}>
        <SectionHeader title="Overview" />
        <m.div variants={contentVariants} className="prose-headings:font-ChillaxBold prose-headings:text-orange-600 dark:prose-headings:text-orange-400 prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline prose-code:bg-orange-50 dark:prose-code:bg-dark-800 prose-code:p-1 prose-code:rounded-xl">
          <MarkdownRenderer
            content={singleProjectData.details.overview}
            className="mb-2 font-Fira text-sm font-medium leading-6"
          />
        </m.div>
      </m.div>

      {/* Technologies Section */}
      <m.div variants={sectionVariants}>
        <SectionHeader title="Technologies" />
        <m.div 
          variants={techVariants}
          className="flex w-full flex-wrap gap-5 justify-center text-center font-SourceCodePro text-dark-900 dark:text-gray-200 lg:gap-6"
        >
          {singleProjectData.details.technologies.map((tech) => (
            <m.div
              key={tech.id}
              variants={techItemVariants}
              whileHover={{ 
                scale: 1.1, 
                color: "#f97316",
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center justify-center gap-2 px-4 py-2 text-sm transition-colors lg:text-base"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span>{tech.name}</span>
            </m.div>
          ))}
        </m.div>
      </m.div>

      {/* Features Section */}
      {singleProjectData.details.features && (
        <m.div variants={sectionVariants}>
          <SectionHeader title="Key Features" />
          <m.div variants={contentVariants}>
            {typeof singleProjectData.details.features === 'string' ? (
              <div className="prose-ul:pl-0 prose-li:mb-2">
                <MarkdownRenderer
                  content={singleProjectData.details.features}
                  className="font-Fira text-sm font-medium leading-6"
                />
              </div>
            ) : (
              <ul className="grid gap-3 md:grid-cols-2">
                {singleProjectData.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-orange-500">•</span>
                    <span className="font-Fira text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </m.div>
        </m.div>
      )}

      {/* Performance Metrics Section */}
      {singleProjectData.details.performance && (
        <m.div variants={sectionVariants}>
          <SectionHeader title="Performance Metrics" />
          <m.div variants={contentVariants}>
            {typeof singleProjectData.details.performance === 'string' ? (
              <MarkdownRenderer
                content={singleProjectData.details.performance}
                className="font-Fira text-sm font-medium leading-6"
              />
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {Object.entries(singleProjectData.details.performance).map(
                  ([model, metrics]) => (
                    <m.div
                      key={model}
                      className="rounded-lg bg-gray-50 p-4 dark:bg-dark-700 dark:border-orange-400/10 border-2 border-orange-400/30"
                      whileHover={{ 
                        scale: 1.00,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <h4 className="mb-2 text-center font-ChillaxBold capitalize text-dark-600 dark:text-dark-100">
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
                    </m.div>
                  ),
                )}
              </div>
            )}
          </m.div>
        </m.div>
      )}

      {/* Visualizations Section */}
      {singleProjectData.details.visualizations && (
        <m.div variants={sectionVariants}>
          <SectionHeader title="Visualizations" />
          <m.div variants={contentVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {singleProjectData.details.visualizations.map((viz) => (
              <m.div 
                key={viz.id} 
                className="overflow-hidden rounded-xl bg-gray-50 p-4 dark:bg-dark-700"
                whileHover={{ 
                  scale: 1.0,
                  transition: { duration: 0.3 }
                }}
              >
                <m.img
                  src={viz.img}
                  alt={viz.title}
                  className="mx-auto h-auto max-w-full rounded-xl object-cover lg:max-w-xl"
                  whileHover={{ 
                    scale: 1.06,
                    transition: { duration: 0.7 }
                  }}
                />
                <h4 className="mt-3 text-center font-ChillaxBold">{viz.title}</h4>
                <p className="text-center text-sm text-orange-600 dark:text-orange-500">
                  {viz.description}
                </p>
              </m.div>
            ))}
          </m.div>
        </m.div>
      )}

      {/* Learnings Section */}
      {singleProjectData.details.learnings && (
        <m.div variants={sectionVariants}>
          <SectionHeader title="Key Learnings" />
          <m.div variants={contentVariants}>
            {typeof singleProjectData.details.learnings === 'string' ? (
              <MarkdownRenderer
                content={singleProjectData.details.learnings}
                className="font-Fira text-sm font-medium leading-6"
              />
            ) : (
              <ul className="grid gap-3 md:grid-cols-2">
                {singleProjectData.details.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-orange-500">•</span>
                    <span className="font-Fira text-sm">{learning}</span>
                  </li>
                ))}
              </ul>
            )}
          </m.div>
        </m.div>
      )}

      {/* Team Section */}
      {singleProjectData.details.team && (
        <m.div variants={sectionVariants}>
          <SectionHeader title="Team" />
          <m.div variants={contentVariants} className="grid grid-cols gap-4 md:grid-cols-2">
            {singleProjectData.details.team.map((member, index) => (
              <m.div 
                key={index} 
                className="rounded-xl bg-gray-50 p-4 text-center dark:bg-dark-900"
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
              >
                <h4 className="mb-1 font-ChillaxBold">{member.name}</h4>
                <p className="text-sm text-orange-00 dark:text-orange-400">
                  {member.role}
                </p>
              </m.div>
            ))}
          </m.div>
        </m.div>
      )}
    </m.div>
  );
};

export default ProjectOverview;
