'use strict'

const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; //Add env port later

// app.use(bodyParser.urlencoded)

app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/../node_modules"));

// require('./middleware/middleware.js')(app, express);

app.listen(port);
console.log('Server listening on ' + port);
