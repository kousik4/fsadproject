import React from "react";
import fortnite from "../assets/fortnite.png";
import fortnitezoomin from "../assets/fortnitezoomin.png";
import freefire from "../assets/freefire.png";
import freefirezoomin from "../assets/freefirezoomin.png";
import pubg from "../assets/pubg.png";
import pubgbgimg from "../assets/pubgbackimg.png";
import valorant from "../assets/valorant.png";
import valorantbg from "../assets/valorantbg.png";
import cod from "../assets/cod.png";
import codbg from "../assets/codbg.png";
import coc from "../assets/coc.png";
import cocbg from "../assets/cocbg.png";
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
          style={{ backgroundImage: `url(${pubgbgimg})` }}
          className="games"
        >
          {" "}
          <img className="imgs" src={pubg} alt="" />
        </div>

        {/* div2 for free fire */}
        <div
          id="background"
          style={{ backgroundImage: `url(${valorantbg})` }}
          className="games"
        >
          <img className="imgs" src={valorant} alt="" />
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
          style={{ backgroundImage: `url(${codbg})` }}
          className="games"
        >
          {" "}
          <img className="imgs" src={cod} alt="" />
        </div>

        {/* div2 for free fire */}
        <div
          id="background"
          style={{ backgroundImage: `url(${cocbg})` }}
          className="games"
        >
          <img className="imgs" src={coc} alt="" />
        </div>
      </div>

      <div className="btnmain">
        <button>Register Now</button>
        <button>Register Now</button>
      </div>

      <h1 id="footerh1">GET IN TOUCH WITH US</h1>

      <div className="footer">
        <div id="insta" className="footerelements">
          <ion-icon name="logo-instagram"></ion-icon> Instagram
        </div>
        <div id="facebook" className="footerelements">
          <ion-icon name="logo-facebook"></ion-icon> Facebook
        </div>
        <div id="youtube" className="footerelements">
          <ion-icon name="logo-youtube"></ion-icon> Youtube
        </div>
        <div id="linkedin" className="footerelements">
          <ion-icon name="logo-linkedin"></ion-icon> Linkedin
        </div>
        <div id="email" className="footerelements">
          <ion-icon name="mail-outline"></ion-icon> Email
        </div>
      </div>

      <div className="finalfooter">
        {" "}
        <p>2025@copyright.Esports-T1.com</p>
      </div>
    </section>
  );
};

export default Sports;
