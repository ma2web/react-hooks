import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Child = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    toggleFunction() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button className='button' onClick={() => setToggle(!toggle)}>
        Child Button
      </button>
      {toggle && <h4>Child Text</h4>}
    </div>
  );
});

export default Child;
