import React from 'react';
import { Router, Route } from 'react-router';

import App from './App.js';
import Edit from './components/container/Edit.js';
import View from './components/container/View.js';
import Create from './components/container/Create.js';
import NotFound from './components/presentational/NotFound.js';
import Footer from './components/presentational/Footer.js';

const Routes = (props) => (
    <section>
        <Router {...props}>
            <Route path="/" component={App} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/view/:id" component={View} />
            <Route path="/create/:id" component={Create} />
            <Route path="*" component={NotFound} />
        </Router>
        <Footer />
    </section>
);

export default Routes;
