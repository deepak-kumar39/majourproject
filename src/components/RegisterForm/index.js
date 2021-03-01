import React from "react";
// import data from "../DataFolder/State.json";
const RegisterForm = () => {
  return (
    <div className="container">
      <form className="text-start">
        <div>
          <div className="row">
            <div className="col-lg-5 mb-2">
              <label htmlFor="registrationFullName" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" autoComplete="off"/>
            </div>

            <div className="col-lg-5 mb-2">
              <label htmlFor="registrationMobile" className="form-label">
                Mobile Number
              </label>
              <input type="text" className="form-control" autoComplete="off" />
            </div>
          </div>
        </div>
        
        <div>
          <div className="row">
            <div className="col-lg-5  mb-2">
              <label htmlFor="registrationPass" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" required />
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-5  mb-2">
              <label htmlFor="registrationPass" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" autoComplete="off" />
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-5  mb-2">
              <label htmlFor="registrationRe-Pass" className="form-label">
                Re-Type Password
              </label>
              <input type="password" className="form-control" autoComplete="off" />
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-danger">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
