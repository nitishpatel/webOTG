import React, { useState } from 'react'

import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from '../auth/helper';
import Menu from '../core/Menu';
import SignInImage from "../assets/signin.png"
const Signin= ()=> {
    const [values,setValues] = useState({
        email:"",
        password:"",
        error:"",
        success:false,
        loading:false,
    });

    const {email,password,error,success,loading} = values;

    const handleChange = name => event =>{
          setValues({...values,error:false,[name]:event.target.value})

    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
    
        signin({ email, password })
          .then((data) => {
            console.log("DATA", data);
            if (data.token) {
              //let sessionToken = data.token;
              authenticate(data, () => {
                console.log("TOKKEN ADDED");
                setValues({
                  ...values,
                });
              });
            } else {
              setValues({
                ...values,
                loading: false,
                error:data.error,
              });
            }
          })
          .catch((e) => console.log(e));
      };
    
      const performRedirect = () => {
        console.log(isAuthenticated())
        if (isAuthenticated()) {
          return (<Redirect to="/user/dashboard" />)
        }
      };
    
      const loadingMessage = () => {
        return (
          loading && (
            <div className="alert alert-info">
              <h2>Loading...</h2>
            </div>
          )
        );
      };
    
      const successMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-success"
                style={{ display: success ? "" : "none" }}
              >
                New account created successfully. Please <Link
                  to="/signin"
                >
                  login now.
                </Link>
              </div>
            </div>
          </div>
        );
      };
    const errorMessage = () =>{
      return(
          <div className="row">
              <div className="col-md-6 offset-sm-3">
      <div className="alert alert-danger" style={{display: error?"":"none"}}>{error}</div>
              </div>
          </div>
      )
  }
    const signInForm = ()=>{
        return(
                <div className=" text-left">
                    <form>
                       
                        <div className="form-group">
                            <label >Email</label>
                            <input type="email" className="form-control" value={email} onChange={handleChange("email")} />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" value={password} onChange={handleChange("password")} />
                        </div>
                        <button onClick={onSubmit} className="btn btn-block theme-blue text-light">Submit</button>
                    </form>
  
            </div>
        )
    }
  
    return (
      <div>
        <Menu/>
        <div className="container-fluid pt-4">
          <div className="row">
            <div className="col-lg-6">
              <img src={SignInImage} alt="Signin" style={{maxHeight:450}} className="img-fluid" />
            </div>
            <div className="col-lg-6  align-self-center">
              <h2 className="text-center">Login</h2>
              {loadingMessage()}
              {successMessage()}
              {errorMessage()}
              {signInForm()}
            </div>
          </div>
        </div>
            
            {performRedirect()}
      </div>
    )
}

export default Signin
