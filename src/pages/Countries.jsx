import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Countries = () => {
  const countries = [
    { name: 'Europe', flag: '🇪🇺', description: 'Cross-border hiring across EU member states' },
    { name: 'United Kingdom', flag: '🇬🇧', description: 'Solicitors and barristers for UK law firms' },
    { name: 'UAE', flag: '🇦🇪', description: 'GCC law expertise and Freezone hiring' },
    { name: 'Singapore', flag: '🇸🇬', description: 'APAC regional legal talent' },
    { name: 'USA', flag: '🇺🇸', description: 'State-licensed attorneys across all 50 states' },
    { name: 'Canada', flag: '🇨🇦', description: 'Bilingual legal professionals' },
  ];

  return (
    <div>
      <div style={{ paddingTop: '80px', paddingBottom: '80px', background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, color: 'white', textAlign: 'center' }}>
            Global <span style={{ color: '#DC143C' }}>Coverage</span>
          </Typography>
        </Container>
      </div>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {countries.map((country, index) => (
            <Card key={index} sx={{ height: '100%', borderRadius: '16px', border: '2px solid #E5E7EB', transition: 'all 0.3s ease', '&:hover': { borderColor: '#DC143C', transform: 'translateY(-8px)', boxShadow: '0 16px 32px rgba(0,0,0,0.14)' } }}>
              <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                <div style={{ fontSize: '3.75rem', marginBottom: '16px' }}>{country.flag}</div>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>{country.name}</Typography>
                <Typography variant="body2" sx={{ color: '#6C757D', mb: 2 }}>{country.description}</Typography>
                <Button component={Link} to="/contact" variant="outlined" sx={{ borderColor: '#DC143C', color: '#DC143C' }}>
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

export default Countries;