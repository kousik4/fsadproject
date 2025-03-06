import React from "react";
import fortnite from "../assets/fortnite.png";
import fortnitezoomin from "../assets/fortnitezoomin.png";
import freefire from "../assets/freefire.png";
import freefirezoomin from "../assets/freefirezoomin.png";

const Sports = () => {
  return (
    <section style={{ height: "100%", paddingTop: "8rem" }}>
      <h1 id="sphearderh1">Register Now</h1>

      <div id="gamespardiv">
        {/* div1 for fortnite */}
        <div
          id="background"
          style={{ backgroundImage: `url(${fortnitezoomin})` }}
          className="games"
        >
          {" "}
          <img className="imgs" src={fortnite} alt="" />
        </div>

        {/* div2 for free fire */}
        <div
          id="background"
          style={{ backgroundImage: `url(${freefirezoomin})` }}
          className="games"
        >
          <img className="imgs" src={freefire} alt="" />
        </div>
      </div>

      <div className="btnmain">
        <button>Register Now</button>
        <button>Register Now</button>
      </div>

      <div id="gamespardiv">
        {/* div1 for fortnite */}
        <div
          id="background"
          style={{ backgroundImage: `url(${fortnitezoomin})` }}
          className="games"
        >
          {" "}
          <img className="imgs" src={fortnite} alt="" />
        </div>

        {/* div2 for free fire */}
        <div
          id="background"
          style={{ backgroundImage: `url(${freefirezoomin})` }}
          className="games"
        >
          <img className="imgs" src={freefire} alt="" />
        </div>
      </div>

      <div className="btnmain">
        <button>Register Now</button>
        <button>Register Now</button>
      </div>

      <div id="gamespardiv">
        {/* div1 for fortnite */}
        <div
          id="background"
          style={{ backgroundImage: `url(${fortnitezoomin})` }}
          className="games"
        >
          {" "}
          <img className="imgs" src={fortnite} alt="" />
        </div>

        {/* div2 for free fire */}
        <div
          id="background"
          style={{ backgroundImage: `url(${freefirezoomin})` }}
          className="games"
        >
          <img className="imgs" src={freefire} alt="" />
        </div>
      </div>

      <div className="btnmain">
        <button>Register Now</button>
        <button>Register Now</button>
      </div>
    </section>
  );
};

export default Sports;
