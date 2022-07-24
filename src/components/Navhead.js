import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const Navhead = () => {
  return (
    <StyledNavBar>
      <Navbar sticky="top" expand="sm" variant="dark">
        <Container fluid="sm">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100 d-flex justify-content-around">
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
  margin-top: 1%;
  align-contents: start;
  font-family: Koulen;
  background-color: rgba(255, 255, 255, 0.25);
  .head_links {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 575px) {
    .head_links {
      font-size: 1rem;
    }
  }
`;

export default Navhead;
