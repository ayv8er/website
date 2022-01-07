import React from "react";
import { NavLink } from "react-router-dom";
import "./navhead.css";

const Navhead = () => {
  const user = {
    name: "Richard J Oh",
    title: "Full Stack Web Developer",
  };

  return (
    <div id="navHead">
      <div className="title">
        <h1>{user.name}</h1>
        <h2>{user.title}</h2>
      </div>

      <div className="navLinks">
        <NavLink
          style={({ isActive }) => {
            return {
              border: isActive ? "1px solid #66fcf1" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              border: isActive ? "1px solid #66fcf1" : "",
            };
          }}
          to="/projects"
        >
          Projects
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              border: isActive ? "1px solid #66fcf1" : "",
            };
          }}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navhead;
