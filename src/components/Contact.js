import React from "react";
import styled from "styled-components";
import img from "../assets/low-poly-grid-haikei.svg";

export default function Contact() {
  const user = {
    resume:
      "https://drive.google.com/file/d/1wkwbc4qSYzXkw8nwQ7uPaHYQXlQrl4mo/view?usp=sharing",
  };

  return (
    <StyledContact>
      <div className="navPadding"></div>
      <div id="contacts">
        <div id="resume">
          {user.resume && (
            <a href={user.resume} download>
              Link to Resume
            </a>
          )}
        </div>
      </div>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  #contacts {
    min-height: 75vh;
    width: 100vw;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #resume {
    padding: 3%;
    border: 5px solid var(--secondary_color);
    justify-self: center;
    align-self: center;
    cursor: pointer;
    font-family: arial;
  }
  #resume a {
    color: var(--primary_color);
    font-size: 2rem;
  }
  #resume:hover {
    box-shadow: 10px 10px 20px var(--secondary_color);
  }
`;
