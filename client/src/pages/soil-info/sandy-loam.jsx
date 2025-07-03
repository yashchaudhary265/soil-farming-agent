import React from 'react';
import './soilinfo.css';

const SandyLoam = () => (
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
          🌧️ Rainfall & Sandy Loam Soil
        </h2>
        <p className="text-lg md:text-xl text-white max-w-3xl mt-4">
          Rainfall supports deep-rooted crops in sandy loam by enhancing water penetration and nutrient movement.
        </p>
      </div>
    </div>

    {/* 🌾 Soil Info Section */}
    <div
      className="w-full py-16 px-6 text-black backdrop-blur-lg"
      style={{
        backgroundImage: 'url(/images/sandyloam-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: `'Georgia', cursive, serif`,
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Sandy Loam Soil</h2>

      <ul className="list-disc pl-6 text-lg leading-relaxed">
        <li><strong>Best Crops:</strong> Tomatoes, Peppers, Carrots, Onions, Lettuce, Beans, Cucumbers, and Peanuts.</li>
        <li><strong>Ideal Weather:</strong> Warm and moderately wet climates; rainfall helps overcome its quick-draining nature.</li>
        <li><strong>Soil Characteristics:</strong> Light, well-aerated, drains quickly, low in organic matter but easy to work with.</li>
        <li><strong>Recommended Pesticides/Fertilizers:</strong>
          <ul className="list-disc pl-6">
            <li>Composted manure and mulch</li>
            <li>Slow-release nitrogen fertilizers</li>
            <li>Potash and phosphate-rich feed</li>
            <li>Microbial soil activators</li>
          </ul>
        </li>
        <li><strong>Farmer Tips:</strong>
          <ul className="list-disc pl-6">
            <li>Add compost regularly for moisture retention</li>
            <li>Use drip irrigation to avoid runoff</li>
            <li>Plant cover crops to prevent erosion</li>
            <li>Rotate crops to maintain fertility</li>
            <li>Mulch heavily during dry spells</li>
          </ul>
        </li>
        <li><strong>Rainfall Impact:</strong> Deepens root access and boosts nutrient mobility for vegetables and legumes.</li>
        <li><strong>Initial Investment Required:</strong> ₹20,000 – ₹45,000 per acre for organic enrichment, irrigation, and drip system setup.</li>
      </ul>
    </div>
  </div>
);

export default SandyLoam;
