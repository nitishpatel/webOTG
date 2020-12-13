import React from "react";
import Menu from "./Menu";
import Landing from "../assets/contact.json";
import Lottie from "react-lottie";
import Social from './Social'
const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Landing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-3">
            <Lottie options={defaultOptions} height={450} width={450} />
           <Social/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
