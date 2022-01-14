import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  const user = {
    linkedIn: "https://www.linkedin.com/in/rjo2/",
    gitHub: "https://github.com/ayv8er",
  };

  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container fluid="md">
        <Navbar.Brand href={user.linkedIn}>
          <i className="lni lni-linkedin-original"></i>
        </Navbar.Brand>
        <Navbar.Brand href={user.gitHub}>
          <i className="lni lni-github-original"></i>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
