import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";

import Home from "./core/Home";
import Signup from "./user/SignUp";
import Dashboard from "./user/Dashboard";
import Signin from "./user/SignIn";
import Components from "./components/Components";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

import CreateSite from "./website/CreateSite";
import NotFound from "./components/NotFound";
import Site from './website/Site'
import UpdateSite from './website/UpdateSite'
import Contact from "./core/Contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/components" exact component={Components} />
        <Route path="/site" exact component={Site} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/components/navbar" exact component={Navbar} />
        <Route path="/components/landing" exact component={LandingPage} />
        <Route path="/notfound" exact component={NotFound} />

        <PrivateRoutes path="/user/dashboard" exact component={Dashboard} />
        <PrivateRoutes path="/user/website/create" exact component={CreateSite} />


        <PrivateRoutes path="/update/:id" exact component={UpdateSite} />


        <Route path="/:id" exact component={Site} />

      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
