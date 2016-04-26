"use strict";

var Firebase = require('firebase');

var firebaseRef = new Firebase('https://sizzling-fire-1352.firebaseio.com');

firebaseRef.set({ lastLogin: Date.now()});

firebaseRef.child('lastLogin').on('value', function(snapshot) {
    alert(snapshot.val());
});