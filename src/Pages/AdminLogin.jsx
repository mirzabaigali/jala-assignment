import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-lg-6 col-sm-12 forget">
          <div className="col-12 text-center p-5">
            <h1 className="text-field1">Magnus</h1>
          </div>
          <div className="col-lg-12 input-wrapper h-75">
            <p className="text-center pt-3 pb-3">Forgot Password</p>
            <form action="">
              <input
                type="text"
                name="email"
                id="email"
                className="form-control w-75 mx-auto mb-4 text-field"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                className="form-control w-75 mx-auto mb-4 text-field"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </form>
            <div className="forget-footer d-flex justify-content-around align-items-center text-field mt-5">
              <Link to="/">Back</Link>
              <div>
                <button className="btn btn-info text-field">Sign In</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5 my-auto">
          <div className="row login-para mx-auto">
            <div className="box box-solid bg-light-blue">
              <div className="box-body">
                <div className="col-lg-12">
                  <p>
                    JALA Academy offers Job Guaranteed Programs for Freshers to
                    12 years’ experience on Full Stack Development / Automation
                    Testing / Dev-Ops / QA/ SDET/Cyber Security / RPA / Cloud
                    Technologies. Training would be completely on live Project
                    scenarios Read our website JALA Academy for more details :
                    <a
                      href="https://jalaacademy.com/"
                      target="_blank"
                      style={{ color: "white" }}
                    >
                      https://jalaacademy.com/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
