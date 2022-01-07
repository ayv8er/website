import React, { useState } from "react";
import Project from "./Project";
import "./projects.css";

import crypto from "../assets/crypto.jpg";
import UnderdogDevsImg from "../assets/UnderdogDevs.JPG";
import nasaImg from "../assets/nasa.jpg";

export default function Projects() {
  const [displayProjects, setDisplayProjects] = useState(true);

  const user_projects = [
    {
      title: "Cryptocurrency Index",
      description: "A live market index of various Cryptocurrencies",
      contributions: [
        "Frontend Developer",
        "Wrote production-ready code using ReactJS, Redux, and CSS to build single-page applications SPA’s",
        "Approached all coding challenges using pair programming, agile software development Git workflow minimizing bugs",
        "Designed original UX for mobile, tablet, and PC  from ideation to wireframing, to a final responsive product",
      ],
      gitHub: "https://github.com/ayv8er/cryptomarketinfo",
      deployed_site: "https://cryptomarketinfo-q4ot2umr2-ayv8er.vercel.app/",
      card_image: crypto,
    },
    {
      title: "NASA - APOD",
      description:
        'Get a new photo from NASA every day. This site uses REACT\'s UI library to create a complex rich user interface. It demonstrates building sometihng that could power the user experience in such a way that is decoupled and unconcerned when and where data is received. As a SPA it further demos my undertanding of the "V" in the MVC (Model, View, Controller) paradigm. The architecture permits small, resusable, pieces of UI that can be easily put together to make this scalable application',
      contributions: [
        "Empoloyed REACT to create a complex, rich user interface UI",
        "Created all the components, managed and displayed state creating a great experience for the user UX",
        "Passed data via props in components desiged to be easily maintained",
        'Employed or minimized "side effects" as needed',
        "Styled the app using multiple libraries demonstrating scalable advanced styling techniques",
      ],
      gitHub: "https://github.com/ayv8er/nasadailyphoto",
      deployed_site: "https://nasadailyphoto-phi.vercel.app/",
      card_image: nasaImg,
    },
    {
      title: "Underdog Devs",
      description:
        "a community of software engineers supporting aspiring developers who come from disadvantaged backgrounds or who are formerly incarcerated",
      contributions: [
        "Lead a remote, cross-functional team of 18 to ship product features for a national non-profit ",
        "Created & Maintained User Story Backlog, scoped product features, ticket assignment,  utilizing agile strategies incorporating scrum, sprint, and burndown methodologies which kept our team on time for feature deliveries  ",
        "Pair programmed in both frontend and backend repositories to create a platform for the underprivileged to learn to code ",
      ],
      gitHub: "https://github.com/Underdog-Devs-Labs-2021",
      deployed_site: "https://www.underdogdevs.org/",
      card_image: UnderdogDevsImg,
    },
  ];

  return (
    <div id="Projects">
      <div className="navPadding"></div>

      {displayProjects && (
        <div className="projects_wrapper">
          {user_projects.map((project, index) => {
            return (
              <Project
                project={project}
                setDisplayProjects={setDisplayProjects}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
