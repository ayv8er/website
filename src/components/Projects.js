import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Project from "./Project";

import cryptoImg from "../assets/crypto.jpg";
import UnderdogDevsImg from "../assets/UnderdogDevs.JPG";
import nasaImg from "../assets/nasa.png";
import quoteImg from "../assets/quote.jpg";
import rppImg from "../assets/realpeoplesreviews.png";

const Projects = () => {
  const projects = [
    {
      title: "Cryptocurrency Index",
      description:
        "A live market index of various Cryptocurrencies. A full stack application (React.js/Node.js) with registration and login functionality. Relational database via PostgreSQL, hosted on Heroku. Form management via Yup and Formik. CSS design via React-Bootstrap and Styled Components. State management via Redux. Custom hooks created to set dark mode boolean and user token to local storage. CAVEAT, Redux is used to hold fetched crypto list AND users favorited crypto list, therefore a users favorite list does not persist. I'm working on it.",
      gitHub: "https://github.com/ayv8er/cryptomarketinfo",
      deployed_site: "https://cryptomarketinfo.vercel.app/",
      card_image: cryptoImg,
    },
    {
      title: "NASA - APOD",
      description:
        'Get a new photo from NASA every day. A React SPA that consumes and displays an external API provided by NASA, to display an "Astronomy Photo of the Day" along with a title, date, copyright information, and description. CSS design via Bootstrap and Styled Components.',
      gitHub: "https://github.com/ayv8er/nasadailyphoto",
      deployed_site: "https://nasadailyphoto-phi.vercel.app/",
      card_image: nasaImg,
    },
    {
      title: "Underdog Devs",
      description:
        "We are a group of software engineers helping aspiring developers who are either formerly incarcerated or from an economically disadvantaged background. This React SPA manages user roles (mentors/mentees) and their interaction. I contributed to this non profit organization very early on by setting up registration and login features via Okta, building UI components in Ant Design, routing via React Router Dom v6, and writing endpoints in the back end via PostgreSQL.",
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
        'A vanilla JavaScript App that consumes and displays an external API into a container. Another random quote can be drawn from the API by clicking on "New Quote." A desired quote can be tweeted by clicking on the Twitter logo.',
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
