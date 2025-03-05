import React from "react";

const Contactform = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="name" /> <br />
        <input type="email" placeholder="email" /> <br />
        <textarea placeholder="message" /> <br />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Contactform;
