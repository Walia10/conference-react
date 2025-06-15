import React, { useEffect, useState } from 'react';
import API from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminAllReservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    API.get('reservations/')
      .then(res => setReservations(res.data))
      .catch(() => toast.error("Failed to load reservations"));
  }, []);

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this reservation?")) {
      API.delete(`reservations/${id}/`)
        .then(() => {
          setReservations(reservations.filter(r => r.id !== id));
          toast.success("Reservation cancelled");
        })
        .catch(() => toast.error("Failed to cancel reservation"));
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <ToastContainer />
      <h2>All Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map(r => (
            <li key={r.id}>
              User ID: {r.user} | Room: {r.room} | Date: {r.date} | {r.start_time} - {r.end_time}
              <button
                onClick={() => handleCancel(r.id)}
                style={{ marginLeft: '1rem', backgroundColor: '#c62828', color: 'white' }}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminAllReservations;
