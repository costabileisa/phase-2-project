// react dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

// import components
import NavBar from "./NavBar";
import Home from "./Home";
import DogImages from "./DogImages";
import Breeds from "./Breeds";
import Activities from "./Activities";
import AddActivity from "./AddActivity";

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
        <Route exact path="/breeds">
          <Breeds />
        </Route>
        <Route exact path="/activities">
          <Activities />
        </Route>
        <Route exact path="/activities/add">
          <AddActivity />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
