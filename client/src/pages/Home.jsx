import React, { useContext, useEffect } from 'react';
import EarthGlobe from '../EarthGlobe';
import CountryStatePicker from '../CountryStatePicker';
import { SoilContext } from '../SoilContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { selectedCoords } = useContext(SoilContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCoords]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ padding: '40px', fontWeight: 'bold', color: 'white' }}>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          fontWeight: 'bold',
          color: 'white',
          fontFamily: '"Playfair Display", serif',
          fontSize: '3rem',
          letterSpacing: '1px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
        }}
      >
        🌍 SOIL FARMING AGENT
      </h1>

      {/* 🔘 Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button
          onClick={() => scrollToSection('subsidies')}
          style={{
            backgroundColor: '#4CAF50',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '6px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            marginRight: '15px',
            fontWeight: 'bold'
          }}
        >
          🏡 Govt Subsidies for Farmers
        </button>

        <button
          onClick={() => scrollToSection('ngos')}
          style={{
            backgroundColor: '#007ACC',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '6px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            marginRight: '15px',
            fontWeight: 'bold'
          }}
        >
          🧑‍🤝 NGO Support for Farmers
        </button>

        <button
          onClick={() => scrollToSection('crop-info')}
          style={{
            backgroundColor: '#f59e0b',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '6px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🌾 Popular Crops by State
        </button>
        {/* ✅ Register Button */}
        <button
          onClick={() => navigate('/register')}
          style={{
            backgroundColor: '#6f42c1',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '6px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          📝 Register
        </button>
        <button
          onClick={() => navigate('/login')}
          style={{
            backgroundColor: '#17a2b8',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '6px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '15px'
          }}
        >
          🔐 Login
        </button>
      </div>

      {/* 🌐 Globe and Picker */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        <div style={{ flexShrink: 0 }}>
          <EarthGlobe />
        </div>

        <div style={{ flexShrink: 0 }}>
          <CountryStatePicker />
        </div>
      </div>

      {/* 🏡 Govt Subsidy Section */}
      <div id="subsidies" style={{ marginTop: '80px', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '10px', color: '#111' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
          🧾 Latest Government Subsidy Schemes
        </h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '20px' }}>
          <li><strong>PM-Kisan:</strong> ₹6,000/year direct benefit to small/marginal farmers. <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer">Visit site</a></li>
          <li><strong>PMFBY:</strong> Crop insurance against climate loss & pests. <a href="https://pmfby.gov.in" target="_blank" rel="noopener noreferrer">Apply here</a></li>
          <li><strong>PM-KUSUM:</strong> 60–80% subsidy for solar-powered irrigation. <a href="https://pmkusum.mnre.gov.in" target="_blank" rel="noopener noreferrer">Apply here</a></li>
          <li><strong>Kisan Credit Card:</strong> Get up to ₹3 lakh at low interest. <a href="https://pmkisan.gov.in/KCC" target="_blank" rel="noopener noreferrer">More info</a></li>
          <li><strong>Agriculture Infrastructure Fund:</strong> ₹2 crore loan at 3% subsidy. <a href="https://agriinfra.dac.gov.in" target="_blank" rel="noopener noreferrer">Apply now</a></li>
          <li><strong>Gramin Bhandaran Yojana:</strong> Subsidy to build farm storage. <a href="https://www.nabard.org" target="_blank" rel="noopener noreferrer">NABARD</a></li>
          <li><strong>Drone Mechanisation (UP/Bihar):</strong> 50–60% drone subsidy for farming. <a href="https://agridarshan.up.gov.in" target="_blank" rel="noopener noreferrer">UP Apply</a></li>
        </ul>
      </div>

      {/* 🤝 NGO Section */}
      <div id="ngos" style={{ marginTop: '60px', backgroundColor: '#eef3f8', padding: '30px', borderRadius: '10px', color: '#111' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
          🤝 NGO Groups Supporting Indian Farmers
        </h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', paddingLeft: '20px' }}>
          <li><strong>BAIF Development Research Foundation:</strong> Empowers rural farmers with sustainable agri-tech and animal husbandry. <a href="https://baif.org.in" target="_blank" rel="noopener noreferrer">Visit site</a></li>
          <li><strong>Digital Green:</strong> Uses videos and tech to spread best farming practices. <a href="https://www.digitalgreen.org" target="_blank" rel="noopener noreferrer">Official site</a></li>
          <li><strong>PRADAN:</strong> Works with marginalized communities for farm-based livelihoods. <a href="https://www.pradan.net" target="_blank" rel="noopener noreferrer">Learn more</a></li>
          <li><strong>SEWA (Self-Employed Women’s Association):</strong> Supports women farmers with financial tools and crop management. <a href="https://www.sewa.org" target="_blank" rel="noopener noreferrer">SEWA Website</a></li>
          <li><strong>Rural Education and Development (READ) India:</strong> Provides community resource centers to help farmers. <a href="https://www.readindia.in" target="_blank" rel="noopener noreferrer">READ India</a></li>
          <li><strong>Watershed Organisation Trust (WOTR):</strong> Promotes climate-resilient farming and water management. <a href="https://www.wotr.org" target="_blank" rel="noopener noreferrer">WOTR.org</a></li>
        </ul>
      </div>

      {/* 🌾 Crop Info Section */}
      <div
        id="crop-info"
        style={{
          marginTop: '60px',
          backgroundColor: '#f1f1f1',
          padding: '30px',
          borderRadius: '10px',
          color: '#222'
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            textAlign: 'center',
            color: '#111'
          }}
        >
          🌾 Popular Crops by State
        </h2>

        <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '30px' }}>
          Discover region-wise dominant crops and ideal sowing times aligned with monsoon cycles.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
            <h3>🌾 Punjab – Wheat</h3>
            <p><strong>Sowing:</strong> October – November</p>
            <p><strong>Harvest:</strong> March – April</p>
          </div>

          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
            <h3>🌾 Bihar – Rice</h3>
            <p><strong>Sowing:</strong> June – July</p>
            <p><strong>Harvest:</strong> October – November</p>
          </div>

          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
            <h3>🌾 Maharashtra – Cotton</h3>
            <p><strong>Sowing:</strong> June – July</p>
            <p><strong>Harvest:</strong> October – January</p>
          </div>

          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
            <h3>🌾 Tamil Nadu – Sugarcane</h3>
            <p><strong>Sowing:</strong> February – March</p>
            <p><strong>Harvest:</strong> December – January</p>
          </div>

          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px' }}>
            <h3>🌾 West Bengal – Mustard, Rice</h3>
            <p><strong>Sowing:</strong> June – July (Rice), October (Mustard)</p>
            <p><strong>Harvest:</strong> November (Rice), February (Mustard)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
