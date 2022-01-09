import React from "react";
import Project from "./Project";
import "./projects.css";

import cryptoImg from "../assets/crypto.jpg";
import UnderdogDevsImg from "../assets/UnderdogDevs.JPG";
import nasaImg from "../assets/nasa.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Cryptocurrency Index",
      description: "A live market index of various Cryptocurrencies",
      gitHub: "https://github.com/ayv8er/cryptomarketinfo",
      deployed_site: "https://cryptomarketinfo-q4ot2umr2-ayv8er.vercel.app/",
      card_image: cryptoImg,
    },
    {
      title: "NASA - APOD",
      description:
        'Get a new photo from NASA every day. This site uses REACT\'s UI library to create a complex rich user interface. It demonstrates building sometihng that could power the user experience in such a way that is decoupled and unconcerned when and where data is received. As a SPA it further demos my undertanding of the "V" in the MVC (Model, View, Controller) paradigm. The architecture permits small, resusable, pieces of UI that can be easily put together to make this scalable application',
      gitHub: "https://github.com/ayv8er/nasadailyphoto",
      deployed_site: "https://nasadailyphoto-phi.vercel.app/",
      card_image: nasaImg,
    },
    {
      title: "Underdog Devs",
      description:
        "a community of software engineers supporting aspiring developers who come from disadvantaged backgrounds or who are formerly incarcerated",
      gitHub: "https://github.com/Underdog-Devs-Labs-2021",
      deployed_site: "https://www.underdogdevs.org/",
      card_image: UnderdogDevsImg,
    },
  ];

  return (
    <div id="Projects">
      <div className="navPadding"></div>

      <div className="projects_wrapper">
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
    </div>
  );
}
