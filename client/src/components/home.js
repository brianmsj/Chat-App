import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {


    render() {

        return (

            <div className="home">
            <h1>TEST</h1>
            </div>
        );
    }
}


export default connect()(Home);
