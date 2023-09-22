import {
  css,
  express,
  git,
  github,
  html,
  mongodb,
  motion,
  next,
  nodejs,
  react,
  tailwind,
  typescript,
  gitHubIcon,
  gitHubIconWhite,
  socialMediaIconWhite,
  linkedInIconWhite,
  instagramIconWhite,
  instagramIcon,
  linkedInIcon,
  socialMediaIcon,
  call,
  callWhite,
  message,
  messageWhite,
} from "@/public/svg-icons/tech-icons";

import {
  frontEndIcon,
  frontEndIconPrimaryLight,
  frontEndIconPrimaryDark,
  backEndIcon,
  backEndIconPrimaryLight,
  backEndIconPrimaryDark,
  webOptimisationIcon,
  webOptimisationIconPrimaryLight,
  webOptimisationIconPrimaryDark,
  analyticsIcon,
  analyticsIconPrimaryLight,
  analyticsIconPrimaryDark,
} from "@/public/svg-icons";


import {
  hipnodeMobileView,
  hipnodeDesktopView,
  jobItMobileView,
  jobItDesktopView,
  morentMobileView,
  morentDesktopView,
} from "@/public/png-icons/featured-projects-images";


const cssTechStack = { image: css, text: "CSS" };
const gitTechStack = { image: git, text: "Git" };
const githubTechStack = { image: github, text: "GitHub" };
const htmlTechStack = { image: html, text: "HTML" };
const mongodbTechStack = { image: mongodb, text: "MongoDB" };
const motionTechStack = { image: motion, text: "Motion" };
const nextTechStack = { image: next, text: "NextJS" };
const reactTechStack = { image: react, text: "React" };
const tailwindTechStack = { image: tailwind, text: "TailwindCSS" };
const typescriptTechStack = { image: typescript, text: "TypeScript" };


export const socialMediaIcons = [
  {
    icon: instagramIcon,
    iconDark: instagramIconWhite,
    title: "instagram",
    url: "https://instagram.com/youuthisguy",
  },
  {
    icon: socialMediaIcon,
    iconDark: socialMediaIconWhite,
    title: "X",
    url: "https://x.com/youthisguy",
  },
  {
    icon: linkedInIcon,
    iconDark: linkedInIconWhite,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/sam-steel-05baa022b",
  },
  {
    icon: gitHubIcon,
    iconDark: gitHubIconWhite,
    title: "gitHub",
    url: "https://github.com/youthisguy",
  },
];

export const contactDetails = [
  {
    label: "Phone Number",
    imageSrc: call,
    imageSrcDark: callWhite,
    info: "+2347061050315",
  },
  {
    label: "Email Address",
    imageSrc: message,
    imageSrcDark: messageWhite,
    info: "samuel.ini145@gmail.com",
  },
];

export const navbarButtons = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Case Studies",
    path: "/case-studies",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const mySkillsArray = [
  { src: css, text: "CSS" },
  { src: express, text: "Express" },
  { src: git, text: "Git" },
  { src: github, text: "GitHub" },
  { src: html, text: "HTML" },
  { src: mongodb, text: "MongoDB" },
  { src: motion, text: "Motion" },
  { src: next, text: "NextJS" },
  { src: nodejs, text: "NodeJS" },
  { src: react, text: "React" },
  { src: tailwind, text: "TailwindCSS" },
  { src: typescript, text: "TypeScript" },
];

export const servicesProvided = [
  {
    imageSrc: frontEndIcon,
    imageHoverLight: frontEndIconPrimaryLight,
    imageHoverDark: frontEndIconPrimaryDark,
    title: "Front-End Dev",
    description:
      "Creation of user interfaces and user experiences for websites and web applications.",
  },
  {
    imageSrc: analyticsIcon,
    imageHoverLight: analyticsIconPrimaryLight,
    imageHoverDark: analyticsIconPrimaryDark,
    title: "Analytics & SEO",
    description:
      "Implement tracking & analytics tools to monitor website performance & improve SEO",
  },
  {
    imageSrc: backEndIcon,
    imageHoverLight: backEndIconPrimaryLight,
    imageHoverDark: backEndIconPrimaryDark,
    title: "Web Security",
    description:
      "Ensuring web applications are secure by addressing common vulnerabilities.",
  },
  {
    imageSrc: webOptimisationIcon,
    imageHoverLight: webOptimisationIconPrimaryLight,
    imageHoverDark: webOptimisationIconPrimaryDark,
    title: "Version Control Strategies",
    description:
      "Optimizing branching and merging in version control for collaborative development.",
  },
];



export const featuredProjectsList = [
  {
    caseStudyLink: "Kitches",
    github: "https://github.com/youthisguy/kitchiescafe",
    liveSite: "https://kitchiescafe.netlify.app",
    title: "Kitches Cafe",
    description: "A Restaurant Website",
    myRole: "Software Engineer",
    startDate: new Date(2023, 9, 8),
    endDate: new Date(2023, 10, 3),
    techStackCaseStudy: [
      cssTechStack,
      gitTechStack,
      githubTechStack,
      htmlTechStack,
      mongodbTechStack,
      motionTechStack,
      nextTechStack,
      reactTechStack,
      tailwindTechStack,
      typescriptTechStack,
    ],

    techList: ["ReactJS", "Next.js", "Nodejs", "Tailwind",],
    desktopImage: morentDesktopView,
    mobileImage: morentMobileView,
    backgroundColour: "#416CEA",
    reverseLayout: false,
  },
  {
    caseStudyLink: "immersive",
    github: "https://github.com/youthisguy/Immersive-nextjs-website",
    liveSite: "https://immersive-metaverse.netlify.app/",
    title: "Immersive",
    description: "A Metaverse Application",
    myRole: "Software Engineer",
    startDate: new Date(2023, 6, 17),
    endDate: new Date(2023, 7, 6),
    techStackCaseStudy: [
      cssTechStack,
      gitTechStack,
      githubTechStack,
      htmlTechStack,
      nextTechStack,
      reactTechStack,
      tailwindTechStack,
    ],
   
    techList: ["ReactJS", "Next.js", "Nodejs", "Tailwindcss"],
    desktopImage: jobItDesktopView,
    mobileImage: jobItMobileView,
    backgroundColour: "#0BAB7C",
    reverseLayout: true,
  },
  {
    caseStudyLink: "Carhub",
    github: "https://github.com/youthisguy/Nextjs_car_showcase",
    liveSite: "https://carshow-case.vercel.app/",
    title: "Carhub",
    description: "A Car Rental Application",
    myRole: "Software Engineer",
    startDate: new Date(2023, 7, 10),
    endDate: new Date(2023, 7, 29),
    techStackCaseStudy: [
      cssTechStack,
      gitTechStack,
      githubTechStack,
      htmlTechStack,
      nextTechStack,
      reactTechStack,
      tailwindTechStack,
    ],
  
    techList: ["ReactJS", "Next.js", "Nodejs", "MongoDB"],
    desktopImage: hipnodeDesktopView,
    mobileImage: hipnodeMobileView,
    backgroundColour: "#FF6934",
    reverseLayout: false,
  },
];


export const inputFields = [
  {
    label: "What's your name?",
    input: true,
    email: false,
    inputName: "user_name",
    errorMessage: "Name is required",
    marginTop: false,
  },
  {
    label: "What's your email",
    input: true,
    email: true,
    inputName: "user_email",
    errorMessage: "Invalid email format",
    marginTop: true,
  },
  {
    label: "Write something about your project goals and timeframe",
    input: false,
    email: false,
    inputName: "message",
    errorMessage: "Message should be at least 100 characters long",
    marginTop: true,
  },
  {
    label: "How to reach out to you back?",
    input: false,
    email: false,
    inputName: "contact_info",
    errorMessage: "Contact information is required",
    marginTop: true,
  },
];
