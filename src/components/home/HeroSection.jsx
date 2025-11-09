import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { Shield, Award } from "lucide-react";
import WorldMap from "./WorldMap";
import heroimage from "../images/heroimage.jpg";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          backgroundImage: `url(${heroimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 10, py: { xs: 8, md: 12 } }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div style={{ color: "white" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 800,
                fontFamily: "Montserrat, sans-serif",
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Global Legal Hiring{" "}
              <span style={{ color: "#DC143C" }}>Made Simple</span>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: 400,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
                mb: 4,
              }}
            >
              Hire vetted lawyers, paralegals and compliance experts across
              Europe, the UK, UAE, Singapore, USA & Canada.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{ mb: 4, flexWrap: "wrap", gap: 1.5 }}
            >
              <Chip
                icon={<Shield size={18} />}
                label="GDPR Compliant"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              />
              <Chip
                icon={<Award size={18} />}
                label="ISO Certified"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              />
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 1 }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                size="large"
                sx={{
                  backgroundColor: "#DC143C",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#B01030",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 16px rgba(220, 20, 60, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Book a Consultation
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/partner"
                size="large"
                sx={{
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  borderRadius: "8px",
                  "&:hover": {
                    borderColor: "#DC143C",
                    backgroundColor: "rgba(220, 20, 60, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Partner With Us
              </Button>
            </Stack>
          </div>

          <div>
            <WorldMap />
          </div>
        </div>
      </Container>

      <div
        style={{
          position: "absolute",
          top: "80px",
          right: "40px",
          width: "288px",
          height: "288px",
          backgroundColor: "#DC143C",
          borderRadius: "50%",
          opacity: 0.1,
          filter: "blur(64px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "40px",
          width: "384px",
          height: "384px",
          backgroundColor: "#DC143C",
          borderRadius: "50%",
          opacity: 0.1,
          filter: "blur(64px)",
        }}
      />
    </div>
  );
};

export default HeroSection;
