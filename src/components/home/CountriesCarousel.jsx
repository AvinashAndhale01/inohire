import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const CountriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const countries = [
    {
      name: 'Europe',
      description: 'Cross-border hiring across EU member states with multilingual legal professionals',
      flag: '🇪🇺',
    },
    {
      name: 'United Kingdom',
      description: 'Solicitors, barristers, and in-house counsel for UK law firms and corporations',
      flag: '🇬🇧',
    },
    {
      name: 'UAE',
      description: 'GCC law expertise for Freezone and local company legal requirements',
      flag: '🇦🇪',
    },
    {
      name: 'Singapore',
      description: 'APAC regional legal talent with bilingual capabilities and regulatory knowledge',
      flag: '🇸🇬',
    },
    {
      name: 'USA',
      description: 'State-licensed attorneys and legal professionals across all 50 states',
      flag: '🇺🇸',
    },
    {
      name: 'Canada',
      description: 'Bilingual legal professionals with provincial law expertise',
      flag: '🇨🇦',
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, countries.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
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
            Hire Across the Globe
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6C757D',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            Access top legal talent in key markets worldwide
          </Typography>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {countries.map((country, index) => (
                <div
                  key={index}
                  style={{ flexShrink: 0, width: `calc(${100 / itemsPerView}% - 16px)` }}
                >
                  <Card
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
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <div style={{ fontSize: '3.75rem', marginBottom: '16px' }}>{country.flag}</div>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          fontFamily: 'Montserrat, sans-serif',
                          mb: 1.5,
                        }}
                      >
                        {country.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#6C757D',
                          lineHeight: 1.6,
                          mb: 2,
                          minHeight: '60px',
                        }}
                      >
                        {country.description}
                      </Typography>
                      <Button
                        component={Link}
                        to="/countries"
                        variant="outlined"
                        startIcon={<MapPin size={18} />}
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
                        Hire in {country.name}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <IconButton
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#DC143C',
                color: '#FFFFFF',
              },
              '&:disabled': {
                opacity: 0.3,
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            sx={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#DC143C',
                color: '#FFFFFF',
              },
              '&:disabled': {
                opacity: 0.3,
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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
      </Container>
    </div>
  );
};

export default CountriesCarousel;