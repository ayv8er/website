import { Routes, Route, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import About from "./components/About";
import Footer from "./components/Footer";
import Navhead from "./components/Navhead";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Container fluid="md">
      <Navhead />
      <Routes>
        <Route path="/" element={<Navigate replace to="/about" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
