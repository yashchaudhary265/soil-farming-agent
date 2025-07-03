import React from 'react';
import './soilinfo.css';

const Peaty = () => (
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
          🌧️ Rainfall & Peaty Soil
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mt-4">
          Rainfall supports decomposition in peaty soils, enhancing nutrient availability.
          Perfect for root crops and moisture-loving plants.
        </p>
      </div>
    </div>

    {/* 🌱 Soil Info Section */}
    <div
      className="w-full py-16 px-6 text-black backdrop-blur-lg"
      style={{
        backgroundImage: 'url(/images/peaty-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: `'Georgia', cursive, serif`,
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Peaty Soil</h2>

      <ul className="list-disc pl-6 text-lg leading-relaxed">
        <li><strong>Best Crops:</strong> Potatoes, Carrots, Onions, Lettuce, Cabbage, Celery, Spinach, and Strawberries.</li>
        <li><strong>Ideal Weather:</strong> Cool, moist climates with steady rainfall enhance soil moisture and biological activity.</li>
        <li><strong>Soil Characteristics:</strong> Dark, spongy, rich in organic matter, acidic; retains high moisture and nutrients.</li>
        <li><strong>Recommended Pesticides/Fertilizers:</strong>
          <ul className="list-disc pl-6">
            <li>Lime to neutralize acidity</li>
            <li>Bone meal and compost</li>
            <li>Organic nitrogen supplements</li>
            <li>Seaweed foliar sprays</li>
          </ul>
        </li>
        <li><strong>Farmer Tips:</strong>
          <ul className="list-disc pl-6">
            <li>Drain excess water regularly</li>
            <li>Add lime annually to reduce acidity</li>
            <li>Use raised beds for root vegetables</li>
            <li>Rotate crops to maintain fertility</li>
            <li>Mix with sand to improve texture</li>
          </ul>
        </li>
        <li><strong>Rainfall Impact:</strong> Encourages healthy microbial activity and supports water-loving crops like celery and spinach.</li>
        <li><strong>Initial Investment Required:</strong> ₹25,000 – ₹50,000 per acre for drainage setup, soil amendments, and organic inputs.</li>
      </ul>
    </div>
  </div>
);

export default Peaty;
