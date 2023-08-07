import React, { useState } from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";

const Popup = () => {
  const [popupUrl, setPopupUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [promptName, setPromptName] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openPopup = (url) => {
    setPopupUrl(url);
    window.open(url, "_blank", "width=600,height=400");
  };
  const alertConfirm = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
  };
  const showPrompt = () => {
    const userInput = prompt("Enter Your Name:");
    if (userInput) {
      setPromptName(userInput);
    } else {
      setPromptName("");
    }
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
              <h1>Popup</h1>
            </div>
            <div className="card">
              <div className="container mt-5 mb-5">
                <div className="row">
                  <div className="col-4">
                    <button
                      className="btn btn-info text-white fs-3"
                      style={{ marginBottom: ".625rem" }}
                      onClick={() => openPopup("http://www.googel.com")}
                    >
                      Popup One
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-info text-white fs-3"
                      onClick={() =>
                        openPopup("https://www.tutorialspoint.com/index.htm")
                      }
                    >
                      Popup two
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-info text-white fs-3"
                      onClick={() =>
                        openPopup("https://www.tutorialsteacher.com/")
                      }
                    >
                      Popup three
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-info text-white fs-3"
                      style={{ marginBottom: ".625rem" }}
                      onClick={() =>
                        openPopup("https://www.javatpoint.com/java-tutorial")
                      }
                    >
                      Popup four
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-info text-white fs-3"
                      onClick={() =>
                        openPopup("http://localhost:3000/home/popup")
                      }
                    >
                      Popup five
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-info text-white fs-3"
                      onClick={openModal}
                    >
                      In Window PopUp
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-info text-white fs-3"
                      onClick={() => alert("this is an alert box")}
                    >
                      Alert Box
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-info text-white fs-3"
                      onClick={alertConfirm}
                    >
                      Confirm Box
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-info text-white fs-3"
                      onClick={showPrompt}
                    >
                      Prompt Box
                    </button>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <p className="fs-1">
                    {" "}
                    {promptName.length > 0 ? promptName : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal ${showModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Popup Six Content</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body fs-4">
              This is the content of Popup Six. Popup One body.. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger fs-3"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className={`modal-backdrop fade ${showModal ? "show" : ""}`}
          onClick={closeModal}
        ></div>
      )}
    </>
  );
};

export default Popup;
