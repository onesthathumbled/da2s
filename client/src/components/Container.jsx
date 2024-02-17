import "./Container.css";
import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Container = () => {
  return (
    <div className="Container">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Container;
