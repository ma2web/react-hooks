import React, { useRef } from 'react';
import Child from './Child';

const UseImperativeHandle = () => {
  const ref = useRef(null);

  return (
    <div>
      <div className='header'>useImperativeHandle</div>
      <div className='container'>
        <button className='button' onClick={() => ref.current.toggleFunction()}>
          Parent Button
        </button>
        <Child ref={ref} />
      </div>
    </div>
  );
};

export default UseImperativeHandle;
