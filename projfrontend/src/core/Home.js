import React from "react";
import Menu from "./Menu";
import Landing from '../assets/landing.json'
import Lottie from 'react-lottie';
import { Link } from "react-router-dom";

const Home = () => {
  const whyYouNeedAWebsite = () =>{
    return(
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-12 text-center">
            <h2>Reasons Why Your Need A Website</h2>
          </div>
          <div className="col-lg-4">
            <div className="card " style={{maxHeight:"300px",minHeight:"300px"}}>
              <h6 className="p-3 font-weight-bolder text-center"> A website proves your brand credibility</h6>
              <p className="p-3 text-muted">“Where is your official website?” This is the first question you will hear when you tell people about your business. The truth is that people have become smart these days. They think 10 times before making any business decision. </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card" style={{maxHeight:"300px",minHeight:"300px"}}>
              <h6 className="p-3 font-weight-bolder text-center">Businesses with a website are easily accessible</h6>
              <p className="p-3 text-muted">This is one of the major reasons why businesses need a website. When it comes to purchasing a product or service, most people prefer an easily accessible business and can be reached whenever they want. </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card" style={{maxHeight:"300px",minHeight:"300px"}}>
              <h6 className="p-3 font-weight-bolder text-center">A better understanding</h6>
              <p className="p-3 text-muted">A website can help you build a strong and long-lasting relationship with your clients. So by having a website, you are establishing trust among customers and offering them an impeccable user experience. So, they stay and come back for more. </p>
            </div>
          </div>
        </div>
        <div className="row pt-4 mt-4">
          <div className="col-lg-12 text-center">
            <h3>What are you waiting for? <span class="badge badge-warning"> <Link to="/signup" className="btn btn-warning"> Create Your Site Now</Link></span></h3>
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
