import React from 'react';
import {connect} from 'react-redux';




class Users extends React.Component {
    constructor(props) {
      super(props);

    }


    render() {

        return (
              <div className='Users-container'>
                <h2 className='user-title'>Users Online</h2>
              </div>

        );
      }
    }


export default connect()(Users);
