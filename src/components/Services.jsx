'use client';
import React from "react";
import { useSettings } from '@/lib/SettingsContext';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import {
  Briefcase,
  Users,
  Search,
  Building2,
  FileCheck,
  Globe2,
  Zap,
  Target,
} from "lucide-react";

const Services = () => {
  const { calendlyUrl } = useSettings();
  
  const services = [
    {
      icon: <Briefcase size={48} />,
      title: "End-to-End Talent Acquisition",
      description:
        "Complete hiring support from sourcing to final selection, ensuring high-quality, reliable talent for every role.",
      features: [
        "Full-cycle recruitment",
        "Sourcing to onboarding",
        "Quality assurance",
        "Reliable talent delivery",
      ],
    },
    {
      icon: <Target size={48} />,
      title: "Specialist Recruitment",
      description:
        "Targeted hiring for niche and high-demand skill areas backed by deep market expertise and global talent reach.",
      features: [
        "AI & Technology roles",
        "Finance professionals",
        "Marketing experts",
        "Legal specialists",
      ],
    },
    {
      icon: <Search size={48} />,
      title: "Executive Search & Leadership Hiring",
      description:
        "Premium headhunting for CXO, VP, Director, and senior leadership positions with confidentiality and precision.",
      features: [
        "C-suite positions",
        "VP & Director roles",
        "Confidential searches",
        "Leadership assessment",
      ],
    },
    {
      icon: <Globe2 size={48} />,
      title: "Global Recruitment Support",
      description:
        "Cross-border hiring solutions for companies scaling across markets, ensuring compliance, accuracy, and cultural alignment.",
      features: [
        "Multi-country hiring",
        "Compliance management",
        "Cultural fit assessment",
        "Market expansion support",
      ],
    },
    {
      icon: <Zap size={48} />,
      title: "FastTrack Hiring (Urgent Roles)",
      description:
        "Accelerated sourcing and shortlist delivery for roles that require immediate closure.",
      features: [
        "Rapid candidate sourcing",
        "Quick turnaround time",
        "Priority processing",
        "Immediate availability",
      ],
    },
    {
      icon: <Users size={48} />,
      title: "Candidate Sourcing-Only Model",
      description:
        "Pre-screened, role-specific profiles delivered quickly for clients who manage interviews internally.",
      features: [
        "Pre-vetted candidates",
        "Role-specific matching",
        "Fast profile delivery",
        "Self-managed interviews",
      ],
    },
    {
      icon: <Building2 size={48} />,
      title: "Contract & Project-Based Hiring",
      description:
        "Flexible recruitment support for short-term projects, multi-role hiring, or departmental expansions.",
      features: [
        "Short-term contracts",
        "Project staffing",
        "Bulk hiring support",
        "Flexible arrangements",
      ],
    },
    {
      icon: <FileCheck size={48} />,
      title: "Consultation & Hiring Strategy",
      description:
        "Expert guidance on talent planning, market insights, job role structuring, and hiring process optimization.",
      features: [
        "Talent planning",
        "Market intelligence",
        "Role structuring",
        "Process optimization",
      ],
    },
  ];

  return (
    <div>
      <div
        style={{
          paddingTop: "64px",
          paddingBottom: "64px",
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <div style={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 800,
                fontFamily: "Montserrat, sans-serif",
                color: "white",
                mb: 3,
              }}
            >
              <span style={{ color: "#DC143C" }}>Services</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.6,
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              Expert Recruitment Solutions for Modern Businesses
            </Typography>
          </div>
        </Container>
      </div>

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 6, md: 12 }, px: { xs: 2, sm: 3 } }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
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
              <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                <div
                  style={{
                    color: "#DC143C",
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
                    mb: 2,
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
                    mb: 3,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {service.description}
                </Typography>
                <Stack spacing={1} sx={{ mb: 3 }}>
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#DC143C",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#495057",
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                        }}
                      >
                        {feature}
                      </Typography>
                    </div>
                  ))}
                </Stack>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  sx={{
                    borderColor: "#DC143C",
                    color: "#DC143C",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "#B01030",
                      backgroundColor: "rgba(220, 20, 60, 0.05)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: "1.25rem", md: "1.75rem" },
            }}
          >
            Ready to find your perfect talent?
          </Typography>
          <Button
            component="a"
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#DC143C",
              color: "#FFFFFF",
              fontWeight: 600,
              px: { xs: 3, md: 5 },
              py: { xs: 1.25, md: 1.5 },
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#B01030",
              },
            }}
          >
            Schedule Call
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Services;