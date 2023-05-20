import React from 'react';
import './App.css';
import UseCallback from './hooks/UseCallback/UseCallback';
import UseContex from './hooks/UseContex/UseContex';
import UseEffect from './hooks/UseEffect';
import UseImperativeHandle from './hooks/UseImperativeHandle/UseImperativeHandle';
import UseMemo from './hooks/UseMemo';
import UseReducer from './hooks/UseReducer';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';

const App = () => {
  return (
    <div className='App'>
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseImperativeHandle />
      <UseContex />
      <UseMemo />
      <UseCallback />
    </div>
  );
};

export default App;
