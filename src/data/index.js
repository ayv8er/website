import github from "../assets/github-original.svg";
import linkedin from "../assets/linkedin-original.svg";
import email from "../assets/email.png";
import resume from "../assets/resume.png";

export const contact = [
  {
    name: "email",
    icon: email,
    link: "mailto:n24512@proton.me",
  },
  {
    name: "resume",
    icon: resume,
    link: "https://drive.google.com/file/d/1V7_Nv06APwu3Yod8AmpDzzzIFs9tMNod/view?usp=sharing",
  },
  {
    name: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/rjo2/",
  },
  {
    name: "github",
    icon: github,
    link: "https://github.com/ayv8er",
  },
];

export const user = {
  intro1: `Hello, I'm Richard. As a web developer, I enjoy turning imagination into reality! I've had the privilege of working for a`,
  intro2: `I'm currently working on onboarding the next billion users to crypto through Magic's software development kit.`,
  recentFront: "Recently worked with these frontend technologies",
  frontendTech: [
    "JS (ES6+)",
    "ReactJS",
    "NextJS",
    "TypeScript",
    "Web3JS",
    "Redux",
    "Context API",
    "Bootstrap",
    "Tailwind",
  ],
  recentBack: "Recently worked with these backend technologies",
  backendTech: [
    "NodeJS",
    "Express",
    "MongoDB",
    "Solidity",
    "MySQL",
    "PostgreSQL",
    "Heroku",
    "Vercel",
  ],
};

export const projects = [
  {
    title: "Shared List",
    description:
      "A single page web app to help me and my partner organize groceries, menu items and chore lists without wasting paper. Built with NextJS, MongoDB, and Bootstrap.",
    gitHub: "https://github.com/ayv8er/sharelist",
    deployed_site: "https://sharelist-plum.vercel.app/",
    technologies: ["NextJS", "ReactJS", "Bootstrap", "MongoDB"],
  },
  {
    title: "Underdog Devs",
    description:
      "Built by software engineers helping aspiring developers who are either formerly incarcerated or from economically disadvantaged backgrounds.",
    gitHub: "https://github.com/Underdog-Devs-Labs-2021",
    deployed_site: "https://www.underdogdevs.org/",
    technologies: ["ReactJS", "Redux", "Ant Design", "NodeJS"],
  },
  {
    title: "Real Peoples Reviews",
    description:
      "Welcome to easy to use software that automates collecting new genuine reviews where you think matters most. Designed for Owners, Managers, Marketers, Social Media Experts, Sales Staff and more..",
    gitHub: "https://github.com/Real-Peoples-Ratings",
    deployed_site: "https://realpeoplesreviews.com/",
    technologies: ["ReactJS", "Typescript", "Styled Components"],
  },
];
