import React, { useEffect } from "react";
import { getSite, updateSite } from "./helper/websiteapicalls";
import { getNavbar } from "../components/Navbar";
import { getLandingPage } from "../components/LandingPage";
import { useState } from "react";
import { isAuthenticated } from "../auth/helper";
import { getAboutPage } from "../components/About";
import { TwitterPicker } from "react-color";
import swal from "sweetalert";
import Services from "../components/Services";
import SocialTemplates from "../components/SocialTemplates";
const UpdateSite = ({ match, history }) => {
  const [state, setState] = useState({});
  const [landing, setlanding] = useState({});
  const [aboutpage, setAbout] = useState({});
  const [project, setProjects] = useState({});
const [social, setSocial] = useState({})
  const {
    id,
    category,
    navbar,
    subtitle,
    title,
    url,
    user,
    color,
  } = state;

  const { token } = isAuthenticated();

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
        setAbout(data[0].aboutpage);
        setProjects(data[0].project);
        setSocial(data[0].social);
      }
    });
  };

  const handleChange = (name) => (event) => {
    setlanding({ ...landing, [name]: event.target.value });
  };
  const abouthandleChange = (name) => (event) => {
    setAbout({ ...aboutpage, [name]: event.target.value });
  };
  const projecthandleChange = (name) => (event) => {
    setProjects({ ...project, [name]: event.target.value });
  };
  const socialhandleChange = (name) => (event) => {
    setSocial({ ...social, [name]: event.target.value });
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
      aboutpage,
      project
    };
    const websiteid = state.id;
    console.log("SITE", site);
    updateSite(token, site, websiteid)
      .then((data) =>
        swal(
          "Site Upated!",
          "Your Customizations were saved successfully!",
          "success"
        )
      )
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
          <button className="btn btn-dark" onClick={confirmSiteUpdate}>
            Submit
          </button>
        </form>
      </div>
    );
  };
  const updateAboutForm = () => {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              onChange={abouthandleChange("title")}
              value={aboutpage.title || ""}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              onChange={abouthandleChange("image")}
              value={aboutpage.image || ""}
            />
          </div>
          <div className="form-group">
            <label>About Yourself / Your Business</label>
            <input
              className="form-control"
              onChange={abouthandleChange("aboutpara")}
              id="exampleFormControlInput1"
              value={aboutpage.aboutpara || ""}
            />
          </div>

          <button className="btn btn-dark" onClick={confirmSiteUpdate}>
            Submit
          </button>
        </form>
      </div>
    );
  };
  const handleChangeComplete = (color) => {
    setState({ ...state, color: color.hex });
  };

  const updateProjectsForm = () => {
    return (
      <div className="container">
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" href="#collapse0">
                  Project / Service 0
                </a>
              </h4>
            </div>
            <div id="collapse0" className="panel-collapse collapse">
              <form action="">
                <div className="form-group">
                  <label>Project Name</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("name0")}
                    id="exampleFormControlInput1"
                    value={project.name0 || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Project Summary</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("summary0")}
                    id="exampleFormControlInput1"
                    value={project.summary0 || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Project Image</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("image0")}
                    id="exampleFormControlInput1"
                    value={project.image0 || ""}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" href="#collapse1">
                  Project / Service 1
                </a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse">
              <form action="">
                <div className="form-group">
                  <label>Project Name</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("name1")}
                    id="exampleFormControlInput1"
                    value={project.name1 || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Project Summary</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("summary1")}
                    id="exampleFormControlInput1"
                    value={project.summary1 || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Project Image</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("image1")}
                    id="exampleFormControlInput1"
                    value={project.image1 || ""}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" href="#collapse2">
                  Project / Service 2
                </a>
              </h4>
            </div>
            <div id="collapse2" className="panel-collapse collapse">
              <form action="">
                <div className="form-group">
                  <label>Project Name</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("name2")}
                    id="exampleFormControlInput1"
                    value={project.name2 || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Project Summary</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("summary2")}
                    id="exampleFormControlInput1"
                    value={project.summary2 || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Project Image</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("image2")}
                    id="exampleFormControlInput1"
                    value={project.image2 || ""}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" href="#collapse3">
                  Project / Service 3
                </a>
              </h4>
            </div>
            <div id="collapse3" className="panel-collapse collapse">
              <form action="">
                <div className="form-group">
                  <label>Project Name</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("name3")}
                    id="exampleFormControlInput1"
                    value={project.name3 || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Project Summary</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("summary3")}
                    id="exampleFormControlInput1"
                    value={project.summary3 || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Project Image</label>
                  <input
                    className="form-control"
                    onChange={projecthandleChange("image3")}
                    id="exampleFormControlInput1"
                    value={project.image3 || ""}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <button className="btn btn-dark" onClick={confirmSiteUpdate}>
            Submit
          </button>
      </div>
    );
  };
  const socialUpdateForm = () =>{
    return(
      <div>
                <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" href="#collapse4">
                  Social Media Linkss
                </a>
              </h4>
            </div>
            <div id="collapse4" className="panel-collapse collapse">
              <form action="">
                <div className="form-group">
                  <label>Instagram</label>
                  <input
                    className="form-control"
                    onChange={socialhandleChange("instagram")}
                    id="exampleFormControlInput1"
                    value={social.instagram || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Facebook</label>
                  <input
                    className="form-control"
                    onChange={socialhandleChange("facebbok")}
                    id="exampleFormControlInput1"
                    value={social.facebook || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Project Image</label>
                  <input
                    className="form-control"
                    onChange={socialhandleChange("twitter")}
                    id="exampleFormControlInput1"
                    value={social.twitter || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Github</label>
                  <input
                    className="form-control"
                    onChange={socialhandleChange("github")}
                    id="exampleFormControlInput1"
                    value={social.github || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Dribble</label>
                  <input
                    className="form-control"
                    onChange={socialhandleChange("dribble")}
                    id="exampleFormControlInput1"
                    value={social.dribble || ""}
                  />
                </div>
                <div className="form-group">
                  <label>wattapad</label>
                  <input
                    className="form-control"
                    onChange={socialhandleChange("wattapad")}
                    id="exampleFormControlInput1"
                    value={social.wattapad || ""}
                  />
                </div>
                <div className="form-group">
                  <label>Linked in</label>
                  <input
                    className="form-control"
                    onChange={socialhandleChange("linkedin")}
                    id="exampleFormControlInput1"
                    value={social.linkedin || ""}
                  />
                </div>
                
              </form>
            </div>
          </div>
        </div>
        <button className="btn btn-dark" onClick={confirmSiteUpdate}>
            Submit
          </button>
      </div>
    )
  }
  const sidebar = () => {
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="nav flex-sm-column flex-row">
              <h4>Theme Color</h4>
              <TwitterPicker
                color={state.color}
                onChange={handleChangeComplete}
              />
              <h4>Update LandingPage Content</h4>
              {updatelandingForm()}
              <br />
              <br />
              <h4>Update About Page Content</h4>

              {updateAboutForm()}
              <br />
              <br />
              <h4>Update project / Services</h4>

              {updateProjectsForm()}
              <br/>
              <br/>
              {socialUpdateForm()}
            </div>
          </div>
          <div className="modal-footer">webOTG</div>
        </div>
      </div>
    );
  };

  return (
    // <div>
    //   <div className="float-right">
    //     <button
    //       type="button"
    //       className="btn btn-demo"
    //       data-toggle="modal"
    //       data-target="#exampleModal"
    //     >
    //       Update Content
    //     </button>
    //   </div>
    //   <br></br>

    // </div>
    <div className="wrapper">
      <nav id="sidebar">{sidebar()}</nav>

      <div id="content">
        {getNavbar(state.navbar, color)}

        {getLandingPage(
          landing.id,
          color,
          landing.title,
          landing.slogan,
          landing.image,
          landing.about
        )}
        {getAboutPage(
          aboutpage.id,
          color,
          aboutpage.title,
          aboutpage.image,
          aboutpage.aboutpara
        )}
        <Services projects={project} />
        <SocialTemplates color={color} social={social}/>

      </div>
    </div>
  );
};

export default UpdateSite;
