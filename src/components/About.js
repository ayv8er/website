import { Container, Figure, Row, Col } from "react-bootstrap";
import richard from "../assets/richard.png";
// import img from "../assets/low-poly-grid-haikei.svg";

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
    <Container fluid="md">
      <Row>
        <Col>
          <Figure>
            <Figure.Image
              width={200}
              height={200}
              alt="Richard Selfie"
              src={richard}
            />
            <Figure.Caption>{user.title}</Figure.Caption>
          </Figure>
        </Col>
        <Col>
          {user.bio}
          {user.frontend}
          {user.backend}
        </Col>
      </Row>
    </Container>
  );
};

export default About;
