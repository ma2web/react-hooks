import React, { useRef } from 'react';

const UseRef = () => {
  const ref = useRef(null);

  const handleChange = () => {
    const NEW_VALUE = Math.ceil(Math.random() * 1000);
    const PREV_VALUE = ref.current.value;

    alert(`PREV_VALUE: ${PREV_VALUE}\nNEW_VALUE: ${NEW_VALUE}`);

    ref.current.value = NEW_VALUE;
  };
  return (
    <div>
      <div className='header'>useRef</div>
      <div className='container'>
        <input type='text' className='input' ref={ref} />
        <button className='button' onClick={handleChange}>
          Generate
        </button>
      </div>
    </div>
  );
};

export default UseRef;
