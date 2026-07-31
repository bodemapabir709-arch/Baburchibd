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
import Divider from '@mui/material/Divider';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';

export const CHEFS = [
  {
    id: 1,
    name: 'Ustaz Karim Ahmed',
    nameBn: 'উস্তাদ করিম আহমেদ',
    specialization: 'Kacchi Biryani Master',
    specializationBn: 'কাচ্চি বিরিয়ানি মাস্টার',
    location: 'Dhaka',
    locationBn: 'ঢাকা',
    experience: 22,
    rating: 4.9,
    reviews: 486,
    startingPrice: '৳ 85/person',
    image: '/chef-portrait-1.webp',
    tags: ['Kacchi Biryani', 'Wedding', 'Polao'],
    tagsBn: ['কাচ্চি বিরিয়ানি', 'বিবাহ', 'পোলাও'],
    verified: true,
  },
  {
    id: 2,
    name: 'Chef Rahim Uddin',
    nameBn: 'শেফ রহিম উদ্দিন',
    specialization: 'Wedding & Tehari Expert',
    specializationBn: 'বিবাহ ও তেহারি বিশেষজ্ঞ',
    location: 'Chattogram',
    locationBn: 'চট্টগ্রাম',
    experience: 18,
    rating: 4.8,
    reviews: 312,
    startingPrice: '৳ 75/person',
    image: '/chef-portrait-2.webp',
    tags: ['Beef Tehari', 'Korma', 'Roast'],
    tagsBn: ['গরুর তেহারি', 'কোরমা', 'রোস্ট'],
    verified: true,
  },
  {
    id: 3,
    name: 'Baburchi Hasan Ali',
    nameBn: 'বাবুর্চি হাসান আলী',
    specialization: 'Traditional Feast Specialist',
    specializationBn: 'ঐতিহ্যবাহী ভোজ বিশেষজ্ঞ',
    location: 'Sylhet',
    locationBn: 'সিলেট',
    experience: 15,
    rating: 4.7,
    reviews: 228,
    startingPrice: '৳ 70/person',
    image: '/chef-portrait-3.webp',
    tags: ['Milad', 'Jali Kebab', 'Borhani'],
    tagsBn: ['মিলাদ', 'জালি কাবাব', 'বোরহানি'],
    verified: true,
  },
  {
    id: 4,
    name: 'Chef Nasir Hossain',
    nameBn: 'শেফ নাসির হোসেন',
    specialization: 'Korma & Roast Master',
    specializationBn: 'কোরমা ও রোস্ট মাস্টার',
    location: 'Dhaka',
    locationBn: 'ঢাকা',
    experience: 12,
    rating: 4.8,
    reviews: 195,
    startingPrice: '৳ 90/person',
    image: '/chef-portrait-4.webp',
    tags: ['Korma', 'Morog Polao', 'Wedding'],
    tagsBn: ['কোরমা', 'মোরগ পোলাও', 'বিবাহ'],
    verified: false,
  },
];

interface ChefListingProps {
  lang: 'en' | 'bn';
  maxCards?: number;
}

export default function ChefListing({ lang, maxCards = 4 }: ChefListingProps) {
  const navigate = useNavigate();
  const chefs = CHEFS.slice(0, maxCards);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #D97706, #EF4444, #7C3AED)',
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6, flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Chip
              label={lang === 'bn' ? 'বিশেষজ্ঞ বাবুর্চি' : 'Expert Baburchis'}
              sx={{
                mb: 1.5,
                bgcolor: 'rgba(217,119,6,0.1)',
                color: 'primary.main',
                fontWeight: 600,
                border: '1px solid rgba(217,119,6,0.2)',
              }}
            />
            <Typography variant="h2" fontWeight={700} color="text.primary">
              {lang === 'bn' ? 'শীর্ষ বাবুর্চিরা' : 'Top Baburchis'}
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={1}>
              {lang === 'bn'
                ? 'যাচাইকৃত এবং সর্বোচ্চ রেটিং প্রাপ্ত শেফদের সাথে সংযুক্ত হন'
                : 'Connect with verified, highest-rated chefs near you'}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            onClick={() => navigate('/find-baburchi')}
            sx={{ borderColor: 'primary.main', color: 'primary.main', flexShrink: 0 }}
          >
            {lang === 'bn' ? 'সব বাবুর্চি দেখুন' : 'View All Chefs'}
          </Button>
        </Box>

        <Grid container spacing={3}>
          {chefs.map((chef) => (
            <Grid key={chef.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.1)',
                  },
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                {/* Chef Image */}
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src={chef.image}
                    alt={chef.name}
                    sx={{
                      width: '100%',
                      height: 220,
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                  {chef.verified && (
                    <Chip
                      icon={<VerifiedIcon sx={{ fontSize: '14px !important', color: 'white !important' }} />}
                      label={lang === 'bn' ? 'যাচাইকৃত' : 'Verified'}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        '& .MuiChip-icon': { color: 'white' },
                      }}
                    />
                  )}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 10,
                      right: 10,
                      bgcolor: 'rgba(15,23,42,0.8)',
                      backdropFilter: 'blur(4px)',
                      borderRadius: 2,
                      px: 1.5,
                      py: 0.5,
                    }}
                  >
                    <Typography variant="caption" color="white" fontWeight={700}>
                      {chef.startingPrice}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                  <Typography variant="h6" fontWeight={700} color="text.primary" gutterBottom>
                    {lang === 'bn' ? chef.nameBn : chef.name}
                  </Typography>

                  <Typography variant="body2" color="primary.main" fontWeight={600} mb={1}>
                    {lang === 'bn' ? chef.specializationBn : chef.specialization}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                    <LocationOnIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                    <Typography variant="caption" color="text.secondary">
                      {lang === 'bn' ? chef.locationBn : chef.location}
                    </Typography>
                    <Box sx={{ mx: 0.5, color: 'divider' }}>·</Box>
                    <WorkIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                    <Typography variant="caption" color="text.secondary">
                      {chef.experience}{lang === 'bn' ? ' বছরের অভিজ্ঞতা' : ' yrs exp.'}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Rating value={chef.rating} precision={0.1} size="small" readOnly />
                    <Typography variant="caption" color="text.secondary">
                      {chef.rating} ({chef.reviews})
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {(lang === 'bn' ? chef.tagsBn : chef.tags).map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(217,119,6,0.08)',
                          color: 'primary.dark',
                          fontSize: '0.65rem',
                          fontWeight: 500,
                          height: 22,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <Divider />
                <CardActions sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    onClick={() => navigate(`/chef/${chef.id}`)}
                    sx={{ fontSize: '0.8rem' }}
                  >
                    {lang === 'bn' ? 'প্রোফাইল ও বুকিং' : 'View Profile & Book'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
