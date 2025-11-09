import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Search, Building2, FileCheck, Globe2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Briefcase size={48} />,
      title: 'Permanent Recruitment',
      description: 'Tailored search for mid-senior roles and partners in law firms and corporate legal departments.',
      features: ['Executive search', 'Partner-level placements', 'In-house counsel', 'Specialized practice areas'],
    },
    {
      icon: <Users size={48} />,
      title: 'Contract & Temporary Staffing',
      description: 'Licensed contract attorneys, paralegals, and legal support for project-based needs.',
      features: ['Short-term contracts', 'Seasonal coverage', 'Project-based hiring', 'Flexible arrangements'],
    },
    {
      icon: <Search size={48} />,
      title: 'Executive Search',
      description: 'Senior leadership and head of legal hires for transformational roles.',
      features: ['C-suite legal positions', 'General Counsel search', 'Confidential searches', 'Succession planning'],
    },
    {
      icon: <Building2 size={48} />,
      title: 'In-house Legal Team Building',
      description: 'Scale your legal function with strategic hiring and team development.',
      features: ['Team assessment', 'Organizational design', 'Bulk hiring', 'Onboarding support'],
    },
    {
      icon: <FileCheck size={48} />,
      title: 'Compliance & Regulatory Hiring',
      description: 'Experts in GDPR, AML, GCC regulations, and APAC law compliance.',
      features: ['Compliance officers', 'Regulatory specialists', 'Risk management', 'Policy advisors'],
    },
    {
      icon: <Globe2 size={48} />,
      title: 'International Mobility Support',
      description: 'Visa and onboarding advice through our partnered providers.',
      features: ['Work permit assistance', 'Relocation support', 'Cross-border compliance', 'Immigration guidance'],
    },
  ];

  return (
    <div>
      <div style={{ paddingTop: '80px', paddingBottom: '80px', background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}>
        <Container maxWidth="lg">
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, fontFamily: 'Montserrat, sans-serif', color: 'white', mb: 3 }}>
              Our Legal Hiring <span style={{ color: '#DC143C' }}>Services</span>
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: '800px', mx: 'auto' }}>
              Specialized recruitment solutions for law firms, corporate legal departments, and legal service providers worldwide
            </Typography>
          </div>
        </Container>
      </div>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                borderRadius: '16px',
                border: '2px solid #E5E7EB',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#DC143C',
                  transform: 'translateY(-8px)',
                  boxShadow: '0 16px 32px rgba(0,0,0,0.14)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <div style={{ color: '#DC143C', marginBottom: '16px' }}>{service.icon}</div>
                <Typography variant="h5" sx={{ fontWeight: 600, fontFamily: 'Montserrat, sans-serif', mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#6C757D', lineHeight: 1.7, mb: 3 }}>
                  {service.description}
                </Typography>
                <Stack spacing={1} sx={{ mb: 3 }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#DC143C', flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#495057' }}>{feature}</Typography>
                    </div>
                  ))}
                </Stack>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  sx={{
                    borderColor: '#DC143C',
                    color: '#DC143C',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: '#B01030',
                      backgroundColor: 'rgba(220, 20, 60, 0.05)',
                    },
                  }}
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div style={{ marginTop: '64px', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
            Ready to find your perfect legal talent?
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#DC143C',
              color: '#FFFFFF',
              fontWeight: 600,
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#B01030',
              },
            }}
          >
            Book a Consultation
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Services;