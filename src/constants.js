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
import svnLogo from './assets/tech_logo/svn.png';
import linuxLogo from './assets/tech_logo/linux.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import drfLogo from './assets/tech_logo/drf.png';
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
import jiraLogo from './assets/tech_logo/jira.png';
import jupyterLogo from './assets/tech_logo/Jupyter.png';
import pycharmLogo from './assets/tech_logo/pc.png';
import scrapyLogo from './assets/tech_logo/scrapy.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import scalaLogo from './assets/tech_logo/scala.png';
import djangoLogo from './assets/tech_logo/django1.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import infosys from './assets/company_logo/infosys.jpg';
import krawlnet from './assets/company_logo/krawlnet.jpg';
import devineai from './assets/company_logo/devine.png';

// Education Section Logo's
import rims from './assets/education_logo/rims.png';
import karanjia from './assets/education_logo/karanjia.jpg';
import njsc from './assets/education_logo/njsc.jpg';
import ssvm from './assets/education_logo/ssvm.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [

 {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Scala', logo: scalaLogo },
      
      // { name: 'C-Sharp', logo: csharpLogo },
      // { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },

  // {
  //   title: 'Frontend',
  //   skills: [
  //     { name: 'HTML', logo: htmlLogo },
  //     { name: 'CSS', logo: cssLogo },
  //     { name: 'SASS', logo: sassLogo },
  //     { name: 'JavaScript', logo: javascriptLogo },
  //     { name: 'React JS', logo: reactjsLogo },
  //     { name: 'Angular', logo: angularLogo },
  //     { name: 'Redux', logo: reduxLogo },
  //     { name: 'Next JS', logo: nextjsLogo },
  //     { name: 'Tailwind CSS', logo: tailwindcssLogo },
  //     // { name: 'GSAP', logo: gsapLogo },
  //     // { name: 'Material UI', logo: materialuiLogo },
  //     // { name: 'Bootstrap', logo: bootstrapLogo },
  //   ],
  // },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', logo: djangoLogo },
      // { name: 'Node JS', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Rest', logo: drfLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
 
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Pycharm', logo: pycharmLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Jira', logo: jiraLogo },
      { name: 'Scrapy', logo: scrapyLogo },      
      { name: 'Jupyter', logo: jupyterLogo },
      { name: 'SVN', logo: svnLogo },
      { name: 'Linux', logo: linuxLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: infosys,
      role: "Technology Analyst",
      company: "INFOSYS Limited",
      date: "December 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "Python",
        "Linux",
        "Scala",
        "MySql",
        "Jira",
        // "Node JS",
        // "Tailwind CSS",
        // "MongoDb",
        // "Redux",
        // " Next Js",
      ],
    },
    {
      id: 1,
      img: krawlnet,
      role: "Web Scraping Engineer",
      company: "Krawlnet Technologies Pvt. Ltd.",
      date: "March 2022 - November 2025",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "Python",
        "Scrapy",
        "Json",
        "Regular Expression",
        "HTML",
        "Css",
        "Django",
        "Rest Framework",
        "MySql",
      ],
    },
    {
      id: 2,
      img: devineai,
      role: "Data Science Intern",
      company: "Divine Ai pvt Limited",
      date: "August 2021 - November 2021",
      desc: "consultation and messaging system project based on a doctor consultant system means if a patient want consultant then he book an appointment and then doctor check the appointment status and confirm the patient.",
      skills: [
        "Python",
        "CSS",
        "Django",
        "HTML",
        "MySql",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rims,
      school: "Rourkela Institute Of Management Studies",
      date: "2018 - 2021",
      grade: "8.63 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Bijupattnaik University of Technology, Rourkela, Odisha. During my time at RIMS, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: karanjia,
      school: "Karanjia Autonomous College Karanjia",
      date: "2015 - Aug 2028",
      grade: "78.14%",
      desc: "I completed my Bachelor's degree in Biological Science (B.Sc.) from Karanjia Autonomous College, Karanjia, Mayurbhanj, Odisha. During my studies, I developed a strong foundation in core subjects such as Botany, Zoology, Microbiology, Biochemistry, and Environmental Science. I gained practical laboratory experience, conducted experiments, and participated in project work that enhanced my understanding of biological processes and scientific research. My time at Karanjia Autonomous College helped me build analytical, observational, and problem-solving skills that are essential in the field of biological sciences.",
      degree: "Bachelor of Science - BSC (Biological Science)",
    },
    {
      id: 2,
      img: njsc,
      school: "Kalinga Vision Junior science College",
      date: "2013 - 2015",
      grade: "59%",
      desc: "I completed my Class 12 education from Kalinga Vision Junior Science College under the CHSE board with a focus on Physics, Chemistry, Mathematics, and Biological Science. This combination of subjects provided me with a balanced understanding of both physical and life sciences, strengthening my analytical and scientific knowledge base.",
      degree: "CHSE(XII) - PCM with Biological Science",
    },
    {
      id: 3,
      img: ssvm,
      school: "Saraswati Vidya Mandir",
      date: "2012 - 2013",
      grade: "87.5%",
      desc: "I completed my Class 10 education from Saraswati Vidya Mandir, Champua, Keonjhar under the BSE Odisha board with a focus on Science, Mathematics, and English. This stage of my education helped me build a strong academic foundation and develop logical reasoning, problem-solving, and communication skills.",
      degree: "CHSE(X), Science with Mathematics and English",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  