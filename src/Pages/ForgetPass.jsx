import React, { useState } from "react";
import "./ForgetPass.css";
import { Link } from "react-router-dom";
import toast from "toastr";
const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const handleForget = () => {
    if (!email) {
      toast.warning("email is required");
    } else {
      toast.success("email send successfuly");
    }
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-lg-6 col-sm-12 forget">
          <div className="col-12 text-center p-5">
            <h1 className="text-field1">Magnus</h1>
          </div>
          <div className="col-lg-12 input-wrapper">
            <p className="text-center pt-3 pb-3">Forgot Password</p>
            <form action="">
              <input
                type="text"
                name="email"
                id="email"
                className="form-control w-75 mx-auto mb-4 text-field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>
            <div className="forget-footer d-flex justify-content-around align-items-center text-field">
              <Link to="/">Back</Link>
              <div>
                <button
                  className="btn btn-info text-field"
                  onClick={handleForget}
                >
                  Get Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
