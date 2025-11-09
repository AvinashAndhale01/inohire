import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="lg" className="py-20">
      <Typography variant="h2" className="mb-6" sx={{ fontWeight: 700 }}>Privacy Policy</Typography>
      <Typography variant="body1" sx={{ color: '#6C757D', lineHeight: 1.8 }}>
        Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;