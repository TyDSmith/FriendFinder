var http = require("http");
var fs = require('fs');
var PORT = 8082;

var express = require('express');
var app = express();
var path = require('path');


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start our server
app.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
  });

app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/survey.html'));
  });