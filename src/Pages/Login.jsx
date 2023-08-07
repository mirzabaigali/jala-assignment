import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "toastr";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    loading: false,
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleForgetPasswordClick = () => {
    navigate("/forget");
  };
  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      toast.warning("All fields are Required");
    }
    try {
      setFormData((prev) => ({ ...prev, loading: true }));
      const res = await axios.post(
        "http://localhost:8000/api/users/login",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        const token = res?.data?.token;
        localStorage.setItem("token", token);
        navigate("/home/dashboard", { state: { token } });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setFormData((prev) => ({ ...prev, loading: false }));
    }
  };
  return (
    <div className="login-wrapper">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="login-box">
            <div className="col-lg-12">
              <div className="login-logo text-center">
                <a href="#" className="mb-5">
                  <b>JALA Academy</b>
                </a>
                <h2 className="login-credentials">Login Credentials</h2>
                <h5 className="subtitle">Email : mirzaarifali.ba@gamil.com</h5>
                <h5 className="subtitle">Password : 123456789</h5>
                <h5 className="text-bg">
                  <b>Learn Everything on Real-Time Scenarios</b>
                </h5>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="login text-center">
                <p className="login-title">Sign In</p>
                <div className="row">
                  <div className="login-fields">
                    <form action="" className="needs-validation">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control text-field"
                          id="validationCustom05"
                          name="email"
                          placeholder="Email or Mobile No"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback text-field">
                          Please enter email or mobile no.
                        </div>
                      </div>
                      <div className="space"></div>
                      <div className="col-12">
                        <input
                          type="password"
                          className="form-control text-field"
                          id="validationCustom06"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <div className="invalid-feedback text-field">
                          Please enter password.
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="container">
                  <div className="row mt-5">
                    <div className="col-xs-6 d-flex justify-content-between align-items-center">
                      <div className="form-check" style={{ width: "150px" }}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          style={{ width: "20px", height: "20px" }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                          style={{ fontSize: "14px" }}
                        >
                          Remember Me
                        </label>
                      </div>
                      <div className="col-xs-6">
                        <button
                          className="btn btn-info"
                          style={{ fontSize: "14px" }}
                          onClick={handleLogin}
                          disabled={formData.loading}
                        >
                          {formData.loading ? (
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          ) : (
                            "Login"
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="col-12 mt-5">
                      <span className="text-field">- OR -</span>
                      <br />
                      <button
                        className="btn btn-block btn-flat btn-custom mt-3 mb-5"
                        onClick={handleForgetPasswordClick}
                      >
                        Forget Password
                      </button>
                      <br />
                      <Link to="/admin" style={{ fontSize: "14px" }}>
                        Admin Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
                  JALA Academy offers Job Guaranteed Programs for Freshers to 12
                  years’ experience on Full Stack Development / Automation
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
  );
};

export default Login;
