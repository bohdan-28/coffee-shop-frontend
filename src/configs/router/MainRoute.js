import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../../pages/Home'
import ProductCustomer from '../../pages/ProductCust';
import PaymentDelivery from '../../pages/PaymentDelivery'
import Chat from '../../pages/Chat'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/product-cust/' component={ProductCustomer} />
        <Route path="/payment-delivery" component={PaymentDelivery} />
        <Route path="/chat" component={Chat} />

      </Switch>
    </Router>
  );
}

export default App;
