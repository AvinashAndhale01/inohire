"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";

const WorldMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = [
    { name: "Europe", x: "48%", y: "28%", color: "#DC143C" },
    { name: "UK", x: "46.5%", y: "26%", color: "#DC143C" },
    { name: "UAE", x: "56%", y: "42%", color: "#DC143C" },
    { name: "Singapore", x: "72%", y: "50%", color: "#DC143C" },
    { name: "USA", x: "22%", y: "38%", color: "#DC143C" },
    { name: "Canada", x: "20%", y: "22%", color: "#DC143C" },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* {regions.map((region) => (
        <div
          key={region.name}
          style={{
            position: "absolute",
            left: region.x,
            top: region.y,
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setHoveredRegion(region.name)}
          onMouseLeave={() => setHoveredRegion(null)}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                backgroundColor: region.color,
                opacity: 0.4,
                width: "24px",
                height: "24px",
                transform: "translate(-50%, -50%)",
                left: "50%",
                top: "50%",
                animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 10,
                transition: "transform 0.3s ease",
                transform:
                  hoveredRegion === region.name ? "scale(1.3)" : "scale(1)",
              }}
            >
              <MapPin
                size={24}
                fill={region.color}
                color={region.color}
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
              />
            </div>

            {hoveredRegion === region.name && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  marginTop: "8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  color: "black",
                  padding: "4px 12px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  whiteSpace: "nowrap",
                  zIndex: 20,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                {region.name}
              </div>
            )}
          </div>
        </div>
      ))} */}

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WorldMap;
