import React, { useState } from "react";
import loginbg from "../assets/loginbg.png";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import axios from "axios";

const Login = () => {
  const { setUser } = useUser(); // Access context
  const navigate = useNavigate(); // For navigation

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/register/login",
        {
          username,
          password,
        }
      );

      console.log("Login successful:", response.data);

      // Set the user in context and redirect to homepage
      setUser({ username: response.data.username });
      navigate("/"); // Goes to Home page
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="loginmaindiv"
      style={{ backgroundImage: `url(${loginbg})` }}
    >
      <section className="loginform">
        <form onSubmit={handleLogin}>
          <div>
            <h1 style={{ fontSize: "3rem" }}>LOGIN</h1>
          </div>
          <div>
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div className="signupbutton">
            <p>
              Don't have an account?{" "}
              <a onClick={() => navigate("/register")} href="#">
                Sign Up
              </a>{" "}
              <br /> to Esports-T1.official
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
