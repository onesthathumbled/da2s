import "./DataRow.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import EditForm from "./EditForm";
import DeletePrompt from "./DeletePrompt";
import CreateForm from "./CreateForm";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const DataRow = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 600, y: 600 });

  const [editFormVisible, setEditFormVisible] = useState(false);
  const [deletePromptVisible, setDeletePromptVisible] = useState(false);
  const [createFormVisible, setCreateFormVisible] = useState(false);

  const [id, setId] = useState();

  const [placeholder, setPlaceHolder] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/case_informations"
      );
      setDatas(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handlePlaceHolder = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/case_informations/${id}`
      );
      setPlaceHolder(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContextMenu = async (event, id) => {
    event.preventDefault();

    // Set the position of the dropdown
    setId(id);
    setDropdownPosition({ x: event.clientX, y: event.clientY });

    // Show the dropdown
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleClick = (e) => {
    closeDropdown();
  };

  const handleEdit = async () => {
    setDropdownVisible(false);

    try {
      await handlePlaceHolder(id); // Pass the id as a parameter
      setEditFormVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseEditForm = () => {
    setEditFormVisible(false);
  };

  const handleDeLete = () => {
    setDropdownVisible(false);
    setDeletePromptVisible(true);
  };

  const handleDuplicate = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="DataRow">
      <table className="Table">
        <thead className="Head">
          <tr className="Column">
            <th>case_id</th>
            <th>age</th>
            <th>age_group</th>
            <th>sex</th>
            <th>status</th>
            <th>province</th>
            <th>muni_city</th>
            <th>health_status</th>
            <th>home_quarantined</th>
            <th>pregnant</th>
            <th>region</th>
          </tr>
        </thead>

        <tbody className="Body">
          {loading ? (
            <tr>
              <td></td>
            </tr>
          ) : (
            datas.map((data) => (
              <tr
                className="Row"
                key={data.case_id}
                onContextMenu={(e) => handleContextMenu(e, data.case_id)}
                onClick={(e) => handleClick(e)}
              >
                <td>{data.case_id}</td>
                <td>{data.age}</td>
                <td>{data.age_group}</td>
                <td>{data.sex}</td>
                <td>{data.status}</td>
                <td>{data.province}</td>
                <td>{data.muni_city}</td>
                <td>{data.health_status}</td>
                <td>{data.home_quarantined}</td>
                <td>{data.pregnant}</td>
                <td>{data.region}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {loading && (
        <div className="Loading">
          <p>Please be patient while the dataset is being loaded.</p>
        </div>
      )}

      {dropdownVisible && (
        <div
          className="DropDown"
          style={{
            position: "fixed",
            top: dropdownPosition.y,
            left: dropdownPosition.x,
            backgroundColor: "#333333",
            padding: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 9999,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              width: "150px",
              height: "fit-content",
              backgroundColor: "#111111",
            }}
          >
            <li>
              <button className="DropDownButton" onClick={handleEdit}>
                <EditIcon className="Button" />
                Edit
              </button>
            </li>
            <li>
              <button className="DropDownButton" onClick={handleDeLete}>
                <DeleteIcon className="Button" />
                Delete
              </button>
            </li>
            <li>
              <button className="DropDownButton" onClick={handleDuplicate}>
                <ContentCopyIcon className="Button" />
                Duplicate
              </button>
            </li>
            <li>
              <button className="DropDownButton" onClick={closeDropdown}>
                <CloseIcon className="Button" />
                Close
              </button>
            </li>
          </ul>
        </div>
      )}

      {editFormVisible && (
        <EditForm
          onClose={handleCloseEditForm}
          setEditFormVisible={setEditFormVisible}
          id={id}
          placeholder={placeholder}
        />
      )}

      {deletePromptVisible && (
        <DeletePrompt setDeletePromptVisible={setDeletePromptVisible} id={id} />
      )}

      {createFormVisible && (
        <CreateForm setCreateFormVisible={setCreateFormVisible} />
      )}

      <AddCircleIcon
        className="AddCircleIcon"
        fontSize="large"
        onClick={() => setCreateFormVisible(true)}
      />
    </div>
  );
};

export default DataRow;
