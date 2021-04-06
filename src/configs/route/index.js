import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCustomer from '../../pages/ProductCust';

function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route path='/product-cust/' component={ProductCustomer} />
            </Switch>
        </Router>
    )
}

export default MainRouter
