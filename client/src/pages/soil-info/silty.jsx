import React from 'react';
import './soilinfo.css';

const Silty = () => (
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
          🌧️ Rainfall & Silty Soil
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mt-4">
          Rainfall enhances the moisture-holding ability of silty soil, supporting crops that thrive in fertile, damp environments.
        </p>
      </div>
    </div>

    {/* 🌱 Soil Information Section */}
    <div
      className="w-full py-16 px-6 text-black backdrop-blur-lg"
      style={{
        backgroundImage: 'url(/images/silty-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: `'Georgia', cursive, serif`,
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Silty Soil</h2>

      <ul className="list-disc pl-6 text-lg leading-relaxed">
        <li><strong>Best Crops:</strong> Rice, Wheat, Peas, Onions, Sugarcane, Soybeans, and Potatoes.</li>
        <li><strong>Ideal Weather:</strong> Regions with consistent rainfall or irrigation; moist conditions suit silty texture well.</li>
        <li><strong>Soil Characteristics:</strong> Smooth, fertile, high in nutrients and moisture retention, slightly compact.</li>
        <li><strong>Recommended Pesticides/Fertilizers:</strong>
          <ul className="list-disc pl-6">
            <li>Well-rotted manure</li>
            <li>Potassium and phosphate fertilizers</li>
            <li>Compost teas and micronutrient mixes</li>
            <li>Organic mulches for moisture control</li>
          </ul>
        </li>
        <li><strong>Farmer Tips:</strong>
          <ul className="list-disc pl-6">
            <li>Avoid overwatering to prevent waterlogging</li>
            <li>Apply organic mulch regularly</li>
            <li>Ensure proper drainage planning</li>
            <li>Use raised beds for vegetables</li>
            <li>Aerate seasonally to reduce compaction</li>
          </ul>
        </li>
        <li><strong>Rainfall Impact:</strong> Encourages deep-root penetration and nutrient availability for paddy and tuber crops.</li>
        <li><strong>Initial Investment Required:</strong> ₹25,000 – ₹50,000 per acre depending on irrigation layout and soil conditioning.</li>
      </ul>
    </div>
  </div>
);

export default Silty;
