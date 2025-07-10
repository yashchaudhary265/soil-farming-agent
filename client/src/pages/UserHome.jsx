// src/pages/UserHome.jsx
import React, { useState, useEffect } from 'react';

function UserHome() {
  const [userType, setUserType] = useState('');
  const [showDistributorForm, setShowDistributorForm] = useState(false);
  const [distributors, setDistributors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [distributorForm, setDistributorForm] = useState({
    name: '',
    location: '',
    contact: '',
    supplies: '',
    email: ''
  });

  const API_URL = process.env.REACT_APP_API_URL || 'https://soil-farming-agent-xkym.onrender.com';

  // Fetch distributors when component mounts
  useEffect(() => {
    fetchDistributors();
  }, []);

  const fetchDistributors = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/distributors`);
      const data = await response.json();
      setDistributors(data);
    } catch (error) {
      console.error('Error fetching distributors:', error);
      setMessage('Failed to fetch distributors');
    } finally {
      setLoading(false);
    }
  };

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    if (type === 'distributor') {
      setShowDistributorForm(true);
    }
  };

  const handleDistributorFormChange = (e) => {
    setDistributorForm({
      ...distributorForm,
      [e.target.name]: e.target.value
    });
  };

  const handleDistributorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_URL}/api/distributors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(distributorForm),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Distributor registered successfully!');
        setDistributorForm({
          name: '',
          location: '',
          contact: '',
          supplies: '',
          email: ''
        });
        setShowDistributorForm(false);
        fetchDistributors(); // Refresh the list
      } else {
        setMessage(data.error || 'Failed to register distributor');
      }
    } catch (error) {
      setMessage('Failed to register distributor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '40px'
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>
        🌾 User Home
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Welcome! Explore soil details and distributor info here.
      </p>

      {/* User Type Selection */}
      {!userType && (
        <div style={{
          backgroundColor: '#1e1e1e',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '30px',
          textAlign: 'center',
          boxShadow: '0 0 15px rgba(0, 255, 170, 0.3)'
        }}>
          <h2 style={{ marginBottom: '25px', fontSize: '1.8rem' }}>What are you?</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleUserTypeSelection('farmer')}
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '15px 30px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
              👨‍🌾 Farmer
            </button>
            <button
              onClick={() => handleUserTypeSelection('distributor')}
              style={{
                backgroundColor: '#2196F3',
                color: 'white',
                padding: '15px 30px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1976D2'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
            >
              🚛 Distributor
            </button>
          </div>
        </div>
      )}

      {/* User Type Display */}
      {userType && (
        <div style={{
          backgroundColor: '#1e1e1e',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '1.2rem' }}>
            You are a: <span style={{ fontWeight: 'bold', color: '#00ffaa' }}>
              {userType === 'farmer' ? '👨‍🌾 Farmer' : '🚛 Distributor'}
            </span>
          </span>
          <button
            onClick={() => {
              setUserType('');
              setShowDistributorForm(false);
            }}
            style={{
              marginLeft: '15px',
              backgroundColor: '#666',
              color: 'white',
              padding: '8px 15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Change
          </button>
        </div>
      )}

      {/* Distributor Registration Form */}
      {showDistributorForm && (
        <div style={{
          backgroundColor: '#1e1e1e',
          padding: '25px',
          borderRadius: '10px',
          marginBottom: '30px',
          boxShadow: '0 0 15px rgba(255, 193, 7, 0.3)'
        }}>
          <h2 style={{ marginBottom: '20px', borderBottom: '2px solid #FFC107', paddingBottom: '10px' }}>
            Register as Distributor
          </h2>
          <form onSubmit={handleDistributorSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
              <input
                type="text"
                name="name"
                placeholder="Distributor Name"
                value={distributorForm.name}
                onChange={handleDistributorFormChange}
                required
                style={{
                  padding: '12px',
                  borderRadius: '5px',
                  border: '1px solid #555',
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '16px'
                }}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={distributorForm.location}
                onChange={handleDistributorFormChange}
                required
                style={{
                  padding: '12px',
                  borderRadius: '5px',
                  border: '1px solid #555',
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '16px'
                }}
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={distributorForm.contact}
                onChange={handleDistributorFormChange}
                required
                style={{
                  padding: '12px',
                  borderRadius: '5px',
                  border: '1px solid #555',
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '16px'
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={distributorForm.email}
                onChange={handleDistributorFormChange}
                required
                style={{
                  padding: '12px',
                  borderRadius: '5px',
                  border: '1px solid #555',
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '16px'
                }}
              />
            </div>
            <input
              type="text"
              name="supplies"
              placeholder="Supplies (e.g., Seeds, Fertilizers, Tools)"
              value={distributorForm.supplies}
              onChange={handleDistributorFormChange}
              required
              style={{
                padding: '12px',
                borderRadius: '5px',
                border: '1px solid #555',
                backgroundColor: '#333',
                color: 'white',
                fontSize: '16px',
                width: '100%',
                marginTop: '15px'
              }}
            />
            <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: loading ? '#666' : '#2196F3',
                  color: 'white',
                  padding: '12px 25px',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? 'Registering...' : 'Register Distributor'}
              </button>
              <button
                type="button"
                onClick={() => setShowDistributorForm(false)}
                style={{
                  backgroundColor: '#666',
                  color: 'white',
                  padding: '12px 25px',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Message Display */}
      {message && (
        <div style={{
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '30px',
          backgroundColor: message.includes('successfully') ? '#2E7D32' : '#C62828',
          color: 'white',
          textAlign: 'center'
        }}>
          {message}
        </div>
      )}

      {/* Main Content - Only show if user type is selected */}
      {userType && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px' }}>
          
          {/* Soil Info Section */}
          <div
            style={{
              backgroundColor: '#1e1e1e',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 255, 170, 0.3)'
            }}
          >
            <h2 style={{ borderBottom: '1px solid #00ffaa', paddingBottom: '10px', marginBottom: '15px' }}>
              🌱 Soil Information
            </h2>

            {/* Soil types in a more organized format */}
            {[
              { type: 'Sandy Loam', crops: 'Wheat, Cotton, Sugarcane', ph: '6.5 – 7.5', fertility: 'Moderate to High', color: '#4CAF50' },
              { type: 'Clay', crops: 'Rice, Broccoli, Cabbage', ph: '5.5 – 6.5', fertility: 'High', color: '#2196F3' },
              { type: 'Silty', crops: 'Corn, Wheat, Peas', ph: '6.0 – 7.0', fertility: 'Very High', color: '#FF9800' },
              { type: 'Peaty', crops: 'Salad greens, Root vegetables', ph: '3.5 – 5.0', fertility: 'Extremely High (acidic)', color: '#795548' },
              { type: 'Loamy', crops: 'Most crops (ideal): Vegetables, Grains, Fruits', ph: '6.0 – 7.5', fertility: 'Very High', color: '#9C27B0' },
              { type: 'Chalky', crops: 'Barley, Beets, Spinach', ph: '7.1 – 8.0', fertility: 'Low to Moderate (alkaline)', color: '#607D8B' },
              { type: 'Red Soil', crops: 'Groundnut, Millets, Cotton', ph: '5.5 – 6.5', fertility: 'Moderate', color: '#F44336' },
              { type: 'Black Soil', crops: 'Cotton, Soybean, Sunflower', ph: '6.2 – 8.5', fertility: 'High in nutrients and moisture retention', color: '#424242' }
            ].map((soil, index) => (
              <div key={index} style={{
                borderLeft: `4px solid ${soil.color}`,
                paddingLeft: '15px',
                marginBottom: '20px',
                backgroundColor: '#2a2a2a',
                padding: '15px',
                borderRadius: '5px'
              }}>
                <h3 style={{ color: soil.color, marginBottom: '8px' }}>{soil.type}</h3>
                <p style={{ lineHeight: '1.6', margin: '5px 0' }}><strong>Best Crops:</strong> {soil.crops}</p>
                <p style={{ lineHeight: '1.6', margin: '5px 0' }}><strong>PH Level:</strong> {soil.ph}</p>
                <p style={{ lineHeight: '1.6', margin: '5px 0' }}><strong>Fertility:</strong> {soil.fertility}</p>
              </div>
            ))}
          </div>

          {/* Distributor Info Section */}
          <div
            style={{
              backgroundColor: '#1e1e1e',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(255, 255, 0, 0.3)'
            }}
          >
            <h2 style={{ borderBottom: '1px solid #ffcc00', paddingBottom: '10px', marginBottom: '15px' }}>
              🚛 Distributors
            </h2>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{
                  border: '4px solid #f3f3f3',
                  borderTop: '4px solid #3498db',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  animation: 'spin 2s linear infinite',
                  margin: '0 auto 20px'
                }}></div>
                <p>Loading distributors...</p>
              </div>
            ) : distributors.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
                No distributors found.
              </p>
            ) : (
              <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                {distributors.map((distributor) => (
                  <div key={distributor._id} style={{
                    backgroundColor: '#2a2a2a',
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '15px',
                    borderLeft: '4px solid #FFC107'
                  }}>
                    <h3 style={{ color: '#FFC107', marginBottom: '10px', fontSize: '1.2rem' }}>
                      {distributor.name}
                    </h3>
                    <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      <p style={{ margin: '3px 0' }}><strong>📍 Location:</strong> {distributor.location}</p>
                      <p style={{ margin: '3px 0' }}><strong>📞 Contact:</strong> {distributor.contact}</p>
                      <p style={{ margin: '3px 0' }}><strong>📧 Email:</strong> {distributor.email}</p>
                      <p style={{ margin: '3px 0' }}><strong>🛒 Supplies:</strong> {distributor.supplies}</p>
                    </div>
                    <div style={{ marginTop: '10px', fontSize: '12px', color: '#999' }}>
                      Added: {new Date(distributor.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Default distributors will still show if no custom ones exist */}
            {distributors.length === 0 && (
              <div>
                <h3 style={{ color: '#ffcc00', marginBottom: '15px' }}>Default Distributors:</h3>
                {[
                  { name: 'AgroStar', location: 'Maharashtra, India', contact: '+91-8600000600', supplies: 'Seeds, Fertilizers, Crop Protection' },
                  { name: 'DeHaat', location: 'Bihar, India', contact: '+91-9264470707', supplies: 'Seeds, Soil Testing, Crop Advisory' },
                  { name: 'BigHaat', location: 'Karnataka, India', contact: '+91-8047180051', supplies: 'Seeds, Nutrients, Sprayers' }
                ].map((dist, index) => (
                  <div key={index} style={{
                    backgroundColor: '#2a2a2a',
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '15px',
                    borderLeft: '4px solid #ffcc00'
                  }}>
                    <h4 style={{ color: '#ffcc00', marginBottom: '8px' }}>{dist.name}</h4>
                    <p style={{ lineHeight: '1.6', margin: '3px 0' }}><strong>📍 Location:</strong> {dist.location}</p>
                    <p style={{ lineHeight: '1.6', margin: '3px 0' }}><strong>📞 Contact:</strong> {dist.contact}</p>
                    <p style={{ lineHeight: '1.6', margin: '3px 0' }}><strong>🛒 Supplies:</strong> {dist.supplies}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserHome;