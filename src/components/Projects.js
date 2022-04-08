import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Project from "./Project";

import cryptoImg from "../assets/crypto.jpg";
import sanfran from "../assets/sanfran.jpg";
import UnderdogDevsImg from "../assets/UnderdogDevs.JPG";
import nasaImg from "../assets/nasa.png";
import quoteImg from "../assets/quote.jpg";
import rppImg from "../assets/realpeoplesreviews.png";

const Projects = () => {
  const projects = [
    {
      title: "Cryptocurrency Index",
      description:
        "A React SPA that consumes and displays a 3rd party API (CoinGecko) via listing of Cryptocurrencies, with the ability to 'favorite' certain currencies.",
      gitHub: "https://github.com/ayv8er/cryptomarketinfo",
      deployed_site: "https://cryptomarketinfo.vercel.app/",
      card_image: cryptoImg,
    },
    {
      title: "SF Film Locations",
      description:
        "A React SPA this displays a Google map, a list of locations in San Francisco that have been filmed for movies, and a search bar to filter that table. Check out the drag and drop functionality!",
      gitHub: "https://github.com/ayv8er/san-fran-film-locations",
      deployed_site: "https://san-fran-film-locations.vercel.app/",
      card_image: sanfran,
    },
    {
      title: "NASA - APOD",
      description:
        'Get a new photo from NASA every day. A React SPA that consumes and displays an external API provided by NASA, to display an "Astronomy Photo of the Day" along with a title, date, copyright information, and description.',
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
      title: "Real Peoples Reviews",
      description:
        "Welcome to easy to use software that automates collecting new genuine reviews where you think matters most. Designed for Owners, Managers, Marketers, Social Media Experts, Sales Staff and more..",
      gitHub: "https://github.com/Real-Peoples-Ratings",
      deployed_site: "https://realpeoplesreviews.com/",
      card_image: rppImg,
    },
    {
      title: "Quote Generator",
      description:
        "A vanilla JavaScript App that consumes and displays an external API as an inspirational quote. Find your inspirational quote and tweet it to the world!",
      gitHub: "https://github.com/ayv8er/QuoteGenerator",
      deployed_site: "https://quote-generator-khaki.vercel.app/",
      card_image: quoteImg,
    },
  ];

  return (
    <StyledProjects>
      <Container fluid>
        <Row xxl xl lg md sm xs className="justify-content-center">
          {projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </Row>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  .justify-content-center {
    padding-top: 5%;
    padding-left: 6%;
  }
  @media only screen and (max-width: 570px) {
    .justify-content-center {
      padding-left: 12%;
    }
  }
`;

export default Projects;
