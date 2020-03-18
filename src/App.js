import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Coronavirus from './Components/Coronavirus'
const App = ()=>{
  return(
    <Router basename='corona'>
      <Switch>
        <Route exact path="/" component={Coronavirus} />
      </Switch>
    </Router>
  );
}

export default App;
