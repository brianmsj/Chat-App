import React from 'react';
import {connect} from 'react-redux';
import Users from './users';
import Rooms from './rooms';




class SideNav extends React.Component {
    // constructor(props) {
    //   super(props);
    //
    // }


    render() {

        return (
              <div className='side-nav'>
                <Rooms />
                <Users />
              </div>

        );
      }
    }


export default connect()(SideNav);
