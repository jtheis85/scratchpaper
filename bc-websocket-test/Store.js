"use strict";

const Redux = require ('redux');
const API = require('API.js');

// The application's default state when it first launches
const defaultState = {
    status:   'DISCONNECTED',
    messages: []
};

const Store = Redux.createStore((state = defaultState, action) => {
    switch (action.type) {
        case 'TRY_CONNECT':
            return { status: 'CONNECTING', message: [] }
    }
});



module.exports = Store;
