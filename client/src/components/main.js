import React from 'react';
import {connect} from 'react-redux';
import Message from './message';
import Rooms from './rooms';




class Main extends React.Component {
    // constructor(props) {
    //   super(props);
    //
    // }


    render() {

        return (
              <div className='side-nav'>
                <Rooms />
                <Message />
              </div>

        );
      }
    }


export default connect()(Main);
