'use client';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { CheckCircle2, Globe, Shield, Zap, Users, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Globe size={32} />,
      title: 'Global Reach, Local Expertise',
      description: 'Access to legal talent across 30+ countries with deep understanding of local markets and regulations.',
    },
    {
      icon: <Shield size={32} />,
      title: 'Rigorous Vetting Process',
      description: 'Every candidate undergoes comprehensive background checks, credential verification, and skills assessment.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Turnaround',
      description: 'Average placement time of 3-4 weeks with access to pre-vetted talent pools for urgent requirements.',
    },
    {
      icon: <Users size={32} />,
      title: 'Dedicated Account Management',
      description: 'Personal recruitment consultant who understands your organization and hiring needs.',
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Guarantee',
      description: '95% retention rate with replacement guarantee if a placement doesn\'t work out.',
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'Confidential & Compliant',
      description: 'GDPR-compliant processes ensuring complete confidentiality for sensitive searches.',
    },
  ];

  return (
    <div style={{ paddingTop: '48px', paddingBottom: '48px', backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Typography
            variant="h2"
            className="mb-4"
            sx={{
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6C757D',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Trusted by leading law firms and corporate legal departments worldwide
          </Typography>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {reasons.map((reason, index) => (
            <div key={index}>
              <Stack spacing={2}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #DC143C 0%, #FF4757 100%)',
                    color: '#FFFFFF',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {reason.icon}
                </div>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: { xs: '1rem', md: '1.25rem' },
                  }}
                >
                  {reason.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#6C757D',
                    lineHeight: 1.7,
                  }}
                >
                  {reason.description}
                </Typography>
              </Stack>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              maxWidth: '896px',
              margin: '0 auto',
              aspectRatio: '16/9',
              background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
            }}
          >
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
              <div style={{ textAlign: 'center', color: 'white' }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, fontSize: { xs: '1.25rem', md: '2rem' } }}>
                  See How We Hire
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                  Watch our process in action
                </Typography>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#DC143C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(220, 20, 60, 0.4)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderLeft: '20px solid white', borderBottom: '12px solid transparent', marginLeft: '4px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;