import React from "react";
import "../style.css";
const Page1 = ({ title, subtitle, image, color }) => {
  return (
    <div
      className="jumbotron jumbotron-fluid mb-0 hero text-light"
      style={{ backgroundImage: `url("${image}")`, backgroundSize: "cover" }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-6">
            <h1 className="display-5">{title}</h1>

            <p className="lead">{subtitle}</p>

            <p className="lead">
              <button
                className="btn  btn-lg text-light"
                style={{ backgroundColor: `${color}` }}
              >
                Explore
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page2 = ({ title, subtitle, image, color }) => {
  return (
    <header
      id="home"
      className="landing2 jumbotron-fluid p-b-3 bg-faded "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container animated fadeInUp">
        <h1 className="display-3 text-white">{title}</h1>
        <p className="lead m-t-1 m-b-2 text-light">{subtitle}</p>
        <button
          type="button"
          className="btn btn-lg m-t-1 text-light"
          data-toggle="modal"
          style={{ backgroundColor: color }}
          data-target="#signup_form_modal"
        >
          Explore
        </button>
        <button
          type="button"
          className="text-light btn btn-lg  m-t-1"
          data-scroll-to="#speakers"
        >
          Contact-Us
        </button>
      </div>
    </header>
  );
};

const Page3 = ({ title, subtitle, image, about }) => {

  document.body.style.background = "linear-gradient(to right, #8e2de2, #4a00e0)";

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 justify-content-center align-items-center text-center ">
          <div className="pt-4 pb-2">
            <img
            src={`${image}`}
            className="circular--portrait"
            alt="portfolio pic"
            style={{ borderColor:"#ffffff",borderRadius:"50%",borderStyle:"solid"}}
          />
          </div>
          <h1 className="name text-light">{title}</h1>
          <h3>{subtitle}</h3>
          <p className="text-light h6 pt-3">
            {about}
          </p>
          {/* {socialMedia()} */}
          {/* <p className="text-light h6">Made With ♥</p> */}
        </div>
      </div>
    </div>
  );
};
const LandingPage = ({ color }) => {
  return <div>{getLandingPage()}</div>;
};

export const getLandingPage = (id, color, title, subtitle, image,about) => {
  // const image =  images[Math.floor(Math.random() * images.length)];

  const pageArray = [
    <Page1 title={title} subtitle={subtitle} image={image} color={color} />,
    <Page2 title={title} subtitle={subtitle} image={image} color={color} />,
    <Page3 title={title} subtitle={subtitle} image={image} color={color} about={about}/>,
  ];
  const page = pageArray[parseInt(id)];
  return page;
};

export default LandingPage;
