const express = require('express');
const app = express();
const control = require('./control.js');
const noble = require('noble');


app.get('/', function (req, res) {
  res.send('checking to see if localhost works');
});


/**
 * below are the routes that control the movement of the robot
 * the robot has 5 states (forward, back, left, right, and stop)
 */
app.get('/moveBackward', function (req, res){

    let controls = new control;
    controls = controls.moveBackward();
    res.send(controls);
    console.log('bot is moving backwards');
});

app.get('/moveForward', function (req, res){

    let controls = new control;
    controls = controls.moveForward();
    res.send(controls);
    console.log('bot is moving forward');
});

app.get('/turnLeft', function (req, res){

    let controls = new control;
    controls = controls.turnLeft();
    res.send(controls);
    console.log('bot is turning left');
});

app.get('/turnRight', function (req, res){

    let controls = new control;
    controls = controls.turnRight();
    res.send(controls);
    console.log('bot is turning right');
})
app.get('/stopMovement', function (req, res){

    let controls = new control;
    controls = controls.stopMovement();
    res.send(controls);
    console.log('bot is stopping movement');
});

/**
 * listens on localhost:3000 
 */

app.listen(3000, function () {
  console.log('running on port 3000');
});