
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/app';


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
      <Provider store={store}>
         <App title = "test" />
      </Provider>
        ,document.getElementById('root')
    )
);
