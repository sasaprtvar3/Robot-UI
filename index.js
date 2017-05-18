const express = require('express');
const index = express();
import control from 'Control.js';  //ES6 import replaces the require statement


index.get('/', function (req, res) {
  res.send('checking to see if localhost works');
})


/**
 * below are the routes that control the movement of the robot
 * the robot has 5 states (forward, back, left, right, and stop)
 */
index.get('/back', function (req, res){
    res.send('move bot backwards');
    console.log('bot is moving backwards');
})
index.get('/forward', function (req, res){
    res.send('move bot forward');
    console.log('bot is moving forward');
})

index.get('/left', function (req, res){
    res.send('turn bot left');
    console.log('bot is turning left');
})

index.get('/right', function (req, res){
    res.send('turn bot right');
    console.log('bot is turning right');
})
index.get('/stop', function (req, res){
    res.send('the bot is stopped');
    console.log('bot is not moving');
})

/**
 * listens on localhost:3000 
 */

index.listen(3000, function () {
  console.log('running on port 3000');
})