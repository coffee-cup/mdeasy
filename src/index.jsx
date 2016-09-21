import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ga from 'react-ga';

import './scss/styles.scss';

// Pages
import App from './components/App.jsx';
import NotFound from './components/NotFound.jsx';

ga.initialize('UA-84545816-1');

function logPageView() {
    ga.pageview(window.location.pathname);
}

render((
    <Router history={browserHistory} onUpdate={logPageView}>
        <Route path="/" component={App} />

        <Route path="*" component={NotFound} />
    </Router>
), document.getElementById('app'));
