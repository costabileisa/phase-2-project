// react dependencies
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

// import components
import NavBar from "./NavBar";
import Home from "./Home";
import DogImages from "./DogImages";
import Breeds from "./Breeds";
import Activities from "./Activities";
import AddActivity from "./AddActivity";

function App() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/activities")
    .then(res => res.json())
    .then(data => setActivities(data))
  }, [])

  function onFormSubmit(data) {
    setActivities([...activities, data])
  }

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
          <Activities activities={activities} />
        </Route>
        <Route exact path="/activities/add">
          <AddActivity onFormSubmit={onFormSubmit}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
