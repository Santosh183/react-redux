// import { createStore } from "redux";

// const reducerFn = (state = { counter: 0 }, action) => {
//     let tempState = { ...state };
//     if (action.type === 'INC') {
//         tempState.counter = tempState.counter + 1;
//     } else if (action.type === 'DEC') {
//         tempState.counter = tempState.counter - 1;
//     }
//     return tempState;
// }

// const store = createStore(reducerFn);

// export default store;

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment(state, action) {
            state.count = state.count + 5;
        },
        decrement(state, action) {
            state.count = state.count - 1;
        }
    }
});
export const countActions = counterSlice.actions;


