import React from "react";
import { useSelector, useDispatch } from "react-redux";

function counter() {
  return (
    <div>
      <span>
        <h1>Counter Value is: ${counter}</h1>
      </span>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default counter;
