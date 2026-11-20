export const site = {
  name: "Ahnaf Shahriar Ifti",
  // title: "Software Developer",
  // tagline:
  //   "Dedicated and results-driven Full-stack Developer with a track record of delivering high-quality software solutions. With extensive experience in React.JS, Next.JS, FastAPI, and .Net technologies, I have successfully contributed to the development of robust applications across multiple platforms. From my internship to my current role, I have consistently demonstrated my ability to thrive in fast-paced environments, delivering exceptional results while meeting tight deadlines. My focus is on delivering tangible results and maintaining a commitment to excellence, making me an asset to any development endeavor. Passionate about continuous learning and growth, I am eager to leverage my skills and expertise to drive innovation and success for your organization.",
  tagline:
    "Full-stack developer and ML researcher with 2.5+ years of experience building software for companies in Bangladesh and Canada. I build web apps with React, Next.js, .NET and FastAPI, train deep learning models for medical imaging, and set up secure CI/CD pipelines with Docker and Jenkins. I recently completed my Master of Computing at Curtin University.",
  resumeUrl:
    "https://drive.google.com/file/d/1fz1VM2pwrFPSEK-GPziQGu6k1YIVStOg/view?usp=sharing",
  whatIDo:
    "I work across three areas: building software, AI research, and shipping code safely. As a developer, I built insurance platforms for the Insurance Bureau of Canada and an AI-driven business platform ADN DigiNet in Bangladesh, using React, Next.js, .NET and FastAPI. As a researcher, I published a deep learning paper at IEEE TENCON 2021. For my Master's thesis, I built a 3D brain tumour segmentation model and brought it into a working web platform with 3D tumour views. On the DevOps side, I build CI/CD pipelines with Docker, Jenkins and GitLab that test, scan and deploy code automatically. I am open to software engineering roles and PhD opportunities in medical image analysis, computer vision and explainable AI.",
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
  { label: "Research", path: "/publications" },
  { label: "Expertise", path: "/expertise" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

// Categories used for filtering on the Projects page.
export const projectCategories = [
  { key: "all", label: "All" },
  { key: "machine_learning", label: "Machine Learning" },
  { key: "website", label: "Web Site" },
  // { key: "app", label: "App" },
  { key: "devops", label: "DevOps" },
];

export const projects = [
  // ---------------- Machine Learning ----------------
  {
    id: "p1",
    title: "NeuroVision AI",
    description:
      "Built 3D deep learning models that segment brain tumours in MRI (mean Dice 0.92), and the Django web platform that runs them, with slice-by-slice views and PDF reports.",
    tech: ["Python", "PyTorch", "Django", "PostgreSQL", "Docker"],
    category: ["machine_learning", "website"],
    links: [
      {
        label: "View Repository",
        href: "https://github.com/AhnafIfti/Web-Platform-for-Brain-Tumor-Detection-and-Predictive-Outcome-Modeling",
      },
    ],
  },
  {
    id: "p2",
    title: "Cricket Activity Detection",
    description:
      "Custom ResNet50 trained with the One Cycle Policy that classifies cricket shots from images with 99.47% test accuracy. Published at IEEE TENCON 2021.",
    tech: ["Python", "OpenCV", "PyTorch"],
    category: "machine_learning",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/AhnafIfti/Detection-of-Cricketing-Activities-using-Deep-Learning",
      },
      {
        label: "Read Paper",
        href: "https://ieeexplore.ieee.org/document/9707392",
      },
    ],
  },
  {
    id: "p3",
    title: "Fetal Health Classification",
    description:
      "Finds at-risk pregnancies from imbalanced CTG data. XGBoost caught 33 of 35 pathological cases, and SHAP explains each prediction.",
    tech: ["Python", "scikit-learn", "XGBoost", "SHAP"],
    category: "machine_learning",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/AhnafIfti/fetal-health-classification",
      },
    ],
  },
  {
    id: "p4",
    title: "Parkinson's Severity from Voice",
    description:
      "Predicts Parkinson's severity for patients the model has never seen. SHAP, PDP and ALE showed why the models failed to generalise.",
    tech: ["Python", "scikit-learn", "XGBoost", "SHAP"],
    category: "machine_learning",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/AhnafIfti/parkinsons-severity-xai",
      },
    ],
  },

  // ---------------- DevOps ----------------
  {
    id: "p5",
    title: "Secure Jenkins CI/CD Pipeline",
    description:
      "Node.js pipeline that runs unit tests, blocks High and Critical issues with a Snyk security gate, then builds and pushes a versioned Docker image.",
    tech: ["Jenkins", "Docker", "Snyk", "Node.js"],
    category: "devops",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/AhnafIfti/aws-elastic-beanstalk-express-js-sample",
      },
    ],
  },
  {
    id: "p6",
    title: "Hardened Jenkins + Docker-in-Docker",
    description:
      "Docker Compose setup for a locked-down CI server, with Jenkins talking to its own Docker daemon over TLS.",
    tech: ["Docker", "Docker Compose", "Jenkins"],
    category: "devops",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/AhnafIfti/isec6000-a2-jenkins-compose",
      },
    ],
  },
  {
    id: "p7",
    title: "GitLab CI/CD Pipeline",
    description:
      "GitLab CI/CD pipeline that automatically builds and tests a Python application on every push.",
    tech: ["GitLab CI/CD", "Python", "Docker"],
    category: "devops",
    links: [
      {
        label: "View Repository",
        href: "https://gitlab.com/Ahnaf.Ifti/isec6000-assessment-1",
      },
    ],
  },

  // ---------------- Web Development ----------------
  {
    id: "p8",
    title: "BlogStack – Full-Stack Blog App",
    description:
      "A blogging app with Google login, tags, search and author subscriptions. React frontend (BlogStack) with an Express and MongoDB API (BloggerIt).",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "website",
    links: [
      { label: "Frontend", href: "https://github.com/AhnafIfti/BlogStack" },
      { label: "Backend", href: "https://github.com/AhnafIfti/BloggerIt" },
    ],
  },
  {
    id: "p9",
    title: "Student Task Deadline Tracker",
    description:
      "Helps students manage courses, tasks and deadlines, with login and live updates.",
    tech: ["React", "TypeScript", "MUI", "Express", "MongoDB", "Socket.io"],
    category: "website",
    links: [
      {
        label: "View Repository",
        href: "https://github.com/AhnafIfti/Student-Task-Deadline-Tracker",
      },
    ],
  },
  {
    id: "p10",
    title: "ePaper",
    description:
      "News reader inspired by The New York Times, showing the most viewed, shared and emailed articles from the NYT API.",
    tech: ["React", "TypeScript", "Redux"],
    category: "website",
    links: [
      { label: "View Repository", href: "https://github.com/AhnafIfti/ePaper" },
    ],
  },
  {
    id: "p11",
    title: "BlogIt – FastAPI Blog API",
    description:
      "Blog backend with user management, image uploads and JWT login for admins, plus simple HTML pages for browsing posts.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    category: "website",
    links: [
      { label: "View Repository", href: "https://github.com/AhnafIfti/BlogIt" },
    ],
  },
  {
    id: "p12",
    title: "PAATHSHALA – Student Q&A Platform",
    description:
      "A Q&A website for Bangladeshi students. Users answer each other's questions and earn ranks and tags as they help. Built twice, in ASP.NET MVC5 and in PHP.",
    tech: ["C#", "ASP.NET MVC5", "Entity Framework", "PHP", "MySQL"],
    category: "website",
    links: [
      {
        label: "ASP.NET Version",
        href: "https://github.com/AhnafIfti/PAATHSHALA_ASP.NET_MVC5",
      },
      {
        label: "PHP Version",
        href: "https://github.com/AhnafIfti/PAATHSHALA_PHP",
      },
    ],
  },
];

// Professional projects (team work at companies, private code)
export const professionalProjects = [
  {
    id: "pro1",
    company: "CodeExcel · Insurance Bureau of Canada",
    dates: "Dec 2022 – Jun 2024",
    title: "DASH – Driver and Automobile Search History",
    role: "Frontend",
    description:
      "Industry-owned system that retrieves driver and auto insurance history (policies and claims) used to give insurance quotes.",
    stack: ["React", "TypeScript", "Redux", "MUI", "Node.js"],
  },
  {
    id: "pro2",
    company: "CodeExcel · Insurance Bureau of Canada",
    dates: "Jun 2023 – Mar 2024",
    title: "Secret Management Portal",
    role: "Full stack",
    description:
      "One place to manage app secrets spread across many Azure directories, with role-based access, secret rotation and expiry alerts.",
    stack: [
      "React",
      "TypeScript",
      "Redux",
      "MUI",
      ".NET Core",
      "MS SQL Server",
    ],
  },
  {
    id: "pro3",
    company: "CodeExcel · Insurance Bureau of Canada",
    dates: "Sep 2023 – Mar 2024",
    title: "Insurance Bureau of Canada Website",
    role: "Frontend",
    description:
      "SEO-focused website with a headless CMS and serverless functions that talk to secure in-house APIs.",
    stack: ["Next.js", "React", "Tailwind", "Storyblok", "Algolia"],
  },
  {
    id: "pro4",
    company: "ADN DigiNet",
    dates: "Feb 2022 – Nov 2022",
    title: "Roboket",
    role: "Full stack",
    description:
      "AI-driven platform that automates sales, marketing and customer service for growing businesses.",
    stack: ["React", "TypeScript", "Redux", "FastAPI", "Node.js", "Docker"],
  },
];

export const experience = [
  {
    id: "exp1",
    company: "CodeExcel Bangladesh",
    logo: "codeexcel.png",
    location: "Ontario, Canada (Remote)",
    subtitle: "Client: Insurance Bureau of Canada",
    dates: "Nov 2022 – Jun 2024",
    projects: ["DASH", "Secret Management Portal", "IBC Website"],
    roles: [
      {
        title: "Software Developer",
        department:
          "Technical Infrastructure & IT Security, Technology Services",
        dates: "Nov 2022 – Jun 2024",
        points: [
          "Built frontend features with React and TypeScript for DASH, an insurance history system with millions of driver records used across the Canadian insurance industry, and helped deliver it on time.",
          "Worked full stack on a Secret Management Portal (React, .NET Core, SQL Server) that manages app secrets across Azure directories, with role-based access, rotation and expiry alerts.",
          "Helped build the Insurance Bureau of Canada website with Next.js, Storyblok and Algolia.",
          "Wrote PowerShell scripts to apply data retention policies.",
          "Worked closely with project managers, team leads and stakeholders across the development lifecycle.",
        ],
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      ".NET Core",
      "MS SQL Server",
      "Azure",
      "PowerShell",
    ],
  },
  {
    id: "exp2",
    company: "ADN DigiNet",
    logo: "adndiginet.png",
    location: "Dhaka, Bangladesh",
    dates: "Dec 2021 – Nov 2022",
    projects: ["Roboket"],
    roles: [
      {
        title: "Software Engineer",
        dates: "Mar 2022 – Nov 2022",
        points: [
          "Worked on Roboket, an AI-driven platform for sales, marketing, customer service and operations.",
          "Designed a scalable React frontend and built key features that improved speed and responsiveness.",
          "Built API features with FastAPI and added secure password management with Keycloak.",
          "Found and fixed bugs to make the platform more stable.",
        ],
      },
      {
        title: "Software Engineering Intern",
        dates: "Dec 2021 – Mar 2022",
        points: [
          "Built a web application with FastAPI and React during a three-month internship.",
          "Added and updated API endpoints and improved frontend designs, which led to a full-time role.",
        ],
      },
    ],
    stack: ["React", "TypeScript", "Redux", "FastAPI", "Keycloak", "Docker"],
  },
];

export const education = [
  {
    id: "edu1",
    level: "Master's",
    degree: "Master of Computing",
    major: "Major in Computer Science",
    department:
      "School of Electrical Engineering, Computing and Mathematical Sciences",
    institution: "Curtin University",
    location: "Perth, Western Australia",
    dates: "Feb 2025 – Nov 2026",
    logo: "curtin.png",
    // grade: { label: "WAM", value: "YOUR WAM" },
    thesis: {
      title:
        "Web Platform for Brain Tumour Segmentation and Predictive Outcome Modelling",
      supervisor: "Dr Chayan Mondal",
      result:
        "3D nnU-Net with a mean validation Dice of 0.92, integrated into the NeuroVision AI platform.",
      link: "/publications",
    },
  },
  {
    id: "edu2",
    level: "Bachelor's",
    degree: "Bachelor of Science",
    major: "Computer Science and Engineering",
    institution: "Ahsanullah University of Science and Technology",
    location: "Dhaka, Bangladesh",
    dates: "Apr 2016 – Jan 2021",
    logo: "aust.png",
    // grade: { label: "CGPA", value: "YOUR CGPA" },
    thesis: {
      title: "Detection of Cricketing Activities using Deep Learning",
      supervisor: "Shoeb Mohammad Shahriar",
      result:
        "Custom ResNet50 with 99.47% test accuracy, published at IEEE TENCON 2021.",
      link: "/publications",
    },
  },
];

export const publications = [
  {
    id: "pub1",
    badge: "Conference Paper",
    title: "Detection of Cricketing Activities using Deep Learning",
    label: "Authors",
    value: [
      { name: "Co-author One" },
      { name: "Ahnaf Shahriar Ifti", me: true },
      { name: "Co-author Two" },
    ],
    meta: [
      { label: "Venue", value: "TENCON 2021 – IEEE Region 10 Conference" },
      { label: "Year", value: "2021" },
      {
        label: "Authors",
        value: [
          { name: "Ahnaf Shahriar Ifti", me: true },
          { name: "Shoeb Mohammad Shahriar" },
          { name: "Miftaul Mannan" },
          { name: "Enamul Haque" },
          { name: "Mahmudur Rahman" },
        ],
      },
    ],
    summary:
      "A deep learning approach that classifies cricket activities from images. A custom ResNet50 trained with the One Cycle Policy reached 99.47% test accuracy and outperformed four other CNNs.",
    stats: [
      { value: "99.47%", label: "Test accuracy" },
      { value: "5", label: "CNN models compared" },
      { value: "5", label: "Cites in Papers" },
      { value: "IEEE", label: "Tencon 2021" },
    ],
    methods: ["Image Classification", "ResNet50", "fastai", "PyTorch"],
    links: [
      {
        label: "Read Paper",
        href: "https://ieeexplore.ieee.org/document/9707392",
      },
      {
        label: "View Code",
        href: "https://github.com/AhnafIfti/Detection-of-Cricketing-Activities-using-Deep-Learning",
      },
    ],
  },
  {
    id: "pub2",
    badge: "In Preparation",
    badgeOutline: true,
    title: "TBD",
    meta: [
      { label: "Status", value: "Manuscript in preparation" },
      { label: "Target venue", value: "TBD" },
      {
        label: "Authors",
        value: [
          { name: "Ahnaf Shahriar Ifti", me: true },
          { name: "Chayan Mondal" },
        ],
      },
    ],
    summary:
      "A 3D nnU-Net approach to brain tumour segmentation in multi-modal MRI, using an ablation study to choose the final model settings.",
    methods: ["Medical Image Segmentation", "nnU-Net", "BraTS"],
  },
];

export const expertise = [
  {
    id: "exp-fullstack",
    icon: "browser",
    title: "Full Stack Web Development",
    description:
      "I build responsive React and Next.js frontends and secure APIs with .NET Core, FastAPI and Node.js, from insurance platforms in Canada to business software in Bangladesh.",
  },
  {
    id: "exp-ml",
    icon: "code",
    title: "Machine Learning & Medical Imaging",
    description:
      "I train and test deep learning models for medical images, like 3D brain tumour segmentation, and explain model decisions with tools like SHAP.",
  },
  {
    id: "exp-devops",
    icon: "pipeline",
    title: "DevOps & Secure CI/CD",
    description:
      "I build pipelines that test, scan and ship code automatically, with Docker, Jenkins, GitLab CI/CD and security gates like Snyk.",
  },
];

export const proficiencyGroups = [
  {
    id: "lang",
    title: "Languages & Frameworks",
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "Next.js", level: 70 },
      { name: "Redux", level: 70 },
      { name: "Python", level: 80 },
      { name: "C#", level: 80 },
      { name: ".NET Core", level: 70 },
      { name: "FastAPI", level: 75 },
      { name: "Node.js", level: 40 },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    items: [
      { name: "PyTorch", level: 75 },
      { name: "nnU-Net", level: 75 },
      { name: "Pandas / NumPy", level: 80 },
      { name: "scikit-learn", level: 75 },
      { name: "XGBoost", level: 70 },
      { name: "SHAP", level: 70 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    items: [
      { name: "Git", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Jenkins", level: 65 },
      { name: "GitLab CI/CD", level: 65 },
      { name: "Azure", level: 60 },
      { name: "AWS", level: 40 },
    ],
  },
  {
    id: "tools",
    title: "Databases & Tools",
    items: [
      { name: "MS SQL Server", level: 90 },
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "VS Code", level: 95 },
      { name: "Visual Studio", level: 80 },
    ],
  },
];

export const skillGroups = [
  {
    id: "languages",
    title: "Programming Languages",
    items: [
      { name: "C#", icon: "Languages/cSharp.png" },
      { name: "Python", icon: "Languages/python.png" },
      { name: "C++", icon: "Languages/cpp.png" },
      { name: "JavaScript", icon: "Languages/js.png" },
      { name: "TypeScript", icon: "Languages/ts.png" },
      { name: "HTML", icon: "Languages/html.png" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    items: [
      { name: "React", icon: "framework/react.png" },
      { name: "Redux", icon: "framework/redux.png" },
      { name: "Next.js", icon: "framework/next.png" },
      { name: "FastAPI", icon: "framework/fastapi.png" },
      { name: ".NET Core", icon: "framework/dotNetCore.png" },
      { name: "Django", icon: "framework/django.png" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    items: [
      { name: "Git", icon: "Tools/git.png" },
      { name: "Docker", icon: "Tools/docker.png" },
      { name: "MS Office", icon: "Tools/msOffice.png" },
      { name: "Visual Studio", icon: "Tools/vs.png" },
      { name: "VS Code", icon: "Tools/vsc.png" },
      { name: "MS SQL Server", icon: "Tools/mssqlserver.png" },
    ],
  },
];

// export const contact = {
//   email: "ahnafshahriarifti@gmail.com",
//   phone: "+61480631521",
//   address: ["Perth, Western Australia", "Australia"],
//   // Formspree endpoint for the working contact form. Sign up free at
//   // https://formspree.io, create a form, and paste its endpoint below.
//   // Until this is set, the form falls back to a mailto: link.
//   formEndpoint: "", // e.g. 'https://formspree.io/f/xxxxxxx'
// };

export const footer = {
  copyrightName: "Ahnaf Shahriar Ifti",
};

export const roles = [
  "Software Engineer",
  "Machine Learning Enthusiast",
  "Researcher",
  "Computer Science Graduate",
  // "Full-Stack Engineer",
];

export const parallaxSection = {
  statement: "BUILDING SOFTWARE. ADVANCING AI.",
  stats: [
    { label: "Years in Industry", value: "2.5+" },
    { label: "Projects Built", value: "20+" },
    { label: "Companies", value: "2" },
    { label: "Published Paper", value: "1" },
  ],
};

// News page. Newest first.
export const news = [
  {
    id: "news8",
    date: "Nov 2026",
    text: [
      "Presented my Master's project at Curtin University: ",
      {
        label: "NeuroVision AI",
        href: "https://github.com/AhnafIfti/Web-Platform-for-Brain-Tumor-Detection-and-Predictive-Outcome-Modeling",
      },
      ", a web platform that segments brain tumours in 3D MRI using our final nnU-Net model.",
    ],
  },
  {
    id: "news7",
    date: "Feb 2025",
    text: [
      "Started my Master of Computing (Computer Science) at Curtin University, Perth, Australia.",
    ],
  },
  {
    id: "news6",
    date: "Nov 2022",
    text: [
      "Joined CodeExcel as a Software Developer, working remotely on projects for the Insurance Bureau of Canada.",
    ],
  },
  {
    id: "news5",
    date: "Mar 2022",
    text: [
      "Joined ADN DigiNet as a full-time Software Engineer after completing my internship.",
    ],
  },
  {
    id: "news4",
    date: "2022",
    text: [
      "Our paper ",
      {
        label: "Detection of Cricketing Activities using Deep Learning",
        href: "https://ieeexplore.ieee.org/document/9707392",
      },
      " was published in the IEEE TENCON 2021 proceedings on IEEE Xplore.",
    ],
  },
  {
    id: "news3",
    date: "Dec 2021",
    text: [
      "Presented our paper on detecting cricketing activities with deep learning at IEEE TENCON 2021 (Auckland, New Zealand).",
    ],
  },
  {
    id: "news2",
    date: "Dec 2021",
    text: ["Joined ADN DigiNet in Dhaka as a Software Engineering Intern."],
  },
  {
    id: "news1",
    date: "Jan 2021",
    text: [
      "Graduated with a BSc in Computer Science and Engineering from Ahsanullah University of Science and Technology (AUST), Dhaka.",
    ],
  },
];

export const contact = {
  email: "ahnafshahriarifti@gmail.com",
  phone: "+61480631521", // used for the tap-to-call link (no spaces)
  phoneDisplay: "+61 480 631 521", // what people see
  location: "Perth, Western Australia",
  gmailUrl:
    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=ahnafshahriarifti@gmail.com&su=Hello%20from%20your%20portfolio",
  accounts: [
    { name: "GitHub", icon: "github", href: "https://github.com/AhnafIfti" },
    {
      name: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/ahnaf-shahriar-ifti-9b1408162/",
    },
    {
      name: "GitLab",
      icon: "gitlab",
      href: "https://gitlab.com/Ahnaf.Ifti",
    },
    {
      name: "Google Scholar",
      icon: "scholar",
      href: "https://scholar.google.com/citations?user=O_uKdUIAAAAJ&hl=en",
    },
    {
      name: "ResearchGate",
      icon: "researchgate",
      href: "https://www.researchgate.net/profile/Ahnaf-Shahriar-3",
    },
    {
      name: "Kaggle",
      icon: "kaggle",
      href: "https://www.kaggle.com/ahnafshahriarifti",
    },
  ],
};

// ---------- Research page ----------
export const researchStatement =
  "I am interested in how deep learning can help clinicians read medical images faster and more consistently. My work so far focuses on segmenting brain tumours in 3D MRI and explaining model decisions. Next, I want to explore methods that track changes across scans and learn well from limited labelled data.";

export const researchInterests = {
  current: [
    {
      title: "Medical Image Segmentation",
      text: "Finding exact tumour regions in 3D scans. I want to make segmentation more reliable on scans from new hospitals and scanners.",
      evidence: "NeuroVision AI",
    },
    {
      title: "Computer Vision in Medical Imaging",
      text: "Building models that work on real multi-modal MRI, from preprocessing to deployment. I want to bring these models closer to real clinical use.",
      evidence: "NeuroVision AI",
    },
    {
      title: "Image Classification",
      text: "Designing and comparing CNNs for image recognition. I want to apply this to diagnosis tasks such as tumour grading.",
      evidence: "Cricket Activity Detection (IEEE TENCON 2021)",
    },
    {
      title: "Explainable AI for Healthcare",
      text: "Using SHAP, PDP and ALE to show why a model makes a decision. I want to extend this to deep learning models for medical images.",
      evidence: "Fetal Health Classification · Parkinson's Severity",
    },
  ],
  next: [
    {
      title: "Image Registration",
      text: "Aligning scans taken at different times, so tumour growth and treatment response can be tracked.",
    },
    {
      title: "Generative Modeling",
      text: "Creating realistic synthetic scans to help models learn when labelled medical data is limited.",
    },
  ],
};

export const researchExperience = [
  {
    id: "res1",
    badge: "Master's thesis",
    title:
      "Web Platform for Brain Tumour Segmentation and Predictive Outcome Modelling",
    meta: [
      { label: "Institution", value: "Curtin University, Perth" },
      {
        label: "Supervisor",
        value: "Dr Chayan Mondal, Associate Lecturer, AI and Data Science",
      },
      { label: "Period", value: "2026" },
      { label: "My role", value: "Deep learning models and web platform" },
    ],
    summary:
      "Outlining brain tumours by hand in MRI is slow and varies between experts. We built a system that segments tumours automatically in 3D MRI and shows the results in a web platform.",
    contributions: [
      "Developed and benchmarked 2D, 2.5D and 3D segmentation models on the BraTS multi-modal MRI datasets.",
      "Designed and ran a 3D nnU-Net ablation study (loss, augmentation, patch sampling and post-processing), then combined the best settings into a final model.",
      "Compared the final model's Dice scores with published results, and tested it on 219 unseen BraTS 2023 validation patients.",
      "Integrated the model into NeuroVision AI, our Django platform with slice-by-slice views and PDF reports.",
    ],
    stats: [
      { value: "0.92", label: "Mean validation Dice" },
      { value: "0.90", label: "Enhancing tumour" },
      { value: "0.92", label: "Tumour core" },
      { value: "0.94", label: "Whole tumour" },
    ],
    methods: [
      "nnU-Net v2",
      "Residual Encoder U-Net",
      "Ablation study",
      "BraTS 2021 / 2023",
      "PyTorch",
      "Django",
    ],
    links: [
      {
        label: "View Repository",
        href: "https://github.com/AhnafIfti/Web-Platform-for-Brain-Tumor-Detection-and-Predictive-Outcome-Modeling",
      },
    ],
  },
  {
    id: "res2",
    badge: "Bachelor's thesis",
    title: "Detection of Cricketing Activities using Deep Learning",
    meta: [
      {
        label: "Institution",
        value: "Ahsanullah University of Science and Technology, Dhaka",
      },
      {
        label: "Supervisor",
        value: "Shoeb Mohammad Shahriar, Assistant Professor, Dept. of CSE",
      },
      { label: "Period", value: "2020 – 2021" },
      { label: "My role", value: "Model design and experiments" },
    ],
    summary:
      "Recognising cricket shots automatically can support match analysis and coaching. We trained deep CNNs to classify cricket activities from images.",
    contributions: [
      "Implemented a custom ResNet50 trained with the One Cycle Policy for faster, more stable training.",
      "Built four other CNNs (ResNet34, ResNet101, VGG16 with Batch Normalization and AlexNet) for comparison.",
      "Published the work at IEEE TENCON 2021.",
    ],
    stats: [
      { value: "99.47%", label: "Test accuracy" },
      { value: "5", label: "CNN models compared" },
      { value: "5", label: "Cites in Papers" },
      { value: "IEEE", label: "TENCON 2021" },
    ],
    methods: ["PyTorch", "ResNet50", "VGG16", "AlexNet"],
    links: [
      {
        label: "View Repository",
        href: "https://github.com/AhnafIfti/Detection-of-Cricketing-Activities-using-Deep-Learning",
      },
      {
        label: "Read Paper",
        href: "https://ieeexplore.ieee.org/document/9707392",
      },
    ],
  },
];
