import React from 'react';
import {connect} from 'react-redux';
import Chat from './chat';
import Message from './message';
import SideNav from './side-nav';
import {} from '../actions/action';


class Board extends React.Component {

    render() {

        return (
              <div className='board'>
                <SideNav />
                <Message />
              </div>

        );
      }
    }


export default connect()(Board);
