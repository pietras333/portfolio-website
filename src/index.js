import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Navbar from "./Pages/Navbar";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <AboutMe />
    <Resume />
    <Portfolio />
    <Contact />
  </React.StrictMode>
);
