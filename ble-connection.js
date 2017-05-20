/**
 * Created by Elijah McClendon on 5/17/17.
 */
var noble = require('noble');

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {
  console.log('peripheral discovered (' + peripheral.id +
      ' with address <' + peripheral.address +  ', ' + peripheral.addressType + '>,' +
      ' connectable ' + peripheral.connectable + ',' +
      ' RSSI ' + peripheral.rssi + ':');
  console.log('\thello my local name is:');
  console.log('\t\t' + peripheral.advertisement.localName);
  console.log('\tcan I interest you in any of the following advertised services:');
  console.log('\t\t' + JSON.stringify(peripheral.advertisement.serviceUuids));

  var serviceData = peripheral.advertisement.serviceData;
  if (serviceData && serviceData.length) {
    console.log('\there is my service data:');
    for (var i in serviceData) {
      console.log('\t\t' + JSON.stringify(serviceData[i].uuid) + ': ' + JSON.stringify(serviceData[i].data.toString('hex')));
    }
  }
  if (peripheral.advertisement.manufacturerData) {
    console.log('\there is my manufacturer data:');
    console.log('\t\t' + JSON.stringify(peripheral.advertisement.manufacturerData.toString('hex')));
  }
  if (peripheral.advertisement.txPowerLevel !== undefined) {
    console.log('\tmy TX power level is:');
    console.log('\t\t' + peripheral.advertisement.txPowerLevel);
  }

  if (peripheral.id === 'adddd106ea4b44119f8453ac1b655043'){
    noble.stopScanning();

    console.log('hey hey');
    var p = peripheral;

    p.connect(function(err){
      // console.log(err);
      // console.log('hey we made it');
      p.discoverServices([],  function(err, ser){
        console.log(err);
        console.log(ser);
      });
    });
  }


  console.log();
});

