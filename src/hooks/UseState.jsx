import React, { useState } from 'react';

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='header'>useState</div>
      <div className='container'>
        <h1 className='counter'>{counter}</h1>
        <button className='button' onClick={() => setCounter((old) => old - 1)}>
          -
        </button>
        <button className='button' onClick={() => setCounter((old) => old + 1)}>
          +
        </button>
      </div>

      <div className='container'>
        <input
          className='input'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Type something...'
        />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default UseState;
