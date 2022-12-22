// react dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// import components
import NavBar from "./NavBar";
import Home from "./Home";
import DogImages from "./DogImages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/images">
          <DogImages />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
