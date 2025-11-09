import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  const models = [
    {
      title: 'Cost-per-Hire',
      description: 'Fixed fee per successful placement',
      features: ['Scalable pricing', 'Pay only for results', 'No upfront costs', 'Flexible hiring volumes'],
      pricing: 'From $499 per hire',
    },
    {
      title: 'Cost-per-Resource',
      description: 'Monthly fee for dedicated resources',
      features: ['Dedicated recruiter', 'Ongoing support', 'Priority service', 'Predictable costs'],
      pricing: 'From $1,500/month',
    },
    {
      title: 'Hybrid Model',
      description: 'Combination of per-hire and resource fees',
      features: ['Best of both models', 'Volume discounts', 'Dedicated support', 'Custom solutions'],
      pricing: 'Custom pricing',
    },
  ];

  return (
    <div>
      <div style={{ paddingTop: '80px', paddingBottom: '80px', background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, color: 'white', textAlign: 'center', mb: 3 }}>
            Flexible <span style={{ color: '#DC143C' }}>Pricing</span>
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            Choose the pricing model that works best for your hiring needs
          </Typography>
        </Container>
      </div>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {models.map((model, index) => (
            <Card key={index} sx={{ height: '100%', borderRadius: '16px', border: '2px solid #E5E7EB', transition: 'all 0.3s ease', '&:hover': { borderColor: '#DC143C', transform: 'translateY(-8px)', boxShadow: '0 16px 32px rgba(0,0,0,0.14)' } }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>{model.title}</Typography>
                <Typography variant="body2" sx={{ color: '#6C757D', mb: 3 }}>{model.description}</Typography>
                <Typography variant="h3" sx={{ color: '#DC143C', fontWeight: 700, mb: 4, fontSize: { xs: '2rem', md: '2.5rem' } }}>{model.pricing}</Typography>
                <Stack spacing={2} sx={{ mb: 4 }}>
                  {model.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={20} style={{ color: '#28A745', flexShrink: 0 }} />
                      <Typography variant="body2">{feature}</Typography>
                    </div>
                  ))}
                </Stack>
                <Button component={Link} to="/contact" variant="contained" fullWidth sx={{ backgroundColor: '#DC143C', '&:hover': { backgroundColor: '#B01030' } }}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;