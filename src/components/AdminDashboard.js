// src/components/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/admin/manage-rooms">Manage Rooms</Link></li>
        <li><Link to="/admin/all-reservations">View All Reservations</Link></li>
        <li><Link to="/admin/reserve-for-user">Reserve for Users</Link></li>
        <li><Link to="/admin/manage-users">Manage User Accounts</Link></li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
