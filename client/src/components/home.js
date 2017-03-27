import React from 'react';
import {connect} from 'react-redux';
import io from 'socket.io';

class Home extends React.Component {

   componentDidMount() {
     let socket=io.connect();
   }

    render() {

        return (

          <div className="container">
            <div className="col-md-4">
              <div className='well'>
                <h3>Online Users</h3>
                <ul className="listgroup"></ul>
              </div>
            </div>
            <div className='col-md-8'>
              <div className="chat">
                <form className="messageForm">
                  <div className="form-group">
                    <label>Enter Message</label>
                    <textarea className="form-control"></textarea>
                    <br />
                    <input type="submit" className="btn-primary" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }
    }


export default connect()(Home);
