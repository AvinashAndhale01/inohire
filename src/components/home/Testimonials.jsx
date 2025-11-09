import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'General Counsel',
      company: 'Tech Innovations Inc.',
      image: 'https://i.pravatar.cc/150?img=5',
      quote: 'LegalRecruit helped us build our entire legal department from scratch. Their understanding of our needs and the quality of candidates they presented was exceptional.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Managing Partner',
      company: 'Chen & Associates Law Firm',
      image: 'https://i.pravatar.cc/150?img=12',
      quote: 'We needed specialized compliance expertise for our expansion into Asia. The team delivered perfectly matched candidates within weeks. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'HR Director',
      company: 'Global Finance Corp',
      image: 'https://i.pravatar.cc/150?img=9',
      quote: 'Professional, responsive, and results-driven. LegalRecruit understands the legal recruitment landscape better than anyone else we have worked with.',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#F8F9FA' }}>
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
            Client Success Stories
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6C757D',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Hear from organizations who have transformed their legal teams with our help
          </Typography>
        </div>

        <div
          style={{ position: 'relative', maxWidth: '896px', margin: '0 auto' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card
            sx={{
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              border: '1px solid #E5E7EB',
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                <div style={{ flexShrink: 0 }}>
                  <Avatar
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    sx={{
                      width: 80,
                      height: 80,
                      border: '4px solid #DC143C',
                    }}
                  />
                </div>

                <div style={{ flexGrow: 1 }}>
                  <Quote size={40} style={{ color: '#DC143C', marginBottom: '16px', opacity: 0.3 }} />
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#000000',
                      lineHeight: 1.8,
                      mb: 3,
                      fontStyle: 'italic',
                    }}
                  >
                    "{testimonials[currentIndex].quote}"
                  </Typography>

                  <div>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      {testimonials[currentIndex].name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#6C757D',
                      }}
                    >
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </Typography>
                  </div>

                  <div style={{ display: 'flex', gap: '4px', marginTop: '12px' }}>
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <span key={i} style={{ color: '#FFC107', fontSize: '1.25rem' }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#DC143C',
                color: '#FFFFFF',
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#DC143C',
                color: '#FFFFFF',
              },
            }}
          >
            <ChevronRight />
          </IconButton>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: index === currentIndex ? '#DC143C' : '#D1D5DB',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;