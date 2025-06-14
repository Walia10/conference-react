import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/login/', data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        alert('Login successful!');
        navigate('/');
      })
      .catch(err => alert('Login failed'));
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setData({ ...data, username: e.target.value })} /><br />
      <input placeholder="Password" type="password" onChange={e => setData({ ...data, password: e.target.value })} /><br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
