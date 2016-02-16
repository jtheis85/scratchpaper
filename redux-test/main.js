var Redux    = require('redux');

var initialState = 0;

var counter = function(state, action) {
    state = state || initialState;
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

var render = function() {
    document.body.innerHTML = store.getState();
};

var store = Redux.createStore(counter);

store.subscribe(render);
render();