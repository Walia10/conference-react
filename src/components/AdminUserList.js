import React, { useEffect, useState } from 'react';
import API from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get('users/')
      .then(res => setUsers(res.data))
      .catch(() => toast.error("Failed to load users"));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      API.delete(`users/${id}/`)
        .then(() => {
          setUsers(users.filter(user => user.id !== id));
          toast.success("User deleted");
        })
        .catch(() => toast.error("Failed to delete user"));
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <ToastContainer />
      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              ID: {user.id} | Username: {user.username} | Email: {user.email}
              <button
                onClick={() => handleDelete(user.id)}
                style={{ marginLeft: '1rem', backgroundColor: '#d32f2f', color: 'white' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminUserList;
