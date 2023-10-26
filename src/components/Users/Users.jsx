import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.log('error get users');
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers(); 

  }, []);

  return (
    <div>
      <h2>список юзеров</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;