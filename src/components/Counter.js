import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // useDispatch is a react hook to dispatch action to the store
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatching action to the store
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = () => {
    // dispatching action to the store
    dispatch({ type: "DECREMENT" });
  };

  const increaseHandler = () => {
    // dispatching action to the store with payload
    dispatch({ type: "increase", amount: 3 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  // react hook(useSelector) to import store from redux in the component
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 3</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
