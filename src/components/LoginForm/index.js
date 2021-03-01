import React from "react";
import { Link } from "react-router-dom";
// import ResultPage from "../ResultPage/";
const LoginForm = ({
  email,
  password,
  storeData,
  handleEmail,
  handlePassword,
  error,
}) => {
  return (
    <div>
      <form className="text-start" action="" onSubmit={storeData}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            onChange={handleEmail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={handlePassword}
          />
        </div>
        <div id="emailHelp" className="form-text mb-2">
          {error}
        </div>
        <button type="submit" className="btn btn-danger">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
