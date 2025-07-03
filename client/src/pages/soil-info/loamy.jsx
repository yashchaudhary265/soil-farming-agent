import React from 'react';
import './soilinfo.css';

const Loamy = () => (
  <div className="soil-page text-white overflow-hidden">

    {/* 🌧️ Rainfall Background Section */}
    <div className="rainfall-background relative w-full overflow-hidden h-[450px]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
      >
        <source src="/videos/raindrop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          🌧️ Rainfall & Loamy Soil
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mt-4">
          Loamy soil absorbs and drains water efficiently. Rainfall ensures balanced moisture,
          enhancing productivity for vegetables and grains.
        </p>
      </div>
    </div>

    {/* 🌱 Soil Information Section */}
    <div
      className="w-full py-16 px-6 text-black backdrop-blur-lg"
      style={{
        backgroundImage: 'url(/images/loamy-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: `'Georgia', cursive, serif`,
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Loamy Soil</h2>

      <ul className="list-disc pl-6 text-lg leading-relaxed">
        <li><strong>Best Crops:</strong> Carrots, Onions, Wheat, Sugarcane, Tomatoes, Peas, Watermelon, Cotton.</li>
        <li><strong>Ideal Weather:</strong> Moderate rainfall and mild temperatures promote excellent plant growth.</li>
        <li><strong>Soil Characteristics:</strong> Balanced mix of sand, silt, and clay; high fertility; excellent drainage and moisture retention.</li>
        <li><strong>Recommended Pesticides/Fertilizers:</strong>
          <ul className="list-disc pl-6">
            <li>Balanced NPK fertilizers</li>
            <li>Farmyard manure</li>
            <li>Vermicompost</li>
            <li>Natural compost teas</li>
          </ul>
        </li>
        <li><strong>Farmer Tips:</strong>
          <ul className="list-disc pl-6">
            <li>Maintain organic matter levels</li>
            <li>Rotate crops for sustainability</li>
            <li>Mulch to retain moisture</li>
            <li>Use slow-release fertilizers</li>
            <li>Prevent over-irrigation</li>
          </ul>
        </li>
        <li><strong>Rainfall Impact:</strong> Supports consistent nutrient absorption without waterlogging or drought stress.</li>
        <li><strong>Initial Investment Required:</strong> ₹20,000 – ₹45,000 per acre depending on crop, irrigation, and organic amendments.</li>
      </ul>
    </div>
  </div>
);

export default Loamy;
