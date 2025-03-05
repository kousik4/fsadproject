import React from "react";
import esportslogo from "../assets/esportlogo.png";
import { NavLink, replace, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img width={130} src={esportslogo} alt="" />
      <ul>
        <NavLink to="/">
          {" "}
          <li>Home</li>
        </NavLink>
        <NavLink to="/sports">
          {" "}
          <li>Games</li>
        </NavLink>
        <NavLink to="news">
          <li>news</li>
        </NavLink>
        <NavLink to="about">
          {" "}
          <li>About</li>
        </NavLink>
        <NavLink to="contact">
          {" "}
          <li>Contact</li>
        </NavLink>
      </ul>{" "}
      <button
        style={{ padding: "10px 30px" }}
        onClick={() => navigate("/sports", { replace: true })}
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
