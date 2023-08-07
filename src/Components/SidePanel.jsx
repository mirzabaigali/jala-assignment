import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Sidepanel.css";

const Sidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  const handleToggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <React.Fragment>
      <div className="toggle">
        <button
          id="sidebarToggle"
          type="button"
          className="btn btn-light bg-white rounded rounded-pill shadow-sm px-4 mb-4"
          onClick={handleToggleSidebar}
        >
          {sidebarActive ? (
            <FaTimes className="mr-2 fs-3" />
          ) : (
            <FaBars className="mr-2 fs-3" />
          )}
        </button>
      </div>
      <section>
        <div
          className={`vertical-nav bg-dark ${sidebarActive ? "active" : ""}`}
          id="sidebar"
        >
          <div className="py-4 px-3 mb-4 bg-dark text-white">
            <div className="media d-flex align-items-center">
              <CgProfile className="profile-img" />
              <div className="media-body">
                <h4 className="m-0">Guest User</h4>
                <p className="font-weight-normal text-white mb-0">User</p>
              </div>
            </div>
          </div>

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
                  <NavLink to="/home/createemployee" className="dropdown-item">
                    Create
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/home/searchemployee" className="dropdown-item">
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
                  <NavLink to="/home/multitabs" className="dropdown-item">
                    MultiTabs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/home/menu" className="dropdown-item">
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/home/autocomplete" className="dropdown-item">
                    Autocomplete
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/home/collapse" className="dropdown-item">
                    Collapsible Content
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/home/images" className="dropdown-item">
                    Images
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/home/slider" className="dropdown-item">
                    Slider
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/home/tooltip" className="dropdown-item">
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
                  <NavLink to="/home/iframe" className="dropdown-item">
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
        {/* Toggle button and other content if needed */}
      </section>
    </React.Fragment>
  );
};

export default Sidebar;
