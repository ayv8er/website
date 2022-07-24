import styled from "styled-components";
import website from "../assets/website.svg";
import github from "../assets/github-original-sm.svg";

const Project = ({ project }) => {
  return (
    <StyledProject className="d-flex flex-column justify-content-between m-4 p-2 col-6 col-sm-12 border rounded">
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="w-50">{project.title}</h6>
        <div className="d-flex justify-content-end w-50">
          <a className="me-3" href={project.gitHub}>
            <img src={github} alt="repo" />
          </a>
          <a href={project.deployed_site}>
            <img src={website} alt="site" />
          </a>
        </div>
      </div>
      <div className="">
        <p>{project.description}</p>
      </div>
      <div className="d-flex">
        {project.technologies.map((item) => (
          <div className="px-1 ">{item}</div>
        ))}
      </div>
    </StyledProject>
  );
};

export default Project;

const StyledProject = styled.div`
  :hover {
    color: #ced4da;
  }
  font-family: Arvo;
  width: 280px;
  height: 300px;
  font-size: 0.8rem;
`;
