import { useState, useEffect } from 'react';
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

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile: show 1 item
      if (window.innerWidth < 1024) return 2; // Tablet: show 2 items
      return 3; // Desktop: show 3 items
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = Math.max(0, countries.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset to first item when items per view changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div style={{ paddingTop: '48px', paddingBottom: '48px', backgroundColor: '#F8F9FA' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
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
              fontSize: { xs: '0.875rem', md: '1.25rem' },
            }}
          >
            Access top legal talent in key markets worldwide
          </Typography>
        </div>

        <div style={{ position: 'relative', padding: '0 40px' }}>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                gap: itemsPerView === 1 ? '0' : '16px',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {countries.map((country, index) => (
                <div
                  key={index}
                  style={{ 
                    flexShrink: 0, 
                    width: itemsPerView === 1 ? '100%' : `calc(${100 / itemsPerView}% - ${16 * (itemsPerView - 1) / itemsPerView}px)`,
                    paddingRight: itemsPerView === 1 ? '0' : '0'
                  }}
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
                    <CardContent sx={{ p: { xs: 2.5, md: 3 }, textAlign: 'center' }}>
                      <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{country.flag}</div>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          fontFamily: 'Montserrat, sans-serif',
                          mb: 1,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
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
                          minHeight: { xs: 'auto', md: '60px' },
                          fontSize: { xs: '0.8rem', md: '1rem' },
                        }}
                      >
                        {country.description}
                      </Typography>
                      <Button
                        component={Link}
                        to="/countries"
                        variant="outlined"
                        startIcon={<MapPin size={16} />}
                        size="small"
                        sx={{
                          borderColor: '#DC143C',
                          color: '#DC143C',
                          fontWeight: 600,
                          fontSize: { xs: '0.7rem', md: '0.875rem' },
                          py: { xs: 0.5, md: 0.75 },
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

          {/* Navigation Buttons - Always visible */}
          <IconButton
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{
              position: 'absolute',
              left: { xs: '0', md: '-20px' },
              width: { xs: '36px', md: '40px' },
              height: { xs: '36px', md: '40px' },
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
              '&:hover': {
                backgroundColor: '#DC143C',
                color: '#FFFFFF',
              },
              '&:disabled': {
                opacity: 0.3,
                backgroundColor: '#F5F5F5',
              },
            }}
          >
            <ChevronLeft size={18} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            sx={{
              position: 'absolute',
              right: { xs: '0', md: '-20px' },
              width: { xs: '36px', md: '40px' },
              height: { xs: '36px', md: '40px' },
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
              '&:hover': {
                backgroundColor: '#DC143C',
                color: '#FFFFFF',
              },
              '&:disabled': {
                opacity: 0.3,
                backgroundColor: '#F5F5F5',
              },
            }}
          >
            <ChevronRight size={18} />
          </IconButton>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '24px' }}>
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