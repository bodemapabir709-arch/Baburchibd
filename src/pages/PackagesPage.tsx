import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const PACKAGES = [
  {
    name: 'Basic',
    nameBn: 'বেসিক',
    price: '৳ 75',
    priceSuffix: '/person',
    priceSuffixBn: '/জন',
    description: 'Perfect for small family gatherings and birthday parties.',
    descriptionBn: 'ছোট পারিবারিক অনুষ্ঠান এবং জন্মদিন পার্টির জন্য উপযুক্ত।',
    minGuests: 50,
    maxGuests: 150,
    features: [
      '1 Main Rice Dish (Polao or Tehari)',
      '1 Meat Curry (Chicken/Beef)',
      '1 Salad & Condiments',
      'Chef for 1 Day',
      'Basic Utensils Provided',
    ],
    featuresBn: [
      '১টি প্রধান ভাত (পোলাও বা তেহারি)',
      '১টি মাংসের তরকারি',
      '১টি সালাদ ও আচার',
      '১ দিনের জন্য শেফ',
      'মৌলিক পাত্রসামগ্রী',
    ],
    color: '#0284C7',
    popular: false,
  },
  {
    name: 'Standard',
    nameBn: 'স্ট্যান্ডার্ড',
    price: '৳ 120',
    priceSuffix: '/person',
    priceSuffixBn: '/জন',
    description: 'Ideal for weddings and large family events up to 400 guests.',
    descriptionBn: '৪০০ অতিথি পর্যন্ত বিবাহ ও বড় পারিবারিক অনুষ্ঠানের জন্য আদর্শ।',
    minGuests: 100,
    maxGuests: 400,
    features: [
      'Kacchi Biryani or Morog Polao',
      '2 Meat Curries (Korma + Roast)',
      'Jali Kebab Starter',
      'Borhani Drink',
      'Firni Dessert',
      'Full Catering Team (3 chefs)',
      'Serving Staff Included',
      'Utensils & Setup Provided',
    ],
    featuresBn: [
      'কাচ্চি বিরিয়ানি বা মোরগ পোলাও',
      '২টি মাংসের তরকারি (কোরমা + রোস্ট)',
      'জালি কাবাব স্টার্টার',
      'বোরহানি পানীয়',
      'ফিরনি ডেজার্ট',
      'পূর্ণ ক্যাটারিং টিম (৩ শেফ)',
      'পরিচর্যাকারী স্টাফ',
      'পাত্রসামগ্রী ও সেটআপ',
    ],
    color: '#D97706',
    popular: true,
  },
  {
    name: 'Premium',
    nameBn: 'প্রিমিয়াম',
    price: '৳ 180',
    priceSuffix: '/person',
    priceSuffixBn: '/জন',
    description: 'Grand catering for royal weddings and corporate banquets.',
    descriptionBn: 'রাজকীয় বিবাহ এবং কর্পোরেট ব্যাংকোয়েটের জন্য গ্র্যান্ড ক্যাটারিং।',
    minGuests: 200,
    maxGuests: 2000,
    features: [
      'Kacchi Biryani + Tehari + Polao',
      '3 Premium Meat Dishes',
      'Shorshe Ilish (Hilsa Fish)',
      'Multiple Salads & Raita',
      'Borhani + Sharbat',
      'Full Dessert Spread',
      'Master Chef + Full Team (6+)',
      'Decoration & Flower Arrangements',
      'Live Cooking Station',
      '24-hr Support',
    ],
    featuresBn: [
      'কাচ্চি + তেহারি + পোলাও',
      '৩টি প্রিমিয়াম মাংসের ডিশ',
      'সর্ষে ইলিশ',
      'একাধিক সালাদ ও রায়তা',
      'বোরহানি + শরবত',
      'পূর্ণ ডেজার্ট স্প্রেড',
      'মাস্টার শেফ + পূর্ণ টিম (৬+)',
      'ডেকোরেশন ও ফুলের সাজসজ্জা',
      'লাইভ কুকিং স্টেশন',
      '২৪ ঘন্টা সাপোর্ট',
    ],
    color: '#7C3AED',
    popular: false,
  },
];

interface PackagesPageProps {
  lang: 'en' | 'bn';
}

export default function PackagesPage({ lang }: PackagesPageProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: { xs: 10, md: 12 }, pb: 8, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label={lang === 'bn' ? 'আমাদের প্যাকেজ' : 'Our Packages'}
            sx={{ mb: 2, bgcolor: 'rgba(217,119,6,0.1)', color: 'primary.main', fontWeight: 600, border: '1px solid rgba(217,119,6,0.2)' }}
          />
          <Typography variant="h2" fontWeight={700} color="text.primary" mb={2}>
            {lang === 'bn' ? 'ক্যাটারিং প্যাকেজ' : 'Catering Packages'}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mx: 'auto', lineHeight: 1.7 }}>
            {lang === 'bn'
              ? 'আপনার বাজেট এবং অনুষ্ঠানের আকার অনুযায়ী সঠিক প্যাকেজ বেছে নিন।'
              : 'Choose the right package based on your budget and event size.'}
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {PACKAGES.map((pkg) => (
            <Grid key={pkg.name} size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '2px solid',
                  borderColor: pkg.popular ? pkg.color : 'divider',
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 20px 60px ${pkg.color}20`,
                  },
                }}
              >
                {pkg.popular && (
                  <Box
                    sx={{
                      bgcolor: pkg.color,
                      textAlign: 'center',
                      py: 0.75,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.5,
                    }}
                  >
                    <StarIcon sx={{ fontSize: 14, color: 'white' }} />
                    <Typography variant="caption" color="white" fontWeight={700} sx={{ letterSpacing: '0.5px' }}>
                      {lang === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'MOST POPULAR'}
                    </Typography>
                  </Box>
                )}

                <Box sx={{ p: 3.5, flexGrow: 1 }}>
                  <Typography variant="h5" fontWeight={700} color="text.primary" mb={0.5}>
                    {lang === 'bn' ? pkg.nameBn : pkg.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={3} lineHeight={1.6}>
                    {lang === 'bn' ? pkg.descriptionBn : pkg.description}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mb: 0.5 }}>
                    <Typography variant="h3" fontWeight={700} sx={{ color: pkg.color }}>
                      {pkg.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {lang === 'bn' ? pkg.priceSuffixBn : pkg.priceSuffix}
                    </Typography>
                  </Box>

                  <Typography variant="caption" color="text.secondary" display="block" mb={3}>
                    {lang === 'bn'
                      ? `${pkg.minGuests}-${pkg.maxGuests}+ অতিথি`
                      : `${pkg.minGuests}-${pkg.maxGuests}+ guests`}
                  </Typography>

                  <Divider sx={{ mb: 3 }} />

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {(lang === 'bn' ? pkg.featuresBn : pkg.features).map((feature, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            bgcolor: `${pkg.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            mt: 0.1,
                          }}
                        >
                          <CheckIcon sx={{ fontSize: 12, color: pkg.color }} />
                        </Box>
                        <Typography variant="body2" color="text.secondary">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant={pkg.popular ? 'contained' : 'outlined'}
                    fullWidth
                    size="large"
                    onClick={() => navigate('/find-baburchi')}
                    sx={{
                      borderColor: pkg.color,
                      color: pkg.popular ? 'white' : pkg.color,
                      bgcolor: pkg.popular ? pkg.color : 'transparent',
                      '&:hover': {
                        bgcolor: pkg.popular ? pkg.color : `${pkg.color}10`,
                        borderColor: pkg.color,
                        opacity: 0.9,
                      },
                      background: pkg.popular ? `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)` : 'transparent',
                    }}
                  >
                    {lang === 'bn' ? 'এই প্যাকেজ বুক করুন' : 'Book This Package'}
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {lang === 'bn'
              ? 'কাস্টম প্যাকেজের জন্য আমাদের সাথে যোগাযোগ করুন।'
              : 'Need a custom package? '}
            <Button variant="text" color="primary" sx={{ p: 0, minWidth: 0, verticalAlign: 'baseline' }}>
              {lang === 'bn' ? 'কথা বলুন' : 'Contact us'}
            </Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
