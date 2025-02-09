// ManageUsers.jsx
import React, { useState, useEffect } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  // Simulate fetching users from an API
  useEffect(() => {
    const fetchUsers = async () => {
      const fakeUsers = [
        { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@example.com', role: 'user' },
        { id: 2, firstname: 'Jane', lastname: 'Smith', email: 'jane.smith@example.com', role: 'admin' },
      ];
      setUsers(fakeUsers);
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId) => {
    alert(`Edit user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    if (window.confirm(`Are you sure you want to delete user with ID: ${userId}?`)) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  return (
    <div style={styles.container}>
      <h1>Manage Users</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button style={styles.editButton} onClick={() => handleEdit(user.id)}>Edit</button>
                <button style={styles.deleteButton} onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  editButton: {
    backgroundColor: '#1890ff',
    color: 'white',
    padding: '5px 10px',
    marginRight: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#ff4d4f',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ManageUsers;
