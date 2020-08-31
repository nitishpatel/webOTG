import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";

import Home from "./core/Home";
import Signup from "./user/SignUp";
import Dashboard from "./user/Dashboard";
import Signin from "./user/SignIn";
import Components from "./components/Components";
import Navbar from "./components/Navbar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/components" exact component={Components} />
        <Route path="/components/navbar" exact component={Navbar} />

        <PrivateRoutes path="/user/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
