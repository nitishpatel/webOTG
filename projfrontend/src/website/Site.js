import React, { useEffect } from 'react'
import { getSite } from './helper/websiteapicalls'
import { getNavbar } from '../components/Navbar'
import { getLandingPage } from '../components/LandingPage'
import { colors } from '../components/Colors'
import { useState } from 'react'

import loadinggif from '../assets/loading.gif'
const Site = ({match,history}) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const [state, setState] = useState({
    });
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        const url = match.params.id;
        console.log(url)
        getSiteDetail(url)
    }, [])
    const getSiteDetail = (url)=>{
        getSite(url)
        .then((data)=>{
            if(data.length ===0){
                setTimeout(window.location.replace("/notfound"), 1000);
                

            }else{
                setState(data[0]);
                setState({...state})
                setTimeout(setLoading(false),2000);

            }
        })
    }
    return (
        <div>
            {loading && (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <img src={loadinggif} alt=""/>
                        </div>
                    </div>
                </div>
            )}
                
        </div>
    )
}

export default Site
