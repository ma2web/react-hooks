import React, { useCallback, useState } from 'react';
import Child from './Child';

const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const text = 'Hello, World!';

  const returnText = useCallback(() => {
    return text;
  }, [text]);

  return (
    <div>
      <div className='header'>useCallback</div>
      <div className='container'>
        <Child returnText={returnText} />

        <div>
          <button className='button' onClick={() => setToggle(!toggle)}>
            Toggle
          </button>
          {toggle && <p>Toggle Text</p>}
        </div>
      </div>
    </div>
  );
};

export default UseCallback;
