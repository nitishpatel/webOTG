import React, {  useEffect } from "react";
import { getSite, updateSite } from "./helper/websiteapicalls";
import { getNavbar } from "../components/Navbar";
import { getLandingPage } from "../components/LandingPage";
import { useState } from "react";
import { isAuthenticated } from "../auth/helper";

const UpdateSite = ({ match, history }) => {
  const [state, setState] = useState({});
  const [landing, setlanding] = useState({});

  const {
    id,
    category,
    navbar,
    social,
    subtitle,
    title,
    url,
    user,
    color,
  } = state;

  const { token,  } = isAuthenticated();

  useEffect(() => {
    const url = match.params.id;
    getSiteDetail(url);
  }, [match.params.id]);
  const getSiteDetail = (url) => {
    getSite(url).then((data) => {
      if (data.length === 0) {
        setTimeout(window.location.replace("/notfound"), 1000);
      } else {
        setState(data[0]);

        setlanding(data[0].landing);

      }
    });
  };

  const handleChange = (name) => (event) => {
    setlanding({ ...landing, [name]: event.target.value });
  };
  const confirmSiteUpdate = (event) => {
    event.preventDefault();

    console.log("TOKEN", token);
    
    console.log("STATE", state);

    const site = {
      id,
      category,
      navbar,
      social,
      subtitle,
      title,
      url,
      user,
      color,
      landing,
    };
    const websiteid = state.id;
    console.log("SITE", site);
    updateSite(token, site, websiteid)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const updatelandingForm = () => {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              onChange={handleChange("title")}
              value={landing.title || ""}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              onChange={handleChange("image")}
              
              value={landing.image || ""}
            />
          </div>
          <div className="form-group">
            <label>Subtitle</label>
            <input
              className="form-control"
              onChange={handleChange("slogan")}
              id="exampleFormControlInput1"
              value={landing.slogan || ""}
            />
          </div>
          <div className="form-group">
            <label>About</label>
            <input
              className="form-control"
              onChange={handleChange("about")}
              value={landing.about || ""}
            />
          </div>
          <button className="btn btn-dark" onClick={confirmSiteUpdate}>Submit</button>
        </form>
      </div>
    );
  };

  const sidebar = () => {
    return (
      <div
        className="modal left fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="nav flex-sm-column flex-row">
                {updatelandingForm()}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="float-right">
        <button
          type="button"
          className="btn btn-demo"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Update Content
        </button>
      </div>
      <br></br>
      {sidebar()}
      {getNavbar(state.navbar, color)}
      {getLandingPage(landing.id-1,color,landing.title,landing.slogan,landing.image,landing.about)}   

    </div>
  );
};

export default UpdateSite;
