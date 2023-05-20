import React, { useEffect } from 'react';

const Child = ({ returnText }) => {
  useEffect(() => {
    console.log('Re-Rendered');
  }, [returnText]);
  return <div>{returnText()}</div>;
};

export default Child;
