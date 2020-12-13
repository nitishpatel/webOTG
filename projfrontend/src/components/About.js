import React from "react";
import "../style.css";
import "../assets/css/fonts.css"

const About0 = ({title,image,about,link,color}) =>{
    return(
        <div className="container pt-4 ">
        <div className="row">
            
            <div className="col-lg-4" style={{paddingTop:"100px",paddingBottom:"150px"}}>
                <img className="img-fluid"  src={image} alt="" />
            </div>
            <div className="col-lg-8 align-self-center">
                <h2 className="font-weight-bolder">
                    {title}
                </h2>
                <h4>
                    {about}
                </h4>
                <button className="btn btn-lg text-light" style={{backgroundColor:color}}>Download CV</button>
            </div>
        </div>
    </div>
    )
}


const About1 = ({title,image,about,link,color})=>{
    return(
        <div className="container pt-4">
    	<div className="row">
    		<div className="col-lg-6 offset-3 ">
   		<h2 class='text-center'>{title}</h2>
					<hr WIDTH="75%" COLOR={color} SIZE="4" />
					<p class="font-weight-light pt-3">
					{about}
					</p>
    		</div>
    	</div>
    </div>
    )
}



export const getAboutPage = (id, color, title, image,about,link) => {
  // const image =  images[Math.floor(Math.random() * images.length)];

  const pageArray = [
    <About0 title={title} link={link} image={image} color={color} about={about}/>,
    <About1 title={title} link={link} image={image} color={color} about={about}/>,
  ];
  const page = pageArray[parseInt(id)];
  return page;
};

