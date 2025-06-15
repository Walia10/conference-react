import React, { useState, useEffect } from 'react';
import API from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminRoomForm() {
  const [room, setRoom] = useState({ name: '', location: '', capacity: '' });
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [reservation, setReservation] = useState({ user: '', room: '', date: '', time: '' });

  // Fetch users and rooms for reservation form
  useEffect(() => {
    API.get('users/').then(res => setUsers(res.data)).catch(() => toast.error('Failed to fetch users'));
    API.get('rooms/').then(res => setRooms(res.data)).catch(() => toast.error('Failed to fetch rooms'));
  }, []);

  // Add a new room
  const handleRoomSubmit = (e) => {
    e.preventDefault();
    API.post('rooms/', room)
      .then(() => {
        toast.success('Room added successfully');
        setRoom({ name: '', location: '', capacity: '' });
      })
      .catch(() => toast.error('Failed to add room'));
  };

  // Admin reserves a room for a user
  const handleReservationSubmit = (e) => {
    e.preventDefault();
    API.post('reservations/', reservation)
      .then(() => {
        toast.success('Reservation made for user');
        setReservation({ user: '', room: '', date: '', time: '' });
      })
      .catch(() => toast.error('Failed to make reservation'));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <ToastContainer />

      {/* Room Creation Form */}
      <form onSubmit={handleRoomSubmit} style={{ marginBottom: '3rem' }}>
        <h2>Add New Room</h2>
        <input
          placeholder="Name"
          value={room.name}
          onChange={e => setRoom({ ...room, name: e.target.value })}
        /><br />
        <input
          placeholder="Location"
          value={room.location}
          onChange={e => setRoom({ ...room, location: e.target.value })}
        /><br />
        <input
          placeholder="Capacity"
          type="number"
          value={room.capacity}
          onChange={e => setRoom({ ...room, capacity: e.target.value })}
        /><br />
        <button type="submit">Add Room</button>
      </form>

      {/* Admin Reservation Form */}
      <form onSubmit={handleReservationSubmit}>
        <h2>Reserve Room for a User</h2>
        <select value={reservation.user} onChange={e => setReservation({ ...reservation, user: e.target.value })}>
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.email}</option>
          ))}
        </select><br />

        <select value={reservation.room} onChange={e => setReservation({ ...reservation, room: e.target.value })}>
          <option value="">Select Room</option>
          {rooms.map(room => (
            <option key={room.id} value={room.id}>{room.name}</option>
          ))}
        </select><br />

        <input
          type="date"
          value={reservation.date}
          onChange={e => setReservation({ ...reservation, date: e.target.value })}
        /><br />
        <input
          type="time"
          value={reservation.time}
          onChange={e => setReservation({ ...reservation, time: e.target.value })}
        /><br />

        <button type="submit">Book for User</button>
      </form>
    </div>
  );
}

export default AdminRoomForm;
