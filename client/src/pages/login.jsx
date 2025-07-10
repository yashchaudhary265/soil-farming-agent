import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Use your deployed backend URL
      const API_URL = process.env.REACT_APP_API_URL || 'https://soil-farming-agent-xkym.onrender.com';
      
      console.log('🔐 Attempting login to:', `${API_URL}/api/auth/login`);
      console.log('📧 Email:', formData.email);
      
      const res = await axios.post(`${API_URL}/api/auth/login`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000 // 10 second timeout
      });

      console.log('✅ Login response:', res.data);

      const { role } = res.data;
      setMessage('Login successful! Redirecting...');
      
      // Navigate based on role
      setTimeout(() => {
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/user-home');
        }
      }, 1000);

    } catch (err) {
      console.error('❌ Login error:', err);
      
      if (err.response) {
        // Server responded with error
        setMessage(err.response.data.error || 'Login failed');
      } else if (err.request) {
        // Request was made but no response
        setMessage('Network error. Please check your connection.');
      } else {
        // Something else happened
        setMessage('Login failed. Please try again.');
      }
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
          disabled={isLoading}
          style={{
            padding: '12px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '250px',
            fontSize: '16px',
            opacity: isLoading ? 0.6 : 1
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
          disabled={isLoading}
          style={{
            padding: '12px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '250px',
            fontSize: '16px',
            opacity: isLoading ? 0.6 : 1
          }}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            padding: '12px 24px',
            backgroundColor: isLoading ? '#666' : '#28a745',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            marginTop: '15px',
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        {message && (
          <p style={{ 
            marginTop: '20px', 
            color: message.includes('successful') ? '#00FF99' : '#ff6b6b',
            textAlign: 'center'
          }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;