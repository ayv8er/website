import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navhead = () => {
  const user = {
    name: "Richard J Oh",
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid="md">
        <Navbar.Brand href="/">{user.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navhead;
