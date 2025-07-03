// src/pages/UserHome.jsx

import React from 'react';

function UserHome() {
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
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>👨‍🌾 User Home</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Welcome! Explore soil details and distributor info here.
      </p>

      {/* Soil Info Section */}
      <div
        style={{
          backgroundColor: '#1e1e1e',
          padding: '25px',
          borderRadius: '10px',
          marginBottom: '30px',
          boxShadow: '0 0 10px rgba(0, 255, 170, 0.3)'
        }}
      >
        <h2 style={{ borderBottom: '1px solid #00ffaa', paddingBottom: '10px', marginBottom: '15px' }}>
          🌱 Soil Information
        </h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Soil Type:</strong> Sandy Loam</li>
          <li><strong>Best Crops:</strong> Wheat, Cotton, Sugarcane</li>
          <li><strong>PH Level:</strong> 6.5 – 7.5</li>
          <li><strong>Fertility:</strong> Moderate to High</li>
        </ul>
        <ul style={{ lineHeight: '1.8' }}>
  <li><strong>Soil Type:</strong> Clay</li>
  <li><strong>Best Crops:</strong> Rice, Broccoli, Cabbage</li>
  <li><strong>PH Level:</strong> 5.5 – 6.5</li>
  <li><strong>Fertility:</strong> High</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Soil Type:</strong> Silty</li>
  <li><strong>Best Crops:</strong> Corn, Wheat, Peas</li>
  <li><strong>PH Level:</strong> 6.0 – 7.0</li>
  <li><strong>Fertility:</strong> Very High</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Soil Type:</strong> Peaty</li>
  <li><strong>Best Crops:</strong> Salad greens, Root vegetables</li>
  <li><strong>PH Level:</strong> 3.5 – 5.0</li>
  <li><strong>Fertility:</strong> Extremely High (acidic)</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Soil Type:</strong> Loamy</li>
  <li><strong>Best Crops:</strong> Most crops (ideal): Vegetables, Grains, Fruits</li>
  <li><strong>PH Level:</strong> 6.0 – 7.5</li>
  <li><strong>Fertility:</strong> Very High</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Soil Type:</strong> Chalky</li>
  <li><strong>Best Crops:</strong> Barley, Beets, Spinach</li>
  <li><strong>PH Level:</strong> 7.1 – 8.0</li>
  <li><strong>Fertility:</strong> Low to Moderate (alkaline)</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Soil Type:</strong> Red Soil</li>
  <li><strong>Best Crops:</strong> Groundnut, Millets, Cotton</li>
  <li><strong>PH Level:</strong> 5.5 – 6.5</li>
  <li><strong>Fertility:</strong> Moderate</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Soil Type:</strong> Black Soil</li>
  <li><strong>Best Crops:</strong> Cotton, Soybean, Sunflower</li>
  <li><strong>PH Level:</strong> 6.2 – 8.5</li>
  <li><strong>Fertility:</strong> High in nutrients and moisture retention</li>
</ul>

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
          🏢 Distributor Details
        </h2>
        <ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> AgroStar</li>
  <li><strong>Location:</strong> Maharashtra, India</li>
  <li><strong>Contact:</strong> +91-8600000600</li>
  <li><strong>Supplies:</strong> Seeds, Fertilizers, Crop Protection</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> DeHaat</li>
  <li><strong>Location:</strong> Bihar, India</li>
  <li><strong>Contact:</strong> +91-9264470707</li>
  <li><strong>Supplies:</strong> Seeds, Soil Testing, Crop Advisory</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> BigHaat</li>
  <li><strong>Location:</strong> Karnataka, India</li>
  <li><strong>Contact:</strong> +91-8047180051</li>
  <li><strong>Supplies:</strong> Seeds, Nutrients, Sprayers</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> Rallis India Ltd (Tata)</li>
  <li><strong>Location:</strong> Pan India</li>
  <li><strong>Contact:</strong> +91-2225622700</li>
  <li><strong>Supplies:</strong> Agrochemicals, Seeds, Crop Care</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> Terra Agro Biotech</li>
  <li><strong>Location:</strong> Gujarat, India</li>
  <li><strong>Contact:</strong> +91-9924344432</li>
  <li><strong>Supplies:</strong> Organic Fertilizers, Bio-Stimulants</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> Godrej Agrovet</li>
  <li><strong>Location:</strong> Mumbai, India</li>
  <li><strong>Contact:</strong> +91-2266548000</li>
  <li><strong>Supplies:</strong> Animal Feed, Pesticides, Fertilizers</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> Krishak Bharati Co-op (KRIBHCO)</li>
  <li><strong>Location:</strong> Noida, India</li>
  <li><strong>Contact:</strong> +91-120-2411501</li>
  <li><strong>Supplies:</strong> Urea, DAP, Biofertilizers</li>
</ul>
<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> UPL Ltd</li>
  <li><strong>Location:</strong> Mumbai, India</li>
  <li><strong>Contact:</strong> +91-2226414200</li>
  <li><strong>Supplies:</strong> Crop Protection, Seeds, Fertilizers</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> Coromandel International</li>
  <li><strong>Location:</strong> Hyderabad, India</li>
  <li><strong>Contact:</strong> +91-4023216000</li>
  <li><strong>Supplies:</strong> Fertilizers, Crop Protection, Specialty Nutrients</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> IFFCO (Indian Farmers Fertiliser Cooperative)</li>
  <li><strong>Location:</strong> New Delhi, India</li>
  <li><strong>Contact:</strong> +91-1126543000</li>
  <li><strong>Supplies:</strong> Urea, DAP, NPK Fertilizers</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> Bayer CropScience India</li>
  <li><strong>Location:</strong> Thane, Maharashtra</li>
  <li><strong>Contact:</strong> +91-2225325555</li>
  <li><strong>Supplies:</strong> Seeds, Fungicides, Insecticides</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> National Seeds Corporation</li>
  <li><strong>Location:</strong> New Delhi, India</li>
  <li><strong>Contact:</strong> +91-1125833103</li>
  <li><strong>Supplies:</strong> Certified Seeds, Pulses, Oilseeds</li>
</ul>

<ul style={{ lineHeight: '1.8' }}>
  <li><strong>Distributor Name:</strong> Kaveri Seed Company</li>
  <li><strong>Location:</strong> Secunderabad, Telangana</li>
  <li><strong>Contact:</strong> +91-4027780099</li>
  <li><strong>Supplies:</strong> Hybrid Seeds, Vegetables, Corn</li>
</ul>


      </div>
    </div>
  );
}

export default UserHome;
