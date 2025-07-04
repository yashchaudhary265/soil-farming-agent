import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/register`, formData);

      setMessage(res.data.message || 'Registration successful');
      setIsSuccess(true);
      setFormData({ name: '', email: '', password: '', role: 'user' });
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      setMessage(err.response?.data?.error || 'Registration failed');
      setIsSuccess(false);
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
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ marginBottom: '25px' }}>📝 Register</h2>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#1e1e1e',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 255, 170, 0.3)',
        width: '300px'
      }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            marginBottom: '15px',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '15px'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            marginBottom: '15px',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '15px'
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            marginBottom: '15px',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '15px'
          }}
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          style={{
            marginBottom: '20px',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            fontSize: '15px'
          }}
        >
          <option value="user">👤 User</option>
          <option value="admin">🛠️ Admin</option>
        </select>
        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '15px',
            width: '100%',
            cursor: 'pointer'
          }}
        >
          Register
        </button>
      </form>
      {message && (
        <p style={{ marginTop: '20px', color: isSuccess ? '#00FF99' : '#ffcc00' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Register;
