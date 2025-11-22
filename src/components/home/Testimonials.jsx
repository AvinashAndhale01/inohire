"use client";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "General Counsel",
      company: "TalentHive Solutions",
      image: "https://i.pravatar.cc/150?img=5",
      quote:
        "LegalRecruit helped us build our entire legal department from scratch. Their understanding of our needs and the quality of candidates they presented was exceptional.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Managing Partner",
      company: "StaffSculpt",
      image: "https://i.pravatar.cc/150?img=12",
      quote:
        "We needed specialized compliance expertise for our expansion into Asia. The team delivered perfectly matched candidates within weeks. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "HR Director",
      company: "SkillMint",
      image: "https://i.pravatar.cc/150?img=9",
      quote:
        "Professional, responsive, and results-driven. LegalRecruit understands the legal recruitment landscape better than anyone else we have worked with.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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
            Client Success Stories
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#6C757D",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Hear from organizations who have transformed their legal teams with
            our help
          </Typography>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: "896px",
            margin: "0 auto",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card
            sx={{
              borderRadius: { xs: "16px", md: "24px" },
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              border: "1px solid #E5E7EB",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 6 } }}>
              <div
                style={{
                  display: "flex",
                  alignItems: isMobile ? "center" : "flex-start",
                  gap: "16px",
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    alignSelf: isMobile ? "center" : "flex-start",
                  }}
                >
                  <Avatar
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    sx={{
                      width: { xs: 64, md: 80 },
                      height: { xs: 64, md: 80 },
                      border: "4px solid #DC143C",
                    }}
                  />
                </div>

                <div
                  style={{
                    flexGrow: 1,
                    textAlign: isMobile ? "center" : "left",
                    width: "100%",
                  }}
                >
                  <Quote
                    size={isMobile ? 24 : 32}
                    style={{
                      color: "#DC143C",
                      marginBottom: "12px",
                      opacity: 0.3,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#000000",
                      lineHeight: 1.8,
                      mb: 3,
                      fontStyle: "italic",
                      fontSize: { xs: "0.95rem", md: "1.25rem" },
                    }}
                  >
                    "{testimonials[currentIndex].quote}"
                  </Typography>

                  <div>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: { xs: "1rem", md: "1.25rem" },
                      }}
                    >
                      {testimonials[currentIndex].name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#6C757D",
                      }}
                    >
                      {testimonials[currentIndex].role} at{" "}
                      {testimonials[currentIndex].company}
                    </Typography>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      marginTop: "12px",
                      justifyContent: isMobile ? "center" : "flex-start",
                    }}
                  >
                    {Array.from({
                      length: testimonials[currentIndex].rating,
                    }).map((_, i) => (
                      <span
                        key={i}
                        style={{ color: "#FFC107", fontSize: "1.25rem" }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons - Always visible */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: "0", md: "-60px" },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              width: { xs: "36px", md: "40px" },
              height: { xs: "36px", md: "40px" },
              zIndex: 10,
              "&:hover": {
                backgroundColor: "#DC143C",
                color: "#FFFFFF",
              },
            }}
          >
            <ChevronLeft size={18} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: "0", md: "-60px" },
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              width: { xs: "36px", md: "40px" },
              height: { xs: "36px", md: "40px" },
              zIndex: 10,
              "&:hover": {
                backgroundColor: "#DC143C",
                color: "#FFFFFF",
              },
            }}
          >
            <ChevronRight size={18} />
          </IconButton>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "6px",
              marginTop: "24px",
            }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? "32px" : "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  backgroundColor:
                    index === currentIndex ? "#DC143C" : "#D1D5DB",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
