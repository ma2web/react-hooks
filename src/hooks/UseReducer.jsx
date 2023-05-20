import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increament':
      return { counter: state.counter + 1, text: !state.text };
    case 'decreament':
      return { counter: state.counter - 1, text: !state.text };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    text: true,
  });

  return (
    <div>
      <div className='header'>useReducer</div>
      <div className='container'>
        <h1 className='counter'>{state.counter}</h1>
        <button
          className='button'
          onClick={() =>
            dispatch({
              type: 'decreament',
            })
          }
        >
          -
        </button>
        <button
          className='button'
          onClick={() =>
            dispatch({
              type: 'increament',
            })
          }
        >
          +
        </button>

        <p>{state.text && 'Text is here'}</p>
      </div>
    </div>
  );
};

export default UseReducer;
