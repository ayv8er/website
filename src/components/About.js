import { useState } from "react";
import PhotoCarousel from "./PhotoCarousel";
import SubNavhead from "./SubNavhead";
import Description from "./Description";
import styled from "styled-components";

const About = () => {
  const [toDisplay, setToDisplay] = useState("intro");

  const displayHandler = (displayStateString) => {
    setToDisplay(displayStateString);
  };

  return (
    <StyledAbout className="d-flex flex-column px-3">
      <PhotoCarousel />
      <div className="d-flex flex-column h-50 w-100">
        <SubNavhead toDisplay={toDisplay} displayHandler={displayHandler} />
        <Description toDisplay={toDisplay} />
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  font-family: Arvo;
  font-size: 1rem;
  line-height:2.5;
  color: #ced4da;
  background-color: rgba(255, 255, 255, 0.25);
  min-height: 90vh;
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }
  .sub-link {
    color:rgba(255,255,255,.55);
  }
  .sub-link:hover {
    color: #ced4da;
    cursor: pointer;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 575px) {
    font-size: 0.8rem;
  }
}
`;

export default About;
