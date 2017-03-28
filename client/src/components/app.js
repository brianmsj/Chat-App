import React from 'react';
import {connect} from 'react-redux';
import Board from './board';

class App extends React.Component {


    render() {

        return (

            <div className="app">
              <Board />
            </div>
        );
    }
}


export default connect()(App);
