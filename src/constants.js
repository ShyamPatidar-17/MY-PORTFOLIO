// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import flask from './assets/tech_logo/Flask.png';
import render from './assets/tech_logo/Render.png'


// Education Section Logo's
import svvvlogo from './assets/education_logo/SVVV.jpeg';
import kealogo from './assets/education_logo/KEA.png';


// Project Section Logo's
import milkmatelogo from './assets/work_logo/Milkmate.png';
import todologo from './assets/work_logo/To-Do.png';
import ecommercelogo from './assets/work_logo/Cara.png';
import calculatorlogo from './assets/work_logo/Calculator.png';
import portfoliologo from './assets/work_logo/portfolio.png';


// Experience Section Logo's

import internpeLogo from './assets/company_logo/internpe_logo.jpeg'
import codsoftLogo from './assets/company_logo/codsoft_logo.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Flask', logo: flask },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Render', logo: render },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: internpeLogo,
      role: "Frontend Intern",
      company: "InternPe",
      date: "August 2024 - September 2024",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      id: 1,
      img: codsoftLogo,
      role: "Frontend Intern",
      company: "Codsoft",
      date: "October 2024 - November 2024",
      desc: "Contributed to innovative projects as a Frontend Intern, leading frontend development using technologies such as HTML, CSS, JavaScript,Tailwind technologies.",
      skills: [ 
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: svvvlogo,
      school: "SVVV University, Indore",
      date: "Sept 2022 - July 2026",
      grade: "8.10 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from SVVV University, Indore. During my time at SVVV, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at SVVV University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Computer Science and Engineering - B.Tech(CSE)",
    },
    
    {
      id: 1,
      img: kealogo,
      school: "Kautilya Education Academy, Shajapur",
      date: "July 2021 - June 2022",
      grade: "85%",
      desc: "I completed my class 12 education from Kautilya Education Academy, Shajapur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      school: "Dinah Convent School, Tarana",
      date: "June 2018 - March 2019",
      grade: "68%",
      desc: "I completed my class 10 education from Dinah Convent School, Tarana, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Milkmate - Dairy Mangement and Milk Delivery",
      description:
        "To digitize and simplify the traditional milk delivery process by connecting dairies, milkmen, and  customers through a unified and user-friendly web platform. ",
      image: milkmatelogo,
      tags: ["HTML", "CSS", "JavaScript","MongoDB","Render","Express.js","Node.js"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://milkmate.onrender.com",
    },
    {
      id: 1,
      title: "Wanderlust - Travel stay booking platform",
      description:
        "To build a platform where users can explore, book, and review vacation stays, while hosts can list and manage rental properties — similar to Airbnb, promoting easy, secure, and efficient stay bookings online",
      image: ecommercelogo,
      tags: ["HTML", "CSS", "JavaScript","MongoDB","Render","Express.js","Node.js"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://major-project-alfb.onrender.com",
    },
    {
      id: 2,
      title: "CARA - An E-Commerce website",
      description:
        "To replicate the user interface of a modern e-commerce website (like Cara), focusing on responsive design, interactive product listings, and smooth user experience — purely as a frontend project to showcase web design and UI development skills.",
      image: ecommercelogo,
      tags: ["HTML", "CSS", "JavaScript","Bootstrap","Material UI",],
      github: "https://github.com/codingmastr/CSPrep",
    },
    
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: portfoliologo,
      tags: ["React", "Tailwind", "Vercel"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 4,
      title: "To-Do List",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: todologo,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
    },

    {
      id: 5,
      title: "Simple Calculator",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: calculatorlogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },

  ];  
