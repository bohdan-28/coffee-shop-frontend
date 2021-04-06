import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* Route nya simpen disini: Misal: <Route exact path="/" component={Homepage} />
        <Route path="/all-movies-showing" component={AllMoviesShowing} /> */}
      </Switch>
    </Router>
  );
}

export default App;
