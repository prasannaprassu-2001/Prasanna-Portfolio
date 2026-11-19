// ✏️ Edit everything here — the components read from this file.
export const profile = {
  name: "Mirapakayala Prasanna",
  initials: "MP",
  roles: ["Frontend Developer", "React Enthusiast", "UI Tinkerer", "Mobile App Developer"],
  email: "mprasana82@gmail.com",
    phone: "+91 9490598882",
  phoneHref: "+919490598882",
  location: "Tirupati, Andhra Pradesh",
  resume: "https://drive.google.com/file/d/1TpsVlKXoHnAA-TLHAvinzsvCMwPm-hlD/view?usp=drive_link", // put your PDF in /public
  links: [
    { label: "GitHub", href: "https://github.com/prasannaprassu-2001" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mirapakayala-prasanna-aa8315256/" },
    { label: "Vercel", href: "https://vercel.com/prasannaprassu2001s-projects" },
  ],
  about: [
    "I build fast, accessible web apps with React and care a lot about how interfaces feel when you use them.",
    "I like turning rough ideas into polished products, and I'm always learning something new.",
  ],
  facts: [
    ["Based in", "Tirupati, India"],
    ["Focus", "React, React native, JavaScript, HTML & CSS"],
    ["Open to", "Full-time & freelance"],
  ],
};

export const education = [
  { years: "2019 – 2022", title: "BSc, Computer Science", place: "The Oxford College Of Science", note: "CGPA 82%" },
  { years: "2017 – 2019", title: "PUC (PCMB)", place: "Patel Pre-University College", note: "59.5%" },
  { years: "2016 – 2017", title: "Secondary School Education ", place: "S R English Medium School", note: "69%" },
];

export const skills = [
  { group: "Frontend", items: [["React / React Native", 90], ["JavaScript (ES6+)", 88], ["HTML & CSS", 92], ["Bootstrap / Reactstrap", 85]] },
  { group: "Animation & Tools", items: [["Git & GitHub", 82], ["REST APIs", 78], ["Postman", 80], ["Framer Motion", 75]] },
];

// export const experience = [
//   { role: "Frontend Developer Intern", org: "Company One", years: "Jan 2024 – Present", points: ["Built reusable React components used across 3 products.", "Cut page load time by 35% with code splitting."] },
//   { role: "Freelance Web Developer", org: "Self-employed", years: "2022 – 2023", points: ["Delivered 6 responsive websites for local businesses.", "Handled design, build and deployment end to end."] },
// ];

 
export const experience = [
  {
    role: "Software Engineer",
    org: "Deccan India Software Technologies PVT LTD, Tirupati, Andhra Pradesh",
    years: "July 2025 – Present",
    points: [
      "Led end-to-end development of StudentBook, a full-scale e-learning platform built with React.js and Redux Toolkit, with JWT authentication and RESTful APIs serving 1,000+ active learners.",
    ],
  },
  {
    role: "Associate Software Engineer",
    org: "Codilar Technologies PVT LTD, Bengaluru, Karnataka",
    years: "May 2023 – Aug 2024",
    points: [
      "Led frontend development for the Western Sydney University website using HTML, SCSS, JavaScript, and ReactJS, building responsive UI components like Hero Banner, Course modules, and Accordions.",
    ],
  },
  {
    role: "Freelance Developer",
    org: "Krizil",
    years: "Freelance",
    points: [
     "Built Krizil, a cross-platform mobile app, using React Native, Expo and Firebase, with push notifications for user engagement."
    ],
  },
];


export const projects = [
  {
    name: "Student Book",
    desc: "Online learning platform built from scratch with student, teacher and admin dashboards, recorded video lessons and REST APIs for course management. Secured with JWT authentication and Razorpay payments, with a responsive UI and theme customization for 1,000+ active users.",
    tags: ["React", "Redux Toolkit", "Razorpay"],
  },
  {
    name: "Western Sydney University",
    desc: "Responsive, cross-browser website for the Australian multi-campus public research university, with reusable components such as Hero Banner, Course-Subject sections and Accordions, and API-driven dynamic content.",
    tags: ["React", "SCSS"],
    live: "https://www.westernsydney.edu.au/",
  },
  {
    name: "TAFE Queensland",
    desc: "Built responsive ReactJS components including Course Tabs, Filters, Search, Course Results, Personalized View and Sticky Menu, and fixed UI bugs in an Agile team using Jira.",
    tags: ["React", "SCSS"],
    live: "https://tafeqld.edu.au/",
  },
  {
    name: "Krizil",
    desc: "Cross-platform mobile app built as a freelance project with React Native and Expo, using Firebase for backend services and push notifications to keep users engaged.",
    tags: ["React Native", "Expo", "Firebase"],
  },
];
