import {
  SiPython,
  SiJavascript,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiFirebase,
  SiAwsamplify,
  SiFastapi,
  SiFlask,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

export const resumeData = {
  personalInfo: {
    name: "Jeremy Cleland",
    title: "AI Engineer & Data Scientist",
    location: "Bay City, MI",
    email: "jeremy@clelandco.com",
    phone: "850-502-6273",
    linkedIn: "linkedin.com/in/jeremy-cleland",
    github: "github.com/jeremy-cleland",
    bio: "Jeremy Cleland is a dedicated AI Engineer and Army veteran with a strong foundation in machine learning, deep learning, and data analysis. Currently pursuing a Master's in Artificial Intelligence at the University of Michigan-Dearborn, Jeremy specializes in developing scalable AI systems and applying advanced analytics to solve complex problems. His unique background as a Special Forces Medic equips him with exceptional leadership, adaptability, and problem-solving skills, making him a valuable asset in AI-driven innovation.",
  },

  technicalSkills: {
    languages: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "SQL", icon: <SiPostgresql /> },
      { name: "Bash", icon: <SiAwsamplify /> },
    ],
    skillsAndTools: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "OpenAI API", icon: <SiOpenai /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },

  techSkills: [
    { name: "TensorFlow", icon: <SiTensorflow />, delay: 0 },
    { name: "PyTorch", icon: <SiPytorch />, delay: 0.1 },
    { name: "Scikit-learn", icon: <SiScikitlearn />, delay: 0.1 },
    { name: "Pandas", icon: <SiPandas />, delay: 0.1 },
    { name: "NumPy", icon: <SiNumpy />, delay: 0.1 },
    { name: "PostgreSQL", icon: <SiPostgresql />, delay: 0.1 },
    { name: "MongoDB", icon: <SiMongodb />, delay: 0.1 },
    { name: "OpenAI", icon: <SiOpenai />, delay: 0.1 },
  ],

  projects: [
    {
      title: "Sepsis Prediction Model",
      date: "Oct 2024",
      url: "github.com/Jeremy-Cleland/sepsis-prediction",
      description:
        "Developed a machine learning model to predict sepsis onset using patient data, leveraging XGBoost, Random Forest, and Linear Regression for high-accuracy predictions.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    },
    {
      title: "AI-Powered Chatbot",
      date: "Aug 2024",
      url: "github.com/Jeremy-Cleland/ai-chatbot",
      description:
        "Designed and implemented a chatbot using OpenAI's GPT-3 API to provide intelligent customer support and data retrieval.",
      techStack: ["OpenAI", "FastAPI", "Python"],
    },
    {
      title: "Portfolio Website",
      date: "June 2023",
      url: "dev.clelandco.com",
      description:
        "Built a personal portfolio to showcase AI projects, academic achievements, and professional milestones.",
      techStack: ["React.js", "Tailwind CSS", "Vite"],
    },
  ],

  education: [
    {
      institution: "University of Michigan-Dearborn",
      location: "Dearborn, MI",
      degree: "Master of Science in Artificial Intelligence (MS/AI)",
      graduationYear: "Expected 2025",
      bulletPoints: [
        "Concentration in Knowledge Management and Reasoning.",
        "Coursework includes advanced machine learning, deep learning, and natural language processing.",
      ],
    },
    {
      institution: "Code Fellows",
      location: "Seattle, WA",
      degree:
        "Certificate - Advanced Software Development in Full-Stack JavaScript",
      graduationYear: "2023",
      bulletPoints: [
        "Completed a 6-month intensive program, specializing in full-stack JavaScript.",
        "Developed skills in server-side programming, database management, and application deployment.",
      ],
    },
    {
      institution: "Excelsior University",
      location: "Albany, NY",
      degree: "Bachelor of Science in Liberal Arts",
      graduationYear: "2022",
      bulletPoints: [
        "Graduated summa cum laude with a 4.0 GPA, demonstrating exceptional academic performance.",
        "Developed a strong foundation in critical thinking, communication, and analytical skills.",
      ],
    },
  ],

  experience: [
    {
      position: "Special Forces Medical Sergeant",
      company: "United States Army",
      location: "Global",
      startDate: "Jul 2014",
      endDate: "Aug 2022",
      description: [
        "Led cross-functional teams in classified missions, leveraging adaptability and critical thinking.",
        "Implemented data-driven systems, enhancing team efficiency and operational accuracy.",
        "Developed training protocols to ensure mission readiness for diverse teams.",
      ],
    },
    {
      position: "Combat Medic",
      company: "United States Army",
      location: "Global",
      startDate: "Sep 2008",
      endDate: "Jul 2014",
      description: [
        "Provided medical support in high-pressure environments, enhancing unit cohesion and readiness.",
        "Streamlined operational workflows through innovative solutions and technology adoption.",
      ],
    },
  ],
};
