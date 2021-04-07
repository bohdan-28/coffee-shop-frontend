import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../../pages/Home'
import ProductCustomer from '../../pages/ProductCust';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/product-cust/' component={ProductCustomer} />
      
      </Switch>
    </Router>
  );
}

export default App;
