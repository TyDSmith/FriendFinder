var friends = require("../data/friends");

// var http = require("http");
// var fs = require('fs');
// var PORT = 8082;

// var express = require('express');
// var app = express();
// var path = require('path');

// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Start our server
// app.listen(PORT, function() {
//   // Callback triggered when server is successfully listening. Hurray!
//   console.log("Server listening on: http://localhost:" + PORT);
// });

module.exports = function(app){
  app.get('/api/friends', function(req, res) {
      res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
      var totalDifference = 0;
      var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
      }
  var userData= req.body;
  var userName = userData.name;
  var userScores = userData.scores;

  var b = userScores.map(function(item){

    return parseInt(item,10);
  })

  userData = {
    name: req.body.name,
    photo: req.body.photo,
    scores: b
  };

  console.log("name: " + userName);
  console.log("User score: " + userScores);

  var sum = b.reduce((a, b) => a + b, 0);
  console.log("sum of users score: " + sum);
  console.log("Best Match Friend: " + bestMatch.friendDifference);
  console.log("-----------------");
    
  for (var i = 0; i < friends.length; i++){
    console.log(friends[i].name);
    totalDifference = 0;
    console.log("Total Diff " + totalDifference);
    console.log("Best match friend diff " + bestMatch.friendDifference);

    var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
    console.log("total friend score " + bfriendScore);
    totalDifference += Math.abs(sum = bfriendScore);
    console.log("------------");

    if (totalDifference <= bestMatch.friendDifference){
      bestMatch.name = friends[i].name;
      bestMatch.photo = friends[i].photo;
      bestMatch.friendDifference = totalDifference;
    }
    console.log(totalDifference + "Total Difference");
  }
  
  console.log(bestMatch);
  friends.push(userData);
  res.json(bestMatch);

  });
};

