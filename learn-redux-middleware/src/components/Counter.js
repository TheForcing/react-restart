import React from 'react'

const Counter = ( {onIncrease, onDcrease, number} ) => {
  return (
    <div>
       <h1>{number}</h1>
       <button onClick={onIncrease}>+1</button>
       <button onClick={onDcrease}>-1</button>
    </div>
  );
};

export default Counter;