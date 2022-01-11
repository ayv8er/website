import React from "react";
import Richard from "../assets/richard.png";
import styled from "styled-components";
import img from "../assets/low-poly-grid-haikei.svg";

export default function About() {
  const userInfo = {
    profile_pic: Richard,
    bio: "Hello and welcome to my website! I'm a Full Stack Web Developer comfortable with single page applications, responsive designs, RESTful APIs, new features implementation, maintenance and refactoring of existing code across various languages, frameworks, and databases. I have an ownership and growth mindset and love to work on teams or independently in a remote setting. I have a practical understanding in the following areas...",
    frontend:
      "React.js, Redux, Hooks, Context API, RESTful API Design, React Testing Library, Yum, Axios, JavaScript, HTML, CSS, JSX, Ant Design, Bootstrap.",
    backend:
      "Node.js, Express, SQL, SQLite3, PostgreSQL, Python, Jest, Git CLI, GitHub, VS Code, Heroku, Netlify, Vercel, Postman.",
  };

  return (
    <StyledAbout>
      <div className="navPadding"></div>
      <div id="about">
        <div className="txt_wrapper">
          <img src={userInfo.profile_pic} alt="richard" />
        </div>
        <div className="txt_wrapper">
          <p>{userInfo.bio}</p>
          <br />
          <p>Frontend: {userInfo.frontend}</p>
          <br />
          <p>Backend: {userInfo.backend}</p>
        </div>
      </div>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  @media screen and (min-width: 1px) {
    #about {
      min-height: 80vh;
      width: 100vw;
      background-image: url(${img});
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
    }
    .txt_wrapper {
      padding: 10%;
    }
    .txt_wrapper img {
      border: 5px solid #66fcf1;
      border-radius: 50%;
      width: 200px;
      height: 200px;
    }
    .txt_wrapper p {
      font-size: 1rem;
      color: var(--primary_color);
      line-height: 2;
      font-family: arial;
    }
  }
  @media screen and (min-width: 600px) {
    .txt_wrapper {
      padding: 5%;
    }
    .txt_wrapper p {
      font-size: 1.2rem;
    }
    .txt_wrapper img {
      width: 250px;
      height: 250px;
    }
  }
  @media screen and (min-width: 768px) {
    #about {
      flex-direction: row;
      align-content: center;
    }
  }
`;
