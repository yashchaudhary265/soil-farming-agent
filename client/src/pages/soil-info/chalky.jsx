import React from 'react';
import './soilinfo.css';

const Chalky = () => (
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
        <h2 className="text-4xl md:text-5xl font-bold text-white ">
          🌧️ Rainfall: Lifeline for Chalky Soil
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mt-4 ">
          Rainfall enhances moisture retention and nutrient flow in chalky soils.
          Essential for crops like lavender, grapes, and barley.
        </p>
      </div>
    </div>

    {/* 🏞️ Soil Information Section */}
    <div
  className="soil-info-section w-full py-16 px-6 backdrop-blur-lg"
  style={{
    backgroundImage: 'url(/images/chalky-bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

      <h2 className="text-4xl md:text-5xl font-bold mb-8 typing-effect">Chalky Soil</h2>

      <ul className="list-disc pl-6 text-lg leading-relaxed">
        <li><strong>Best Crops:</strong> Spinach, Beets, Barley, Cabbage, Lilac, Lavender, Grapes, Sweet Corn, Broad Beans, Gooseberries.</li>
        <li><strong>Ideal Weather:</strong> Chalky soils thrive in regions with moderate to high rainfall to balance rapid drainage.</li>
        <li><strong>Soil Characteristics:</strong> Alkaline, high in calcium carbonate, light-colored, stony, low nutrient retention.</li>
        <li><strong>Recommended Pesticides/Fertilizers:</strong>
          <ul className="list-disc pl-6">
            <li>Seaweed-based foliar feeds</li>
            <li>Iron chelates for chlorosis</li>
            <li>Composted/green manure</li>
            <li>Bone meal, fish emulsion</li>
          </ul>
        </li>
        <li><strong>Farmer Tips:</strong>
          <ul className="list-disc pl-6">
            <li>Regularly add organic matter</li>
            <li>Use drip irrigation</li>
            <li>Pick alkaline-tolerant crops</li>
            <li>Use acidifying mulches</li>
            <li>Aerate topsoil yearly</li>
          </ul>
        </li>
        <li><strong>Rainfall Impact:</strong> Crops like barley, grapes, and lavender benefit from rainfall as it helps compensate for chalky soil's poor moisture retention.</li>
        <li><strong>Initial Investment Required:</strong> ₹30,000 – ₹60,000 per acre depending on irrigation setup, soil amendment needs, and crop selection.</li>
      </ul>
    </div>
  </div>
);

export default Chalky;
