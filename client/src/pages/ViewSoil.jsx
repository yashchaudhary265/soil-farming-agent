import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewSoil = () => {
  const [soilData, setSoilData] = useState([]);

  useEffect(() => {
    // Replace with your real backend endpoint
    axios.get('http://localhost:5000/api/soil')
      .then(response => setSoilData(response.data))
      .catch(error => console.error("Error fetching soil data:", error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🌱 Soil Details</h2>
      <table style={{ width: '100%', color: 'white', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Soil Type</th>
            <th>Fertility</th>
            <th>Recommended Crops</th>
          </tr>
        </thead>
        <tbody>
          {soilData.map((soil, index) => (
            <tr key={index}>
              <td>{soil.lat}</td>
              <td>{soil.lon}</td>
              <td>{soil.soilType}</td>
              <td>{soil.fertility}</td>
              <td>{soil.cropRecommendations.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSoil;
