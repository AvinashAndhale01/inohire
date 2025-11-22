'use client';
import { useSettings } from '@/lib/SettingsContext';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import {
  Target,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

const Partner = () => {
  const { calendlyUrl } = useSettings();
  
  const advantages = [
    {
      icon: Target,
      title: "Specialized Legal Focus",
      desc: "Unlike generic recruitment firms, our expertise is 100% within the legal industry. We understand the difference between a litigation associate and a compliance counsel.",
    },
    {
      icon: Globe,
      title: "Global Reach with Local Precision",
      desc: "Networks spanning Europe, the UK, UAE, Singapore, USA, and Canada with in-region experts ensuring compliance with country-specific hiring norms.",
    },
    {
      icon: Users,
      title: "Tailored Recruitment Solutions",
      desc: "Bespoke hiring models: retained, contingency, or hybrid — adapting to your volume, urgency, and budget.",
    },
    {
      icon: Shield,
      title: "Confidential & Ethical Search",
      desc: "Partner-level and senior counsel placements require discretion. We operate under strict confidentiality protocols.",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      desc: "Technology-driven screening and legal domain expertise reduce time-to-hire by up to 40%.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      desc: "9 out of 10 clients re-engage with us within the first year. Our track record speaks for itself.",
    },
    {
      icon: Award,
      title: "Value Transparency",
      desc: "Cost-per-Hire, Cost-per-Resource, and Hybrid pricing models. No hidden fees — just predictable billing.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery Call",
      desc: "We understand your firm's structure, culture, and specific legal requirements",
    },
    {
      step: "2",
      title: "Search Strategy Design",
      desc: "We develop a customized sourcing and screening plan",
    },
    {
      step: "3",
      title: "Talent Shortlisting",
      desc: "Candidates are pre-assessed for legal expertise, compliance, and culture fit",
    },
    {
      step: "4",
      title: "Interview & Feedback",
      desc: "We coordinate interviews, manage feedback, and ensure a seamless experience",
    },
    {
      step: "5",
      title: "Offer & Onboarding",
      desc: "End-to-end guidance through contract, relocation, and onboarding",
    },
  ];

  const benefits = [
    "A dedicated Account Manager for your region",
    "Access to pre-vetted, active legal candidates across continents",
    "Continuous hiring support for new and replacement roles",
    "Market insights and salary benchmarking reports",
    "Priority access to international legal job fairs and talent networks",
  ];

  return (
    <Box>
      <Box
        sx={{
          py: { xs: 5, md: 9 },
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              mb: 1.5,
            }}
          >
            Partner With <span style={{ color: "#DC143C" }}>Us</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.8)",
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            The Strategic Advantage of Partnering with LegalRecruit
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 6, md: 12 }, px: { xs: 2, sm: 3 } }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#6C757D",
            lineHeight: 1.8,
            mb: 6,
            fontSize: { xs: "0.9rem", md: "1.1rem" },
          }}
        >
          Partnering with LegalRecruit means gaining access to an elite network
          of legal professionals and a recruitment team that understands the
          nuances of the legal ecosystem — from regulatory shifts to regional
          licensing challenges. We don't just provide candidates; we deliver
          recruitment intelligence — a complete, insight-driven hiring
          experience.
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: "1.25rem", md: "2.25rem" },
          }}
        >
          Why Leading Law Firms & Corporates Choose Us
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4,
            mb: 8,
          }}
        >
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Box
                key={idx}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  "&:hover": {
                    borderColor: "#DC143C",
                    boxShadow: "0 4px 12px rgba(220,20,60,0.1)",
                    transform: "translateY(-4px)",
                  },
                  transition: "all 0.3s",
                }}
              >
                <Icon
                  size={28}
                  style={{ color: "#DC143C", marginBottom: "12px" }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6C757D",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.8rem", md: "0.875rem" },
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: "1.25rem", md: "2.25rem" },
          }}
        >
          Our Partnership Process
        </Typography>
        <Stack spacing={3} sx={{ mb: 8 }}>
          {process.map((item, idx) => (
            <Box
              key={idx}
              sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}
            >
              <Box
                sx={{
                  width: { xs: "40px", md: "48px" },
                  height: { xs: "40px", md: "48px" },
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #DC143C, #B01030)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  flexShrink: 0,
                }}
              >
                {item.step}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: { xs: "1rem", md: "1.25rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6C757D",
                    fontSize: { xs: "0.8rem", md: "0.875rem" },
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        <Box
          sx={{
            p: { xs: 3, md: 5 },
            background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            borderRadius: "16px",
            mb: 8,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              textAlign: "center",
              fontSize: { xs: "1.25rem", md: "1.75rem" },
            }}
          >
            Our Partner Commitment
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#DC143C",
              textAlign: "center",
              mb: 3,
              fontStyle: "italic",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            "Your success is our benchmark."
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#6C757D",
              lineHeight: 1.8,
              mb: 4,
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            We view each partnership as an extension of your brand. Our
            consultants act as ambassadors of your organization in the talent
            market, ensuring that every candidate interaction reflects
            professionalism, confidentiality, and respect.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            By partnering with us, you gain:
          </Typography>
          <Stack spacing={1.5}>
            {benefits.map((benefit, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#DC143C",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6C757D",
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {benefit}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "1.25rem", md: "1.75rem" },
            }}
          >
            Let's build your next legal team — together.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            <Button
              component="a"
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#DC143C",
                px: { xs: 3, md: 4 },
                py: { xs: 1.25, md: 1.5 },
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                "&:hover": { backgroundColor: "#B01030" },
              }}
            >
              Schedule Call
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#DC143C",
                color: "#DC143C",
                px: { xs: 3, md: 4 },
                py: { xs: 1.25, md: 1.5 },
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                "&:hover": {
                  borderColor: "#B01030",
                  backgroundColor: "rgba(220,20,60,0.05)",
                },
              }}
            >
              Become a Partner
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Partner;