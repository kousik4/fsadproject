import React, { useState, useEffect, useRef } from "react";
import esportslogo from "../assets/esportlogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
    setShowDropdown(false);
  };

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar">
      <img
        style={{ borderRadius: "13px" }}
        width={130}
        src={esportslogo}
        alt="Esports Logo"
      />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/sports">
          <li>Games</li>
        </NavLink>
        <NavLink to="/news">
          <li>News</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>

      {!user ? (
        <button
          style={{ padding: "10px 30px" }}
          onClick={() => navigate("/login", { replace: true })}
        >
          Login
        </button>
      ) : (
        <div style={{ position: "relative" }} ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            style={{
              padding: "10px 20px",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              color: "white",
              backgroundColor: "#8d1a00",
              borderRadius: "5px",
            }}
          >
            {user.username}
          </button>

          {showDropdown && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "110%",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  border: "none",
                  background: "none",
                  color: "black",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
