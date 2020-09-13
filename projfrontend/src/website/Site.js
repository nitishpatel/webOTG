import React, { useEffect } from 'react'
import { getSite } from './helper/websiteapicalls'
import { getNavbar } from '../components/Navbar'
import { getLandingPage } from '../components/LandingPage'
import { useState } from 'react'

const Site = ({match,history}) => {
    const [state, setState] = useState({
    });
    const [landing, setlanding] = useState({});

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
                

            }
        })
    }
    
   

    return (
        <div>
           
           
            {getNavbar(state.navbar,color)}
            {getLandingPage(landing.id-1,color,landing.title,landing.slogan,landing.image,landing.about)}   
        </div>
    )
}

export default Site
