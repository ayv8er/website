import React from "react";
import styled from "styled-components";

export default function Footer() {
  const user = {
    resume:
      "https://drive.google.com/file/d/1fjMFu40wzvx0f1aG-gEwsiKbCQ9AP1jj/view?usp=sharing",
    linkedIn: "https://www.linkedin.com/in/rjo2/",
    gitHub: "https://github.com/ayv8er",
  };

  return (
    <StyledFooter>
      <div id="footer">
        <div className="footer_icon_wrapper">
          <a href={user.linkedIn}>
            <i className="lni lni-linkedin-original"></i>
          </a>
          <a href={user.gitHub}>
            <i className="lni lni-github-original"></i>
          </a>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  #footer {
    height: 10vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #1f2833;
  }
  .footer_icon_wrapper {
    width: 100%;
  }
  .footer_icon_wrapper a {
    font-size: 2rem;
    color: #66fcf1;
    margin: 0 25px;
  }
  .footer_icon_wrapper a i:hover {
    transform: scale(1.2);
  }
  }
`;
