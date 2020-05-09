import React from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.component";

import { Route, Switch, Link } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
    <Link to="/">HomePage</Link>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
