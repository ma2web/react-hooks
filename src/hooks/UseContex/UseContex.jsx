import React, { createContext, useReducer } from 'react';
import Data from './Data';
import Input from './Input';

export const Context = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'type':
      return { data: action.payload };
    default:
      return state;
  }
};

const UseContex = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: '',
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className='header'>useContext</div>
      <div className='container'>
        <Input />
        <Data />
      </div>
    </Context.Provider>
  );
};

export default UseContex;
