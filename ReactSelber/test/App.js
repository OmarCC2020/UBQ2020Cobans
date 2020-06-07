import React, {Component} from 'react';
import { Beleuchtung } from "./Beleuchtung";
import { Navigation } from "./Navigation";
import { Home } from "./Home";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <BrowserRouter>
    <Navigation/>
    <div className="container">
      <Switch>
        <Route path='/Beleuchtung' component={Beleuchtung} />
        <Route path='/Home' component={Home} />
        <Redirect to='/Home' component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;