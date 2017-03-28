import React from 'react';
import {connect} from 'react-redux';




class Message extends React.Component {
    constructor(props) {
      super(props);

    }


    render() {

        return (
              <div className='message-container'>
                <h2 className='message-title'>Hi, type your message</h2>
              <div className='message-textbox'>
                <textarea className='message-entry' />
              </div>
              <div>
                <button type='submit' className='chat-submit'>Send Message</button>
              </div>
              </div>

        );
      }
    }


export default connect()(Message);
