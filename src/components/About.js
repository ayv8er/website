import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import richard from "../assets/richard.png";

const About = () => {
  const user = {
    profile_pic: richard,
    title: "Full Stack Developer",
    intro:
      "Hello and welcome to my website! I'm a Full Stack Web Developer with an emphasis on Front End Development. I have experience scripting in JavaScript and Python, and I love building responsive ReactJS Single Page Applications. I get a kick out of creating RESTful endpoints with NodeJS and Express, in order to give front end applications a server to play with. Got features or wireframes? I want to implement them! I’m eager to learn new languages, frameworks, and databases. I have an ownership and growth mindset and love to work on teams or independently in a remote setting. I have a practical understanding in the following areas…",
    frontend:
      "React.js, Redux, Hooks, Context API, RESTful API Design, React Testing Library, Yup, Axios, Formik, JavaScript, TypeScript, HTML, CSS, JSX, Ant Design, Bootstrap.",
    backend:
      "Node.js, Express, SQL, SQLite3, PostgreSQL, Python, Jest, Git CLI, GitHub, VS Code, Heroku, Netlify, Vercel, Postman.",
    outro:
      "Personally, I love talking about Bitcoin and learning about all things Crypto. On my free time, I love to fly single engine airplanes as I have a Private Pilot Certificate. I love meeting new people to discuss ideas and would very much welcome your outreach. Currently seeking new opportunities anywhere in the world!",
  };

  return (
    <StyledAbout>
      <Container fluid>
        <Row xxl xl lg md sm xs className="justify-content-center">
          <Col
            className="img-fluid"
            xxl={3}
            xl={3}
            lg={3}
            md={12}
            sm={12}
            xs={12}
          >
            <img src={richard} alt="Richard Selfie" />
          </Col>
          <Col className="lead" xxl={9} xl={9} lg={9} md={12} sm={12} xs={12}>
            <p>{user.intro}</p>
            <br />
            <p>Front End: {user.frontend}</p>
            <br />
            <p>Back End: {user.backend}</p>
            <br />
            <p>{user.outro}</p>
          </Col>
        </Row>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  .row {
    padding-top: 1%;
  }
  .img-fluid img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  .img-fluid {
    display: flex;
    justify-content: center;
    padding-top: 5%;
  }
  .lead {
    color: white;
    padding: 5%;
  }
  @media only screen and (max-width: 600px) {
    .img-fluid img {
      width: 250px;
      height: 250px;
    }
    .lead p {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 400px) {
    .img-fluid img {
      width: 200px;
      height: 200px;
    }
    .lead p {
      font-size: 0.8rem;
    }
  }
}
`;

export default About;
