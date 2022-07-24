import Project from "./Project";
import { projects } from "../data";
import styled from "styled-components";

const Projects = () => {
  return (
    <StyledProjects className="d-flex flex-wrap justify-content-center align-items-center">
      {projects.map((item) => {
        return <Project key={item.title} project={item} />;
      })}
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
font-family: Arvo;
font-size: 1.1rem;
line-height: 2.1;
min-height: 90vh;
color: rgba(255, 255, 255, 0.55);
background-color: rgba(255, 255, 255, 0.25);
height: 100%;
  h1 {
    color: #ced4da;
  }
}
`;

export default Projects;
