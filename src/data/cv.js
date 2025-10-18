// CV data structure for Maxim Jackson's professional information
export const cvData = {
  personalInfo: {
    name: "Maxim Jackson",
    title: "Full-Stack Developer",
    contact: {
      email: "maxim.jackson@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "https://linkedin.com/in/maximjackson",
      github: "https://github.com/maximjackson",
      website: "https://maximjackson.dev"
    }
  },
  
  professionalSummary: "Passionate full-stack developer with 5+ years of experience building scalable web applications using modern JavaScript frameworks and cloud technologies. Proven track record of delivering high-quality solutions for e-commerce, task management, and collaborative platforms.",
  
  experience: [
    {
      position: "Senior Full-Stack Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      responsibilities: [
        "Lead development of React-based e-commerce platform serving 50,000+ users",
        "Architect and implement RESTful APIs using Node.js and Express",
        "Collaborate with cross-functional teams to deliver features on schedule",
        "Mentor junior developers and conduct code reviews",
        "Optimize application performance resulting in 40% faster load times"
      ]
    },
    {
      position: "Frontend Developer",
      company: "Digital Innovations Inc.",
      location: "San Francisco, CA", 
      duration: "2020 - 2022",
      responsibilities: [
        "Developed responsive web applications using Vue.js and React",
        "Implemented real-time features using WebSocket and Firebase",
        "Created Progressive Web Apps with offline functionality",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Maintained 95%+ test coverage using Jest and Cypress"
      ]
    },
    {
      position: "Junior Web Developer",
      company: "StartupLab",
      location: "San Francisco, CA",
      duration: "2019 - 2020", 
      responsibilities: [
        "Built interactive web interfaces using HTML, CSS, and JavaScript",
        "Integrated third-party APIs and payment processing systems",
        "Participated in agile development processes and daily standups",
        "Contributed to open-source projects and internal tool development",
        "Learned modern development practices and version control with Git"
      ]
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      duration: "2015 - 2019",
      details: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems",
        "Senior Project: Built a collaborative code editor with real-time synchronization"
      ]
    }
  ],
  
  skills: {
    frontend: [
      "React", "Vue.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", 
      "Sass/SCSS", "Tailwind CSS", "Responsive Design", "Progressive Web Apps"
    ],
    backend: [
      "Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL", 
      "Authentication (JWT, OAuth)", "WebSocket", "Microservices"
    ],
    databases: [
      "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"
    ],
    tools: [
      "Git", "Docker", "AWS", "Heroku", "Netlify", "Webpack", "Vite", 
      "Jest", "Cypress", "Figma", "Postman"
    ]
  },
  
  certifications: [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-DEV-2023-MJ"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-REACT-2022-MJ"
    }
  ],
  
  downloadUrl: "assets/documents/maxim-jackson-cv.pdf"
};

// Helper function to get CV data
export const getCVData = () => {
  return cvData;
};
