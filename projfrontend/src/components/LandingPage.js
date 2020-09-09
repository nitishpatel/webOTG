import React  from "react";
import "../style.css";
import {  images } from "./Images";
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
              <a
                className="btn  btn-lg text-light"
                role="button"
                style={{ backgroundColor: `${color}` }}
              >
                Explore
              </a>
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
					style={{backgroundColor:color}}
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
const LandingPage = ({ color }) => {
  const image =  images[Math.floor(Math.random() * images.length)];
  return (
    <div>
      <Page2
        title="My Title"
        subtitle="This is subtitile"
        image={image}
        color={color}
      />
    </div>
  );
};

export const getLandingPage = (color) => {
  const image =  images[Math.floor(Math.random() * images.length)];

  const pageArray = [
    <Page1
      title="WebOTG"
      subtitle="Makes Works Easy"
      image={image}
      color={color}
    />,
    <Page2
      title="webOTG"
      subtitle="Web: On The Go"
      image={image}
      color={color}
    />,
  ];
  const page = pageArray[Math.floor(Math.random() * pageArray.length)];
  return page;
};

export default LandingPage;
