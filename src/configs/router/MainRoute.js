import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRoute from "./module/PublicRoute";
import PrivateRoute from "./module/PrivateRoute";

import Home from "../../pages/Home";
import History from "../../pages/History";
import ProductCustomer from "../../pages/ProductCust";
import ProductDetail from "../../pages/ProductDetail";
import Profile from "../../pages/Profile";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/sign-up" component={SignUp} />
        <PublicRoute path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/product-detail" component={ProductDetail} />
        <PrivateRoute path="/product-cust/" component={ProductCustomer} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/history" component={History} />

      </Switch>
    </Router >
  );
}

export default App;
