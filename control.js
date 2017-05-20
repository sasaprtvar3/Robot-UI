import ble from './ble-connection';
const noble = require('noble');


class Control {
  constructor(){
    this.ble = new ble();
    this.ble.conn('7ea8eb7239f64713831524a58aae8df5').then(() => {
      console.log('anything');
    });
  }

  moveBackward(){
    return this.ble.send('MB');
  }

  moveForward(){
    return this.ble.send('MF');
  }

  stopMovement(){
    return this.ble.send('MS');
  }

  turnLeft(){
    return this.ble.send('ML');
  }

  turnRight(){
    return this.ble.send('MR');
  }

  light(color, off){
    return this.ble.send('L' + color.toUpperCase() + (!off ? '0':'1'));
  }

}

module.exports = Control;
