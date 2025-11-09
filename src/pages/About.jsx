import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Shield, Target, Eye, CheckCircle } from 'lucide-react';

const About = () => {
  const strengths = [
    'Specialization in Legal Hiring: 100% focus on law-related roles',
    'Global Reach, Local Expertise: In-country consultants across 6 major hiring markets',
    'Confidential Search: Discreet executive and partner-level placements',
    'Compliance-Focused: Deep expertise in data privacy (GDPR), AML, and corporate governance',
    'Client-Centric Approach: We treat every engagement as a partnership'
  ];

  const values = [
    { title: 'Integrity', desc: 'Transparent, ethical recruitment practices' },
    { title: 'Precision', desc: 'We don\'t fill roles; we match missions with the right minds' },
    { title: 'Speed', desc: 'Agile execution without compromising quality' },
    { title: 'Confidentiality', desc: 'Candidate and client trust at the heart of every engagement' },
    { title: 'Diversity & Inclusion', desc: 'Promoting global mobility and equal opportunity' }
  ];

  return (
    <Box>
      <Box sx={{ py: { xs: 10, md: 15 }, background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, color: 'white', textAlign: 'center', mb: 2 }}>
            About <span style={{ color: '#DC143C' }}>Us</span>
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            Global legal recruitment excellence across 6 continents
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>Who We Are</Typography>
        <Typography variant="body1" sx={{ color: '#6C757D', lineHeight: 1.8, mb: 4 }}>
          LegalRecruit is a global legal recruitment and staffing firm dedicated to connecting world-class legal professionals with prestigious law firms and corporate legal departments across Europe, the UK, UAE, Singapore, the USA, and Canada. We specialize exclusively in the legal sector — sourcing, screening, and placing qualified attorneys, paralegals, compliance officers, and contract drafting experts for both permanent and project-based roles.
        </Typography>
        <Typography variant="body1" sx={{ color: '#6C757D', lineHeight: 1.8, mb: 4 }}>
          Our agency operates with a deep understanding of international law, compliance frameworks, and local employment regulations. Each of our consultants combines recruitment expertise with legal domain knowledge, enabling us to identify not just qualified candidates — but the right fit in terms of culture, ethics, and strategic vision.
        </Typography>
        <Typography variant="body1" sx={{ color: '#6C757D', lineHeight: 1.8, mb: 6 }}>
          We follow a consultative recruitment model: we listen carefully to client needs, analyze team structures, and provide tailored hiring strategies. Whether a client requires a single high-impact counsel or a full legal department build-out, our agile, data-driven process ensures faster hiring cycles and superior talent outcomes.
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Our Core Strengths</Typography>
        <Stack spacing={2} sx={{ mb: 6 }}>
          {strengths.map((strength, idx) => (
            <Box key={idx} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <CheckCircle size={24} style={{ color: '#DC143C', flexShrink: 0, marginTop: '2px' }} />
              <Typography variant="body1" sx={{ color: '#6C757D', lineHeight: 1.8 }}>{strength}</Typography>
            </Box>
          ))}
        </Stack>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, mb: 6 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Target size={32} style={{ color: '#DC143C' }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>Mission</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#6C757D', lineHeight: 1.8 }}>
              To empower organizations by connecting them with top-tier legal talent, and to empower professionals by providing them access to global career opportunities.
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Eye size={32} style={{ color: '#DC143C' }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>Vision</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#6C757D', lineHeight: 1.8 }}>
              To be the most trusted global partner in legal recruitment — where integrity, precision, and speed define every hire.
            </Typography>
          </Box>
        </Box>

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Values We Stand For</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3, mb: 6 }}>
          {values.map((value, idx) => (
            <Box key={idx} sx={{ p: 3, border: '1px solid #E5E7EB', borderRadius: '12px', '&:hover': { borderColor: '#DC143C', boxShadow: '0 4px 12px rgba(220,20,60,0.1)' }, transition: 'all 0.3s' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#DC143C' }}>{value.title}</Typography>
              <Typography variant="body2" sx={{ color: '#6C757D' }}>{value.desc}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ p: 4, background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)', borderRadius: '16px', textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'white', mb: 2 }}>Our Promise</Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, maxWidth: '800px', mx: 'auto' }}>
            At LegalRecruit, our focus goes beyond hiring — we build long-term partnerships that elevate both legal teams and individual careers. Each placement represents a strategic match crafted through experience, technology, and human insight.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;