"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSettings } from "@/lib/SettingsContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { calendlyUrl } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Specialization", path: "/pricing" },
    { label: "Partner", path: "/partner" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        className={`transition-all duration-300 ${
          scrolled ? "bg-white" : "bg-white/95 backdrop-blur-md"
        }`}
        sx={{
          backgroundColor: scrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar className="py-1 md:py-2" disableGutters>
            <Link
              href="/"
              onClick={handleNavClick}
              className="flex items-center no-underline"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h5"
                component="div"
                className="font-bold"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  color: "#000000",
                  letterSpacing: "-0.02em",
                  fontSize: { xs: "1.125rem", md: "1.5rem" },
                }}
              >
                Ino <span style={{ color: "#DC143C" }}>Hire</span>
              </Typography>
            </Link>

            {/* Desktop Navigation */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                ml: "auto",
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  href={link.path}
                  onClick={handleNavClick}
                  sx={{
                    color: pathname === link.path ? "#DC143C" : "#000000",
                    fontWeight: pathname === link.path ? 600 : 500,
                    fontSize: { xs: "0.875rem", md: "0.95rem" },
                    px: { xs: 1.5, md: 2 },
                    "&:hover": {
                      color: "#DC143C",
                      backgroundColor: "rgba(220, 20, 60, 0.05)",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                variant="contained"
                component="a"
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  ml: { xs: 1, md: 2 },
                  backgroundColor: "#DC143C",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.75, md: 1 },
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#B01030",
                  },
                }}
              >
                Schedule Call
              </Button>
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                ml: "auto",
                display: { xs: "flex", md: "none" },
                color: "#000000",
              }}
            >
              <Menu size={24} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "260px", sm: "280px" },
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <Stack spacing={0} sx={{ p: { xs: 2, sm: 3 }, pt: { xs: 2, sm: 3 } }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1rem", sm: "1.25rem" },
              }}
            >
              Inno<span style={{ color: "#DC143C" }}>Hire</span>
            </Typography>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#000000" }}>
              <X size={24} />
            </IconButton>
          </div>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={Link}
              href={link.path}
              onClick={handleNavClick}
              sx={{
                justifyContent: "flex-start",
                color: pathname === link.path ? "#DC143C" : "#000000",
                fontWeight: pathname === link.path ? 600 : 500,
                fontSize: { xs: "0.875rem", sm: "1rem" },
                py: { xs: 1.25, sm: 1.5 },
                px: { xs: 1.5, sm: 2 },
                borderRadius: "8px",
                "&:hover": {
                  color: "#DC143C",
                  backgroundColor: "rgba(220, 20, 60, 0.05)",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
          <Button
            variant="contained"
            component={Link}
            href="/contact"
            onClick={handleNavClick}
            sx={{
              mt: 2,
              backgroundColor: "#DC143C",
              color: "#FFFFFF",
              fontWeight: 600,
              py: { xs: 1.25, sm: 1.5 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#B01030",
              },
            }}
          >
            Book Consultation
          </Button>
        </Stack>
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
