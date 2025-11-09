import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const CookiePolicy = () => {
  return (
    <Container maxWidth="lg" className="py-20">
      <Typography variant="h2" className="mb-6" sx={{ fontWeight: 700 }}>Cookie Policy</Typography>
      <Typography variant="body1" sx={{ color: '#6C757D', lineHeight: 1.8 }}>
        We use cookies to enhance your browsing experience. Learn more about how we use cookies and how you can manage them.
      </Typography>
    </Container>
  );
};

export default CookiePolicy;