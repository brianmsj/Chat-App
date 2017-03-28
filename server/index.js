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
