'use strict';

var apn = require('apn');

var options = {
  passphrase: '1234'
};

var apnConnection = new apn.Connection(options);

var myDevice = new apn.Device('88a36e12ff00481b75d0ceefaf0fa8140ea099e10567d05c3945a9b2724e9e72');

var note = new apn.Notification();

note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.badge = 3;
note.sound = "aurora.aiff";
note.alert = 'You have a new message';
note.payload = {'messageFrom': 'Teste'};

apnConnection.pushNotification(note, myDevice);
