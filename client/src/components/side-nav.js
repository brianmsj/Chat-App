import React from 'react';
import {connect} from 'react-redux';
import Users from './users';
import Channel from './channels';





class SideNav extends React.Component {
    // constructor(props) {
    //   super(props);
    //
    // }


    render() {

        return (
              <div className='side-nav'>
                <Users />
              </div>

        );
      }
    }


export default connect()(SideNav);
