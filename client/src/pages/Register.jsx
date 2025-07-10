import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    role: 'user' 
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Use your deployed backend URL
      const API_URL = process.env.REACT_APP_API_URL || 'https://soil-farming-agent-xkym.onrender.com';
      
      console.log('📝 Attempting registration to:', `${API_URL}/api/auth/register`);
      console.log('📧 Data:', { ...formData, password: '***' });

      const res = await axios.post(`${API_URL}/api/auth/register`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000 // 10 second timeout
      });

      console.log('✅ Registration response:', res.data);

      setMessage(res.data.message || 'Registration successful!');
      setIsSuccess(true);
      setFormData({ name: '', email: '', password: '', role: 'user' });

    } catch (err) {
      console.error('❌ Registration error:', err);
      
      if (err.response) {
        // Server responded with error
        setMessage(err.response.data.error || 'Registration failed');
      } else if (err.request) {
        // Request was made but no response
        setMessage('Network error. Please check your connection.');
      } else {
        // Something else happened
        setMessage('Registration failed. Please try again.');
      }
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
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
          disabled={isLoading}
          style={{
            marginBottom: '15px',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '15px',
            opacity: isLoading ? 0.6 : 1
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isLoading}
          style={{
            marginBottom: '15px',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '15px',
            opacity: isLoading ? 0.6 : 1
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          disabled={isLoading}
          style={{
            marginBottom: '15px',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '15px',
            opacity: isLoading ? 0.6 : 1
          }}
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          disabled={isLoading}
          style={{
            marginBottom: '20px',
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            fontSize: '15px',
            opacity: isLoading ? 0.6 : 1
          }}
        >
          <option value="user">👤 User</option>
          <option value="admin">🛠️ Admin</option>
        </select>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            backgroundColor: isLoading ? '#666' : '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '15px',
            width: '100%',
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {message && (
        <p style={{ 
          marginTop: '20px', 
          color: isSuccess ? '#00FF99' : '#ff6b6b',
          textAlign: 'center'
        }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Register;