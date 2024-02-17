import "./EditForm.css";
import React, { useState } from "react";
import axios from "axios";

const EditForm = ({ id, setEditFormVisible, placeholder }) => {
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
      const nonEmptyFields = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== "")
      );

      const response = await axios.patch(
        `http://localhost:3000/case_informations/${id}`,
        nonEmptyFields
      );

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

      setEditFormVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditForm">
      <div className="CaseID">Case ID: {id}</div>

      <form onSubmit={handleSubmit}>
        <div className="FormGroup">
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder={placeholder.age}
          />
        </div>

        <div className="FormGroup">
          <label>Age Group</label>
          <input
            type="text"
            name="age_group"
            value={formData.age_group}
            onChange={handleInputChange}
            placeholder={placeholder.age_group}
          />
        </div>

        <div className="FormGroup">
          <label>Sex</label>
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
            placeholder={placeholder.sex}
          />
        </div>

        <div className="FormGroup">
          <label>Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            placeholder={placeholder.status}
          />
        </div>

        <div className="FormGroup">
          <label>Province</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
            placeholder={placeholder.province}
          />
        </div>

        <div className="FormGroup">
          <label>Municipality</label>
          <input
            type="text"
            name="muni_city"
            value={formData.muni_city}
            onChange={handleInputChange}
            placeholder={placeholder.muni_city}
          />
        </div>

        <div className="FormGroup">
          <label>Health Status</label>
          <input
            type="text"
            name="health_status"
            value={formData.health_status}
            onChange={handleInputChange}
            placeholder={placeholder.health_status}
          />
        </div>

        <div className="FormGroup">
          <label>Home Quarantined</label>
          <input
            type="text"
            name="home_quarantined"
            value={formData.home_quarantined}
            onChange={handleInputChange}
            placeholder={placeholder.home_quarantined}
          />
        </div>

        <div className="FormGroup">
          <label>Pregnant</label>
          <input
            type="text"
            name="pregnant"
            value={formData.pregnant}
            onChange={handleInputChange}
            placeholder={placeholder.pregnant}
          />
        </div>

        <div className="FormGroup">
          <label>Region</label>
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            placeholder={placeholder.region}
          />
        </div>

        <div>
          <button
            onClick={() => setEditFormVisible(false)}
            className="EditButton"
          >
            Close
          </button>
          <button type="submit" className="EditButton">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
