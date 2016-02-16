var Redux    = require('redux');
var React    = require('react');
var ReactDOM = require('react-dom');

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

var Counter = function(props) {
    return React.DOM.div({},
        React.DOM.span({}, props.val),
        React.DOM.button({onClick: props.onIncrement}, '+'),
        React.DOM.button({onClick: props.onDecrement}, '-')
    );
};

var render = function() {
    ReactDOM.render(
        React.createElement(Counter,{
            val: store.getState(),
            onIncrement: function () {store.dispatch({type: 'INCREMENT'})},
            onDecrement: function () {store.dispatch({type: 'DECREMENT'})}
        }),
        document.getElementById('app-root'));
};

var store = Redux.createStore(counter);

store.subscribe(render);
render();