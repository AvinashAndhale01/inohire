"use client";
import { useState } from "react";
import { useSettings } from '@/lib/SettingsContext';
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [activeForm, setActiveForm] = useState("inquiry");
  const { calendlyUrl } = useSettings();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Phone validation (optional field, but validate if provided)
    if (formData.phone) {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setConfirmOpen(true);
    }
  };

  const handleConfirmSubmit = async () => {
    setConfirmOpen(false);
    setLoading(true);
    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: activeForm }),
      });
      const result = await response.json();
      if (result.success) {
        setSuccessOpen(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const subjects = [
    "General Inquiry",
    "Hiring in Europe",
    "Hiring in UK",
    "Hiring in UAE",
    "Hiring in Singapore",
    "Hiring in USA",
    "Hiring in Canada",
    "Partnership Opportunity",
    "Other",
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
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 800,
                fontFamily: "Montserrat, sans-serif",
                color: "white",
                mb: 1.5,
              }}
            >
              Get in <span style={{ color: "#DC143C" }}>Touch</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.6,
                maxWidth: "800px",
                mx: "auto",
                mb: 3,
              }}
            >
              Ready to hire top legal talent? Let's discuss your requirements
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center", mt: 3, flexWrap: "wrap", gap: 1 }}
            >
              <Button
                variant={activeForm === "inquiry" ? "contained" : "outlined"}
                onClick={() => setActiveForm("inquiry")}
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  backgroundColor:
                    activeForm === "inquiry" ? "#DC143C" : "transparent",
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor:
                      activeForm === "inquiry"
                        ? "#B01030"
                        : "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Inquiry Form
              </Button>
              <Button
                variant={activeForm === "schedule" ? "contained" : "outlined"}
                onClick={() => setActiveForm("schedule")}
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  backgroundColor:
                    activeForm === "schedule" ? "#DC143C" : "transparent",
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor:
                      activeForm === "schedule"
                        ? "#B01030"
                        : "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Schedule Call
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 6, md: 12 }, px: { xs: 2, sm: 3 } }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: 4,
          }}
        >
          <Card
            sx={{
              borderRadius: "16px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: "1.25rem", md: "1.75rem" },
                }}
              >
                {activeForm === "inquiry" ? "Inquiry Form" : "Schedule a Call"}
              </Typography>
              {activeForm === "inquiry" ? (
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    <TextField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      fullWidth
                    />
                    <TextField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    <TextField
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      fullWidth
                    />
                    <TextField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                      error={!!errors.phone}
                      helperText={errors.phone}
                    />
                  </Box>
                  <TextField
                    select
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    fullWidth
                  >
                    {subjects.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    fullWidth
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      backgroundColor: "#DC143C",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      py: { xs: 1.25, md: 1.5 },
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      "&:hover": { backgroundColor: "#B01030" },
                    }}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Submit Inquiry"}
                  </Button>
                </Stack>
              </form>
              ) : (
                <Box sx={{ textAlign: "center", py: 4 }}>
                  <Typography variant="body1" sx={{ mb: 3, color: "#6C757D" }}>
                    Book a 30-minute consultation call with our team
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "#DC143C",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      "&:hover": { backgroundColor: "#B01030" },
                    }}
                  >
                    Open Calendar
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>

          <Box>
            <Stack spacing={3}>
              <Card sx={{ borderRadius: "16px", border: "1px solid #E5E7EB" }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <Box
                      sx={{
                        width: { xs: 40, md: 48 },
                        height: { xs: 40, md: 48 },
                        borderRadius: "8px",
                        backgroundColor: "rgba(220,20,60,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Mail style={{ color: "#DC143C" }} size={24} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          fontSize: { xs: "1rem", md: "1.25rem" },
                        }}
                      >
                        Email Us
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6C757D",
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                        }}
                      >
                        inohire78@gmail.com
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6C757D",
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                        }}
                      >
                        akshay@inohire.com
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ borderRadius: "16px", border: "1px solid #E5E7EB" }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <Box
                      sx={{
                        width: { xs: 40, md: 48 },
                        height: { xs: 40, md: 48 },
                        borderRadius: "8px",
                        backgroundColor: "rgba(220,20,60,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Phone style={{ color: "#DC143C" }} size={24} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          fontSize: { xs: "1rem", md: "1.25rem" },
                        }}
                      >
                        Call Us
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6C757D",
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                        }}
                      >
                        +91 7821806740
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6C757D",
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                        }}
                      >
                        Mon-Fri: 9AM - 6PM IST
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ borderRadius: "16px", border: "1px solid #E5E7EB" }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <Box
                      sx={{
                        width: { xs: 40, md: 48 },
                        height: { xs: 40, md: 48 },
                        borderRadius: "8px",
                        backgroundColor: "rgba(220,20,60,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin style={{ color: "#DC143C" }} size={24} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          fontSize: { xs: "1rem", md: "1.25rem" },
                        }}
                      >
                        Address
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6C757D",
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                        }}
                      >
                        8 The Green, STE A, Dover,
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6C757D",
                          fontSize: { xs: "0.8rem", md: "0.875rem" },
                        }}
                      >
                        Delaware, 19901, USA
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* Confirmation Dialog */}
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle sx={{ fontWeight: 600 }}>Confirm Submission</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to submit this inquiry?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)} sx={{ color: "#6C757D" }}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirmSubmit}
            variant="contained"
            sx={{
              backgroundColor: "#DC143C",
              "&:hover": { backgroundColor: "#B01030" },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={successOpen} onClose={() => setSuccessOpen(false)}>
        <DialogTitle sx={{ fontWeight: 600, color: "#28A745" }}>Success!</DialogTitle>
        <DialogContent>
          <Alert severity="success" sx={{ mb: 2 }}>
            Thank you for your inquiry!
          </Alert>
          <Typography>
            We have received your message and will get back to you soon.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setSuccessOpen(false)}
            variant="contained"
            sx={{
              backgroundColor: "#DC143C",
              "&:hover": { backgroundColor: "#B01030" },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contact;
