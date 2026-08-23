// src/data/content.js

/*
  CONTENT — single source of truth for everything the site displays.
  Edit this file to change copy, links, projects, experience, etc.
  Components/pages import from here rather than hardcoding text.
*/

export const site = {
  name: "Ahnaf Shahriar Ifti",
  title: "Software Developer",
  tagline:
    "Dedicated and results-driven Full-stack Developer with a track record of delivering high-quality software solutions. With extensive experience in React.JS, Next.JS, FastAPI, and .Net technologies, I have successfully contributed to the development of robust applications across multiple platforms. From my internship to my current role, I have consistently demonstrated my ability to thrive in fast-paced environments, delivering exceptional results while meeting tight deadlines. My focus is on delivering tangible results and maintaining a commitment to excellence, making me an asset to any development endeavor. Passionate about continuous learning and growth, I am eager to leverage my skills and expertise to drive innovation and success for your organization.",
  resumeUrl:
    "https://drive.google.com/file/d/1-U74t9kcN2PAgCfGg6T7_qrrEdYnEuHx/view?usp=drive_link",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahnaf-shahriar-ifti-9b1408162/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/AhnafIfti",
    icon: "github",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ahnaf.shahriar.ifti",
    icon: "facebook",
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Publications", path: "/publications" },
  { label: "Expertise", path: "/expertise" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

// Categories used for filtering on the Projects page.
export const projectCategories = [
  { key: "all", label: "All" },
  { key: "machine_learning", label: "Machine Learning" },
  { key: "website", label: "Web Site" },
  { key: "app", label: "App" },
];

export const projects = [
  {
    id: "p1",
    title: "Cricket Activity Detection",
    description:
      "A deep learning system that detects and classifies cricketing activities from video frames, built as part of published research.",
    tech: ["Python", "Deep Learning", "OpenCV"],
    image: "p1.png",
    category: "machine_learning",
    links: [
      {
        label: "Read Paper",
        href: "https://ieeexplore.ieee.org/document/9707392",
      },
    ],
  },
  {
    id: "p2",
    title: "Facial Recognition System",
    description:
      "A facial recognition pipeline focused on high accuracy and efficiency, applied to real-world identification scenarios.",
    tech: ["Python", "Machine Learning"],
    image: "p2.png",
    category: "machine_learning",
    links: [],
  },
  {
    id: "p3",
    title: "North American Driver Records Platform",
    description:
      "A large-scale platform managing millions of driver records, with seamless integration of essential business features.",
    tech: ["React.js", ".NET", "PowerShell"],
    image: "p3.png",
    category: "website",
    links: [],
  },
  {
    id: "p4",
    title: "Sales & Operations Portal",
    description:
      "An integrated software solution spanning sales, marketing, customer service, and operations with secure authentication.",
    tech: ["FastAPI", "React", "Keycloak"],
    image: "p4.png",
    category: "website",
    links: [],
  },
  {
    id: "p5",
    title: "Responsive Web Application",
    description:
      "A responsive frontend built from raw design with secure backend access, following RESTful principles for scalability.",
    tech: ["React", "REST API"],
    image: "p5.png",
    category: "website",
    links: [],
  },
  {
    id: "p6",
    title: "MVC5 Web Backend",
    description:
      "An application backend built on MVC5 with raw coding for fine-grained control over business logic and data flow.",
    tech: [".NET", "MVC5"],
    image: "p6.png",
    category: "website",
    links: [],
  },
  {
    id: "p7",
    title: "FastAPI Web Application",
    description:
      "A web application built during an internship using FastAPI for the backend and a dynamic React frontend.",
    tech: ["FastAPI", "Python", "React"],
    image: "p7.png",
    category: "website",
    links: [],
  },
  {
    id: "p8",
    title: "Frontend Redesign Project",
    description:
      "A frontend enhancement project focused on improving responsiveness, design consistency, and usability.",
    tech: ["React", "CSS"],
    image: "p8.png",
    category: "website",
    links: [],
  },
  {
    id: "p9",
    title: "More on GitHub",
    description:
      "Additional apps and experiments — browse the full list of repositories on GitHub.",
    tech: ["Various"],
    image: "p9.png",
    category: "app",
    links: [
      {
        label: "View Repositories",
        href: "https://github.com/AhnafIfti?tab=repositories",
      },
    ],
  },
];

export const experience = [
  {
    id: "exp1",
    date: "November 2022 - Present",
    company: "CodeExcel Bangladesh",
    role: "Software Developer",
    description:
      "Played a pivotal role in managing and delivering a substantial North American project with millions of driver records, ensuring timely delivery and seamless integration of essential features. Demonstrated proficiency in React.js, .Net, and PowerShell scripting, collaborating closely with stakeholders to achieve project objectives with excellence.",
  },
  {
    id: "exp2",
    date: "March 2022 - November 2022",
    company: "ADN DigiNet",
    role: "Software Engineer",
    description:
      "Contributed to an integrated software solution with sales, marketing, customer service, and operations. Utilized FastAPI and React for robust functionalities. Key contributions: developed essential features, secured password updating with Keycloak, improved platform responsiveness and design, designed scalable frontend architecture, and proactively resolved bugs for stability and performance.",
  },
  {
    id: "exp3",
    date: "December 2021 - March 2022",
    company: "ADN DigiNet",
    role: "Intern",
    description:
      "During a three-month internship, developed a challenging web application project using FastAPI Python and dynamic frontend technologies. Successfully completed tasks, updating endpoints and enhancing frontend designs with React.JS. Demonstrated proficiency, leading to a smooth transition into a full-time role.",
  },
];

export const education = [
  {
    id: "edu1",
    date: "January 2021",
    title: "BSc in Computer Science and Engineering",
    institution: "Ahsanullah University of Science and Technology",
    detail: "CGPA: 2.828/4.00",
  },
  {
    id: "edu2",
    date: "August 2015",
    title: "Higher Secondary Certificate",
    institution: "Dhaka City College",
    detail: "GPA: 5.00/5.00",
  },
  {
    id: "edu3",
    date: "May 2013",
    title: "Secondary School Certificate",
    institution: "St. Joseph Higher Secondary School",
    detail: "GPA: 5.00/5.00",
  },
];

export const publications = [
  {
    id: "pub1",
    title: "Detection of Cricketing Activities using Deep Learning",
    venue: "TENCON 2021 IEEE Region 10 Conference, 2021",
    href: "https://ieeexplore.ieee.org/document/9707392",
  },
];

export const expertise = [
  {
    id: "exp-fullstack",
    icon: "browser",
    title: "Full Stack Web Development",
    description:
      "Building responsive website frontend using raw design and frameworks, I implemented secure access to the database. Additionally, I created application backends on various platforms utilizing different frameworks such as MVC5 and raw coding, while leveraging RESTful principles for efficient data exchange and scalability.",
  },
  {
    id: "exp-ml",
    icon: "code",
    title: "Machine Learning",
    description:
      "With expertise in machine learning, I specialize in developing and deploying neural network models for diverse applications. Notably, I've worked on projects involving detecting cricketing activities from images and implementing facial recognition systems with high accuracy and efficiency.",
  },
  {
    id: "exp-uiux",
    icon: "presentation",
    title: "UI/UX",
    description:
      "Crafting visually engaging UI/UX designs for web applications, I specialize in seamlessly integrating brand identity into every aspect. With expertise in creating intuitive application flows, I optimize user experience across platforms, ensuring maximum engagement, satisfaction, and impact.",
  },
];

export const skillGroups = [
  {
    id: "languages",
    title: "Programming Languages",
    items: [
      { name: "C#", icon: "languages/cSharp.png" },
      { name: "Python", icon: "languages/python.png" },
      { name: "C++", icon: "languages/cpp.png" },
      { name: "JavaScript", icon: "languages/js.png" },
      { name: "TypeScript", icon: "languages/ts.png" },
      { name: "HTML", icon: "languages/html.png" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    items: [
      { name: "React", icon: "frameworks/react.png" },
      { name: "Redux", icon: "frameworks/redux.png" },
      { name: "Next.js", icon: "frameworks/next.png" },
      { name: "FastAPI", icon: "frameworks/fastapi.png" },
      { name: ".NET Core", icon: "frameworks/dotNetCore.png" },
      { name: "Django", icon: "frameworks/django.png" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    items: [
      { name: "Git", icon: "tools/git.png" },
      { name: "Docker", icon: "tools/docker.png" },
      { name: "MS Office", icon: "tools/msOffice.png" },
      { name: "Visual Studio", icon: "tools/vs.png" },
      { name: "VS Code", icon: "tools/vsc.png" },
      { name: "MS SQL Server", icon: "tools/mssqlserver.png" },
    ],
  },
];

export const contact = {
  email: "ahnafshahriarifti@gmail.com",
  phone: "+8801312414116",
  address: ["17/3, Maricha Garden", "East Razabazar", "Farmgate, Dhaka"],
  // Formspree endpoint for the working contact form. Sign up free at
  // https://formspree.io, create a form, and paste its endpoint below.
  // Until this is set, the form falls back to a mailto: link.
  formEndpoint: "", // e.g. 'https://formspree.io/f/xxxxxxx'
};

export const footer = {
  copyrightName: "Ahnaf Shahriar Ifti",
};

export const roles = [
  "Software Developer",
  "Machine Learning Enthusiast",
  "Researcher",
  "Computer Science Graduate",
  "Full-Stack Engineer",
];

export const parallaxSection = {
  statement: "Turning Ideas Into Scalable Solutions",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "9+" },
    { label: "Companies", value: "3" },
    { label: "Published Paper", value: "1" },
  ],
};
