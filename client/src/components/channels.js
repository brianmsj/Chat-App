import React from 'react';
import {connect} from 'react-redux';




class Channel extends React.Component {
    constructor(props) {
      super(props);

    }


    render() {

        return (
              <div className='channel-container'>
                <h2 className='channel-title'>Users Online</h2>
              </div>

        );
      }
    }


export default connect()(Channel);
