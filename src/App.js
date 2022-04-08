import { Routes, Route, Navigate } from "react-router-dom";

import About from "./components/About";
import Navhead from "./components/Navhead";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styled from "styled-components";

import img from "./assets/low-poly-grid-haikei.svg";

import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <StyledApp>
      <Container fluid className="min-vh-100">
        <Navhead />
        <Routes>
          <Route path="/" element={<Navigate replace to="/about" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  .min-vh-100 {
    background-image: url(${img});
    background-size: cover;
    background-position: center;
  }
`;

export default App;
