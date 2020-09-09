import React from "react";
import Menu from "./Menu";
import Landing from '../assets/landing.png'
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
  return (
      
      <div>
        <Menu/>
        <div className="container landing" >
          <div className="row">
            <div className="col-lg-6  text-center align-self-center ">
              <h1>Get your Website up and running in 30 secs</h1>
            </div>
            <div className="col-lg-6  pt-2 text-center ">
              <img src={Landing} alt="" className="img-fluid" style={{maxHeight:450}}/>
              {/* <h2 >Websites - On The Go</h2> */}
            </div>
          </div>
          
        </div>
        {whyYouNeedAWebsite()}

      </div>
  );
};

export default Home;
