import React, { useContext } from 'react';
import { Context } from './UseContex';

const Input = () => {
  const { dispatch } = useContext(Context);
  return (
    <div>
      <input
        type='text'
        className='input'
        onChange={(e) => dispatch({ type: 'type', payload: e.target.value })}
      />
    </div>
  );
};

export default Input;
