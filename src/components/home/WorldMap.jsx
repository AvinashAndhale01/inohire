import { useState } from 'react';
import { MapPin } from 'lucide-react';

const WorldMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = [
    { name: 'Europe', x: '48%', y: '30%', color: '#DC143C' },
    { name: 'UK', x: '46%', y: '28%', color: '#DC143C' },
    { name: 'UAE', x: '58%', y: '45%', color: '#DC143C' },
    { name: 'Singapore', x: '72%', y: '52%', color: '#DC143C' },
    { name: 'USA', x: '22%', y: '38%', color: '#DC143C' },
    { name: 'Canada', x: '20%', y: '25%', color: '#DC143C' },
  ];

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Simplified World Map SVG */}
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Continents simplified paths */}
        <path
          d="M 100 150 Q 150 120 200 140 T 300 150 Q 350 160 380 140 L 400 180 Q 380 200 350 190 T 250 200 Q 200 210 150 190 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.5"
        />
        <path
          d="M 450 180 Q 500 160 550 170 T 650 180 Q 680 190 700 210 L 680 250 Q 650 240 600 245 T 500 240 Q 470 230 450 220 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.5"
        />
        <path
          d="M 150 250 Q 180 230 220 240 T 280 260 L 260 300 Q 230 290 200 285 T 150 280 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>

      {/* Region Markers */}
      {regions.map((region) => (
        <div
          key={region.name}
          className="absolute cursor-pointer transition-all duration-300"
          style={{
            left: region.x,
            top: region.y,
            transform: 'translate(-50%, -50%)',
          }}
          onMouseEnter={() => setHoveredRegion(region.name)}
          onMouseLeave={() => setHoveredRegion(null)}
        >
          <div className="relative">
            {/* Pulsing Circle */}
            <div
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                backgroundColor: region.color,
                opacity: 0.4,
                width: '24px',
                height: '24px',
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
              }}
            />
            
            {/* Main Pin */}
            <div
              className="relative z-10 transition-transform duration-300"
              style={{
                transform: hoveredRegion === region.name ? 'scale(1.3)' : 'scale(1)',
              }}
            >
              <MapPin
                size={24}
                fill={region.color}
                color={region.color}
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
              />
            </div>

            {/* Tooltip */}
            {hoveredRegion === region.name && (
              <div
                className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-lg shadow-lg whitespace-nowrap z-20 fade-in"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                {region.name}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Connecting Lines (optional decorative) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DC143C" stopOpacity="0" />
            <stop offset="50%" stopColor="#DC143C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#DC143C" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WorldMap;