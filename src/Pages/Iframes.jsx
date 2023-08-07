import React from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";

const Iframes = () => {
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
              <h1>Iframes</h1>
            </div>
            <div className="card mt-5">
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
                      Plan To Succeed
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
                   <div>
                   <h1>frame 1</h1>
                    <iframe
                      src="https://magnus.jalatechnologies.com/Home/Index"
                      width="50%"
                      height="400px"
                      title="Frame 1"
                    ></iframe>
                   </div>
                   <h1>frame 2</h1>
                    <iframe
                      src="http://localhost:3000/home/dashboard"
                      width="50%"
                      height="400px"
                      title="Frame 2"
                    ></iframe>
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

export default Iframes;
