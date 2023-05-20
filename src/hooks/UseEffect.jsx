import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffect = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => setUsers(res.data));
    // console.log('I am logged after the below useLayoutEffect');
  }, []);

  useLayoutEffect(() => {
    // console.log('I am logged before the above useEffect');
  }, []);

  return (
    <div>
      <div className='header'>useEffect & useLayoutEffect</div>
      <div className='container'>
        <div className='users'>
          {users.map((user) => (
            <div className='user' key={user.id}>
              <div className='name'>
                <strong>{user.name}</strong> from {user.address.city}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
