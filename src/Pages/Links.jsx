import React from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
import "../Global.css"
const Links = () => {
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
              <h1>Tabs</h1>
            </div>
            <div className="card" style={{ height: "350px" }}>
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
                      Working Links
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
                      Broken Links
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
                      Images Links
                    </button>
                    <button
                      className="nav-link"
                      id="nav-status-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-status"
                      type="button"
                      role="tab"
                      aria-controls="nav-status"
                      aria-selected="false"
                    >
                      Status code
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
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row d-flex justify-content-center align-items-center mt-5">
                      <div className="col-3">
                        <a
                          href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/"
                          target="_blank"
                          className="text-danger"
                        >
                          Link 1
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/"
                          target="_blank"
                          className="text-primary"
                        >
                          Link 2
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/"
                          target="_blank"
                          className="text-success"
                        >
                          Link 3
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="row mt-5">
                      <div className="col-3">
                        <a href="https://www.facebook.com/" target="_blank">
                          <img
                            src="https://png.pngtree.com/element_our/sm/20180515/sm_5afaf0c4b6017.jpg"
                            alt="fb logo"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="https://www.google.co.in/" target="_blank">
                          <img
                            src="data:image/png;base64,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"
                            alt="google logo"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </a>
                      </div>
                      <div className="col-3">
                        <a
                          href="https://www.linkedin.com/feed/"
                          target="_blank"
                        >
                          <img
                            src="data:image/png;base64,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"
                            alt="fb logo"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </a>
                      </div>
                      <div className="col-3">
                        <a href="https://jalatechnologies.com/" target="_blank">
                          <img
                            src="https://startupxplore.com/uploads/ff80808163b94f4e0163c3f82938032b-large.png"
                            alt="fb logo"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-status"
                    role="tabpanel"
                    aria-labelledby="nav-staus-tab"
                  >
                    <div className="row  d-flex justify-content-center align-items-center mt-5 text-center">
                      <div className="col-3 text-green">
                        <a
                          href="https://www.restapitutorial.com/httpstatuscodes.html"
                          target="_blank"
                          style={{color:"green"}}

                        >
                          200
                        </a>
                      </div>
                      <div className="col-3 text-primary">
                        <a
                          href="https://magnus.jalatechnologies.com/ErrorHandler/RedirectPermanently"
                          target="_blank"
                          style={{color:"blue"}}

                        >
                          301
                        </a>
                      </div>
                      <div className="col-3 text-danger">
                        <a
                          href="https://magnus.jalatechnologies.com/ErrorHandler/NotFound"
                          target="_blank"
                          style={{color:"red"}}

                        >
                          404
                        </a>
                      </div>
                      <div className="col-3 text-danger">
                        <a
                          href="https://magnus.jalatechnologies.com/ErrorHandler/InternalServerError"
                          target="_blank"
                          style={{color:"red"}}

                        >
                          500
                        </a>
                      </div>
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

export default Links;
