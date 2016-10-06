'use strict';

var http = require('http');
var WebSocket = require('ws');

var ws = new WebSocket('wss://push.planetside2.com/streaming?environment=ps2&service-id=s:Sq7FtUG1mfsn');

var messages = [];

ws.onopen = function () {
    ws.send('{"service":"event","action":"subscribe","worlds":["1"],"eventNames":["PlayerLogin","PlayerLogout"]}');
};

ws.onmessage = function (e) {
    messages.push(JSON.parse(e.data));
};

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end(messages.map(function(message){return JSON.stringify(message);}).join('\n'));
}).listen(8000);
