import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { MessageSquare, Search, UserCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <MessageSquare size={48} />,
      title: 'Tell us your requirement',
      description: 'Share your hiring needs, role specifications, and ideal candidate profile with our expert team.',
    },
    {
      number: '02',
      icon: <Search size={48} />,
      title: 'We source & vet',
      description: 'Our recruiters leverage global networks to find and thoroughly vet qualified legal professionals.',
    },
    {
      number: '03',
      icon: <UserCheck size={48} />,
      title: 'Interview & hire',
      description: 'Review shortlisted candidates, conduct interviews, and make your hiring decision with confidence.',
    },
  ];

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              fontSize: { xs: '1.75rem', md: '2.75rem' },
              mb: { xs: 1.5, md: 2 },
            }}
          >
            How It Works
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6C757D',
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: { xs: '0.875rem', md: '1.25rem' },
            }}
          >
            A simple, streamlined process to find your perfect legal talent
          </Typography>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', position: 'relative' }}>
          <div style={{ display: 'none', position: 'absolute', top: '96px', left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #DC143C, #FF4757, #DC143C)', opacity: 0.2, zIndex: 0 }} />

          {steps.map((step, index) => (
            <div key={index} style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px',
                    position: 'relative',
                    background: 'linear-gradient(135deg, #DC143C 0%, #FF4757 100%)',
                  }}
                >
                  <div style={{ color: 'white' }}>
                    <MessageSquare size={28} />
                    <Search size={28} />
                    <UserCheck size={28} />
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: { xs: '0.75rem', md: '1.25rem' },
                    }}
                  >
                    {step.number}
                  </Typography>
                </div>
              </div>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontFamily: 'Montserrat, sans-serif',
                  mb: 1,
                  fontSize: { xs: '1.125rem', md: '1.5rem' },
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#6C757D',
                  lineHeight: 1.7,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;