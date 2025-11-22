"use client";
import React from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {
  Briefcase,
  Users,
  Search,
  Globe2,
  ArrowRight,
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: <Briefcase size={40} />,
      title: "End-to-End Talent Acquisition",
      description:
        "Complete hiring support from sourcing to final selection, ensuring high-quality, reliable talent for every role.",
      color: "#DC143C",
    },
    {
      icon: <Users size={40} />,
      title: "Specialist Recruitment",
      description:
        "Targeted hiring for niche and high-demand skill areas backed by deep market expertise and global talent reach.",
      color: "#FF4757",
    },
    {
      icon: <Search size={40} />,
      title: "Executive Search & Leadership Hiring",
      description:
        "Premium headhunting for CXO, VP, Director, and senior leadership positions with confidentiality and precision.",
      color: "#DC143C",
    },
    {
      icon: <Globe2 size={40} />,
      title: "Global Recruitment Support",
      description:
        "Cross-border hiring solutions for companies scaling across markets, ensuring compliance, accuracy, and cultural alignment.",
      color: "#FF4757",
    },
  ];

  return (
    <div
      style={{
        paddingTop: "30px",
        paddingBottom: "30px",
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: "1.75rem", md: "2.75rem" },
              mb: { xs: 1.5, md: 2 },
            }}
          >
            Our Services
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
            Comprehensive legal recruitment solutions tailored to your
            organization's unique needs
          </Typography>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                height: "100%",
                borderRadius: "16px",
                border: "1px solid #E5E7EB",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: service.color,
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 32px rgba(0,0,0,0.14)",
                  "& .service-icon": {
                    color: service.color,
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                <div
                  className="service-icon mb-4 transition-all duration-300"
                  style={{
                    color: "#000000",
                    marginBottom: "12px",
                    fontSize: "0",
                  }}
                >
                  {service.icon}
                </div>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    mb: 1,
                    fontSize: { xs: "1.125rem", md: "1.5rem" },
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6C757D",
                    lineHeight: 1.7,
                    mb: 2,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {service.description}
                </Typography>
                <Button
                  component={Link}
                  href="/services"
                  endIcon={<ArrowRight size={16} />}
                  sx={{
                    color: service.color,
                    fontWeight: 600,
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                    "&:hover": {
                      backgroundColor: `${service.color}10`,
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <Button
            variant="outlined"
            component={Link}
            href="/services"
            sx={{
              borderColor: "#000000",
              color: "#000000",
              fontWeight: 600,
              px: { xs: 3, md: 4 },
              py: { xs: 1, md: 1.5 },
              fontSize: { xs: "0.875rem", md: "1rem" },
              borderRadius: "8px",
              "&:hover": {
                borderColor: "#DC143C",
                backgroundColor: "rgba(220, 20, 60, 0.05)",
                color: "#DC143C",
              },
            }}
          >
            View All Services
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ServicesOverview;
