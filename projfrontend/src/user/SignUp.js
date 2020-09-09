import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import Menu from "../core/Menu";
import SignUpImage from "../assets/signup.png"
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    success: false,
    error: "",
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
      setValues({...values,error:false,[name]:event.target.value})
  };

  const onSubmit = event =>{
      event.preventDefault();
      setValues({...values,error:false});
      signup({name,email,password})
      .then(data=>{
        if(data.email===email){
            setValues(
                {
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true,
                }
            )
        }else{
            setValues({
                ...values,
                error:true,
                success:false
            })
        }
      })
      .catch(e=>console.log(e));

  }

  const successMessage = () =>{
      return(
          <div className="row">
              <div className="col-md-6 offset-sm-3">
                  <div className="alert alert-success" style={{display: success?"":"none"}}>
                      New Account Created Successfully
                      <Link to="/signin" class="alert-link"> Please Login Here!!</Link>
                  </div>
              </div>
          </div>
      )
  }
  const errorMessage = () =>{
    return(
        <div className="row">
            <div className="col-md-6 offset-sm-3">
                <div className="alert alert-danger" style={{display: error?"":"none"}}>Check All Fields Again</div>
            </div>
        </div>
    )
}
  const signUpForm = ()=>{
      return(
              <div className=" text-left">
                  <form>
                      <div className="form-group">
                          <label className="text-dark">Name</label>
                          <input type="text" className="form-control" value={name} onChange={handleChange("name")} />
                      </div>
                      <div className="form-group">
                          <label className="text-dark">Email</label>
                          <input type="email" className="form-control" value={email} onChange={handleChange("email")} />
                      </div>
                      <div className="form-group">
                          <label className="text-dark">Password</label>
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
            <div className="container pt-4">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={SignUpImage} alt="Signup" className="img-fluid" style={{maxHeight:450}}/>
                    </div>
                    <div className="col-lg-6  align-self-center">
                        <h3 className="text-center">Register</h3>
                    {successMessage()}
                        {errorMessage()}
                    {signUpForm()}
                    </div>
                </div>
            </div>
       
        </div>
  
  );
};

export default Signup;
