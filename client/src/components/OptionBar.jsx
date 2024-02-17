import "./OptionBar.css";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const OptionBar = () => {
  return (
    <div className="OptionBar">
      <div className="Tools">
        <a href="/process" className="More">
          Data rows (20) <ArrowDropDownIcon className="Arrow" />
        </a>
        <a href="/edit" className="More">
          <EditIcon className="Arrow" /> Edit
        </a>
        <a href="/delete" className="More">
          <DeleteIcon className="Arrow" />
          Delete
        </a>
        <a href="/actions" className="More">
          Actions <ArrowDropDownIcon className="Arrow" />
        </a>
        <a href="/report" className="More">
          Report <ArrowDropDownIcon className="Arrow" />
        </a>
      </div>
    </div>
  );
};

export default OptionBar;
