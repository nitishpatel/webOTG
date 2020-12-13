import React from 'react'

const SocialTemplates = ({color,social}) => {
    return (
        <div className="container text-center"> 
        <h1>Contact</h1>
            <div >
            {social.facebook && (
            <a href={social.facebook} className="p-4"><i style={{color:color}} class="fa-2x fab fa-facebook"></i></a>

            )}
            {social.instagram && (
            <a href={social.instagram} className="p-4"><i style={{color:color}} class="fa-2x fab fa-instagram"></i></a>

            )}
            {social.github && (
            <a href={social.github} className="p-4"><i style={{color:color}} class="fa-2x fab fa-github"></i></a>

            )}
            {social.twitter && (
            <a href={social.twitter} className="p-4"><i style={{color:color}} class="fa-2x fab fa-twitter"></i></a>

            )}
            
            {social.linkedin && (
            <a href={social.linkedin} className="p-4"><i style={{color:color}} class="fa-2x fab fa-linkedin"></i></a>

            )}
            {social.dribble && (
            <a href={social.dribble} className="p-4"><i style={{color:color}} class="fa-2x fab fa-dribbble"></i></a>

            )}
            {social.wattapad && (
            <a href={social.wattapad} className="p-4"><i style={{color:color}} class="fa-2x fab fa-google-wallet"></i></a>

            )}
            
            </div>
            
            
            
            
        </div>
    )
}

export default SocialTemplates
