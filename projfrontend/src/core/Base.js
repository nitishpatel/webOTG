import React from "react";
import Menu from "./Menu";

const Base = ({ title = "My Title", description = "My Description" , children }) => {
  return (
    <div>
      <Menu/>
    <div className="container pt-2">
      <div className="jumbotron  text-center theme-beige">
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
      {children}
    </div>
    </div>
  );
};

export default Base;
