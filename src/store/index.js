import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
    let tempState = { ...state };
    if (action.type === 'INC') {
        tempState.counter = tempState.counter + 1;
    } else if (action.type === 'DEC') {
        tempState.counter = tempState.counter - 1;
    }
    return tempState;
}

const store = createStore(reducerFn);

export default store;