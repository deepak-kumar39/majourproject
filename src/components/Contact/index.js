import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Register() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required").matches(/^[A-Za-z\s]{1,}[.]{0,1}[A-Za-z\s]{0,}$/,"Name should be alphanumeric"),
    lastName: Yup.string().required("Last name is required").matches(/^[A-Za-z\s]{1,}[.]{0,1}[A-Za-z\s]{0,}$/,"Name should be alphanumeric"),
    
    email: Yup.string().required("Email is required").email("Email is invalid"),
    mobile: Yup.string().required("Mobile is required"),

    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required")
  });

  // functions to build form returned by useForm() hook
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema)
  });

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  }

  return (
  <div className="container" style={{color:"black", fontFamily:"fantasy",fontSize:"20px"}}>
    <div className="card m-3" style={{backgroundColor:"white", }}>
      <h5 className="card-header">We are Happy to help you!</h5>
      <div className="card-bod" >
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <div className="form-row">
            <div className="form-group col">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                ref={register}
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            </div>
            <div className="form-group col">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                ref={register}
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
          </div>
          <div className="form-row">
          <div className="form-group col">
              <label>Email</label>
              <input
                name="email"
                type="text"
                ref={register}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
          <div className="form-group col">
              <label>Mobile</label>
              <input
                name="mobile"
                type="number"
                ref={register}
                className={`form-control ${
                  errors.mobile ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.mobile?.message}
              </div>
            </div>
           
          </div>

          <div className="form-row">
          <div className="form-group col">
             <div> <label>Choose related service</label></div>
            <div> <select ref={register}>
                 <option>Heavy luggage</option>
                 <option>Small luggage</option>
                 <option>Via Train</option>
                 <option>Transport vis Ship</option>
             </select>
             </div>
            </div>
          <div className="form-group col" style={{margin:"4px"}}>
              <label>Message</label>
             <div> <textarea ref={register} style={{width:"auto",height:"50px"}}/></div>
              <div className="invalid-feedback">
                {errors.message?.message}
              </div>
            </div>
           
          </div>
          
          
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-1" onClick={register}>
              Send
            </button>
            <button className="btn btn-secondary" type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;
