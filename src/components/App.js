// react dependencies
import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { EnergyContext } from "../context/energy";

// import components
import NavBar from "./NavBar";
import Home from "./Home";
import DogImages from "./images/DogImages";
import Breeds from "./breeds/Breeds";
import Activities from "./activities/Activities";
import AddActivity from "./activities/AddActivity";

function App() {
  const [activities, setActivities] = useState([]);
  const { energy } = useContext(EnergyContext);


  useEffect(() => {
    fetch("http://localhost:4000/activities")
    .then(res => res.json())
    .then(data => setActivities(data))
  }, [])

  function onFormSubmit(data) {
    setActivities([...activities, data])
  }

  const activitiesToDisplay = activities.filter(
      activity => activity.energy === energy.toLowerCase() || energy === "-"
    )

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
          <Activities activities={activitiesToDisplay} />
        </Route>
        <Route exact path="/activities/add">
          <AddActivity onFormSubmit={onFormSubmit}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
