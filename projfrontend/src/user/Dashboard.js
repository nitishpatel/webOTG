import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { getUserWebsite ,deleteUserWebsite} from "./helper/userapicalls";

const Dashboard = () => {
  const [website, setWebsite] = useState([]);
  const { token,user } = isAuthenticated();

  useEffect(() => {
    const userId = user.id;
    getUserWebsite(userId)
      .then((data) => {
        if (data) {
          setWebsite(data);
        }
      })
      .catch((err) => console.log(err));
  },[user.id]);
 
  const getWebsite = () => {
    const userId = user.id;
    getUserWebsite(userId)
      .then((data) => {
        if (data) {
          setWebsite(data);
        }
      })
      .catch((err) => console.log(err));
  };
  const deleteWebsite = (id) => {
    console.log(token);
    deleteUserWebsite(id,token)
      .then((data) => {
        if (data) {
          getWebsite();
        }
      })
      .catch((err) => console.log(err));
  };
  const userphoto = () => {
    return (
      <div>
        <div className="d-flex justify-content-center circular h-100">
          <div className="image_outer_container">
            <div className="green_icon"></div>
            <div className="image_inner_container">
              {/* <img maxWidth="200" maxHeight="200" src={profile} /> */}
              <img alt="user " src="https://thumbs.dreamstime.com/b/solid-purple-gradient-user-icon-web-mobile-design-interface-ui-ux-developer-app-137467998.jpg" />
            </div>
          </div>
        </div>

        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  };
  const usersites = () => {
    return (
      <div>
        {website.length !== 0 &&
          website.map((web, index) => {
            return (
              <div className="card mt-2 mb-1" key={index}>
                <h3 className="card-header">{web.url}</h3>
                <div className="card-body">
                  <Link
                    to={`/${web.url}`}
                    className="text-white btn ml-2 mr-2"
                    style={{ backgroundColor: "#6a5acd" }}
                  >
                    View Site
                  </Link>
                  <Link
                    to={`/update/${web.url}`}
                    className=" btn ml-2 mr-2 text-white"
                    style={{ backgroundColor: "#9966cc" }}
                  >
                    Update Site
                  </Link>
                  <button className="btn-danger btn ml-2 mr-2" onClick={()=>{deleteWebsite(web.id)}}>
                    Delete Site
                  </button>
                </div>
              </div>
            );
          })}
        {website.length === 0 && (
          <h5 className="alert alert-warning">
            You don't have any sites , Create One
          </h5>
        )}
      </div>
    );
  };
  return (
    <Base title="User Dashboard" description="Manage Your Websites">
      <div className="row">
        <div className="col-lg-4 text-center">
          <h3>Profile</h3>
          {userphoto()}
        </div>
        <div className="col-lg-6">
          <h3>Manage Your Sites</h3>
          {usersites()}
          <Link to="/user/website/create" className="btn btn-lg theme-orange">
            {" "}
            Add New Site
          </Link>
        </div>
      </div>
    </Base>
  );
};

export default Dashboard;
