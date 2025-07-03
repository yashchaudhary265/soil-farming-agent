import React from 'react';
import './soilinfo.css';

const Clay = () => (
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
          🌧️ Rainfall & Clay Soil
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mt-4">
          Consistent rainfall prevents cracking and hardening in clay soils.
          Crops like rice and broccoli thrive in moist clay-rich fields.
        </p>
      </div>
    </div>

    {/* 🪨 Soil Information Section */}
    <div
      className="w-full py-16 px-6 text-black backdrop-blur-lg"
      style={{
        backgroundImage: 'url(/images/clay-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: `'Georgia', cursive, serif`,
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Clay Soil</h2>

      <ul className="list-disc pl-6 text-lg leading-relaxed">
        <li><strong>Best Crops:</strong> Rice, Broccoli, Lettuce, Kale, Cabbage, Sunflower, Peas, Beans.</li>
        <li><strong>Ideal Weather:</strong> Regions with steady rainfall are perfect for moisture-heavy clay soil farming.</li>
        <li><strong>Soil Characteristics:</strong> Fine particles, sticky texture when wet, cracks when dry, high nutrient retention, poor drainage.</li>
        <li><strong>Recommended Pesticides/Fertilizers:</strong>
          <ul className="list-disc pl-6">
            <li>Potassium-rich fertilizers</li>
            <li>Composted manure</li>
            <li>Gypsum to reduce compaction</li>
            <li>Neem oil-based pesticides</li>
          </ul>
        </li>
        <li><strong>Farmer Tips:</strong>
          <ul className="list-disc pl-6">
            <li>Avoid overwatering</li>
            <li>Use raised beds</li>
            <li>Improve aeration with compost</li>
            <li>Plant cover crops in offseason</li>
            <li>Schedule irrigation carefully</li>
          </ul>
        </li>
        <li><strong>Rainfall Impact:</strong> Keeps clay soft and workable, preventing crusting that can damage plant roots.</li>
        <li><strong>Initial Investment Required:</strong> ₹25,000 – ₹50,000 per acre depending on drainage enhancements and soil amendments.</li>
      </ul>
    </div>
  </div>
);

export default Clay;
