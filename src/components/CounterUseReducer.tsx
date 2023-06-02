import { useReducer } from "react";

const initalState = {
  count: 0,
};

// when the action is Increment or decrement 
type ActionIncDec = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};
// when the action is reset
type ResetAction = {
  type: "RESET";
};
// union for both 
type Action = ActionIncDec | ResetAction;

type State = {
  count: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return { count: initalState.count };
    default:
      return state;
  }
};

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: 10 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", payload: 10 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </>
  );
};

export default CounterUseReducer;
