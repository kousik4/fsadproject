import React from "react";
import registerformbg from "../assets/registerformbg.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // 👇 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const user = {
      name: form[0].value,
      username: form[1].value,
      email: form[2].value,
      phone: form[3].value,
      password: form[4].value,
    };

    // Optional: check confirm password matches (form[5].value)

    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        const errData = await res.json();
        alert("Registration failed: " + errData.message);
      }
    } catch (err) {
      alert("An error occurred: " + err.message);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${registerformbg})` }}
      className="registerformmaindiv"
    >
      <div className="registerform">
        <div className="registerformchilddiv1">
          {/* 👇 Link handleSubmit here */}
          <form onSubmit={handleSubmit}>
            <h2>Register Now</h2>
            <div>
              <input placeholder="Name" type="text" />
            </div>
            <div>
              <input placeholder="Username" type="text" />
            </div>
            <div>
              <input placeholder="Email" type="text" />
            </div>
            <div>
              <input placeholder="Phone" type="text" />
            </div>
            <div>
              <input placeholder="password" type="text" />
            </div>
            <div>
              <input placeholder="confirm password" type="text" />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
            <div style={{ paddingTop: "1rem" }}>
              <p>Get Ready To Dominate The Lobby</p>
              <p>
                Already Have An Account{" "}
                <a
                  onClick={() => navigate("/login")}
                  style={{ color: "blue", textDecoration: "underline" }}
                  href=""
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="registerformchilddiv2">
          <h3>!Our Terms And Conditions!</h3>
          <p>{/* Terms content */}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
