import React, { useContext } from 'react';
import { Context } from './UseContex';

const Data = () => {
  const {
    state: { data },
  } = useContext(Context);

  return <div>Data: {data}</div>;
};

export default Data;
