import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// reducer is a function which takes previous state and action and returns new state
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    // return object will be overwritten so we need to copy the other state also
    // return obecjt will overwrite the previous state
    // dont directly mutate the state
    return { ...state, counter: state.counter + 1};
  }

  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

//store is created using createStore method which takes reducer as an argument
// store is a global state which can be accessed from any component
// initial state is optional
// store has three methods getState(), dispatch(action), subscribe(listener)
// store takes parameter as reducer and initial state
const store = createStore(counterReducer, initialState);

export default store;
