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
    <div style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Typography
            variant="h2"
            className="mb-4"
            sx={{
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
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
            }}
          >
            A simple, streamlined process to find your perfect legal talent
          </Typography>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', position: 'relative' }}>
          <div style={{ display: 'none', position: 'absolute', top: '96px', left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #DC143C, #FF4757, #DC143C)', opacity: 0.2, zIndex: 0 }} />

          {steps.map((step, index) => (
            <div key={index} style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    position: 'relative',
                    background: 'linear-gradient(135deg, #DC143C 0%, #FF4757 100%)',
                  }}
                >
                  <div style={{ color: 'white' }}>{step.icon}</div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    right: '-16px',
                    width: '64px',
                    height: '64px',
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
                  mb: 1.5,
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#6C757D',
                  lineHeight: 1.7,
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