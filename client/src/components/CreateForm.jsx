import "./CreateForm.css";
import React, { useState } from "react";
import axios from "axios";
import BACKEND_URL from "../Constants";

const CreateForm = ({ setCreateFormVisible }) => {
  const [formData, setFormData] = useState({
    age: "",
    age_group: "",
    sex: "",
    status: "",
    province: "",
    muni_city: "",
    health_status: "",
    home_quarantined: "",
    pregnant: "",
    region: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${BACKEND_URL}/cases`, formData);

      console.log(response.data);

      setFormData({
        age: "",
        age_group: "",
        sex: "",
        status: "",
        province: "",
        muni_city: "",
        health_status: "",
        home_quarantined: "",
        pregnant: "",
        region: "",
      });

      setCreateFormVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditForm">
      <div className="CaseID">Create New Data</div>

      <form onSubmit={handleSubmit}>
        <div className="FormGroup">
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>

        <div className="FormGroup">
          <label>Age Group</label>
          <input
            type="text"
            name="age_group"
            value={formData.age_group}
            onChange={handleInputChange}
          />
        </div>

        <div className="FormGroup">
          <label>Sex</label>
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
          />
        </div>

        <div className="FormGroup">
          <label>Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          />
        </div>

        <div className="FormGroup">
          <label>Province</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
          />
        </div>

        <div className="FormGroup">
          <label>Municipality</label>
          <input
            type="text"
            name="muni_city"
            value={formData.muni_city}
            onChange={handleInputChange}
          />
        </div>

        <div className="FormGroup">
          <label>Health Status</label>
          <input
            type="text"
            name="health_status"
            value={formData.health_status}
            onChange={handleInputChange}
          />
        </div>

        <div className="FormGroup">
          <label>Home Quarantined</label>
          <input
            type="text"
            name="home_quarantined"
            value={formData.home_quarantined}
            onChange={handleInputChange}
          />
        </div>

        <div className="FormGroup">
          <label>Pregnant</label>
          <input
            type="text"
            name="pregnant"
            value={formData.pregnant}
            onChange={handleInputChange}
          />
        </div>

        <div className="FormGroup">
          <label>Region</label>
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <button
            onClick={() => setCreateFormVisible(false)}
            className="EditButton"
          >
            Close
          </button>

          <button type="submit" className="EditButton">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
