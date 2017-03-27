
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import store from './store';
import App from './components/app';


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <App title = "test" />
        ,document.getElementById('root')
    )
);
