import React from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
const CssProperties = () => {
  return (
    <>
      <Headding />
      <div className="d-flex">
        <div className="col-2 d-sm-none d-md-none d-none d-lg-none d-xl-block">
          <SidePanel />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Css Properties</h1>
            </div>
            <div className="card mt-5" style={{ minHeight: "350px" }}>
              <div className="col-12 mt-5">
                <nav className="mt-3">
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
                      Links
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
                      Labels
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Buttons
                    </button>
                    <button
                      className="nav-link"
                      id="nav-alert-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-alert"
                      type="button"
                      role="tab"
                      aria-controls="nav-alert"
                      aria-selected="false"
                    >
                      Alerts
                    </button>
                    <button
                      className="nav-link"
                      id="nav-progress-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-progress"
                      type="button"
                      role="tab"
                      aria-controls="nav-progress"
                      aria-selected="false"
                    >
                      Progress
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
                    <div className="row d-flex justify-content-center align-items-center mt-5">
                      <div className="col-3">
                        <a
                          href="https://www.workinglinks.co.uk/"
                          target="_blank"
                          className="text-danger"
                        >
                          Link 1
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href="https://www.google.co.in/"
                          target="_blank"
                          className="text-primary"
                        >
                          Link 2
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href="https://jalatechnologies.com/"
                          target="_blank"
                          className="text-success"
                        >
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade d-flex justify-content-center mt-5"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <button type="button" className="btn btn-primary btn-sm">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success btn-sm">
                      Success
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                      Danger
                    </button>
                    <button type="button" className="btn btn-warning btn-sm">
                      Warning
                    </button>
                    <button type="button" className="btn btn-info btn-sm">
                      Info
                    </button>
                    <button type="button" className="btn btn-light btn-sm">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark btn-sm">
                      Dark
                    </button>

                    <button type="button" className="btn btn-link btn-sm">
                      Link
                    </button>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <button type="button" className="btn btn-primary btn-lg">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary btn-lg">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success btn-lg">
                      Success
                    </button>
                    <button type="button" className="btn btn-danger btn-lg">
                      Danger
                    </button>
                    <button type="button" className="btn btn-warning btn-lg">
                      Warning
                    </button>
                    <button type="button" className="btn btn-info btn-lg">
                      Info
                    </button>
                    <button type="button" className="btn btn-light btn-lg">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark btn-lg">
                      Dark
                    </button>

                    <button type="button" className="btn btn-link btn-lg">
                      Link
                    </button>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-alert"
                    role="tabpanel"
                    aria-labelledby="nav-alert-tab"
                  >
                    <div className="alert alert-primary" role="alert">
                      A simple primary alert—check it out!
                    </div>
                    <div className="alert alert-secondary" role="alert">
                      A simple secondary alert—check it out!
                    </div>
                    <div className="alert alert-success" role="alert">
                      A simple success alert—check it out!
                    </div>
                    <div className="alert alert-danger" role="alert">
                      A simple danger alert—check it out!
                    </div>
                    <div className="alert alert-warning" role="alert">
                      A simple warning alert—check it out!
                    </div>
                    <div className="alert alert-info" role="alert">
                      A simple info alert—check it out!
                    </div>
                    <div className="alert alert-light" role="alert">
                      A simple light alert—check it out!
                    </div>
                    <div className="alert alert-dark" role="alert">
                      A simple dark alert—check it out!
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-progress"
                    role="tabpanel"
                    aria-labelledby="nav-progress-tab"
                    style={{ width: "500px" }}
                  >
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
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

export default CssProperties;
