import React, { useState } from 'react';

function MouseClickerH () {
  //   const state = useState(0);
  //   const counter = state[0];
  //   const setCounter = state[1];

  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <div
      onClick={clickHandler}
      style={{
        height: '100vh',
        border: '2px solid red',
        boxSizing: 'border-box',
      }}
    >
      {counter}
    </div>
  );
}

export default MouseClickerH;
