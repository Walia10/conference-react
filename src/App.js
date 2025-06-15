import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomList from './components/RoomList';
import ReservationForm from './components/ReservationForm';
import Login from './components/Login';
import AdminReservationForm from './components/AdminReservationForm';
import AdminDashboard from './components/AdminDashboard';
import AdminRoomForm from './components/AdminRoomForm';
import AdminAllReservations from './components/AdminAllReservations';
import AdminUserList from './components/AdminUserList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/reserve" element={<ReservationForm />} />
        <Route path="/login" element={<Login />} />
          <Route path="/admin/reserve-for-user" element={<AdminReservationForm />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-rooms" element={<AdminRoomForm />} />
          <Route path="/admin/all-reservations" element={<AdminAllReservations />} />
          <Route path="/admin/manage-users" element={<AdminUserList />} />
      </Routes>
    </Router>
  );
}

export default App;
