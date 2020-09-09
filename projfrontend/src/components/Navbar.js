import React from "react";
import { colors } from "./Colors";
import { renderToString } from "react-dom/server";
import { CopyBlock, github } from "react-code-blocks";
const NavbarOne = ({ navbarcolor }) => {
  return (
    <nav
      style={{ backgroundColor: `${navbarcolor}` }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <a className="navbar-brand">Navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Pricing</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="http://example.com"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item">Action</a>
              <a className="dropdown-item">Another action</a>
              <a className="dropdown-item">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const NavbarTwo = ({ navbarcolor }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: `${navbarcolor}` }}
    >
      <a className="navbar-brand">Fixed navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

const NavbarThree = ({ navbarcolor }) => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: navbarcolor }}
    >
      <a class="navbar-brand" target="_blank">
        webOTG
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto py-4 py-md-0">
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a class="nav-link">Portfolio</a>
          </li>
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a class="nav-link">Agency</a>
          </li>
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </a>
          </li>
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a class="nav-link">Journal</a>
          </li>
          <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <a class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const navArray = [
    <NavbarOne navbarcolor={randomColor} />,
    <NavbarTwo navbarcolor={randomColor} />,
    <NavbarThree navbarcolor={randomColor} />,
  ];
  const navbar = navArray[Math.floor(Math.random() * navArray.length)];
  var beautify_html = require("js-beautify").html;
  const result = beautify_html(renderToString(navbar));
  return (
    <div>
      <div >{navbar}</div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-12 ">
            <CopyBlock
              text={result}
              language={"jsx"}
              showLineNumbers={true}
              theme={github}
              codeBlock
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getNavbar=(randomColor)=>{
  const navArray = [
    <NavbarOne navbarcolor={randomColor} />,
    <NavbarTwo navbarcolor={randomColor} />,
    <NavbarThree navbarcolor={randomColor} />,
  ];
  const navbar = navArray[Math.floor(Math.random() * navArray.length)];
  return navbar;
}
export default Navbar;
