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
  SiOpenai,
  SiPython,
  SiSwift,
  SiRedux,
  SiSocketdotio,
  SiSass,
  SiStyledcomponents,
  SiMaterialUi,
  SiMantine,
  SiChakraui,
  SiReactbootstrap,
  SiPostgresql,
  SiMysql,
  SiAmazonaws,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
  SiInsomnia,
  SiFigma,
  SiHeroku,
  SiNetlify,
  SiRender,
  SiHostinger,
  SiSiteground,
  SiApple,
  SiLinux,
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
  languages: [
    {
      languageName: "Javascript",
      languageIcon: <SiJavascrip className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      languageName: "HTML5",
      languageIcon: <SiHtml5 className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      languageName: "CSS3",
      languageIcon: <SiCss3 className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      languageName: "Python",
      languageIcon: <SiPython className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      languageName: "Swift",
      languageIcon: <SiSwift className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  skills: [
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
      skillNameL: "NextJS",
      skillIcon: <SiNextdotjs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Redux",
      skillIcon: <SiRedux className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Socket.io",
      skillIcon: <SiSocketdotio className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Sass",
      slillIcone: <SiSass className={BOOTSTRAP_FOR_SKILL_ICON} />,
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
      skillName: "Bootstrap",
      skillIcon: <SiBootstrap className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Material-UI",
      skillIcon: <SiMaterialUi className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Mantine",
      skillIcon: <SiMantine className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Chakra-UI",
      skillIcon: <SiChakraui className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "React-Bootstrap",
      skillIcon: <SiReactbootstrap className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "MongoDB",
      skillIcon: <SiMongodb className={BOOTSTRAP_FOR_SKILL_ICON} />,
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
      skillName: "Amazon Web Services",
      skillIcon: <SiAmazonaws className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Firebase",
      skillIcon: <SiFirebase className={BOOTSTRAP_FOR_SKILL_ICON} />,
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
      skillName: "Postman",
      skillIcone: <SiPostman className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Insomnia",
      skillIcon: <SiInsomnia className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "GitKranken",
      skillIcon: <SiGitkraken className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Google Developer Tools",
      skillIcon: <SiGooglechrome className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Google Analytics",
      skillIcon: <SiGoogleanalytics className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Google Tag Manager",
      skillIcon: <SiGoogletagmanager className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Google Search Console",
      skillIcon: <SiGooglesearchconsole className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "OpenAI GPT-4",
      skillIcon: <SiOpenai className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Figma",
      skillIcon: <SiFigma className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Heroku",
      skillIcon: <SiHeroku className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Netlify",
      skillIcon: <SiNetlify className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Render",
      skillIcon: <SiRender className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Hostinger",
      skillIcon: <SiHostinger className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Siteground",
      skillIcon: <SiSiteground className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "MacOS",
      skillIcon: <SiApple className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Linux",
      skillIcon: <SiLinux className={BOOTSTRAP_FOR_SKILL_ICON} />,
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
  education: [
    {
      title: "Advanced Software Development in Full-Stack JavaScript",
      school: "Code Fellows",
      bullets: [
        "6 month program covering full-stack JavaScript development, including HTML, CSS, JavaScript, React, Redux, Node, Express, SQL, and MongoDB.",
      ],
      schoolIcon: <SiCodecademy className={BOOTSTRAP_FOR_SKILL_ICON} />,
      date: "2021 - 2022",
    },
    {
      title: "Bachelor of Science Liberal Arts",
      school: "Excelsior College",
      bullets: ["Graduated with a 4.0 GPA"],
      schoolIcon: <SiCodecademy className={BOOTSTRAP_FOR_SKILL_ICON} />,
      date: "2020 - 2022",
    },
    {
      title: "Special Forces Qualification Course",
      school: "United States Army, Fort Bragg, NC Special Forces Training",
      bullets: [
        "Accomplished what is considered the most demanding physical and mental training globally, which has less than a 20% success rate among those who are preselected.",
        "Learned excellent leadership abilities, including honesty and integrity, self-awareness, self-confidence, humility, accountability, delegation, and decision-making under pressure.",
        "Developed the ability to work effectively as a team member and team leader, including the ability to build and maintain a cohesive team, and the ability to effectively communicate orally and in writing.",
        "Learned to operate and maintain a wide variety of communications equipment, including high-frequency radios, satellite communications, and secure tactical communications.",
      ],
      schoolIcon: <SiCodecademy className={BOOTSTRAP_FOR_SKILL_ICON} />,
      date: "2012 - 2014",
    },
    {
      title: "Joint Special Operations Medical Training Center",
      school: "United States Army, Fort Bragg, NC Special Forces Training",
      bullets: [
        "Learned to provide advanced trauma and emergency care to patients in a variety of settings, including hospitals, clinics, and out-patient facilities.",
        "Learned prolonged field care, including the ability to provide advanced medical care in austere environments for extended periods.",
        "Learned laboratory procedures, including the ability to perform basic laboratory procedures, including blood draws, urinalysis, and basic microbiology.",
        "Learned human perfomance and injury prevention, including the ability to provide basic human performance and injury prevention services, including physical therapy, nutrition, and strength and conditioning.",
      ],
      schoolIcon: <SiCodecademy className={BOOTSTRAP_FOR_SKILL_ICON} />,
      date: "2011 - 2012",
    },
  ],
  experience: [
    {
      title: "Global, Special Forces Medical Sergeant",
      employer: "United States Army",
      bullets: [
        "Effectively deployed technology in persistent surveillance, secure tactical communications, and cybersecurity solutions to real-world operations.",
        "Leader at special assignment duty supporting a classified national mission.",
      ],
      employerIcon: <SiCodecademy className={BOOTSTRAP_FOR_SKILL_ICON} />,
      date: "2014 - 2022",
    },
    {
      title: "Global, Combat Medic",
      employer: "United States Army",
      bullets: [
        "Provided medical care to patients in a variety of settings, including hospitals, clinics, and out-patient facilities.",
      ],
      employerIcon: <SiCodecademy className={BOOTSTRAP_FOR_SKILL_ICON} />,
      date: "2008 - 2011",
    },
  ],
  contact: {
    title: "Get In Touch",
    description:
      "I am currently looking for new opportunities. If you have any questions, please feel free to email me at jeremy@clelandco.com",
  },
};
export default data;
