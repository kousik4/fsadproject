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

const App = () => {
  return (
    <div>
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
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
