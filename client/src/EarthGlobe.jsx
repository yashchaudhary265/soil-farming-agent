import React, { useEffect, useRef, useState, useContext } from 'react';
import Globe from 'react-globe.gl';
import { useNavigate } from 'react-router-dom';
import { SoilContext } from './SoilContext';

const EarthGlobe = () => {
  const globeRef = useRef();
  const navigate = useNavigate();
  const { selectedLocation } = useContext(SoilContext);
  const [popupData, setPopupData] = useState(null);

  function getSoilTypeFromCoords(lat, lon) {
    if (lat > 40) return 'loamy';
    else if (lat > 20 && lon > 60) return 'sandy-loam';
    else if (lat > 20 && lon <= 60) return 'clay';
    else if (lat <= 20 && lon < 20) return 'silty';
    else if (lat <= 20 && lon >= 20 && lon < 60) return 'peaty';
    else return 'chalky';
  }

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;
      globe.renderer().setPixelRatio(window.devicePixelRatio);
    }
  }, []);

  useEffect(() => {
  if (selectedLocation && globeRef.current) {
    const { lat, lng } = selectedLocation;

    globeRef.current.pointOfView({
      lat,
      lng,
      altitude: 0.4
    }, 1500);

    const soilType = getSoilTypeFromCoords(lat, lng);
    setPopupData({
      lat: lat.toFixed(2),
      lon: lng.toFixed(2),
      soilType,
      fertility: 'High',
      cropRecommendations: ['Wheat', 'Barley', 'Cotton']
    });
  }
}, [selectedLocation]);


  const handleGlobeClick = ({ lat, lng }) => {
    globeRef.current.controls().autoRotate = false;

    const soilType = getSoilTypeFromCoords(lat, lng);
    const soilData = {
      lat: lat.toFixed(2),
      lon: lng.toFixed(2),
      soilType: soilType,
      fertility: 'High',
      cropRecommendations: ['Wheat', 'Barley', 'Cotton']
    };

    setPopupData(soilData);

    // ⛔ Removed auto zoom on globe click
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <video autoPlay muted loop className="background-video">
        <source src="/space-bg2.mp4" type="video/mp4" />
      </video>

      <div style={{ width: '100%', height: '100%' }}>
        <Globe
          ref={globeRef}
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#3a9bdc"
          atmosphereAltitude={0.25}
          onGlobeClick={handleGlobeClick}
        />
      </div>

      {popupData && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          backgroundColor: '#ffffffcc',
          color: '#000',
          padding: '15px',
          borderRadius: '10px',
          width: '300px',
          boxShadow: '0 0 10px #00ffc8',
          zIndex: 1
        }}>
          <h3>📍 Soil Info</h3>
          <p><b>Lat:</b> {popupData.lat}</p>
          <p><b>Lon:</b> {popupData.lon}</p>
          <p><b>Type:</b> {popupData.soilType}</p>
          <p><b>Fertility:</b> {popupData.fertility}</p>
          <p><b>Crops:</b> {popupData.cropRecommendations.join(', ')}</p>

          <button
            onClick={() => navigate(`/soil-info/${popupData.soilType}`)}
            style={{
              marginTop: '10px',
              padding: '8px 12px',
              backgroundColor: '#3a9bdc',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginRight: '8px'
            }}
          >
            ➤ Learn More
          </button>

          <button
            onClick={() => window.open(`https://www.google.com/maps/@${popupData.lat},${popupData.lon},18z/data=!5m1!1e4`, '_blank')}
            style={{
              padding: '8px 12px',
              backgroundColor: '#222',
              color: '#00ffcc',
              border: '1px solid #00ffcc',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🗺️ View on Google Maps
          </button>
        </div>
      )}
    </div>
  );
};

export default EarthGlobe;
