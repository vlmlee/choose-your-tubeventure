import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import './reset.css';
import './index.css';
import Routes from './routes';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-91364332-10');

function logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(
    <Routes history={browserHistory} onUpdate={logPageView} />,
    document.getElementById('root')
);
