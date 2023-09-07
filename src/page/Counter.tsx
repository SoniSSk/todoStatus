import React, { useState } from "react";
import style from "../page/Counter.module.css";
const Counter = () => {
  const [counterState, setCounterState] = useState(0);
  const handleAddCounter = () => {
    setCounterState(counterState + 1);
  };
  const handleSubCounter = () => {
    if (counterState > 0) setCounterState(counterState - 1);
  };
  return (
    <>
      <div className={style.button} onClick={handleAddCounter}>
        Add
      </div>
      <div>{counterState}</div>
      <div className={style.button} onClick={handleSubCounter}>
        Sub
      </div>
    </>
  );
};

export default Counter;
