import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';

const Countries = () => {
  const countries = [
    { name: 'Europe', flagCode: 'eu', description: 'Trusted recruitment support across the EU with compliant cross-border talent.' },
    { name: 'United Kingdom', flagCode: 'gb', description: 'Specialized hiring solutions for UK businesses with market-aligned professionals.' },
    { name: 'United Arab Emirates', flagCode: 'ae', description: 'End-to-end recruitment for UAE and GCC companies across all industries.' },
    { name: 'Singapore', flagCode: 'sg', description: 'Reliable hiring for Singapore\'s fast-growing tech and business ecosystem.' },
    { name: 'United States', flagCode: 'us', description: 'High-quality talent sourcing across the U.S. with compliance expertise.' },
    { name: 'Canada', flagCode: 'ca', description: 'Professional recruitment tailored to the Canadian market and standards.' },
  ];

  return (
    <div>
      <div style={{ paddingTop: '64px', paddingBottom: '64px', background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, color: 'white', textAlign: 'center' }}>
            Global <span style={{ color: '#DC143C' }}>Coverage</span>
          </Typography>
        </Container>
      </div>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 }, px: { xs: 2, sm: 3 } }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {countries.map((country, index) => (
            <Card key={index} sx={{ height: '100%', borderRadius: '16px', border: '2px solid #E5E7EB', transition: 'all 0.3s ease', '&:hover': { borderColor: '#DC143C', transform: 'translateY(-8px)', boxShadow: '0 16px 32px rgba(0,0,0,0.14)' } }}>
              <CardContent sx={{ p: { xs: 2.5, md: 4 }, textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                  <img 
                    src={`https://flagcdn.com/w80/${country.flagCode}.png`}
                    srcSet={`https://flagcdn.com/w160/${country.flagCode}.png 2x`}
                    alt={`${country.name} flag`}
                    style={{ width: '80px', height: '60px', objectFit: 'cover', border: '1px solid #E5E7EB', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                  />
                </div>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5, fontSize: { xs: '1.125rem', md: '1.5rem' } }}>{country.name}</Typography>
                <Typography variant="body2" sx={{ color: '#6C757D', mb: 2, fontSize: { xs: '0.8rem', md: '0.875rem' } }}>{country.description}</Typography>
                <Button component={Link} href="/contact" variant="outlined" sx={{ borderColor: '#DC143C', color: '#DC143C' }}>
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