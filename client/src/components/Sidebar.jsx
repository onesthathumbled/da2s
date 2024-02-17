import "./Sidebar.css";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import AssessmentIcon from "@mui/icons-material/Assessment";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="FirstBlock">
        <MenuIcon fontSize="large" className="CursorPointer" />
      </div>

      <div className="SecondBlock">
        <InfoOutlinedIcon fontSize="large" className="CursorPointer" />
      </div>

      <div className="ThirdBlock">
        <ContentCopyIcon fontSize="large" className="CursorPointer" />
      </div>

      <div className="FourthBlock">
        <div className="div1">
          <ViewCompactIcon fontSize="large" className="CursorPointer" />
          <ViewListIcon fontSize="large" className="CursorPointer" />
          <ViewModuleIcon fontSize="large" className="CursorPointer" />
          <AssessmentIcon fontSize="large" className="CursorPointer" />
        </div>

        <div className="div2">
          <HomeIcon fontSize="large" className="CursorPointer" />
          <WhatshotIcon fontSize="large" className="CursorPointer" />
          <SubscriptionsIcon fontSize="large" className="CursorPointer" />
          <AppsIcon fontSize="large" className="CursorPointer" />
          <SettingsIcon fontSize="large" className="CursorPointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
