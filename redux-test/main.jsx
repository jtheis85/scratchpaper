var Redux    = require('redux');
var React    = require('react');
var ReactDOM = require('react-dom');

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const Counter = ({val, onIncrement, onDecrement}) => (
    <div className="test">
        <span>{val}</span>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const render = () => {
    ReactDOM.render(
        <Counter
            val={store.getState()}
            onIncrement={() => {store.dispatch({type: 'INCREMENT'})}}
            onDecrement={() => {store.dispatch({type: 'DECREMENT'})}}
        />,
        document.getElementById('app-root'));
};

const store = Redux.createStore(counter);

store.subscribe(render);
render();