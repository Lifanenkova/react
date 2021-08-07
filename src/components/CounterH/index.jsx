import React, { useState } from 'react';

function CounterH () {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const clickHandlerDecrement = () => {
    setCounter(counter - step);
  };

  const clickHandlerIncrement = () => {
    setCounter(counter + step);
  };

  const ChangeStep = e => {
    setStep(Number(e.target.value));
  };
  return (
    <>
      <div>{counter}</div>
      <input type='number' value={step} onChange={ChangeStep} />
      <button onClick={clickHandlerDecrement}>-</button>
      <button onClick={clickHandlerIncrement}>+</button>
    </>
  );
}

export default CounterH;
