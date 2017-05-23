const express = require('express');
const app = express();
const control = require('./control.js');
const noble = require('noble');
const controls = new control();


app.get('/', function (req, res) {
  res.send('checking to see if localhost works');
});

app.use(express.static(__dirname));
/**
 * when moveBackward is accessed from the URL the robot will move backwards
 */
app.get('/moveBackward', function (req, res){  //express get request
  
    let p = controls.moveBackward();  //calls the moveBackward method in controls
    p.then((successMessage) => {      //executes the promise returned from moveBackward
        console.log(successMessage);  //successMessage contains the succesfully resolved promise
        res.send({ status:0, action: 'move backwards'});  // sends a JSON object to the html

    }).catch((error) => {   // if the promise fails it calls this function
        throw 'move backwards promise failed';  // throws an exception
    })
});

app.get('/moveForward', function (req, res){
  
    let p = controls.moveForward();
    p.then((successMessage) => {
        console.log(successMessage);
        res.send({ status:0, action: 'move forward'});

    }).catch((error) => {
        throw 'move forwards promise failed';
    })  
});

app.get('/turnLeft', function (req, res){
  
    let p = controls.turnLeft();
    p.then((successMessage) => {
        console.log(successMessage);
        res.send({status: 0, action: 'turn left'});
    }).catch((error) => {
        throw "turn left promise errored";
    })
});

app.get('/turnRight', function (req, res){

    
    let p = controls.turnRight();
    p.then((successMessage) => {
        console.log(successMessage);
        res.send({ status:0, action: 'turns right'});

    }).catch((error) => {
        throw "turn right promise errored";
    })
})

app.get('/stopMovement', function (req, res){

    let p = controls.stopMovement();
    p.then((successMessage) => {
        console.log(successMessage);
        res.send({ status:0, action: 'stops movement'});

    }).catch((error) => {
        throw "stop movement promise error";
    })
});

app.get('/light/green/on', function (req, res){  //express get request

  let p = controls.light('G', 1);  //calls the moveBackward method in controls
  p.then((successMessage) => {      //executes the promise returned from moveBackward
    console.log(successMessage);  //successMessage contains the succesfully resolved promise
    res.send({ status:0, action: 'green light on'});  // sends a JSON object to the html

  }).catch((error) => {   // if the promise fails it calls this function
    throw 'move backwards promise failed';  // throws an exception
  })
});

app.get('/light/green/off', function (req, res){  //express get request

  let p = controls.light('G', 0);  //calls the moveBackward method in controls
  p.then((successMessage) => {      //executes the promise returned from moveBackward
    console.log(successMessage);  //successMessage contains the succesfully resolved promise
    res.send({ status:0, action: 'move backwards'});  // sends a JSON object to the html

  }).catch((error) => {   // if the promise fails it calls this function
    throw 'move backwards promise failed';  // throws an exception
  })
});

app.get('/light/blue/on', function (req, res){  //express get request

  let p = controls.light('B', 0);  //calls the moveBackward method in controls
  p.then((successMessage) => {      //executes the promise returned from moveBackward
    console.log(successMessage);  //successMessage contains the succesfully resolved promise
    res.send({ status:0, action: 'move backwards'});  // sends a JSON object to the html

  }).catch((error) => {   // if the promise fails it calls this function
    throw 'move backwards promise failed';  // throws an exception
  })
});

app.get('/light/blue/off', function (req, res){  //express get request

  let p = controls.light('B', 0);  //calls the moveBackward method in controls
  p.then((successMessage) => {      //executes the promise returned from moveBackward
    console.log(successMessage);  //successMessage contains the succesfully resolved promise
    res.send({ status:0, action: 'move backwards'});  // sends a JSON object to the html

  }).catch((error) => {   // if the promise fails it calls this function
    throw 'move backwards promise failed';  // throws an exception
  })
});


/**
 * listens on localhost:3000 
 */

app.listen(3000, function () {
  console.log('running on port 3000');
});