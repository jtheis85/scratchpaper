'use strict';

var WebSocket = require('ws');

var ws = new WebSocket('wss://push.planetside2.com/streaming?environment=ps2&service-id=s:Sq7FtUG1mfsn');

ws.onopen = function () {
    ws.send('{"service":"event","action":"subscribe","worlds":["1"],"eventNames":["PlayerLogin","PlayerLogout"]}');
};

ws.onmessage = function (e) {
    console.log(JSON.parse(e.data));
};