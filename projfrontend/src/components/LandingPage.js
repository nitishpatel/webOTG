import React from "react";
import "../style.css";
import "../assets/css/fonts.css"

const Page0 = ({ title, subtitle, image, about }) => {


  return (
    <div className="container-fluid " style={{background:"linear-gradient(to right, #8e2de2, #4a00e0)" ,padding:"80px"}}>
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

        </div>
      </div>
    </div>
  );
};

const Page1 = ({title, subtitle, image, about,color}) =>{
  return(
    <div className="container-fluid kumbh-sans" style={{padding: "200px",  backgroundImage:`url(${image})`, backgroundSize: "cover"}}>
        <div className="row">
            <div className="col-lg-6 offset-3 text-center">
                <h1 className="display-3 ">
                    {title}
                </h1>
                <h4>
                    {subtitle}
                </h4>
                <button class="btn  btn-lg text-light" style={{backgroundColor:color}}>Portfolio</button>
            </div>
        </div>

    </div>
  )
}

const Page2 = ({title,subtitle,image,link})=>{
  return(
    <div className="container-fluid" style={{backgroundImage:`url(${image})`,backgroundSize:'cover',height:'80vh'}}>
    <div className="row">
      <div className="col-lg-12 text-center justify-content-center align-items-center">
        <h1 className="pt-4 text-white display-3">{title}</h1>
        <h3 className="text-white">{subtitle}</h3>
        <br/><br/>
        <a href={link} className="btn btn-light btn-lg mt-4">
        Visit my Store
          
        </a>
        
      </div>
	</div>
	
</div>
  )
}
const LandingPage = ({ color }) => {
  return <div>{getLandingPage()}</div>;
};

export const getLandingPage = (id, color, title, subtitle, image,about) => {
  // const image =  images[Math.floor(Math.random() * images.length)];

  const pageArray = [
    <Page0 title={title} subtitle={subtitle} image={image} color={color} about={about}/>,
    <Page1 title={title} subtitle={subtitle} image={image} color={color} about={about}/>,
    <Page2 title={title} subtitle={subtitle} image={image} color={color} link={about} />,
  ];
  const page = pageArray[parseInt(id)];
  return page;
};

export default LandingPage;
