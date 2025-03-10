import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="contact">
        <h2
          style={{
            padding: "3rem",
            paddingTop: "9rem",
            color: "#4b190e",
            fontSize: "2rem",
          }}
        >
          Contact Us
        </h2>
        <div className="contactbuttons">
          <button onClick={() => navigate("info")}>Contact info</button>
          <button onClick={() => navigate("form")}>Contact Form</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
