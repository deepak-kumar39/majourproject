import React, { useState } from "react";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
import register from "../images/register.svg";
import login from "../images/login.svg";
import "./register.css";
const Register = () => {
  //Starting------- Code of Login Section
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("All fields are mandatory");
  const [allData, setAllData] = useState([]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const storeData = (e) => {
    if (!email && !password) {
      setError("Complete all fields");
      e.preventDefault();
    } else if (!email || !password) {
      if (!email) {
        setError("Check Email");
        e.preventDefault();
      } else if (!password) {
        setError("Password missing");
        e.preventDefault();
      }
    } else {
      const newEntry = {
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };
      setAllData([...allData, newEntry]);
      setEmail("");
      setPassword("");
      setError("All fields are mandatory");
      e.preventDefault();
    }
  };
  //Ending------- Code of Login Section

  //Starting-------------Registration section code
  //Ending-------------Registration section code
  return (
    <>
      <section id="register-section">
        <h1 style={{textAlign:"center"}}>Register | Login</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row register">
                <div className="col-lg-6  col-md-8 col-sm-12 pt-2 ">
                  <RegisterForm/>
                </div>
                <div className="col-lg-6  col-md-4 col-sm-12">
                  <img src={register} alt="noimage" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <br />
      <br /> */}
      <section id="register-section2">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row register">
                <div className="col-lg-7  col-md-6 col-sm-12">
                  <img src={login} alt="noimage" className="img-fluid" id="mobilehide"/>
                </div>
                <div className="col-lg-5  col-md-6 col-sm-12 p-5">
                  <LoginForm
                    email={email}
                    password={password}
                    storeData={storeData}
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}
                    error={error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
