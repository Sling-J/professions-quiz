import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom'

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Features from "../pages/Features/Features";
import Test from "../pages/Test/Test";

const Root = () => (
  <Switch>
    <Route
      exact
      path='/'
      render={() => <Redirect to='/home'/>}
    />
    <Route
      exact
      path='/home'
      component={Home}
    />
    <Route
      exact
      path='/about-us'
      component={About}
    />
    <Route
      exact
      path='/features'
      component={Features}
    />
    <Route
      exact
      path='/test'
      component={Test}
    />
  </Switch>
);

export default Root;