import "./Main.css";
import React from "react";
import Navbar from "./Navbar";
import OptionBar from "./OptionBar";
import Database from "./Database";

const Main = () => {
  return (
    <div className="Main">
      <Navbar />
      <OptionBar />
      <Database />
    </div>
  );
};

export default Main;
