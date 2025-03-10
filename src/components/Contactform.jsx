import React from "react";

const Contactform = () => {
  return (
    <div className="contact_form">
      <form action="">
        <h2>Contact Form</h2>
        <input type="text" placeholder="name" /> <br />
        <input type="email" placeholder="email" /> <br />
        <textarea placeholder="message" /> <br />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Contactform;
