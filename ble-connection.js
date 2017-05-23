
let noble = require('noble');

export default class BT {
  constructor(){
    this.nobleState = false;
    this.connected = false;
    this.peripheral = {};
    this.char = undefined;
    this.id = '7ea8eb7239f64713831524a58aae8df5';
  }

  _checkState(){
    let vm = this;
    if(this.nobleState){
      console.log('checkstate');
      return Promise.resolve();
    }
    return new Promise ((resolve, reject) => {

      noble.on('stateChange', function(state) {
        if (state === 'poweredOn') {
          noble.startScanning();
          vm.nobleState = true;
          resolve('poweredOn');
        } else {
          noble.stopScanning();
          resolve('not poweredOn');
        }
      })
    });
  }

  conn(id){
    console.log('conn');
    if(this.connected){
      return Promise.resolve();
    }
    return this._checkState().then(() =>{
      return new Promise ((resolve, reject) => {
        noble.on('discover', (peripheral) => {
          console.log('conn1', id);
          if (peripheral.id === id ){
            console.log('conn1');
            noble.stopScanning();
            this.peripheral = peripheral;
            this.peripheral.connect((err) => {
              //put error in
              this.connected = true;
              resolve(console.log('connected to ' + id))
            });
          }
          console.log();
        });
      });
    });
  }

  disconn(){
    return this._checkState().then(() => {
      return new Promise ((resolve, reject) => {
        this.peripheral = peripheral;
        this.peripheral.disconnect((err) => {
          if(err){return reject(err)}
          resolve(console.log('disconnecting from ' + id))
        });
        console.log();
      });
    });
  }

  send(color) {
    console.log('here', this);
    let vm = this;
    if (this.char) {
      return new Promise((resolve, reject) => {
        vm.char.discoverCharacteristics(['FF01'], (error, char) => {
          console.log('here2');
          let blueOff = Buffer.from(color, 'UTF-8');
          console.log(blueOff);
          vm.char[0].write(blueOff, false);
          resolve();
        });
      });
    }

    return this._checkState().then(() => {
      console.log('Sasa');
      return new Promise((resolve, reject) => {
        vm.peripheral.discoverServices(['00FF'], (err, ser) => {
          console.log('here6');
          let ff01 = 'ff01';

          vm.char = ser[0];
          console.log(ser[0]);
          vm.char.discoverCharacteristics(['FF01'], (error, char) => {

            let blueOff = Buffer.from(color, 'UTF-8');
            console.log(blueOff.toString(), 'someText');
            char[0].write(blueOff, false);
            resolve();
          });
        });
      });
    });
  }
}


// let bt = new BT;
// bt.conn('7ea8eb7239f64713831524a58aae8df5').then(() => {
//   bt.send('MF');
// });



