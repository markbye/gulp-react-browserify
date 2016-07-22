import React from 'react';
import Router from 'react-router';
var {DefaultRoute, Route} = Router;

import Layout from './Layout';
import Home from '../Views/Home';
import Dashboard from '../Views/Dashboard';
import Dash from '../Views/Dash';

var routes = (
  <Route name="app" path="/" handler={Layout}>
    <Route name="dashboard" handler={Dashboard}/>
    <Route name="dash" handler={Dash}/>

    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = routes;
