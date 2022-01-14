import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import richard from "../assets/richard.png";

const About = () => {
  const user = {
    profile_pic: richard,
    title: "Full Stack Developer",
    bio: "Hello and welcome to my website! I'm a Full Stack Web Developer comfortable with single page applications, responsive designs, RESTful APIs, new features implementation, maintenance and refactoring of existing code across various languages, frameworks, and databases. I have an ownership and growth mindset and love to work on teams or independently in a remote setting. I have a practical understanding in the following areas...",
    frontend:
      "React.js, Redux, Hooks, Context API, RESTful API Design, React Testing Library, Yum, Axios, JavaScript, HTML, CSS, JSX, Ant Design, Bootstrap.",
    backend:
      "Node.js, Express, SQL, SQLite3, PostgreSQL, Python, Jest, Git CLI, GitHub, VS Code, Heroku, Netlify, Vercel, Postman.",
  };

  return (
    <StyledAbout>
      <Container fluid>
        <div className="row">
          <Col>
            <div className="img-fluid">
              <img src={richard} alt="Richard Selfie" />
            </div>
          </Col>
          <Col xs={8}>
            <div className="lead">
              <p>{user.bio}</p>
              <br />
              <p>Front End: {user.frontend}</p>
              <br />
              <p>Back End: {user.backend}</p>
            </div>
          </Col>
        </div>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
  }
  .img-fluid img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
  }
  .img-fluid {
    display: flex;
    justify-content: center;
  }
  .lead {
    color: white;
    width: 100%;
    padding: 10%;
  }
  @media only screen and (max-width: 1295px) {
    .img-fluid img {
      width: 350px;
      height: 350px;
    }
  }
  @media only screen and (max-width: 1145px) {
    .img-fluid img {
      width: 300px;
      height: 300px;
    }
  }
  @media only screen and (max-width: 996px) {
    .img-fluid img {
      width: 250px;
      height: 250px;
    }
  }
`;

export default About;
