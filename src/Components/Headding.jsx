import React from "react";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import "./Headding.css";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Headding = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2  logo text-center">
            <a href="#">
              <b>Magnus</b>
            </a>
          </div>

          <div className="col-xl-10  logout">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-2 ham">
                <button
                  className="btn btn-custom"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                >
                  <FaBars className="mr-2 fs-3" />
                </button>

                <div
                  className="offcanvas offcanvas-start custom-drawer"
                  data-bs-scroll="true"
                  data-bs-backdrop="false"
                  tabIndex="-1"
                  id="offcanvasScrolling"
                  aria-labelledby="offcanvasScrollingLabel"
                >
                  <div className="offcanvas-header bg-dark text-white">
                    <h5
                      className="offcanvas-title"
                      id="offcanvasScrollingLabel"
                    >
                      <div className="py-4 px-3 mb-4 bg-dark text-white">
                        <div className="media d-flex align-items-center">
                          <CgProfile className="profile-img" />
                          <div className="media-body">
                            <h4 className="m-0">Guest User</h4>
                            <p className="font-weight-normal text-white mb-0">
                              User
                            </p>
                          </div>
                        </div>
                      </div>
                    </h5>
                    <FaTimes
                      className="mr-2 fs-1 text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="offcanvas-body bg-dark text-white">
                    <ul className="nav flex-column d-flex justify-content-center align-items-center list mb-0">
                      <li className="nav-item pb-3">
                        <NavLink
                          to="/home/dashboard"
                          className="nav-NavLink text-dark bg-dark text-white"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown pb-3">
                        <div
                          className="btn btn-dark dropdown-toggle list"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ fontSize: "16px" }}
                        >
                          Employee
                        </div>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          style={{ fontSize: "14px" }}
                        >
                          <li>
                            <NavLink
                              to="/home/createemployee"
                              className="dropdown-item"
                            >
                              Create
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home/searchemployee"
                              className="dropdown-item"
                            >
                              Search
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown pb-3">
                        <div
                          className="btn btn-dark dropdown-toggle list"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ fontSize: "16px" }}
                        >
                          More
                        </div>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          style={{ fontSize: "14px" }}
                        >
                          <li>
                            <NavLink
                              to="/home/multitabs"
                              className="dropdown-item"
                            >
                              MultiTabs
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/home/menu" className="dropdown-item">
                              Menu
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home/autocomplete"
                              className="dropdown-item"
                            >
                              Autocomplete
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home/collapse"
                              className="dropdown-item"
                            >
                              Collapsible Content
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home/images"
                              className="dropdown-item"
                            >
                              Images
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home/slider"
                              className="dropdown-item"
                            >
                              Slider
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home/tooltip"
                              className="dropdown-item"
                            >
                              Tooltips
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/home/popup" className="dropdown-item">
                              Popups
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/home/links" className="dropdown-item">
                              Links
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/home/css" className="dropdown-item">
                              Css Properties
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/home/iframe"
                              className="dropdown-item"
                            >
                              Iframes
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item bg-dark pb-3">
                        <NavLink to="#" className="nav-NavLink text-white">
                          Settings
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-8 logout-btn">
                <FaSignOutAlt className="head-icon" />
                <button className="logout-btn-content" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headding;
