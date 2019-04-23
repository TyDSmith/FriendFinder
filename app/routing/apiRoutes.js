var http = require("http");
var fs = require('fs');
var PORT = 8082;

var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start our server
app.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

app.get('/api/friends', function(req, res) {
    res.sendFile(path.join(__dirname,'../data/friends.js'));
  });

app.post('/api/friends', function(req, res) {
  var name = req.params.name;
  var photo = req.params.photo;
  var scores = req.params.scores;

  console.log(name,photo,scores);
});