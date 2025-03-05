import React from "react";
import homepagebackgroundimg from "../assets/homepagemainimg.png";
import homepagediv2img from "../assets/ homepagediv2img.png";
import video from "../assets/videoplayback.mp4";

const Home = () => {
  return (
    <section style={{ height: "100%" }}>
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
      >
        {" "}
      </div>
      <div className="div2">
        <div>
          <img width={400} src={homepagediv2img} alt="img" />
        </div>
        <div style={{ display: "block", textAlign: "center" }}>
          <div>
            {" "}
            <h1>welcome to esports t1</h1>
          </div>
          <div style={{ fontFamily: "fantasy" }} className="div2second">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            vitae recusandae accusamus consectetur saepe iusto consequatur.
            Vitae laudantium dolore libero aspernatur labore esse vero totam
            perferendis. Quaerat eius repellendus error! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quae deserunt voluptas itaque ea
            cumque temporibus doloremque possimus! Maxime eum saepe vitae
            repellendus, fugiat rerum deleniti molestiae ducimus aspernatur odio
            recusandae! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Expedita veritatis in consequuntur distinctio dolorem
            perferendis aspernatur quidem perspiciatis, culpa tempore
            repellendus voluptate, veniam ullam delectus illo consectetur
            voluptas? Veritatis, quod?
          </div>
        </div>
      </div>

      <h1 style={{ fontSize: "3rem" }}>
        Discover Engaging Games You Can Participate In!
      </h1>
      <div>
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="gamestoplay">
            {" "}
            <img
              height={220}
              src="https://nuare.com/wp-content/uploads/2022/03/PUBG-New-State-1562x781.jpg"
              alt=""
            />
          </div>
          <div className="gamestoplay">
            {" "}
            <img
              height={220}
              src="https://static.digit.in/default/7793d6be1d182149915ee40070d01cdba3a39550.jpeg"
              alt=""
            />
          </div>
          <div className="gamestoplay">
            {" "}
            <img
              height={220}
              src="https://i0.wp.com/gamingonphone.com/wp-content/uploads/2020/07/call-of-duty-mobile-g_compress92.jpg"
              alt=""
            />
          </div>
          <div className="gamestoplay">
            {" "}
            <img
              height={220}
              src="https://imageio.forbes.com/specials-images/imageserve/6531307511096cbdafbfb009/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
              alt=""
            />
          </div>
          <div className="gamestoplay">
            {" "}
            <img
              height={220}
              src="https://miro.medium.com/v2/resize:fit:1400/0*MKDqp42JXxJfkgPM.jpg"
              alt=""
            />
          </div>
          <div className="gamestoplay">
            {" "}
            <img
              height={220}
              src="https://images.indianexpress.com/2023/08/indus-battle-royale.jpg"
              alt=""
            />
          </div>
          <div className="gamestoplay">
            {" "}
            <img
              height={220}
              src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1loZGL.img?w=2048&h=1152&m=4&q=91"
              alt=""
            />
          </div>
          <div className="gamestoplay">
            {" "}
            <img
              height={220}
              src="https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg"
              alt=""
            />
          </div>
          <div className="gamestoplay">
            {" "}
            <img
              height={220}
              src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/03/apex-legends-characters.jpg"
              alt=""
            />
          </div>
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
        <div className="textonvideo">Be The Last One Standing</div>
      </div>
    </section>
  );
};

export default Home;
