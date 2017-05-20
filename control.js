/**
 * Created by Elijah McClendon on 5/17/17.
 */
const noble = require('noble');

class Control {
  constructor(){

  }

  moveBackward(){
  let promise = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("my promise is working correctly");
    }, 3000)    
  })
  return promise;
  }

  moveForward(){
    let promise = new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve("my promise is working correctly");
      }, 2000)
    })
    return promise;
  }

  stopMovement(){
    let promise = new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve("my promise is working correctly");
      }, 2000)
    })
    return promise;
  }

  turnLeft(){
    let promise = new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve("my promise is working correctly");
      }, 2000)
    })
    return promise;
  }

  turnRight(){
    let promise = new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve("my promise is working correctly");
      }, 2000)
    })
    return promise;
  }

  scanForDevices(){
    noble.on('stateChange', function(state) {
      if (state === 'poweredOn') {
        noble.startScanning();
      } else {
        noble.stopScanning();
      }
    });
  }

}

module.exports = Control;
