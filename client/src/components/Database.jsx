import "./Database.css";
import React from "react";
import DataRow from "./DataRow";

const Database = () => {
  return (
    <div className="Database">
      <div className="Toolkit">
        <div className="Inside">
          <p>
            This is a list of data rows. Showing 20 items.{" "}
            <span className="Toolkit-Bold">
              A filter may be applied in any category.
            </span>
          </p>
        </div>
      </div>

      <DataRow />
    </div>
  );
};

export default Database;
