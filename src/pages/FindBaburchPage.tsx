import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedIcon from '@mui/icons-material/Verified';
import TuneIcon from '@mui/icons-material/Tune';
import { useNavigate } from 'react-router-dom';
import { CHEFS } from '../components/ChefListing';

const ALL_CHEFS = [
  ...CHEFS,
  {
    id: 5,
    name: 'Master Chef Jalal',
    nameBn: 'মাস্টার শেফ জলাল',
    specialization: 'Milad & Religious Events',
    specializationBn: 'মিলাদ ও ধর্মীয় অনুষ্ঠান',
    location: 'Rajshahi',
    locationBn: 'রাজশাহী',
    experience: 20,
    rating: 4.6,
    reviews: 157,
    startingPrice: '৳ 65/person',
    image: '/chef-portrait-1.webp',
    tags: ['Milad', 'Tabarruk', 'Polao'],
    tagsBn: ['মিলাদ', 'তাবাররুক', 'পোলাও'],
    verified: true,
  },
  {
    id: 6,
    name: 'Ustaz Rafiq',
    nameBn: 'উস্তাজ রফিক',
    specialization: 'Corporate & Party Catering',
    specializationBn: 'কর্পোরেট ও পার্টি ক্যাটারিং',
    location: 'Khulna',
    locationBn: 'খুলনা',
    experience: 10,
    rating: 4.5,
    reviews: 98,
    startingPrice: '৳ 80/person',
    image: '/chef-portrait-3.webp',
    tags: ['Corporate', 'Birthday', 'Buffet'],
    tagsBn: ['কর্পোরেট', 'জন্মদিন', 'বুফে'],
    verified: false,
  },
];

const DISTRICTS = ['All', 'Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi', 'Khulna', 'Barishal', 'Mymensingh'];
const SPECIALIZATIONS = ['All', 'Wedding', 'Biryani', 'Milad', 'Birthday', 'Corporate', 'Korma'];

interface FindBaburchPageProps {
  lang: 'en' | 'bn';
}

export default function FindBaburchPage({ lang }: FindBaburchPageProps) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [district, setDistrict] = useState('All');
  const [specialization, setSpecialization] = useState('All');
  const [priceRange, setPriceRange] = useState<number[]>([50, 150]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = ALL_CHEFS.filter((chef) => {
    const matchSearch =
      chef.name.toLowerCase().includes(search.toLowerCase()) ||
      chef.specialization.toLowerCase().includes(search.toLowerCase());
    const matchDistrict = district === 'All' || chef.location === district;
    const matchSpec =
      specialization === 'All' ||
      chef.tags.some((t) => t.toLowerCase().includes(specialization.toLowerCase()));
    return matchSearch && matchDistrict && matchSpec;
  });

  return (
    <Box sx={{ pt: { xs: 10, md: 12 }, pb: 8, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" fontWeight={700} color="text.primary" mb={1}>
            {lang === 'bn' ? 'বাবুর্চি খুঁজুন' : 'Find a Baburchi'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {lang === 'bn'
              ? `${ALL_CHEFS.length}+ যাচাইকৃত বাবুর্চি আপনার সেবায় প্রস্তুত`
              : `${ALL_CHEFS.length}+ verified baburchis ready to serve you`}
          </Typography>
        </Box>

        {/* Search & Filters */}
        <Paper elevation={0} sx={{ p: 3, mb: 4, border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                placeholder={lang === 'bn' ? 'নাম বা বিশেষত্ব খুঁজুন...' : 'Search by name or specialty...'}
                size="small"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <FormControl fullWidth size="small">
                <InputLabel>{lang === 'bn' ? 'জেলা' : 'District'}</InputLabel>
                <Select value={district} onChange={(e) => setDistrict(e.target.value)} label={lang === 'bn' ? 'জেলা' : 'District'}>
                  {DISTRICTS.map((d) => <MenuItem key={d} value={d}>{d === 'All' ? (lang === 'bn' ? 'সব' : 'All') : d}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <FormControl fullWidth size="small">
                <InputLabel>{lang === 'bn' ? 'বিশেষত্ব' : 'Specialty'}</InputLabel>
                <Select value={specialization} onChange={(e) => setSpecialization(e.target.value)} label={lang === 'bn' ? 'বিশেষত্ব' : 'Specialty'}>
                  {SPECIALIZATIONS.map((s) => <MenuItem key={s} value={s}>{s === 'All' ? (lang === 'bn' ? 'সব' : 'All') : s}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<TuneIcon />}
                onClick={() => setShowFilters(!showFilters)}
                sx={{ height: 40 }}
              >
                {lang === 'bn' ? 'ফিল্টার' : 'Filter'}
              </Button>
            </Grid>
          </Grid>

          {showFilters && (
            <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography variant="subtitle2" fontWeight={600} mb={2}>
                {lang === 'bn' ? 'প্রতি ব্যক্তি মূল্য সীমা (৳)' : 'Price Range per Person (৳)'}
              </Typography>
              <Slider
                value={priceRange}
                onChange={(_, v) => setPriceRange(v as number[])}
                valueLabelDisplay="auto"
                min={50}
                max={200}
                sx={{ color: 'primary.main', mx: 1, width: '95%' }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                <Typography variant="caption" color="text.secondary">৳{priceRange[0]}</Typography>
                <Typography variant="caption" color="text.secondary">৳{priceRange[1]}</Typography>
              </Box>
            </Box>
          )}
        </Paper>

        {/* Results count */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            {lang === 'bn' ? `${filtered.length}টি শেফ পাওয়া গেছে` : `${filtered.length} chefs found`}
          </Typography>
        </Box>

        {/* Chef Cards */}
        <Grid container spacing={3}>
          {filtered.map((chef) => (
            <Grid key={chef.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(0,0,0,0.1)' },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box component="img" src={chef.image} alt={chef.name}
                    sx={{ width: '100%', height: 240, objectFit: 'cover', objectPosition: 'top' }} />
                  {chef.verified && (
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '14px !important', color: 'white !important' }} />}
                      label={lang === 'bn' ? 'যাচাইকৃত' : 'Verified'}
                      size="small"
                      sx={{ position: 'absolute', top: 12, left: 12, bgcolor: 'primary.main', color: 'white', fontWeight: 600, fontSize: '0.7rem' }}
                    />
                  )}
                  <Box sx={{ position: 'absolute', bottom: 10, right: 10, bgcolor: 'rgba(15,23,42,0.85)', borderRadius: 1.5, px: 1.5, py: 0.5 }}>
                    <Typography variant="caption" color="white" fontWeight={700}>{chef.startingPrice}</Typography>
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {lang === 'bn' ? chef.nameBn : chef.name}
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight={600} mb={1}>
                    {lang === 'bn' ? chef.specializationBn : chef.specialization}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOnIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">{lang === 'bn' ? chef.locationBn : chef.location}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <WorkIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">{chef.experience}{lang === 'bn' ? 'বছর' : 'yrs'}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <Rating value={chef.rating} precision={0.1} size="small" readOnly />
                    <Typography variant="caption" color="text.secondary">{chef.rating} ({chef.reviews})</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(lang === 'bn' ? chef.tagsBn : chef.tags).map((t) => (
                      <Chip key={t} label={t} size="small"
                        sx={{ bgcolor: 'rgba(217,119,6,0.08)', color: 'primary.dark', fontSize: '0.65rem', height: 22 }} />
                    ))}
                  </Box>
                </CardContent>
                <Divider />
                <CardActions sx={{ p: 2, gap: 1 }}>
                  <Button variant="outlined" size="small" onClick={() => navigate(`/chef/${chef.id}`)}
                    sx={{ flex: 1, fontSize: '0.8rem' }}>
                    {lang === 'bn' ? 'প্রোফাইল' : 'Profile'}
                  </Button>
                  <Button variant="contained" size="small" onClick={() => navigate(`/booking/${chef.id}`)}
                    sx={{ flex: 1, fontSize: '0.8rem' }}>
                    {lang === 'bn' ? 'বুক করুন' : 'Book Now'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filtered.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h5" color="text.secondary">
              {lang === 'bn' ? 'কোনো বাবুর্চি পাওয়া যায়নি' : 'No chefs found'}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {lang === 'bn' ? 'ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন' : 'Try adjusting your filters'}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
