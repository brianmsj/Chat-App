import React from 'react';
import {connect} from 'react-redux';




class Rooms extends React.Component {
    constructor(props) {
      super(props);

    }


    render() {

        return (
              <div className='room-container'>
                <h2 className='room-title'>Chat Rooms / Topics</h2>
              </div>


        );
      }
    }


export default connect()(Rooms);
