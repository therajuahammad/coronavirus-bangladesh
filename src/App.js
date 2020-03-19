import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Coronavirus from './Components/Coronavirus'
const App = ()=>{
  return(
    <Router>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL + '/'}`} component={Coronavirus} />
      </Switch>
    </Router>
  );
}

export default App;
