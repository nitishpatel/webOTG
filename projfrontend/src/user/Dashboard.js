import React from 'react'
import Base from '../core/Base'
import profile from '../profile.png'
import { isAuthenticated } from '../auth/helper'
const Dashboard = () => {
    
    const {user} = isAuthenticated()

    const userphoto = ()=>{
        return (
            <div >
                <img src={profile} style={{maxWidth:200,maxHeight:200}} alt="Profile Of User"/>

                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                </div>
        )
    }
    return (
        <Base title="User Dashboard" description="Manage Your Websites">
            <div className="row">
                <div className="col-lg-4 text-center">
                    <h3>Profile</h3>
                    {userphoto()}
                        
                </div>
                <div className="col-lg-6">
                    <h3>Manage Your Sites</h3>
                    <button className="btn btn-lg theme-orange">Add New Site</button>
                </div>
            </div>
        </Base>
    )
}

export default Dashboard
