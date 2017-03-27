import React from 'react';
import {connect} from 'react-redux';
import Home from './home';

class App extends React.Component {


    render() {

        return (

            <div className="app">
            <Home />
            </div>
        );
    }
}


export default connect()(App);
