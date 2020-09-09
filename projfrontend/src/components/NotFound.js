import React from "react";
import notFound from "../assets/notfound.gif";
const NotFound = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-12 text-center">
          <img src={notFound} alt="Notfound gif" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
