import React, { useState } from 'react';
import API from '../api';


function ReservationForm() {
  const [data, setData] = useState({ room: '', date: '', start_time: '', end_time: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post('reservations/', data)
      .then(res => alert('Reservation successful!'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
      <h2>Make a Reservation</h2>
      <input placeholder="Room ID" onChange={e => setData({ ...data, room: e.target.value })} /><br />
      <input placeholder="Date (YYYY-MM-DD)" onChange={e => setData({ ...data, date: e.target.value })} /><br />
      <input placeholder="Start Time (HH:MM)" onChange={e => setData({ ...data, start_time: e.target.value })} /><br />
      <input placeholder="End Time (HH:MM)" onChange={e => setData({ ...data, end_time: e.target.value })} /><br />
      <button type="submit">Book Room</button>
    </form>
  );
}

export default ReservationForm;
