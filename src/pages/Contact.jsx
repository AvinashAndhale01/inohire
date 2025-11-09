import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [activeForm, setActiveForm] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${activeForm} form submitted:`, formData);
    alert(`Thank you for your inquiry! We will get back to you soon.`);
  };

  const subjects = [
    'General Inquiry',
    'Hiring in Europe',
    'Hiring in UK',
    'Hiring in UAE',
    'Hiring in Singapore',
    'Hiring in USA',
    'Hiring in Canada',
    'Partnership Opportunity',
    'Other',
  ];

  return (
    <Box>
      <Box sx={{ py: { xs: 10, md: 15 }, background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, fontFamily: 'Montserrat, sans-serif', color: 'white', mb: 2 }}>
              Get in <span style={{ color: '#DC143C' }}>Touch</span>
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: '800px', mx: 'auto', mb: 4 }}>
              Ready to hire top legal talent? Let's discuss your requirements
            </Typography>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mt: 3 }}>
              <Button variant={activeForm === 'student' ? 'contained' : 'outlined'} onClick={() => setActiveForm('student')} sx={{ px: 4, py: 1.5, backgroundColor: activeForm === 'student' ? '#DC143C' : 'transparent', color: activeForm === 'student' ? 'white' : 'white', borderColor: 'white', '&:hover': { backgroundColor: activeForm === 'student' ? '#B01030' : 'rgba(255,255,255,0.1)' } }}>
                Student Form
              </Button>
              <Button variant={activeForm === 'client' ? 'contained' : 'outlined'} onClick={() => setActiveForm('client')} sx={{ px: 4, py: 1.5, backgroundColor: activeForm === 'client' ? '#DC143C' : 'transparent', color: activeForm === 'client' ? 'white' : 'white', borderColor: 'white', '&:hover': { backgroundColor: activeForm === 'client' ? '#B01030' : 'rgba(255,255,255,0.1)' } }}>
                Client Form
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 4 }}>
          <Card sx={{ borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                {activeForm === 'student' ? 'Student Inquiry Form' : 'Client Inquiry Form'}
              </Typography>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                    <TextField label="Full Name" name="name" value={formData.name} onChange={handleChange} required fullWidth />
                    <TextField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required fullWidth />
                  </Box>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                    <TextField label="Company Name" name="company" value={formData.company} onChange={handleChange} required fullWidth />
                    <TextField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} fullWidth />
                  </Box>
                  <TextField select label="Subject" name="subject" value={formData.subject} onChange={handleChange} required fullWidth>
                    {subjects.map((option) => (
                      <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </TextField>
                  <TextField label="Message" name="message" value={formData.message} onChange={handleChange} required multiline rows={6} fullWidth />
                  <Button type="submit" variant="contained" size="large" sx={{ backgroundColor: '#DC143C', color: '#FFFFFF', fontWeight: 600, py: 1.5, '&:hover': { backgroundColor: '#B01030' } }}>
                    Send Message
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>

          <Box>
            <Stack spacing={3}>
              <Card sx={{ borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(220,20,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail style={{ color: '#DC143C' }} size={24} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Email Us</Typography>
                      <Typography variant="body2" sx={{ color: '#6C757D' }}>info@legalrecruit.com</Typography>
                      <Typography variant="body2" sx={{ color: '#6C757D' }}>careers@legalrecruit.com</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(220,20,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone style={{ color: '#DC143C' }} size={24} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Call Us</Typography>
                      <Typography variant="body2" sx={{ color: '#6C757D' }}>+1 (555) 123-4567</Typography>
                      <Typography variant="body2" sx={{ color: '#6C757D' }}>Mon-Fri: 9AM - 6PM EST</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card sx={{ borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ width: 48, height: 48, borderRadius: '8px', backgroundColor: 'rgba(220,20,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin style={{ color: '#DC143C' }} size={24} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>Visit Us</Typography>
                      <Typography variant="body2" sx={{ color: '#6C757D' }}>123 Legal Plaza</Typography>
                      <Typography variant="body2" sx={{ color: '#6C757D' }}>New York, NY 10001</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;