import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Profile from '../../pages/profile'

function App() {
  return (
    <Router>
      <Switch>
        {/* Route nya simpen disini: Misal: <Route exact path="/" component={Homepage} />
        <Route path="/all-movies-showing" component={AllMoviesShowing} /> */}
        <Route path="/profile" component={Profile} />

      </Switch>
    </Router>
  );
}

export default App;
