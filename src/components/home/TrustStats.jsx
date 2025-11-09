import { useEffect, useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const TrustStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 500, suffix: '+', label: 'Placements' },
    { value: 95, suffix: '%', label: 'Retention Rate' },
    { value: 30, suffix: '+', label: 'Countries Served' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ paddingTop: '48px', paddingBottom: '48px', backgroundColor: '#F8F9FA' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

const StatCard = ({ value, suffix, label, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          color: '#DC143C',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: { xs: '2rem', md: '4rem' },
        }}
      >
        {count}
        {suffix}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: '#6C757D',
          fontWeight: 600,
          mt: { xs: 0.5, md: 1 },
          fontSize: { xs: '0.875rem', md: '1.25rem' },
        }}
      >
        {label}
      </Typography>
    </div>
  );
};

export default TrustStats;