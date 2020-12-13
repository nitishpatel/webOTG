import React from 'react'


const Services = ({ projects}) => {
   
    return (
        <div class="container">
        <h1 class="text-center">
            Projects

        </h1>
        <div class="row">
        
            <div class="col-lg-3 col-md-6">
                <div class="feature_item">
                    <img class="img-fluid" src={projects['image0']} alt=""/>
                    <h4>{projects['name0']}</h4>
                    <p>{projects['summary0']}</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="feature_item">
                    <img class="img-fluid" src={projects['image1']} alt=""/>
                    <h4>{projects['name1']}</h4>
                    <p>{projects['summary1']}</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="feature_item">
                    <img class="img-fluid" src={projects['image2']} alt=""/>
                    <h4>{projects['name2']}</h4>
                    <p>{projects['summary2']}</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="feature_item">
                    <img class="img-fluid" src={projects['image3']} alt=""/>
                    <h4>{projects['name3']}</h4>
                    <p>{projects['summary3']}</p>
                </div>
            </div>
            
        </div>
    </div>

    )
}

export default Services
