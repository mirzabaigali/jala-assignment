import React, { useState } from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const TooltipExample = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleButtonClick = () => {
    setShowTooltip(!showTooltip);
  };

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
              <h1>Tooltip Example</h1>
            </div>
            <div className="card">
              <div className="col-12 my-5 text-center">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-delay="0"
                  title={
                    showTooltip
                      ? "Thank you for being here!"
                      : "You had not clicked this button yet. Click me and check the tooltip."
                  }
                  onClick={handleButtonClick}
                >
                  Click me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TooltipExample;
