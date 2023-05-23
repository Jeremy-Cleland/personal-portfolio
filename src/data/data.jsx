import { ReactComponent as CodeFellows } from "../assets/logos/CodeFellows.svg";
import { ReactComponent as ExcelsiorUniversity } from "../assets/logos/ExcelsiorUniversity.svg";
import { ReactComponent as SpecialForcesBadge } from "../assets/logos/SpecialForcesBadge.svg";
import { ReactComponent as SpecialForces } from "../assets/logos/SpecialForces.svg";
import { ReactComponent as UnitedStatesArmy } from "../assets/logos/UnitedStatesArmy.svg";
import { ReactComponent as Group } from "../assets/logos/7THSFG.svg";
import { ReactComponent as JFKSWCS } from "../assets/logos/JFKSWCS.svg";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiReact,
  SiCss3,
  SiNodedotjs,
  SiOpenai,
  SiAxios,
  SiRedux,
  SiSocketdotio,
  SiSass,
  SiStyledcomponents,
  SiMui,
  SiChakraui,
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
  SiApple,
  SiLinux,
  SiGooglechrome,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiGitkraken,
  SiNextdotjs,
} from "react-icons/si";

import { TbBrandMantine } from "react-icons/tb";

const iconStyle = "text-4xl mx-auto inline-block";
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
      languageIcon: <SiJavascript className={iconStyle} />,
    },
    {
      languageName: "HTML5",
      languageIcon: <SiHtml5 className={iconStyle} />,
    },
    {
      languageName: "CSS3",
      languageIcon: <SiCss3 className={iconStyle} />,
    },
  ],
  skills: [
    {
      skillName: "ReactJS",
      skillIcon: <SiReact className={iconStyle} />,
    },
    {
      skillName: "NodeJS",
      skillIcon: <SiNodedotjs className={iconStyle} />,
    },
    {
      skillName: "ExpressJS",
      skillIcon: <SiExpress className={iconStyle} />,
    },
    {
      skillName: "NextJS",
      skillIcon: <SiNextdotjs className={iconStyle} />,
    },
    {
      skillName: "Redux",
      skillIcon: <SiRedux className={iconStyle} />,
    },
    {
      skillName: "Socket.io",
      skillIcon: <SiSocketdotio className={iconStyle} />,
    },
    {
      skillName: "Sass",
      skillIcon: <SiSass className={iconStyle} />,
    },
    {
      skillName: "Styled-Components",
      skillIcon: <SiStyledcomponents className={iconStyle} />,
    },
    {
      skillName: "TailwindCSS",
      skillIcon: <SiTailwindcss className={iconStyle} />,
    },
    {
      skillName: "Axios",
      skillIcon: <SiAxios className={iconStyle} />,
    },
    {
      skillName: "Material-UI",
      skillIcon: <SiMui className={iconStyle} />,
    },
    {
      skillName: "Mantine",
      skillIcon: <TbBrandMantine className={iconStyle} />,
    },
    {
      skillName: "Chakra-UI",
      skillIcon: <SiChakraui className={iconStyle} />,
    },
    {
      skillName: "MongoDB",
      skillIcon: <SiMongodb className={iconStyle} />,
    },
    {
      skillName: "PostgreSQL",
      skillIcon: <SiPostgresql className={iconStyle} />,
    },
    {
      skillName: "MySQL",
      skillIcon: <SiMysql className={iconStyle} />,
    },
    {
      skillName: "Amazon Web Services",
      skillIcon: <SiAmazonaws className={iconStyle} />,
    },
    {
      skillName: "Firebase",
      skillIcon: <SiFirebase className={iconStyle} />,
    },
    {
      skillName: "Git",
      skillIcon: <SiGit className={iconStyle} />,
    },
    {
      skillName: "Github",
      skillIcon: <SiGithub className={iconStyle} />,
    },
    {
      skillName: "VS Code",
      skillIcon: <SiVisualstudiocode className={iconStyle} />,
    },
    {
      skillName: "Postman",
      skillIcon: <SiPostman className={iconStyle} />,
    },
    {
      skillName: "Insomnia",
      skillIcon: <SiInsomnia className={iconStyle} />,
    },
    {
      skillName: "GitKranken",
      skillIcon: <SiGitkraken className={iconStyle} />,
    },
    {
      skillName: "Google Developer Tools",
      skillIcon: <SiGooglechrome className={iconStyle} />,
    },
    {
      skillName: "Google Analytics",
      skillIcon: <SiGoogleanalytics className={iconStyle} />,
    },
    {
      skillName: "Google Tag Manager",
      skillIcon: <SiGoogletagmanager className={iconStyle} />,
    },
    {
      skillName: "Google Search Console",
      skillIcon: <SiGooglesearchconsole className={iconStyle} />,
    },
    {
      skillName: "OpenAI GPT-4",
      skillIcon: <SiOpenai className={iconStyle} />,
    },
    {
      skillName: "Figma",
      skillIcon: <SiFigma className={iconStyle} />,
    },
    {
      skillName: "Heroku",
      skillIcon: <SiHeroku className={iconStyle} />,
    },
    {
      skillName: "Netlify",
      skillIcon: <SiNetlify className={iconStyle} />,
    },
    {
      skillName: "Render",
      skillIcon: <SiRender className={iconStyle} />,
    },
    {
      skillName: "MacOS",
      skillIcon: <SiApple className={iconStyle} />,
    },
    {
      skillName: "Linux",
      skillIcon: <SiLinux className={iconStyle} />,
    },
  ],

  education: [
    {
      title: "Advanced Software Development in Full-Stack JavaScript",
      school: "Code Fellows",
      bullets: [
        "6 month program covering full-stack JavaScript development, including HTML, CSS, JavaScript, React, Redux, Node, Express, SQL, and MongoDB.",
      ],
      schoolIcon: <CodeFellows className={iconStyle} />,
      date: "2021 - 2022",
    },
    {
      title: "Bachelor of Science Liberal Arts",
      school: "Excelsior College",
      bullets: ["Graduated with a 4.0 GPA"],
      schoolIcon: <ExcelsiorUniversity className={iconStyle} />,
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
      schoolIcon: <JFKSWCS className={iconStyle} />,
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
      schoolIcon: <JFKSWCS className={iconStyle} />,
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
      employerIcon: [
        <Group key={Group} className={iconStyle} />,
        <SpecialForces key={SpecialForces} className={iconStyle} />,
        <SpecialForcesBadge key={SpecialForcesBadge} className={iconStyle} />,
      ],

      date: "2014 - 2022",
    },
    {
      title: "Global, Combat Medic",
      employer: "United States Army",
      bullets: [
        "Provided medical care to patients in a variety of settings, including hospitals, clinics, and out-patient facilities.",
      ],
      employerIcon: <UnitedStatesArmy className={iconStyle} />,
      date: "2008 - 2011",
    },
  ],
  webContent: {
    title1: "Inventing the Future: Jeremy's Journey from Idea to Impact",
    subtitle1:
      "Explore My Work: Jeremy Cleland, Passionate Programmer and Designer",

    title2: "A Mission to Innovate: From Green Beret to Software Developer",
    subtitle2: "Leveraging Special Forces Skills in the Tech World",

    title3: "Jeremy Cleland: Elite Training Meets Cutting-Edge Development",
    subtitle3: "Special Forces Medic Turned Software Engineer",

    title4: "Adaptable and Resilient: Jeremy's Journey to Software Development",
    subtitle4: "Leveraging Special Forces Skills in the Tech World",

    title5:
      "Jeremy Cleland: A Unique Fusion of Battlefield and Coding Expertise",
    subtitle5: "Special Forces Medic Turned Software Developer",

    title6: "Tactical Precision Meets Technical Excellence",
    subtitle6:
      "Jeremy's Transition from Special Forces Medic to Software Developer",
  },
  contact: {
    title: "Get In Touch",
    description:
      "I am currently looking for new opportunities. If you have any questions, please feel free to email me at jeremy@clelandco.com",
  },
  skillbadge: [
    {
      name: "ReactJS",
      icon: <SiReact className={iconStyle} />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript className={iconStyle} />,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className={iconStyle} />,
    },
    {
      name: "CSS3",
      icon: <SiCss3 className={iconStyle} />,
    },
    {
      name: "NodeJS",
      icon: <SiNodedotjs className={iconStyle} />,
    },
    {
      name: "ExpressJS",
      icon: <SiExpress className={iconStyle} />,
    },
    {
      name: "Redux",
      icon: <SiRedux className={iconStyle} />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className={iconStyle} />,
    },
    {
      name: "Sass",
      icon: <SiSass className={iconStyle} />,
    },
  ],
};

export default data;
