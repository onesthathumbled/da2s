import "./Navbar.css";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navbar = () => {
  const fontSize = "medium";

  return (
    <div className="Navbar">
      <div className="Logo">
        <a href="/">
          <span className="Logo-Title">Da2s</span> | Data Analysis Tool
        </a>
      </div>

      <div className="Navigation">
        <a href="/dashboard">Dashboard</a>
        <a href="/database" className="Current">
          Database
        </a>
        <a href="/categories">Categories</a>
        <a href="/processes">Processes</a>
        <a href="/more" className="More">
          More
          <ArrowDropDownIcon className="Arrow" />
        </a>
      </div>

      <div className="Support">
        <a href="/contact">
          <CallIcon fontSize={fontSize} />
        </a>
        <a href="/search">
          <SearchIcon fontSize={fontSize} />
        </a>
        <a href="/cloud">
          <CloudDoneIcon fontSize={fontSize} />
        </a>
        <a href="/account">
          <AccountCircleIcon fontSize={fontSize} />
        </a>
        <a href="/settings">
          <MoreHorizIcon fontSize={fontSize} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
