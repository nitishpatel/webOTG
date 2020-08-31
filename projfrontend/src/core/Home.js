import React from "react";
import Base from "./Base";
import parse from 'html-react-parser';
const Home = () => {
  const title = "home";
  const heading = ()=>{
        
    return parse(`<h1>Hello World ${title}</h1>`)
  }
  return (
      
      <Base title="HomePage" description="Create Websites Without Coding">
        <h1>THis is Home</h1>
        {heading()}

      </Base>
  );
};

export default Home;
