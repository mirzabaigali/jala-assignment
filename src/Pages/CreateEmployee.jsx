import React, { useState } from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
import axios from "axios";
import toast from "toastr";
import "./CreateEmployee.css";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [add, setAdd] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    address: "",
    gender: "",
    country: "",
    city: "",
    otherCity: false,
    otherCityName: "",
    skills: [],
  });
  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    address,
    dateOfBirth,
    gender,
    country,
    city,
    otherCity,
    otherCityName,
    skills,
  } = add;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "otherCity") {
      setAdd((prev) => ({
        ...prev,
        otherCity: checked,
      }));
    } else if (name === "city") {
      setAdd((prev) => ({
        ...prev,
        city: value,
      }));
    } else if (name === "otherCityName") {
      setAdd((prev) => ({
        ...prev,
        otherCityName: value,
      }));
    } else if (type === "checkbox") {
      if (checked) {
        setAdd((prev) => ({
          ...prev,
          skills: [...prev.skills, name], // Add the skill to the skills array
        }));
      } else {
        setAdd((prev) => ({
          ...prev,
          skills: prev.skills.filter((skill) => skill !== name), // Remove the skill from the skills array
        }));
      }
    } else {
      setAdd((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const addEmployeeData = async (e) => {
    e.preventDefault();
    // Remove newline characters from the address field
    const cleanedAddress = address.replace(/\n/g, "");

    try {
      const res = await axios.post(
        "http://localhost:8000/api/users/createemployee",
        {
          firstName,
          lastName,
          email,
          mobileNumber,
          dateOfBirth,
          address: cleanedAddress,
          gender,
          country,
          city,
          otherCity,
          otherCityName,
          skills,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 201) {
        toast.success(res?.data.message); // Access the message from the response data
        navigate("/home/searchemployee");
      }
    } catch (error) {
      toast.error(error?.response?.data.message); // Access the error message from the response data
    }
  };

  const skillsName = [
    { name: "AWS" },
    { name: "DevOps" },
    { name: "Full Stack Developer" },
    { name: "Middleware" },
    { name: "QA-Automation" },
    { name: "Webservices" },
  ];
  return (
    <>
      <Headding />
      <div className="d-flex">
        <div className="col-2 d-sm-none d-md-none d-none d-lg-none d-xl-block">
          <SidePanel />
        </div>
        <div className="col">
          <div className="contianer area">
            <div className="row">
              <div className="col-12 emp-border fs-1">
                <p>Employee Details</p>
              </div>
              <div className="card w-100">
                <form action="" className="mt-3">
                  <div className="col-12 d-flex justify-content-between flex-wrap fs-3">
                    <div className="col-md-3 col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="first" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="first"
                          placeholder="First Name"
                          name="firstName"
                          value={firstName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="last" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="last"
                          placeholder="last Name"
                          name="lastName"
                          value={lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="example@gmail.com"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-between flex-wrap fs-3">
                    <div className="col-md-3 col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="mobile"
                          placeholder="+91 1234567891"
                          name="mobileNumber"
                          value={mobileNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                          Date Of Birth
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          name="dateOfBirth"
                          value={dateOfBirth}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="mb-3 d-flex justify-content-between align-items-center w-50 mt-5">
                        <span className="fs-3">Gender:</span>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            value="Male"
                            id="Male"
                            checked={gender === "Male"}
                            onChange={handleChange}
                          />
                          <label htmlFor="Male" className="form-check-label">
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="gender"
                            value="Female"
                            id="Female"
                            checked={gender === "Female"}
                            onChange={handleChange}
                          />
                          <label htmlFor="Female" className="form-check-label">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Address
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="address"
                          value={address}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-3 col-sm-6">
                          <label htmlFor="country">Country</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            id="country"
                            name="country"
                            value={country}
                            onChange={handleChange}
                          >
                            <option value="">Select a country</option>
                            <option value="IN">India</option>
                            <option value="BD">Bangladesh</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">
                              Iran (Islamic Republic of)
                            </option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                          </select>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <label htmlFor="city">City</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            id="city"
                            name="city"
                            value={otherCity ? "" : city}
                            onChange={otherCity ? null : handleChange}
                            disabled={otherCity}
                          >
                            <option value="">Select a city</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Pune">Pune</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Patna">Patna</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Indore">Indore</option>
                            <option value="Agra">Agra</option>
                            <option value="Surat">Surat</option>
                            <option value="Varanasi">Varanasi</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Kochi">Kochi</option>
                            <option value="Coimbatore">Coimbatore</option>
                          </select>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-5 text-center">
                          <input
                            type="checkbox"
                            id="other"
                            checked={otherCity}
                            name="otherCity"
                            value={otherCity}
                            onChange={handleChange}
                          />
                          <label htmlFor="other">Other City</label>
                        </div>
                        {otherCity && (
                          <div className="col-md-3 col-sm-6">
                            <label htmlFor="othercity">Other City</label>
                            <input
                              type="text"
                              id="othercity"
                              className="form-control"
                              name="otherCityName"
                              value={otherCityName}
                              onChange={handleChange}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row w-100 mt-3">
                      <div className="col-12 emp-border fs-1">
                        <p>Skills</p>
                      </div>
                      {skillsName.map((item, index) => {
                        return (
                          <div
                            className="col-lg-3 col-md-4 col-sm-6 mt-3 mb-3"
                            key={index}
                          >
                            <input
                              type="checkbox"
                              name={item.name}
                              id={item.name}
                              checked={skills[item.name]}
                              onChange={handleChange}
                            />
                            <label htmlFor={item.name}>{item.name}</label>
                          </div>
                        );
                      })}
                      <hr />
                      <div className="col-12 d-flex justify-content-end mb-3">
                        <div className="d-flex">
                          <div>
                            <button
                              className="btn btn-success fs-3 me-5"
                              onClick={addEmployeeData}
                            >
                              Save
                            </button>
                          </div>
                          <div>
                            <button className="btn btn-danger fs-3">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="card fs-3  d-flex align-items-cnter p-3">
            <span>
              Copyright © 2023{" "}
              <a href="https://jalatechnologies.com/" target="_blank">
                {" "}
                JALA Technologies.
              </a>{" "}
              All rights reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEmployee;
