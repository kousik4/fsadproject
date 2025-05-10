import React from "react";
import homepagebackgroundimg from "../assets/homepagemainimg.png";
import homepagediv2img from "../assets/ homepagediv2img.png";
import playbigwinbig from "../assets/playbigwinbig.png";
import { useUser } from "../UserContext";
import video from "../assets/videoplayback.mp4";

const Home = () => {
  const { user } = useUser();

  return (
    <section style={{ height: "100%" }}>
      {/* Optionally remove this block completely if not needed */}
      {!user && (
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        ></div>
      )}

      <div
        style={{
          marginTop: "1rem",
          backgroundImage: `url(${homepagebackgroundimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          display: "block",
        }}
      ></div>

      <div className="div2">
        <div>
          <img width={400} src={homepagediv2img} alt="img" />
        </div>
        <div style={{ display: "block", textAlign: "center" }}>
          <h1>Welcome to Esports T1</h1>
          <div style={{ fontFamily: "fantasy" }} className="div2second">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            vitae recusandae...
          </div>
        </div>
      </div>

      <h1 style={{ fontSize: "3rem" }}>
        Discover Engaging Games You Can Participate In!
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Game images (no changes) */}
        {/* ... */}
      </div>

      <div className="playbig">
        <div className="playbigtext">
          <h1>Play Big Win Big</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
        <div>
          <img width={500} src={playbigwinbig} alt="" />
        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <video
          src={video}
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="textonvideo">Be The Last One Standing In The Lobby</div>
      </div>

      <br />
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
        <p>2025@copyright.Esports-T1.com</p>
      </div>
    </section>
  );
};

export default Home;
