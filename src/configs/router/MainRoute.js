import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductCustomer from "../../pages/ProductCust/index"

function App() {
  return (
    <Router>
      <Switch>
        {/* Route nya simpen disini: Misal: <Route exact path="/" component={Homepage} />
        <Route path="/all-movies-showing" component={AllMoviesShowing} /> */}
         <Route path='/product-cust/' component={ProductCustomer} />
      </Switch>
    </Router>
  );
}

export default App;
