import React, { useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [formData, setFormData] = useState({
    crop: '',
    state: '',
    distributor: '',
    contact: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 🔁 Replace with your real backend endpoint later
      const res = await axios.post('http://localhost:5000/api/admin/post-data', formData);
      setMessage(res.data.message || 'Data saved!');
      setFormData({ crop: '', state: '', distributor: '', contact: '' });
    } catch (err) {
      setMessage(err.response?.data?.error || 'Error saving data');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
      <h1>👨‍💼 Admin Dashboard</h1>
      <p>Welcome, Admin! Here you can manage soil and distributor data.</p>

      <hr style={{ margin: '40px 0', borderTop: '1px solid #aaa' }} />
      <h3>📋 Post New Crop & Distributor Data</h3>

      <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
        <input
          type="text"
          name="crop"
          placeholder="Crop Name"
          value={formData.crop}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px', width: '250px' }}
        /><br />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px', width: '250px' }}
        /><br />
        <input
          type="text"
          name="distributor"
          placeholder="Distributor Name"
          value={formData.distributor}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px', width: '250px' }}
        /><br />
        <input
          type="text"
          name="contact"
          placeholder="Distributor Contact"
          value={formData.contact}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px', width: '250px' }}
        /><br />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>

      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
}

export default AdminDashboard;