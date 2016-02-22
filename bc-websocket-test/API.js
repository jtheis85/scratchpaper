"use strict";

const API = {

    connect: (onMessageCallback, query) => {
        const url = "wss://push.planetside2.com/streaming?environment=ps2&service-id=s:example";
        var ws = new WebSocket(url);
        ws.onopen = () => {
            ws.send(query);
        };
        ws.onclose = () => {

        };
        ws.onmessage = (e) => {
            // Pass the received data along
            onMessageCallback(JSON.parse(e.data));
        };
        ws.onerror = () => {

        };
    }
};

module.exports = API;