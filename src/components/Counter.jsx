import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  // console.log(props);
  return (
    <div className="counter-card">
      <h1>Counter</h1>
      <h1
        className="count"
        style={
          props.a.count === 0
            ? { color: "black" }
            : props.a.count > 0
            ? { color: "green" }
            : { color: "red" }
        }
      >
        {props.a.count}
      </h1>
      <button
        onClick={() => {
          props.dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          props.dispatch({ type: "increment" });
        }}
      >
        +
      </button>
    </div>
  );
};

export default connect(function (store) {
  return store;
})(Counter);
