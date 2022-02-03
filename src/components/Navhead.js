import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Navhead = () => {
  const user = {
    name: "Richard J Oh",
  };

  return (
    <StyledNavBar>
      <Navbar sticky="top" expand="md" bg="dark" variant="dark">
        <Container fluid="md">
          <Navbar.Brand className="mb-0 h1" href="/">
            {user.name}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="head_links" as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="head_links" as={NavLink} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link className="head_links" as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  .mb-0 {
    margin-right: 10%;
    font-size: 2rem;
  }
  .head_links {
    margin: 0 5% 0 5%;
    font-size: 1.6rem;
  }
`;

export default Navhead;
