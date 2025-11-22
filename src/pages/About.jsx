import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Shield, Target, Eye, CheckCircle } from "lucide-react";

const About = () => {
  const strengths = [
    "Industry-Focused Expertise: Deep specialization in AI, Tech, Finance, Marketing, and Legal hiring.",
    "Fast & Accurate Delivery: Shortlisted candidates within days, with high role-fit precision.",
    "Global Talent Network: Strong reach across major hiring markets worldwide.",
    "Quality Screening Process: Rigorous vetting to ensure only relevant, high-caliber profiles.",
    "Client-Centric Approach: Transparent, reliable communication and tailored hiring support.",
  ];

  const values = [
    {
      title: "Integrity",
      desc: "We do what's right. Transparency and honesty guide every interaction.",
    },
    {
      title: "Quality",
      desc: "We deliver excellence. Every profile shared is vetted, relevant, and role-ready.",
    },
    {
      title: "Speed",
      desc: "We move fast, without compromise. Quick turnaround with consistent recruitment accuracy.",
    },
    {
      title: "Partnership",
      desc: "We grow with our clients. Long-term relationships built on trust and results.",
    },
    {
      title: "Confidentiality",
      desc: "Your hiring stays protected. Strict privacy and data security across all processes.",
    },
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
              mb: 2,
            }}
          >
            About <span style={{ color: "#DC143C" }}>Us</span>
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
            Global recruitment consultancy specializing in AI, Technology,
            Finance, Marketing, and Legal roles
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 6, md: 12 }, px: { xs: 2, sm: 3 } }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: "1.25rem", md: "2.25rem" },
          }}
        >
          Who We Are
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#6C757D",
            lineHeight: 1.8,
            mb: 6,
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          InoHire is a global recruitment consultancy specializing in
          high-quality hiring across AI, Technology, Finance, Marketing, and
          Legal roles. We help organizations build strong, future-ready teams
          through fast, accurate, and confidential recruitment solutions. With a
          global talent network and industry-trained recruiters, we bridge the
          gap between exceptional companies and exceptional talent.
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: "1.125rem", md: "1.75rem" },
          }}
        >
          Our Core Strengths
        </Typography>
        <Stack spacing={2} sx={{ mb: 6 }}>
          {strengths.map((strength, idx) => (
            <Box
              key={idx}
              sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
            >
              <CheckCircle
                size={24}
                style={{ color: "#DC143C", flexShrink: 0, marginTop: "2px" }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "#6C757D",
                  lineHeight: 1.8,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                {strength}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
            mb: 6,
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Target size={28} style={{ color: "#DC143C" }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.125rem", md: "1.75rem" },
                }}
              >
                Mission
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#6C757D",
                lineHeight: 1.8,
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              To simplify and strengthen the hiring process for companies
              worldwide by delivering vetted, high-quality talent with speed,
              precision, and trust. We aim to empower organizations with
              exceptional professionals who drive long-term success.
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Eye size={28} style={{ color: "#DC143C" }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.125rem", md: "1.75rem" },
                }}
              >
                Vision
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: "#6C757D",
                lineHeight: 1.8,
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              To become the most trusted global recruitment partner, known for
              excellence, transparency, and unmatched service quality—helping
              businesses scale efficiently through world-class talent.
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: "1.125rem", md: "1.75rem" },
          }}
        >
          Values We Stand For
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3,
            mb: 6,
          }}
        >
          {values.map((value, idx) => (
            <Box
              key={idx}
              sx={{
                p: 3,
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                "&:hover": {
                  borderColor: "#DC143C",
                  boxShadow: "0 4px 12px rgba(220,20,60,0.1)",
                },
                transition: "all 0.3s",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: "#DC143C",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                {value.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#6C757D",
                  fontSize: { xs: "0.8rem", md: "0.875rem" },
                }}
              >
                {value.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            p: 4,
            background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "white",
              mb: 2,
              fontSize: { xs: "1.125rem", md: "1.5rem" },
            }}
          >
            Our Promise
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.8,
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            We promise to deliver a recruitment experience that is seamless,
            reliable, and results-driven. At InoHire, every search is handled
            with professionalism, urgency, and care — ensuring you receive
            top-tier talent that fits your goals, culture, and long-term growth.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
