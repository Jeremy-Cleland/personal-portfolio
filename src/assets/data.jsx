import React from "react";
import {
  RiCss3Line,
  RiReactjsLine,
  RiCodeSSlashLine,
  RiHtml5Line,
} from "react-icons/ri";
import {
  SiJavascrip,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiReact,
  SiCss3,
  SiNodedotjs,
  SiBootstrap,
} from "react-icons/si";
const data = {
  name: "Jeremy Cleland",
  title: "Full Stack Javascript Developer",
  social: {
    github: "https://github.com/jeremy-cleland",
    linkedin: "https://www.linkedin.com/in/jeremy-cleland/",
    email: "jeremy@clelandco.com",
  },
  about: {
    title: "My Background",
    description:
      "My name is Jeremy Cleland, and I'm a software developer based in Michigan. I retired from the Army in August 2022 as a Special Forces Medical Sergeant. While the work I did while serving as a Green Beret was specific to our goals and missions, I learned and developed effective leadership skills and the importance of integrity, self-awareness, confidence, humility, and accountability. What excites me the most about software development is the constant innovation and growth, which offer tremendous opportunities to gain knowledge and implement those skills and expertise to provide the best possible product to all stakeholders. I am committed to joining a team and utilizing my experience to develop creative, market-competitive software to benefit the organization.",
  },
  skills: [
    {
      skillName: "Full Stack Developer",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Javascript",
      skillIcon: <SiJavascrip className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <SiReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "NodeJS",
      skillIcon: <SiNodedotjs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ExpressJS",
      skillIcon: <SiExpress className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillNameL: "Next.js",
      skillIcon: <SiNextdotjs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "MongoDB",
      skillIcon: <SiMongodb className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },

    {
      skillName: "HTML5",
      skillIcon: <SiHtml5 className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "CSS3",
      skillIcon: <SiCss3 className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "PostgreSQL",
      skillIcon: <SiPostgresql className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "MySQL",
      skillIcon: <SiMysql className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Sass",
      slillIcone: <SiSass className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Redux",
      skillIcon: <SiRedux className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Amazon Web Services",
      skillIcon: <SiAmazonaws className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Socket.io",
      skillIcon: <SiSocketdotio className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Bootstrap",
      skillIcon: <SiBootstrap className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Styled-Components",
      skillIcon: <SiStyledcomponents className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "TailwindCSS",
      skillIcon: <SiTailwindcss className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Git",
      skillIcon: <SiGit className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Github",
      skillIcon: <SiGithub className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "VS Code",
      skillIcon: <SiVisualstudiocode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Netlify",
      skillIcon: <SiNetlify className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Firebase",
      skillIcon: <SiFirebase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Postman",
      skillIcone: <SiPostman className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Figma",
      skillIcon: <SiFigma className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description:
        "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: ["template", "portfolio", "reactjs", "tailwindcss"],
      link: "https://github.com/braydentw/react-tailwind-portfolio",
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: ["website", "portfolio", "nextjs", "tailwindcss"],
      link: "https://github.com/braydentW/braydentw",
    },
  ],
};
export default data;
