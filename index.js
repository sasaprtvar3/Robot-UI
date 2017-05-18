const express = require('express');
const app = express();
const control = require('./control.js');  //ES6 import replaces the require statement


app.get('/', function (req, res) {
  res.send('checking to see if localhost works');
})


/**
 * below are the routes that control the movement of the robot
 * the robot has 5 states (forward, back, left, right, and stop)
 */
app.get('/back', function (req, res){

    res.send('move bot backwards');
    console.log('bot is moving backwards');
})
app.get('/forward', function (req, res){
    res.send('move bot forward');
    console.log('bot is moving forward');
})

app.get('/left', function (req, res){
    res.send('turn bot left');
    console.log('bot is turning left');
})

app.get('/right', function (req, res){
    res.send('turn bot right');
    console.log('bot is turning right');
})
app.get('/stop', function (req, res){
    res.send('the bot is stopped');
    console.log('bot is not moving');
})

/**
 * listens on localhost:3000 
 */

app.listen(3000, function () {
  console.log('running on port 3000');
})