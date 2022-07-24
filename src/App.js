import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Navhead from "./components/Navhead";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const App = () => {
  return (
    <StyledApp>
      <Container fluid className="min-vh-99 outer_container">
        <Container fluid className="inner_container">
          <Navhead />
          <Routes>
            <Route path="/" element={<Navigate replace to="/about" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Container>
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.div`
  a {
    text-decoration: none;
  }
  .inner_container {
    height: 100%;
    width: 75%;
    max-width: 750px;
  }
  @media only screen and (max-width: 1300px) {
    .inner_container {
      width: 80%;
    }
  }
  @media only screen and (max-width: 1200px) {
    .inner_container {
      width: 85%;
    }
  }
  @media only screen and (max-width: 1100px) {
    .inner_container {
      width: 90%;
    }
  }
  @media only screen and (max-width: 900px) {
    .inner_container {
      width: 100%;
    }
    .outer_container {
      padding: 0;
    }
  }
`;
