import React from "react";
import Menu from "./Menu";
import Landing from '../assets/landing.json'
import Lottie from 'react-lottie';
const Home = () => {
  const whyYouNeedAWebsite = () =>{
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Reasons Why Your Need A Website</h2>
          </div>
        </div>
      </div>
    )
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Landing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
      
      <div>
        <Menu/>
        <div className="container landing" >
          <div className="row">
            <div className="col-lg-6  text-center align-self-center ">
              <h1>Get your Website up and running in 30 secs</h1>
            </div>
            <Lottie 
	    options={defaultOptions}
        height={450}
        width={450}
      />
          </div>
          
        </div>
        {whyYouNeedAWebsite()}

      </div>
  );
};

export default Home;
