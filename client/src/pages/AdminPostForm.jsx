import React, { useState } from 'react';
import axios from 'axios';

function AdminPostForm() {
  const [formData, setFormData] = useState({
    soilType: '',
    cropRecommendation: '',
    distributorName: '',
    location: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/post', formData);
      setMessage('✅ Data submitted successfully!');
      setFormData({ soilType: '', cropRecommendation: '', distributorName: '', location: '' });
    } catch (err) {
      setMessage('❌ Submission failed.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px', color: '#fff' }}>
      <h2>📋 Post Soil & Distributor Data</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="soilType"
          placeholder="Soil Type"
          value={formData.soilType}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px', width: '250px' }}
        /><br/>
        <input
          name="cropRecommendation"
          placeholder="Crop Recommendation"
          value={formData.cropRecommendation}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px', width: '250px' }}
        /><br/>
        <input
          name="distributorName"
          placeholder="Distributor Name"
          value={formData.distributorName}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px', width: '250px' }}
        /><br/>
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px', width: '250px' }}
        /><br/>
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          borderRadius: '5px',
          fontSize: '16px'
        }}>
          Submit
        </button>
      </form>
      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
}

export default AdminPostForm;
