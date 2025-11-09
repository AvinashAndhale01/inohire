import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to FastAPI backend
    console.log('Newsletter subscription submitted');
  };

  const footerLinks = {
    Services: [
      { label: 'Legal Recruitment', path: '/services' },
      { label: 'International Hiring', path: '/services' },
      { label: 'Contract Staffing', path: '/services' },
      { label: 'Executive Search', path: '/services' },
    ],
    Countries: [
      { label: 'Europe', path: '/countries' },
      { label: 'United Kingdom', path: '/countries' },
      { label: 'UAE', path: '/countries' },
      { label: 'Singapore', path: '/countries' },
      { label: 'USA', path: '/countries' },
      { label: 'Canada', path: '/countries' },
    ],
    Company: [
      { label: 'About Us', path: '/about' },
      { label: 'Partner With Us', path: '/partner' },
      { label: 'Contact', path: '/contact' },
      { label: 'Pricing', path: '/pricing' },
    ],
    Legal: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookie-policy' },
    ],
  };

  return (
    <footer style={{ backgroundColor: '#000000', color: 'white', marginTop: '80px' }}>
      <div style={{ background: 'linear-gradient(to right, #DC143C, #B01030)', paddingTop: '64px', paddingBottom: '64px' }}>
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'white' }}>
              Ready to hire legal talent?
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px' }}>
              Book a consultation today and let us help you find the perfect legal professionals for your organization.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              size="large"
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#DC143C',
                fontWeight: 600,
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#F8F9FA',
                },
              }}
            >
              Book a Consultation
            </Button>
          </Stack>
        </Container>
      </div>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          <div style={{ gridColumn: { lg: 'span 2' } }}>
            <Typography variant="h5" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, mb: 2 }}>
              Ino<span style={{ color: '#DC143C' }}>Hire</span>
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 3, maxWidth: '400px' }}>
              Global legal recruitment experts connecting top legal talent with leading organizations across Europe, UK, UAE, Singapore, USA & Canada.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Subscribe to our newsletter
            </Typography>
            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '8px' }}>
              <TextField
                type="email"
                placeholder="Your email"
                size="small"
                required
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.5)',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#DC143C',
                  '&:hover': {
                    backgroundColor: '#B01030',
                  },
                }}
              >
                Subscribe
              </Button>
            </form>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                {title}
              </Typography>
              <Stack spacing={1.5}>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.target.style.color = '#DC143C'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </div>
          ))}
        </div>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 4 }} />

        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            © {new Date().getFullYear()} InoHire. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              size="small"
              sx={{
                color: '#FFFFFF',
                '&:hover': { color: '#DC143C', backgroundColor: 'rgba(220, 20, 60, 0.1)' },
              }}
            >
              <Linkedin size={20} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: '#FFFFFF',
                '&:hover': { color: '#DC143C', backgroundColor: 'rgba(220, 20, 60, 0.1)' },
              }}
            >
              <Twitter size={20} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: '#FFFFFF',
                '&:hover': { color: '#DC143C', backgroundColor: 'rgba(220, 20, 60, 0.1)' },
              }}
            >
              <Facebook size={20} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: '#FFFFFF',
                '&:hover': { color: '#DC143C', backgroundColor: 'rgba(220, 20, 60, 0.1)' },
              }}
            >
              <Mail size={20} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;