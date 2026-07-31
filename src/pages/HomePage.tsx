import Hero from '../components/Hero';
import ServiceCategories from '../components/ServiceCategories';
import ChefListing from '../components/ChefListing';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useNavigate } from 'react-router-dom';

const FOOD_GALLERY = [
  { img: '/food-biryani.webp', label: 'Kacchi Biryani', labelBn: 'কাচ্চি বিরিয়ানি' },
  { img: '/food-tehari.webp', label: 'Beef Tehari', labelBn: 'গরুর তেহারি' },
  { img: '/food-korma.webp', label: 'Beef Korma', labelBn: 'গরুর কোরমা' },
  { img: '/food-polao.webp', label: 'Morog Polao', labelBn: 'মোরগ পোলাও' },
  { img: '/catering-setup.webp', label: 'Wedding Buffet', labelBn: 'বিবাহ বুফে' },
  { img: '/cooking-action.webp', label: 'Live Cooking', labelBn: 'লাইভ রান্না' },
];

interface HomePageProps {
  lang: 'en' | 'bn';
}

export default function HomePage({ lang }: HomePageProps) {
  const navigate = useNavigate();

  return (
    <Box>
      <Hero lang={lang} />
      <ServiceCategories lang={lang} />
      <ChefListing lang={lang} />
      <HowItWorks lang={lang} />

      {/* Food Gallery Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label={lang === 'bn' ? 'আমাদের খাবার' : 'Our Food'}
              sx={{
                mb: 2,
                bgcolor: 'rgba(217,119,6,0.1)',
                color: 'primary.main',
                fontWeight: 600,
                border: '1px solid rgba(217,119,6,0.2)',
              }}
            />
            <Typography variant="h2" fontWeight={700} color="text.primary">
              {lang === 'bn' ? 'ঐতিহ্যবাহী রান্নার স্বাদ' : 'A Taste of Tradition'}
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {FOOD_GALLERY.map((item, i) => (
              <Grid key={i} size={{ xs: 6, sm: 4, md: 2 }}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    aspectRatio: '1',
                    cursor: 'pointer',
                    '&:hover img': { transform: 'scale(1.08)' },
                    '&:hover .label': { opacity: 1 },
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.label}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      display: 'block',
                    }}
                  />
                  <Box
                    className="label"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15,23,42,0.75), transparent)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 1.5,
                      opacity: 0.7,
                      transition: 'opacity 0.2s',
                    }}
                  >
                    <Typography variant="caption" color="white" fontWeight={600}>
                      {lang === 'bn' ? item.labelBn : item.label}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #D97706 0%, #B45309 50%, #1E293B 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 70% 50%, rgba(239,68,68,0.15) 0%, transparent 60%)`,
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
          <LocalOfferIcon sx={{ fontSize: 48, color: 'rgba(255,255,255,0.3)', mb: 2 }} />
          <Typography variant="h2" fontWeight={700} color="white" mb={2}>
            {lang === 'bn'
              ? 'আজই আপনার অনুষ্ঠানের জন্য বুকিং করুন'
              : 'Book for Your Event Today'}
          </Typography>
          <Typography variant="body1" color="rgba(255,255,255,0.75)" mb={4} sx={{ maxWidth: 480, mx: 'auto', lineHeight: 1.7 }}>
            {lang === 'bn'
              ? 'প্রথম বুকিংয়ে ১৫% ছাড় পান। সীমিত সময়ের অফার।'
              : 'Get 15% off your first booking. Limited time offer.'}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/find-baburchi')}
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'white',
                color: 'primary.dark',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                px: 4,
              }}
            >
              {lang === 'bn' ? 'এখনই বুক করুন' : 'Book Now'}
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/packages')}
              sx={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: 'white',
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                px: 4,
              }}
            >
              {lang === 'bn' ? 'প্যাকেজ দেখুন' : 'View Packages'}
            </Button>
          </Box>
        </Container>
      </Box>

      <Testimonials lang={lang} />
    </Box>
  );
}
