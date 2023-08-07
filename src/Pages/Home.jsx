import React, { useEffect, useState } from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
import Breadcrumbs from "../Components/BreadCrumbs";
import { useLocation } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <Headding />
      <div className="d-flex">
        <div className="col-2 d-sm-none d-md-none d-none d-lg-none d-xl-block">
          <SidePanel />
        </div>
        <div className="col-12">
          <div className="container-fluid">
            <div className="row">
              {/* <Breadcrumbs currentPath={currentPath} /> */}
              <div className="col-12 text-center mt-5">
                <h1 className="text-main">Welcome to JALA Academy</h1>
              </div>
              <div className="col-12 text-center mt-5 fs-3">
                <p className="text-para">
                  Do you want to Learn Selenium Automation completely with
                  Practical Scenarios in 7 Days?
                </p>
              </div>
              <div className="col-12 card mt-5 ">
                <p className="p-3 fs-4 border-3 border-top border-primary ">
                  You Learn Everything by doing projects if you are very serious
                  to gat a software job in 60 days contact us :{" "}
                  <a href="https://jalaacademy.com/" target="_blank">
                    http://jalatechnologies.com/contact-us.html
                  </a>
                </p>
              </div>
              <div className="col-12 card mt-5 footer">
                <p className="p-3 fs-4 border-3 border-top border-primary">
                  <span className="text-bg d-block w-100">
                    For working people can double the salery in 60 Days
                  </span>
                </p>
              </div>
              <div className="card fs-3 p-3 d-flex align-items-cnter mt-5">
                <p>
                  Copyright © 2023{" "}
                  <a href="https://jalatechnologies.com/" target="_blank"> JALA Technologies.</a> All
                  rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
