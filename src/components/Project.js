import "./project.css";
import React, { useState } from "react";

export default function Project(props) {
  const [isActive, setIsActive] = useState(false);
  const {
    gitHub,
    title,
    description,
    contributions,
    deployed_site,
    card_image,
  } = props.project;

  const handleClick = () => {
    setIsActive(true);
  };

  const handleExit = (e) => {
    setIsActive(!isActive);
    e.stopPropagation();
  };

  return (
    <div
      className={isActive ? "active_project" : "project"}
      onClick={handleClick}
    >
      <div className="exit_icon" onClick={handleExit}>
        <i className="lni lni-close"></i>
      </div>
      <div
        className="background_img"
        style={{ backgroundImage: "url(" + card_image + ")" }}
      >
        <h3 className="img_title">{title}</h3>
      </div>

      <div>
        {gitHub && (
          <span className="icon_wrap">
            <a href={gitHub}>
              <i className="lni lni-github-original"></i>
            </a>
          </span>
        )}
        <h3 className="non_img_title">{title}</h3>
        {deployed_site && (
          <span className="icon_wrap">
            <a href={deployed_site}>
              <i className="lni lni-website"></i>
            </a>
          </span>
        )}
      </div>
      <div className="proj_texts">
        <p className="description">{description}</p>
        <div className="contributions">
          {contributions.map((contribution, index) => {
            return (
              <p className="contribution" key={index}>
                • {contribution}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
