import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    document.title = counter;
  }, [counter]);

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
