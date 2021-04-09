import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PublicRoute from "./module/PublicRoute";
import PrivateRoute from "./module/PrivateRoute";

import PaymentDelivery from "../../pages/PaymentDelivery";
import Chat from "../../pages/Chat";
import Home from "../../pages/Home";
import History from "../../pages/History";
import ProductCustomer from "../../pages/ProductCust";
import ProductDetail from "../../pages/ProductDetail";
import Profile from "../../pages/Profile";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";
import ForgotPassword from "../../pages/ForgotPassword";

import NewProduct from "../../pages/NewProduct"

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/sign-up" component={SignUp} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/payment-delivery" component={PaymentDelivery} />
        <PrivateRoute path="/chat" component={Chat} />
        <PrivateRoute path="/product-detail/:id" component={ProductDetail} />
        <PrivateRoute path="/product-cust/" component={ProductCustomer} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/history" component={History} />

        {/* admin */}
        <PrivateRoute path="/new-product" component={NewProduct} />
      </Switch>
    </Router>
  );
}

export default App;
