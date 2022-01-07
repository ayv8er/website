import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Navhead from "./components/Navhead";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navhead />
      <Routes>
        <Route path="/" element={<Navigate replace to="/about" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
