import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Briefcase, Users, FileText, Building2, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Briefcase size={40} />,
      title: 'Legal Recruitment',
      description: 'Connect with top legal professionals for permanent positions in law firms and corporate legal departments.',
      color: '#DC143C',
    },
    {
      icon: <Users size={40} />,
      title: 'International Hiring Solutions',
      description: 'Navigate cross-border hiring with our expertise in global legal talent acquisition and compliance.',
      color: '#FF4757',
    },
    {
      icon: <FileText size={40} />,
      title: 'Contract & Temporary Legal Talent',
      description: 'Access skilled contract attorneys and paralegals for short-term projects and seasonal demands.',
      color: '#DC143C',
    },
    {
      icon: <Building2 size={40} />,
      title: 'In-house Legal Team Building',
      description: 'Build and scale your corporate legal function with strategic hiring and team development.',
      color: '#FF4757',
    },
  ];

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Typography
            variant="h2"
            className="mb-4"
            sx={{
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6C757D',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Comprehensive legal recruitment solutions tailored to your organization's unique needs
          </Typography>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: service.color,
                  transform: 'translateY(-8px)',
                  boxShadow: '0 16px 32px rgba(0,0,0,0.14)',
                  '& .service-icon': {
                    color: service.color,
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <div
                  className="service-icon mb-4 transition-all duration-300"
                  style={{ color: '#000000' }}
                >
                  {service.icon}
                </div>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    fontFamily: 'Montserrat, sans-serif',
                    mb: 1.5,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#6C757D',
                    lineHeight: 1.7,
                    mb: 2,
                  }}
                >
                  {service.description}
                </Typography>
                <Button
                  component={Link}
                  to="/services"
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    color: service.color,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: `${service.color}10`,
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Button
            variant="outlined"
            component={Link}
            to="/services"
            size="large"
            sx={{
              borderColor: '#000000',
              color: '#000000',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: '8px',
              '&:hover': {
                borderColor: '#DC143C',
                backgroundColor: 'rgba(220, 20, 60, 0.05)',
                color: '#DC143C',
              },
            }}
          >
            View All Services
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ServicesOverview;