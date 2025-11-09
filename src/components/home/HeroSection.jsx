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
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100vw",
        background:
          "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
        paddingTop: "64px",
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
        sx={{ position: "relative", zIndex: 10, py: { xs: 4, md: 12 }, px: { xs: 1.5, sm: 3 } }}
      >
        <style>{`
          @media (min-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr 1fr !important; }
            .worldmap-container { display: block !important; }
          }
        `}</style>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "64px", alignItems: "center" }}>
            <div style={{ color: "white", maxWidth: "100%" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 800,
                fontFamily: "Montserrat, sans-serif",
                mb: { xs: 1.5, md: 3 },
                lineHeight: 1.2,
              }}
            >
              Global Legal Hiring{" "}
              <span style={{ color: "#DC143C" }}>Made Simple</span>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1.1rem", md: "1.3rem" },
                fontWeight: 400,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.85)",
                mb: { xs: 2, md: 4 },
              }}
            >
              Hire vetted lawyers, paralegals and compliance experts across
              Europe, the UK, UAE, Singapore, USA & Canada.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: { xs: 2, md: 4 }, flexWrap: "wrap", gap: 0.75 }}
            >
              <Chip
                icon={<Shield size={14} />}
                label="GDPR Compliant"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  fontSize: { xs: "0.75rem", md: "0.875rem" },
                  height: { xs: "24px", md: "32px" },
                }}
              />
              <Chip
                icon={<Award size={14} />}
                label="ISO Certified"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#FFFFFF",
                  fontWeight: 500,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  fontSize: { xs: "0.75rem", md: "0.875rem" },
                  height: { xs: "24px", md: "32px" },
                }}
              />
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.5, sm: 2 }}
              sx={{ mt: 1, width: "100%" }}
            >
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                fullWidth
                sx={{
                  backgroundColor: "#DC143C",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  px: { xs: 2, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  fontSize: { xs: "0.875rem", md: "1.1rem" },
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
                fullWidth
                sx={{
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  px: { xs: 2, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  fontSize: { xs: "0.875rem", md: "1.1rem" },
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

          <div className="worldmap-container" style={{ display: "none" }}>
            <WorldMap />
          </div>
        </div>
      </Container>

      <div
        style={{
          position: "absolute",
          top: "80px",
          right: "0",
          width: "200px",
          height: "200px",
          backgroundColor: "#DC143C",
          borderRadius: "50%",
          opacity: 0.1,
          filter: "blur(64px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "0",
          width: "250px",
          height: "250px",
          backgroundColor: "#DC143C",
          borderRadius: "50%",
          opacity: 0.1,
          filter: "blur(64px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default HeroSection;
