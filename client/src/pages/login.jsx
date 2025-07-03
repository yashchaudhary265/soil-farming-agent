import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      const { role } = res.data;
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-home');
      }
    } catch (err) {
      setMessage('Login failed');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#121212',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ marginBottom: '30px' }}>🔐 Login</h1>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 255, 170, 0.3)'
      }}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: '12px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '250px',
            fontSize: '16px'
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            padding: '12px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '250px',
            fontSize: '16px'
          }}
        />
        <button type="submit" style={{
          padding: '12px 24px',
          backgroundColor: '#28a745',
          color: 'white',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          marginTop: '15px',
          cursor: 'pointer'
        }}>
          Login
        </button>
        {message && <p style={{ marginTop: '20px', color: 'red' }}>{message}</p>}
      </form>
    </div>
  );
}

export default Login;
