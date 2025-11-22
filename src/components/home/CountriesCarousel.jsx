"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const CountriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const countries = [
    {
      name: "Europe",
      description:
        "Trusted recruitment support across the EU with compliant cross-border talent.",
      flagCode: "eu",
    },
    {
      name: "United Kingdom",
      description:
        "Specialized hiring solutions for UK businesses with market-aligned professionals.",
      flagCode: "gb",
    },
    {
      name: "United Arab Emirates",
      description:
        "End-to-end recruitment for UAE and GCC companies across all industries.",
      flagCode: "ae",
    },
    {
      name: "Singapore",
      description:
        "Reliable hiring for Singapore's fast-growing tech and business ecosystem.",
      flagCode: "sg",
    },
    {
      name: "United States",
      description:
        "High-quality talent sourcing across the U.S. with compliance expertise.",
      flagCode: "us",
    },
    {
      name: "Canada",
      description:
        "Professional recruitment tailored to the Canadian market and standards.",
      flagCode: "ca",
    },
  ];

  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // Mobile: show 1 item
      if (window.innerWidth < 1024) return 2; // Tablet: show 2 items
      return 3; // Desktop: show 3 items
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = Math.max(0, countries.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset to first item when items per view changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div
      style={{
        paddingTop: "48px",
        paddingBottom: "48px",
        backgroundColor: "#F8F9FA",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Typography
            variant="h2"
            className="mb-4"
            sx={{
              fontWeight: 700,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Hire Across the Globe
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#6C757D",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: { xs: "0.875rem", md: "1.25rem" },
            }}
          >
            Access top legal talent in key markets worldwide
          </Typography>
        </div>

        <div style={{ position: "relative", padding: "0 40px" }}>
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                gap: "16px",
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(-${(currentIndex * (100 + 16)) / itemsPerView}%)`,
              }}
            >
              {countries.map((country, index) => (
                <div
                  key={index}
                  style={{
                    flexShrink: 0,
                    width: `calc(${100 / itemsPerView}% - ${16 * (itemsPerView - 1) / itemsPerView}px)`,
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: "16px",
                      border: "2px solid #E5E7EB",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#DC143C",
                        transform: "translateY(-8px)",
                        boxShadow: "0 16px 32px rgba(0,0,0,0.14)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{ p: { xs: 2.5, md: 3 }, textAlign: "center" }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                        <img 
                          src={`https://flagcdn.com/w80/${country.flagCode}.png`}
                          srcSet={`https://flagcdn.com/w160/${country.flagCode}.png 2x`}
                          alt={`${country.name} flag`}
                          style={{ width: '80px', height: '60px', objectFit: 'cover', border: '1px solid #E5E7EB', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                        />
                      </div>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          fontFamily: "Montserrat, sans-serif",
                          mb: 1,
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                        }}
                      >
                        {country.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6C757D",
                          lineHeight: 1.6,
                          mb: 2,
                          minHeight: { xs: "auto", md: "60px" },
                          fontSize: { xs: "0.8rem", md: "1rem" },
                        }}
                      >
                        {country.description}
                      </Typography>
                      <Button
                        component={Link}
                        href="/countries"
                        variant="outlined"
                        startIcon={<MapPin size={16} />}
                        size="small"
                        sx={{
                          borderColor: "#DC143C",
                          color: "#DC143C",
                          fontWeight: 600,
                          fontSize: { xs: "0.7rem", md: "0.875rem" },
                          py: { xs: 0.5, md: 0.75 },
                          "&:hover": {
                            borderColor: "#B01030",
                            backgroundColor: "rgba(220, 20, 60, 0.05)",
                          },
                        }}
                      >
                        Hire in {country.name}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Always visible */}
          <IconButton
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{
              position: "absolute",
              left: { xs: "0", md: "-20px" },
              width: { xs: "36px", md: "40px" },
              height: { xs: "36px", md: "40px" },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              zIndex: 10,
              "&:hover": {
                backgroundColor: "#DC143C",
                color: "#FFFFFF",
              },
              "&:disabled": {
                opacity: 0.3,
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <ChevronLeft size={18} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            sx={{
              position: "absolute",
              right: { xs: "0", md: "-20px" },
              width: { xs: "36px", md: "40px" },
              height: { xs: "36px", md: "40px" },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              zIndex: 10,
              "&:hover": {
                backgroundColor: "#DC143C",
                color: "#FFFFFF",
              },
              "&:disabled": {
                opacity: 0.3,
                backgroundColor: "#F5F5F5",
              },
            }}
          >
            <ChevronRight size={18} />
          </IconButton>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginTop: "24px",
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: index === currentIndex ? "32px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: index === currentIndex ? "#DC143C" : "#D1D5DB",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CountriesCarousel;
