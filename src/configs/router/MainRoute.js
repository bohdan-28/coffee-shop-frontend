import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../../pages/Home'
import ProductCustomer from '../../pages/ProductCust';
import ProductDetail from "../../pages/ProductDetail";
import Profile from '../../pages/Profile'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/product-cust/' component={ProductCustomer} />
        <Route path='/product-detail/' component={ProductDetail} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
