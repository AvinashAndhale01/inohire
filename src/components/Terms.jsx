import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Terms = () => {
  return (
    <Container maxWidth="lg" className="py-20">
      <Typography variant="h2" className="mb-6" sx={{ fontWeight: 700 }}>Terms of Service</Typography>
      <Typography variant="body1" sx={{ color: '#6C757D', lineHeight: 1.8 }}>
        These terms govern your use of our services. By using our website, you agree to these terms.
      </Typography>
    </Container>
  );
};

export default Terms;