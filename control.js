/**
 * Created by Elijah McClendon on 5/17/17.
 */
const noble = require('noble');

class Control {
  constructor(){

  }

  moveBackward(){
  
    return 'moveBackward' ;
  }

  moveForward(){
    return 'moveForward'
  }

  stopMovement(){
    return 'stopMovement'
  }

  turnLeft(){
    return 'turnLeft'
  }

  turnRight(){
    return 'turnRight'
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
