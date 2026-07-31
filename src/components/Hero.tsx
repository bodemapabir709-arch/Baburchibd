import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const EVENT_TYPES = ['Wedding', 'Birthday', 'Corporate', 'Mehndhi', 'Milad', 'Family Party'];
const DISTRICTS = ['Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi', 'Khulna', 'Barishal', 'Mymensingh'];
const GUEST_RANGES = ['10-50', '51-100', '101-200', '201-500', '500+'];

const STATS = [
  { value: '1,200+', label: 'Expert Chefs', labelBn: 'দক্ষ শেফ' },
  { value: '15,000+', label: 'Events Catered', labelBn: 'ইভেন্ট সম্পন্ন' },
  { value: '64', label: 'Districts Covered', labelBn: 'জেলা কভার' },
  { value: '4.9★', label: 'Average Rating', labelBn: 'গড় রেটিং' },
];

interface HeroProps {
  lang: 'en' | 'bn';
}

export default function Hero({ lang }: HeroProps) {
  const [eventType, setEventType] = useState('');
  const [district, setDistrict] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/find-baburchi?event=${eventType}&district=${district}`);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '100vh', md: '95vh' },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-biryani.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.65) 50%, rgba(30,41,59,0.55) 100%)',
          },
        }}
      />

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,119,6,0.2) 0%, transparent 70%)',
          display: { xs: 'none', lg: 'block' },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: { xs: 14, md: 12 }, pb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, lg: 7 }}>
            {/* Badge */}
            <Chip
              icon={<CelebrationIcon sx={{ fontSize: '16px !important', color: 'primary.light !important' }} />}
              label={lang === 'bn' ? 'বাংলাদেশের #১ ক্যাটারিং প্ল্যাটফর্ম' : "Bangladesh's #1 Catering Platform"}
              sx={{
                mb: 3,
                bgcolor: 'rgba(217,119,6,0.15)',
                color: '#F59E0B',
                border: '1px solid rgba(245,158,11,0.3)',
                fontWeight: 600,
                fontSize: '0.8rem',
                '& .MuiChip-icon': { color: '#F59E0B' },
              }}
            />

            {/* Headline */}
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem', lg: '3.2rem' },
                fontWeight: 700,
                lineHeight: 1.25,
                mb: 2.5,
              }}
            >
              {lang === 'bn'
                ? 'বিয়ে বা যেকোনো অনুষ্ঠানে সেরা বাবুর্চি ও ক্যাটারিং সার্ভিস বুক করুন নিমিষেই'
                : 'Book the Best Baburchi & Catering Service for Your Wedding or Any Event'}
            </Typography>

            {/* Subheadline */}
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                mb: 4,
                maxWidth: 560,
              }}
            >
              {lang === 'bn'
                ? 'আপনার পছন্দমতো ঐতিহ্যবাহী ও সুস্বাদু রান্নার জন্য দক্ষ বাবুর্চি এবং ফুল-প্যাকেজ ক্যাটারিং সেবা এখন এক প্ল্যাটফর্মে।'
                : 'Find skilled chefs and full-package catering services for authentic traditional cuisine — all on one platform.'}
            </Typography>

            {/* Search Bar */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, md: 2.5 },
                borderRadius: 3,
                bgcolor: 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.3)',
                mb: 4,
              }}
            >
              <Grid container spacing={2} alignItems="flex-end">
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CelebrationIcon sx={{ fontSize: 16 }} />
                        {lang === 'bn' ? 'ইভেন্টের ধরন' : 'Event Type'}
                      </Box>
                    </InputLabel>
                    <Select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      label={lang === 'bn' ? 'ইভেন্টের ধরন' : 'Event Type'}
                    >
                      {EVENT_TYPES.map((t) => (
                        <MenuItem key={t} value={t}>{t}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOnIcon sx={{ fontSize: 16 }} />
                        {lang === 'bn' ? 'জেলা' : 'District'}
                      </Box>
                    </InputLabel>
                    <Select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      label={lang === 'bn' ? 'জেলা' : 'District'}
                    >
                      {DISTRICTS.map((d) => (
                        <MenuItem key={d} value={d}>{d}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <GroupsIcon sx={{ fontSize: 16 }} />
                        {lang === 'bn' ? 'অতিথি সংখ্যা' : 'Guests'}
                      </Box>
                    </InputLabel>
                    <Select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      label={lang === 'bn' ? 'অতিথি সংখ্যা' : 'Guests'}
                    >
                      {GUEST_RANGES.map((r) => (
                        <MenuItem key={r} value={r}>{r}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 2 }}>
                  <TextField
                    fullWidth
                    size="small"
                    type="date"
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <EventIcon sx={{ fontSize: 16 }} />
                        {lang === 'bn' ? 'তারিখ' : 'Date'}
                      </Box>
                    }
                    InputLabelProps={{ shrink: true }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="medium"
                    startIcon={<SearchIcon />}
                    onClick={handleSearch}
                    sx={{
                      height: 40,
                      fontSize: '0.875rem',
                    }}
                  >
                    {lang === 'bn' ? 'খুঁজুন' : 'Search'}
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            {/* CTAs */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/find-baburchi')}
                sx={{ px: 3 }}
              >
                {lang === 'bn' ? 'বাবুর্চি খুঁজুন' : 'Find a Baburchi'}
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/packages')}
                sx={{
                  borderColor: 'rgba(255,255,255,0.5)',
                  color: 'white',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                {lang === 'bn' ? 'প্যাকেজ দেখুন' : 'View Packages'}
              </Button>
            </Box>
          </Grid>

          {/* Right: Stats */}
          <Grid size={{ xs: 12, lg: 5 }} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {STATS.map((stat) => (
                <Paper
                  key={stat.value}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h4" fontWeight={700} color="primary.light">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.75)" mt={0.5}>
                    {lang === 'bn' ? stat.labelBn : stat.label}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Mobile Stats */}
      <Box
        sx={{
          display: { xs: 'flex', lg: 'none' },
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'rgba(15,23,42,0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 1,
          py: 2,
          px: 2,
          gap: 2,
          overflowX: 'auto',
          justifyContent: 'center',
        }}
      >
        {STATS.map((stat) => (
          <Box key={stat.value} sx={{ textAlign: 'center', flexShrink: 0 }}>
            <Typography variant="h6" fontWeight={700} color="primary.light">
              {stat.value}
            </Typography>
            <Typography variant="caption" color="rgba(255,255,255,0.65)">
              {lang === 'bn' ? stat.labelBn : stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
