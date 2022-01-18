import { Container } from "react-bootstrap";
import styled from "styled-components";
import Project from "./Project";

import cryptoImg from "../assets/crypto.jpg";
import UnderdogDevsImg from "../assets/UnderdogDevs.JPG";
import nasaImg from "../assets/nasa.png";
import quoteImg from "../assets/quote.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Cryptocurrency Index",
      description:
        "A live market index of various Cryptocurrencies. A React SPA that manages two different sets of state using Redux; the main list which takes data via an Axios call from a CoinGecko API (https://www.coingecko.com/en/api) before setting it to state, and the other is a favorites list which manages a users selection from the main list. Dark mode is also set to state via a custom hook and local storage. A search input allows a user to filter the main list dynamically. The favorites list only appears after a user has set one item to the favorites list state. I plan on adding a login and register feature that gives a user the ability to use the favorites list feature, and persisting that data with a relational database.",
      gitHub: "https://github.com/ayv8er/cryptomarketinfo",
      deployed_site: "https://cryptomarketinfo.vercel.app/",
      card_image: cryptoImg,
    },
    {
      title: "NASA - APOD",
      description:
        'Get a new photo from NASA every day. A React SPA that consumes and displays a 3rd party API (https://api.nasa.gov/#apod) using an API key provided by NASA, to display an "Astronomy Photo of the Day" along with a title, date, copyright information, and description.',
      gitHub: "https://github.com/ayv8er/nasadailyphoto",
      deployed_site: "https://nasadailyphoto-phi.vercel.app/",
      card_image: nasaImg,
    },
    {
      title: "Underdog Devs",
      description:
        "We are a group of software engineers helping aspiring developers who are either formerly incarcerated or from an economically disadvantaged background.",
      gitHub: "https://github.com/Underdog-Devs-Labs-2021",
      deployed_site: "https://www.underdogdevs.org/",
      card_image: UnderdogDevsImg,
    },
    {
      title: "Quote Generator",
      description:
        'A vanilla JavaScript App that consumes and displays a 3rd party API (Type.fit) into a container. Another random quote can be drawn from the API by clicking on "New Quote." A desired quote can be tweeted by clicking on the Twitter logo.',
      gitHub: "https://github.com/ayv8er/QuoteGenerator",
      deployed_site: "https://quote-generator-khaki.vercel.app/",
      card_image: quoteImg,
    },
  ];

  return (
    <StyledProjects>
      <Container fluid="sm">
        <div className="row row-cols-auto justify-content-center">
          {projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  .row {
    padding-top: 10%;
  }
`;

export default Projects;
