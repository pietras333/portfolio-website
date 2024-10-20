import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Navbar from "./Pages/Navbar";
import Resume from "./Pages/Resume";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <AboutMe />
    <Resume />
  </React.StrictMode>
);
