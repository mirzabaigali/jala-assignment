import React, { useEffect, useState } from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
import axios from "axios";
import toast from "toastr";
import "./CreateEmployee.css";
import { useLocation, useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const [editEmpl, setEditEmpl] = useState({});
  const location = useLocation();
  const { employeeId } = location.state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "otherCity") {
      setEditEmpl((prev) => ({
        ...prev,
        otherCity: checked,
      }));
    } else if (name === "city") {
      setEditEmpl((prev) => ({
        ...prev,
        city: value,
      }));
    } else if (name === "otherCityName") {
      setEditEmpl((prev) => ({
        ...prev,
        otherCityName: value,
      }));
    } else if (type === "checkbox") {
      if (checked) {
        setEditEmpl((prev) => ({
          ...prev,
          skills: [...prev.skills, name],
        }));
      } else {
        setEditEmpl((prev) => ({
          ...prev,
          skills: prev.skills.filter((skill) => skill !== name),
        }));
      }
    } else {
      setEditEmpl((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const getEmplById = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/users/getemployeesbyid/${employeeId}`
      );
      if (res.status === 200) {
        console.log(res?.data);
        setEditEmpl(res?.data);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const editEmployeeData = async (e) => {
    e.preventDefault();
    const cleanedAddress = editEmpl.address.replace(/\n/g, "");

    try {
      const res = await axios.put(
        `http://localhost:8000/api/users/editemployees/${employeeId}`,
        {
          firstName: editEmpl.firstName,
          lastName: editEmpl.lastName,
          email: editEmpl.email,
          mobileNumber: editEmpl.mobileNumber,
          dateOfBirth: editEmpl.dateOfBirth,
          address: cleanedAddress,
          gender: editEmpl.gender,
          country: editEmpl.country,
          city: editEmpl.city,
          otherCity: editEmpl.otherCity,
          otherCityName: editEmpl.otherCityName,
          skills: editEmpl.skills,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        toast.success(res?.data.message);
        navigate("/home/searchemployee");
      }
    } catch (error) {
      toast.error(error?.response?.data.message);
    }
  };

  useEffect(() => {
    getEmplById();
  }, []);

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
                <p>Edit Employee</p>
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
                          value={editEmpl.firstName || ""}
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
                          placeholder="Last Name"
                          name="lastName"
                          value={editEmpl.lastName || ""}
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
                          value={editEmpl.email || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
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
                          value={editEmpl.mobileNumber || ""}
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
                          value={editEmpl.dateOfBirth || ""}
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
                            checked={editEmpl.gender === "Male"}
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
                            checked={editEmpl.gender === "Female"}
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
                          value={editEmpl.address || ""}
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
                            value={editEmpl.country || ""}
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
                            value={
                              editEmpl.otherCity ? "" : editEmpl.city || ""
                            }
                            onChange={editEmpl.otherCity ? null : handleChange}
                            disabled={editEmpl.otherCity}
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
                            checked={editEmpl.otherCity}
                            name="otherCity"
                            value={editEmpl.otherCity}
                            onChange={handleChange}
                          />
                          <label htmlFor="other">Other City</label>
                        </div>
                        {editEmpl.otherCity && (
                          <div className="col-md-3 col-sm-6">
                            <label htmlFor="othercity">Other City</label>
                            <input
                              type="text"
                              id="othercity"
                              className="form-control"
                              name="otherCityName"
                              value={editEmpl.otherCityName || ""}
                              onChange={handleChange}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 mt-3">
                    <div className="col-12 emp-border fs-1">
                      <p>Skills</p>
                    </div>
                    {skillsName.map((item, index) => (
                      <div
                        className="col-lg-3 col-md-4 col-sm-6 mt-3 mb-3"
                        key={index}
                      >
                        <input
                          type="checkbox"
                          name={item.name}
                          id={item.name}
                          checked={
                            editEmpl.skills
                              ? editEmpl.skills.includes(item.name)
                              : false
                          }
                          onChange={handleChange}
                        />
                        <label htmlFor={item.name}>{item.name}</label>
                      </div>
                    ))}
                  </div>
                  <hr />
                  <div className="col-12 d-flex justify-content-end mb-3">
                    <div className="d-flex">
                      <div>
                        <button
                          className="btn btn-success fs-3 me-5"
                          onClick={editEmployeeData}
                        >
                          Update
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-danger fs-3">Cancel</button>
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

export default EditEmployee;
