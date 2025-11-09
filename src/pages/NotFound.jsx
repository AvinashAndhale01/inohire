import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="sm" className="py-20 text-center">
      <Typography variant="h1" sx={{ fontSize: '8rem', fontWeight: 800, color: '#DC143C' }}>404</Typography>
      <Typography variant="h4" className="mb-4" sx={{ fontWeight: 600 }}>Page Not Found</Typography>
      <Typography variant="body1" sx={{ color: '#6C757D', mb: 4 }}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button component={Link} to="/" variant="contained" sx={{ backgroundColor: '#DC143C', '&:hover': { backgroundColor: '#B01030' } }}>
        Go Home
      </Button>
    </Container>
  );
};

export default NotFound;