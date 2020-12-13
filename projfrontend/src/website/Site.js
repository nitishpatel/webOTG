import React, { useEffect } from 'react'
import { getSite } from './helper/websiteapicalls'
import { getNavbar } from '../components/Navbar'
import { getLandingPage } from '../components/LandingPage'
import { useState } from 'react'
import { getAboutPage } from '../components/About'
import Services from '../components/Services'
import SocialTemplates from '../components/SocialTemplates'


const Site = ({match,history}) => {
    const [state, setState] = useState({
    });
    const [landing, setlanding] = useState({});
    const [about, setAbout] = useState({});
const [projects, setProjects] = useState({});
const [social, setSocial] = useState({});
    const {color} = state;
    useEffect(() => {
        const url = match.params.id;
        getSiteDetail(url)
    }, [match.params.id])
    const getSiteDetail = (url)=>{
        getSite(url)
        .then((data)=>{
            if(data.length ===0){
                setTimeout(window.location.replace("/notfound"), 1000);
                

            }else{
                setState(data[0]);
                
                setlanding(data[0].landing);
                setAbout(data[0].aboutpage);
                setProjects(data[0].project);
                setSocial(data[0].social);
                

            }
        })
    }
    
   

    return (
        <div>
           
           
            {getNavbar(state.navbar,color)}
            {getLandingPage(landing.id,color,landing.title,landing.slogan,landing.image,landing.about)}   
            {getAboutPage(about.id,color,about.title,about.image,about.aboutpara)}  
            <Services projects={projects}/> 
            <SocialTemplates color={color} social={social}/>
        </div>
    )
}

export default Site
