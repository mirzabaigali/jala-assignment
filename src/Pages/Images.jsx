import React, { useRef, useState } from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
import toast from "toastr";
const Images = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  function handleFileChange() {
    const fileInput = fileInputRef.current;
    if (!fileInput) return;

    const file = fileInput.files[0];
    if (file) {
      const fileName = file.name;
      setSelectedFileName(fileName);
    }
  }
  function handleUpload() {
    const fileInput = fileInputRef.current;
    const allowedExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
    const file = fileInput.files[0];
    if (!file) {
      return toast.warning("please select a file to upload");
    }
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        toast.error(
          "Access to the path 'E:Inetpub\vhostsTeqCraft.comMagnus.jalatechnologies.comUpload/' is denied."
        );
      } else {
        const errorMessage =
          "Error! Only jpg, jpeg, png, gif or bmp image files are allowed!";
        toast.error(errorMessage);
        console.error(errorMessage);
        setSelectedFileName("");
      }
    }
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
              <h1>Uploading/Downloading Image</h1>
            </div>
            <div className="card mt-5 mb-5 d-flex flex-row align-items-center gap-2">
              <div className="col-4 ">
                <label htmlFor="img">Select File:</label>
                <input
                  type="file"
                  name="img"
                  id="img"
                  className="form-control"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
              <div className="col-4">
                <label htmlFor="file">Fiel Name</label>
                <input
                  type="text"
                  name="file"
                  id="file"
                  className="form-control"
                  value={selectedFileName}
                />
              </div>
              <div className="col-4 mb-5 d-flex justify-content-center align-items-center mt-5">
                <button className="btn btn-success fs-3" onClick={handleUpload}>
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
