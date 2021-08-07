import React from 'react';

// function Greeting(props) {
//     const {name} = props;
//     return <div>Hello {name} </div>
// }

function Greeting (props) {
  const { name, isGreeting } = props;

  return (
    <div>
      {isGreeting ? 'hello' : 'bye'} {name}{' '}
    </div>
  );
}

export default Greeting; //rfce
