import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import ecom from "@/public/ecom.png";
import emp from "@/public/emp.png";
import quiz from "@/public/quiz.png";
import weather from "@/public/weather.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School (C.B.S.E)",
    location: "Fazilnagar, India",
    description:
      "I completed my class 10th in 2016 with 8.6 CGPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Intermediate (C.B.S.E)",
    location: "Lucknow, India",
    description:
      "I did my class 12th in 2018 with 79.40%.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Bachelor's of Technology",
    location: "Ghaziabad, India",
    description:
      "I did my bachelor's in Computer Science and Engineering from RKGIT(Ghaziabad) and passed with a CGPA of 7.8. I studied several technologies during my college and made projects and did internships on Java full-stack, web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title:"Python Developer Intern",
    location:"Lucknow",
    description:"I did my internship as a python developer in Afluex Multiservices LLP where I learned and implemented Python, javascript and HTML/CSS.",
    icon:React.createElement(CgWorkAlt),
    date:"July' 2022-Sept 2022"
  },
  {
    title:"Junior Software Engineer Trainee",
    location:"Noida",
    description:"During This worked as a Junior Software Engineer Trainee in Data Nova where I worked with team to construct new feature and maintain an ERP software solution contributing to both frontend and the backend. Technology used: HTML/CSS, Javascript, C# and Angular.",
    icon:React.createElement(FaReact),
    date:"Feb' 2023-April 2023"
  },
  {
    title:"Full-Stack developer Trainee",
    location:"Banglore",
    description:"Here I worked as a Java full-stack developer Trainee in My Aushadhi I helped in designing & Developing the company website. I contributed in both front-end and back-end using Java, Springboot, React, web services and more. ",
    icon:React.createElement(FaReact),
    date:"June' 2023-Nov 2023"
  }
] as const;

export const projectsData = [
  {
    title: "Apna Kart",
    description:
      "Designed an E-commerce app for both user and admin with lots of features using React.js ,Java, Springboot, APIs, and JPA along with MySQL along with JWT for authentication.",
    tags: ["React", "Java", "Springboot", "APIs", "MySQl","Javascript"],
    imageUrl: ecom,
  },
  {
    title: "Employee Management System",
    description:
      "Developed a web application for Employee Management, implementing CRUD operations using Java, Springboot, React and BootStrap, MySQL.",
    tags: ["Java", "Springboot","MySQL", "React", "ResttAPI", "JWT",],
    imageUrl: emp,
  },
  // {
  //   title: "My Social App",
  //   description:
  //     "A Facebook-like social media app using React.js and Node.js and MySQL as database.",
  //   tags: ["React", "HTML", "MySQL", "CSS", "Node.js"],
  //   imageUrl: wordanalyticsImg,
  // },
  {
    title:"Live Weather Forecaste app",
    description:"Get the latest weather updates of any place with this app built using React.js and Tailwind.",
    tags:["React","Next.js", "Tailwind","Weather api"],
    imageUrl: weather,
  },
  {
    title: "Online Examination System",
    description:
      "Created MERN-based MCQ Quiz App , empowering admin to generate quizzes and delivering result updates to users on their dashboards.",
    tags: ["React", "Expess.js", "MongoDB", "Node.js"],
    imageUrl: quiz,
  }
] as const;

export const skillsData = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Springboot",
  "Node.js",
  "Next.js",
  "MySQL",
  "DSA",
  "Git",
  "Github",
  "JIRA",
  "Docker",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Machine Learning",
  "Cloud Computing",
  "Django",
  "Firebase",
  "Framer Motion",
] as const;
