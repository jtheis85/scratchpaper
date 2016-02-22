"use strict";


const React    = require('react');
const ReactDOM = require('react-dom');
const API      = require('./API.js');

var messages = [];

const Render = () => {
    ReactDOM.render(
        <div>
            {messages.map((message) => {
                return <h1>{message}</h1>;
            })}
        </div>,
        document.getElementById('app-root')
    );
};

API.connect((data) => {
    // When a message is received, update the data and re-render
    if(data.payload && data.payload.character_id && data.payload.character_id === "5428013610422131937") {
        messages.push('Joe ' + (data.payload.event_name === 'PlayerLogin' ? 'logged in!' : 'logged out!'));
        Render();
    }
}, '{"service":"event","action":"subscribe","worlds":["17"],"eventNames":["PlayerLogin","PlayerLogout"]}');

//API.send(ws, '{"service":"event","action":"subscribe","worlds":["1"],"eventNames":["PlayerLogin","PlayerLogout"]}')
