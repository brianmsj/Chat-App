const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const {User} = require('./users');
const {Channel, Message} = require('./message-models');
const app = express();
const server = require('http').Server(app);
const PORT = process.env.PORT || 3001;
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL || 'mongodb://user:lansford@ds159988.mlab.com:59988/chat_db';
const io = require('socket.io')(server);


    io.on('connection', function(socket) {
    console.log(`Socket connected`);

   // Disconnec
});

// Messages endpoints-------------------------------------
app.get('/messages', function(req, res) {
  Message.find({}, {id: 1, channelID: 1, text: 1, user: 1, time: 1, _id: 0}, function(err, data) {
    if(err) {
      console.log(err);
      return res.status(500).json({msg: 'internal server error'});
    }
    res.json(data);
  });
});

app.get('/messages/:channel', function(req, res) {
  Message.find({channelID: req.params.channel}, {id: 1, channelID: 1, text: 1, user: 1, time: 1, _id: 0}, function(err, data) {
    if(err) {
      console.log(err);
      return res.status(500).json({msg: 'internal server error'});
    }
    res.json(data);
  });
})

app.post('/newmessage', function(req, res) {
  var newMessage = new Message(req.body);
  newMessage.save(function (err, data) {
    if(err) {
      console.log(err);
      return res.status(500).json({msg: 'internal server error'});
    }
    res.json(data);
  });
});
//Channels enpoints- ---------------------------------------------------

app.get('/channels', function(req, res) {

    Channel.find({},{name: 1, id:1, _id:0}, function(err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  });
app.post('/channels/new_channel', function(req, res) {
    var newChannel = new Channel(req.body);
    newChannel.save(function (err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      res.json(data);
    });
  });



// Serve the build client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});



function runServer(callback) {
         mongoose.connect(DATABASE_URL, err => {
            if(err && callback) {
              return callback(err);
        }

             server.listen(PORT, () => {
              console.log(`Listening on localhost: ${PORT}`);
            if (callback) {
              callback();
           }
        });
    });
}


if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer
};
