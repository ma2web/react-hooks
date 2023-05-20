import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

const UseMemo = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get(URL).then((res) => setUsers(res.data));
  }, []);

  const findLongestName = (data) => {
    if (!data) return null;

    let longest = '';
    for (let i = 0; i < data.length; i++) {
      const name = data[i].name;

      if (name.length > longest.length) {
        longest = name;
      }
    }

    console.log('findLongestName Function called');
    return longest;
  };

  const memoFunction = useMemo(() => findLongestName(users), [users]);

  return (
    <div>
      <div className='header'>useMemo</div>
      <div className='container'>
        <div className='container'>Longest Name: {memoFunction}</div>

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

export default UseMemo;
