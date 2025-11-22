import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import {
  Check,
  DollarSign,
  Brain,
  Code,
  TrendingUp,
  Scale,
} from "lucide-react";

const Pricing = () => {
  const industries = [
    {
      icon: <DollarSign size={48} />,
      title: "Finance & Accounting",
      description: "We assist organizations in hiring skilled:",
      roles: [
        "Accountants",
        "Financial Analysts",
        "Auditors",
        "Payroll Specialists",
        "Tax & Compliance Professionals",
      ],
    },
    {
      icon: <Brain size={48} />,
      title: "Artificial Intelligence (AI)",
      description: "We provide vetted AI talent, including:",
      roles: [
        "AI Engineers",
        "Data Scientists",
        "Machine Learning Engineers",
        "MLOps Engineers",
        "AI Product Managers",
      ],
    },
    {
      icon: <Code size={48} />,
      title: "Technology",
      description: "We support companies with key tech roles such as:",
      roles: [
        "Software Developers",
        "Cloud Engineers",
        "DevOps Engineers",
        "Cybersecurity Specialists",
        "Full-Stack Developers",
      ],
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Marketing",
      description: "We help businesses scale their growth teams with:",
      roles: [
        "Digital Marketers",
        "SEO/SEM Specialists",
        "Social Media Managers",
        "Content Strategists",
        "Brand Managers",
      ],
    },
    {
      icon: <Scale size={48} />,
      title: "Legal",
      description: "We deliver experienced legal professionals, from:",
      roles: [
        "Paralegals",
        "Legal Assistants",
        "Corporate Lawyers",
        "Compliance Officers",
        "General Counsel (GC)",
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
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              mb: 3,
            }}
          >
            <span style={{ color: "#DC143C" }}>Industries</span> We Specialize
            In
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255,255,255,0.8)",
              textAlign: "center",
              maxWidth: "900px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            At InoHire, we help companies hire top talent across five
            high-demand sectors, offering end-to-end recruitment support with
            speed, accuracy, and confidentiality.
          </Typography>
        </Container>
      </div>
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 6, md: 12 }, px: { xs: 2, sm: 3 } }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {industries.map((industry, index) => (
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
                <div style={{ color: "#DC143C", marginBottom: "16px" }}>
                  {industry.icon}
                </div>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  {industry.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#495057",
                    mb: 2,
                    fontSize: { xs: "0.875rem", md: "0.95rem" },
                    fontWeight: 500,
                  }}
                >
                  {industry.description}
                </Typography>
                <Stack spacing={1} sx={{ mb: 3 }}>
                  {industry.roles.map((role, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "#DC143C",
                          marginTop: "8px",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6C757D",
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                        }}
                      >
                        {role}
                      </Typography>
                    </div>
                  ))}
                </Stack>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderColor: "#DC143C",
                    color: "#DC143C",
                    "&:hover": {
                      borderColor: "#B01030",
                      backgroundColor: "rgba(220, 20, 60, 0.05)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
