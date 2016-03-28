"use strict";


const React    = require('react');
const ReactDOM = require('react-dom');
const API      = require('./API.js');

var messages = [];

window.addEventListener('load', () => {
   if (window.Notification && Notification.permission !== 'granted') {
       Notification.requestPermission((status) =>{
          if(Notification.permission !== status) {
              Notification.permission = status;
          }
       });
   }
});

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
        var message = 'Joe ' + (data.payload.event_name === 'PlayerLogin' ? 'logged in!' : 'logged out!')
        messages.push(message);
        Render();
        if(window.Notification && Notification.permission === 'granted') {
            var n = new Notification(message);
        }
    }
}, '{"service":"event","action":"subscribe","worlds":["17"],"eventNames":["PlayerLogin","PlayerLogout"]}');

//API.send(ws, '{"service":"event","action":"subscribe","worlds":["1"],"eventNames":["PlayerLogin","PlayerLogout"]}')
