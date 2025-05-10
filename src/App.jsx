import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import About from "./pages/About";
import News from "./pages/News";
import Contactlayout from "./Layout/Contactlayout";
import Contactinfo from "./components/Contactinfo";
import Contactform from "./components/Contactform";
import Pagenotfound from "./components/Pagenotfound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Fortnite from "./GameRegestration/Fortnite";
import Freefire from "./GameRegestration/Freefire";
import Pubg from "./GameRegestration/Pubg";
import Valorant from "./GameRegestration/Valorant";
import Callofduty from "./GameRegestration/Callofduty";
import Clashofclans from "./GameRegestration/Clashofclans";

// 👇 Import UserProvider
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sports" element={<Sports />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contactlayout />}>
            <Route path="info" element={<Contactinfo />} />
            <Route path="form" element={<Contactform />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="GameRegistration/Fortnite" element={<Fortnite />} />
          <Route path="GameRegistration/Freefire" element={<Freefire />} />
          <Route path="GameRegistration/Pubg" element={<Pubg />} />
          <Route path="GameRegistration/Valorant" element={<Valorant />} />
          <Route path="GameRegistration/Callofduty" element={<Callofduty />} />
          <Route
            path="GameRegistration/Clashofclans"
            element={<Clashofclans />}
          />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </div>
    </UserProvider>
  );
};

export default App;
