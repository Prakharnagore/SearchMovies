import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route path="/movies/:id" component={Movie} />
    </Switch>
  );
}

export default App;
