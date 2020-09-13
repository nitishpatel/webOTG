import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { getAllCategories, createNewSite } from "./helper/websiteapicalls";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const CreateSite = () => {
  const [state, setState] = useState({
    websiteUrl: "",
    categoryid: "",
    error: false,
    success: false,
  });
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    preload();
  }, []);
  const { websiteUrl, categoryid,error,success } = state;
  const {user} = isAuthenticated();
  const preload = () => {
    getAllCategories().then((data) => {
      console.log("CATEGORIES", data);
      setCategories(data);
    });
  };
  const handleChange = (name) => (event) => {
    setState({ ...state, error: false, [name]: event.target.value });
  };

  const createSite = event =>{
    event.preventDefault();

      const userid = user.id;
      console.log({websiteUrl,categoryid,userid})
      createNewSite({websiteUrl,categoryid,userid})
      .then((data)=>{
        if(data.error){
          setState({...state,error:data.error});
        }else{
          setState({
            url:"",
            categoryid:"",
            error:false,
            success:true
            
          })
        }
      })
      .catch(err=>console.log(err))
  }
  const websiteForm = () => {
    return (
      <div className="conatainer">
        <div className="row">
          <div className="col-lg-6 offset-3">
            <form className="form-group">
              <label htmlFor="basic-url">Your vanity URL</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon3">
                    https://webotg.com/
                  </span>
                </div>
                <input
                  type="text"
                  value={websiteUrl}
                  onChange={handleChange("websiteUrl")}
                  className="form-control"
                  id="basic-url"
                />
              </div>
              <div className="form-group ">
                <label className="text-dark">Category</label>
                <select
                  className="form-control"
                  placeholder="Category"
                  // disabled={category===""?false:true}
                  onChange={handleChange("categoryid")}
                >
                  <option>Select</option>
                  {categories &&
                    categories.map((cate, index) => (
                      <option key={index} value={cate.id}>
                        {cate.name}
                      </option>
                    ))}
                </select>

              </div>
              <button className="btn btn-lg theme-blue text-light"  onClick={createSite}>Create</button>
            </form>
          </div>
        </div>
      </div>
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
            New Site Created Successfully. Please <Link
              to="/user/dashboard"
            >
              Check Dashboard to view / edit / delete site.
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
  return (
    <Base title="Create New Site" description="Make Your Website">
      {errorMessage()}
      {successMessage()}
      {websiteForm()}
      
    </Base>
  );
};

export default CreateSite;
