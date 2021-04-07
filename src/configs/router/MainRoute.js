import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRoute from "./module/PublicRoute";
import PrivateRoute from "./module/PrivateRoute";

import Home from "../../pages/home";
import ProductCustomer from "../../pages/ProductCust";
import Profile from "../../pages/profile";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/sign-up" component={SignUp} />
        <PublicRoute path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/product-cust/" component={ProductCustomer} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
