import "./DeletePrompt.css";
import React from "react";
import axios from "axios";
import BACKEND_URL from "../Constants";

const DeletePrompt = ({ setDeletePromptVisible, id }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${BACKEND_URL}/cases/${id}`);
      if (response) console.log(`Deleted successfuly`);
      setDeletePromptVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="DeletePrompt">
      <div className="CaseID">Are you sure you wanna delete the row?</div>
      <form onSubmit={handleSubmit}>
        <div>
          <button
            onClick={() => setDeletePromptVisible(false)}
            className="DeleteButton Cancel"
          >
            Cancel
          </button>
          <button type="submit" className="DeleteButton ">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeletePrompt;
