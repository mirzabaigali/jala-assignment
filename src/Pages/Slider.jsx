import React, { useRef, useState } from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
import toast from "toastr";
const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  function handleSliderChange(event) {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
  }
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
              <h1>Slider</h1>
            </div>
            <div className="col-12">
              <div className="card">
                <input
                  type="range"
                  name="slider"
                  id="slider"
                  value={sliderValue}
                  onChange={handleSliderChange}
                  min={0}
                  max={100}
                />
                <p className="fs-3">Slider Value: {sliderValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
