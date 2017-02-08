import React from 'react';
import { Router, Route } from 'react-router';

import App from './App.js';
import Edit from './components/container/Edit.js';
import View from './components/container/View.js';
import Create from './components/container/Create.js';
import FAQ from './components/presentational/FAQ.js';
import NotFound from './components/presentational/NotFound.js';

const Routes = (props) => (
    <section>
        <Router {...props}>
            <Route path="/" component={App} />
            <Route path="/create/:id" component={(params) => (<Create params={params.routeParams.id} pageId="create" />)} />
            <Route path="/edit/:id" component={(params) => (<Create params={params.routeParams.id} pageId="edit" />)} />
            <Route path="/view/:id" component={View} />
            <Route path="/faq" component={FAQ} />
            <Route path="*" component={NotFound} />
        </Router>
    </section>
);

export default Routes;
