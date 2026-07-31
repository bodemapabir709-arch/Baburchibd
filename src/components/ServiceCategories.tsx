import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
  {
    id: 1,
    name: 'Wedding & Reception',
    nameBn: 'বিবাহ ও রিসেপশন',
    description: 'Complete traditional and modern wedding menu management with expert master cooks.',
    descriptionBn: 'বিশেষজ্ঞ শেফদের সাথে সম্পূর্ণ ঐতিহ্যবাহী ও আধুনিক বিবাহ মেনু ব্যবস্থাপনা।',
    image: '/wedding-catering.webp',
    count: '450+ Chefs',
    countBn: '৪৫০+ শেফ',
    color: '#D97706',
  },
  {
    id: 2,
    name: 'Biryani & Tehari',
    nameBn: 'বিরিয়ানি ও তেহারি',
    description: 'Master chefs specialized in authentic Kacchi, Morog Polao, and Beef Tehari.',
    descriptionBn: 'খাঁটি কাচ্চি, মোরগ পোলাও এবং গরুর তেহারিতে বিশেষজ্ঞ মাস্টার শেফ।',
    image: '/food-biryani.webp',
    count: '320+ Chefs',
    countBn: '৩২০+ শেফ',
    color: '#EF4444',
  },
  {
    id: 3,
    name: 'Milad & Religious',
    nameBn: 'মিলাদ ও ধর্মীয় অনুষ্ঠান',
    description: 'Specialized cooking for Tabarruk, Milad Mahfil, and Islamic gatherings.',
    descriptionBn: 'তাবাররুক, মিলাদ মাহফিল এবং ইসলামিক অনুষ্ঠানের জন্য বিশেষ রান্না।',
    image: '/food-polao.webp',
    count: '180+ Chefs',
    countBn: '১৮০+ শেফ',
    color: '#059669',
  },
  {
    id: 4,
    name: 'Birthday & Parties',
    nameBn: 'জন্মদিন ও পার্টি',
    description: 'Customized small-to-medium scale catering for domestic celebrations.',
    descriptionBn: 'পারিবারিক উদযাপনের জন্য কাস্টমাইজড ছোট থেকে মাঝারি স্কেল ক্যাটারিং।',
    image: '/catering-setup.webp',
    count: '290+ Chefs',
    countBn: '২৯০+ শেফ',
    color: '#7C3AED',
  },
  {
    id: 5,
    name: 'Corporate Events',
    nameBn: 'কর্পোরেট ইভেন্ট',
    description: 'Professional catering for office events, product launches, and corporate dinners.',
    descriptionBn: 'অফিস ইভেন্ট, প্রোডাক্ট লঞ্চ এবং কর্পোরেট ডিনারের জন্য পেশাদার ক্যাটারিং।',
    image: '/cooking-action.webp',
    count: '140+ Chefs',
    countBn: '১৪০+ শেফ',
    color: '#0284C7',
  },
  {
    id: 6,
    name: 'Korma & Special Menus',
    nameBn: 'কোরমা ও বিশেষ মেনু',
    description: 'Rich aromatic kormas, roasts, and elaborate feast preparations.',
    descriptionBn: 'সমৃদ্ধ সুগন্ধি কোরমা, রোস্ট এবং বিস্তারিত ভোজ প্রস্তুতি।',
    image: '/food-korma.webp',
    count: '210+ Chefs',
    countBn: '২১০+ শেফ',
    color: '#DB2777',
  },
];

interface ServiceCategoriesProps {
  lang: 'en' | 'bn';
}

export default function ServiceCategories({ lang }: ServiceCategoriesProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Chip
            label={lang === 'bn' ? 'আমাদের সেবা' : 'Our Services'}
            sx={{
              mb: 2,
              bgcolor: 'rgba(217,119,6,0.1)',
              color: 'primary.main',
              fontWeight: 600,
              border: '1px solid rgba(217,119,6,0.2)',
            }}
          />
          <Typography variant="h2" fontWeight={700} color="text.primary" sx={{ mb: 2 }}>
            {lang === 'bn' ? 'সব ধরনের অনুষ্ঠানের জন্য' : 'For Every Type of Event'}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mx: 'auto', lineHeight: 1.7 }}>
            {lang === 'bn'
              ? 'বিবাহ থেকে কর্পোরেট ইভেন্ট পর্যন্ত — আমাদের বিশেষজ্ঞ শেফরা সব ধরনের অনুষ্ঠান সামলাতে পারদর্শী।'
              : 'From weddings to corporate events — our expert chefs are masters of every occasion.'}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {CATEGORIES.map((cat) => (
            <Grid key={cat.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  },
                  overflow: 'hidden',
                }}
              >
                <CardActionArea
                  onClick={() => navigate('/find-baburchi')}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={cat.image}
                      alt={cat.name}
                      sx={{
                        transition: 'transform 0.4s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 60%)`,
                      }}
                    />
                    <Chip
                      label={lang === 'bn' ? cat.countBn : cat.count}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        bgcolor: 'rgba(255,255,255,0.92)',
                        color: cat.color,
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        border: `1px solid ${cat.color}30`,
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: cat.color,
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="h6" fontWeight={700} color="text.primary">
                        {lang === 'bn' ? cat.nameBn : cat.name}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
                      {lang === 'bn' ? cat.descriptionBn : cat.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        mt: 2,
                        color: cat.color,
                        fontWeight: 600,
                        fontSize: '0.8rem',
                      }}
                    >
                      {lang === 'bn' ? 'বাবুর্চি দেখুন' : 'Browse Chefs'}
                      <ArrowForwardIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
