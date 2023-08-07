import React, { useState } from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const showContent = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <Headding />
      <div className="d-flex">
        <div className="col-2 d-sm-none d-md-none d-none d-lg-none d-xl-block">
          <SidePanel />
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h1>Menu</h1>
            </div>
            <div className="col-12 mt-5 mb-5">
              <div className="card">
                <nav className="mt-3 mb-5">
                  <div
                    className="nav nav-tabs fs-1"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Single Menus
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Sub Menus
                    </button>
                  </div>
                </nav>
                <div className="tab-content fs-3" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="d-flex align-items-start">
                      <div
                        className="nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <button
                          className="nav-link active"
                          id="v-pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          Testing
                        </button>
                        <button
                          className="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Java
                        </button>
                        <button
                          className="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          .Net
                        </button>
                        <button
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          DataBase
                        </button>
                      </div>
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          you had selected Testing Menu Option
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                          you had selected Java Menu Option
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                        >
                          you had selected .Net Menu Option
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-settings"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                        >
                          you had selected DataBase Menu Option
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="tab-content fs-3" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <div className="d-flex align-items-start">
                          <div
                            className="nav flex-column nav-pills me-3"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                          >
                            <div className="btn-group dropup">
                              <button
                                type="button"
                                className="btn btn-primary dropdown-toggle fs-3"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Testing
                              </button>
                              <ul className="dropdown-menu fs-3">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("selenium")}
                                  >
                                    Selenium
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() =>
                                      showContent("Manual Testing")
                                    }
                                  >
                                    Manual Testing
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("DB Testing")}
                                  >
                                    DB Testing
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("Unit Testing")}
                                  >
                                    Unit Testing
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="btn-group dropstart">
                              <button
                                type="button"
                                className="btn btn-primary dropdown-toggle fs-3"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Java
                              </button>
                              <ul className="dropdown-menu fs-3">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("Adv Java")}
                                  >
                                    Adv Java
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("Core Java")}
                                  >
                                    Core Java
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("Spring")}
                                  >
                                    Spring
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("Hypernate")}
                                  >
                                    Hypernate
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="btn-group dropstart">
                              <button
                                type="button"
                                className="btn btn-primary dropdown-toggle fs-3"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                .Net
                              </button>
                              <ul className="dropdown-menu fs-3">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("C#")}
                                  >
                                    C#
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("ASP.NET")}
                                  >
                                    ASP .NET
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("ADO.NET")}
                                  >
                                    ADO .NET
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("MVC")}
                                  >
                                    MVC
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="btn-group">
                              <button
                                className="btn btn-primary dropdown-toggle fs-3"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                DataBase
                              </button>
                              <ul
                                className="dropdown-menu fs-3"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("SQL")}
                                  >
                                    SQL
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("MySql")}
                                  >
                                    My Sql
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("Oracle")}
                                  >
                                    Oracle
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => showContent("H2")}
                                  >
                                    H2
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-content" id="v-pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="v-pills-home"
                              role="tabpanel"
                              aria-labelledby="v-pills-home-tab"
                            >
                              {selectedOption
                                ? `You had selected ${selectedOption} Menu Option`
                                : null}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-profile"
                              role="tabpanel"
                              aria-labelledby="v-pills-profile-tab"
                            >
                              you had selected Java Menu Option
                              {selectedOption
                                ? `You had selected ${selectedOption} Menu Option`
                                : null}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-messages"
                              role="tabpanel"
                              aria-labelledby="v-pills-messages-tab"
                            >
                              {selectedOption
                                ? `You had selected ${selectedOption} Menu Option`
                                : null}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-settings"
                              role="tabpanel"
                              aria-labelledby="v-pills-settings-tab"
                            >
                              {selectedOption
                                ? `You had selected ${selectedOption} Menu Option`
                                : null}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
