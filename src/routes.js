import React from 'react';
import { Router, Route } from 'react-router';

import App from './App.js';
import Edit from './components/Edit.js';
import View from './components/View.js';
import Create from './components/Create.js';
import NotFound from './components/NotFound.js';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/view/:id" component={View} />
        <Route path="/create/:id" component={Create} />
        <Route path="*" component={NotFound} />
    </Router>
);

export default Routes;
