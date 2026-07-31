import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const STEPS = [
  {
    icon: SearchIcon,
    step: '01',
    title: 'Find Your Chef',
    titleBn: 'শেফ খুঁজুন',
    description: 'Browse verified baburchis filtered by event type, location, specialty, and budget.',
    descriptionBn: 'ইভেন্টের ধরন, অবস্থান, বিশেষত্ব এবং বাজেট অনুযায়ী যাচাইকৃত বাবুর্চিদের দেখুন।',
    color: '#D97706',
    bgColor: 'rgba(217,119,6,0.08)',
  },
  {
    icon: CalendarMonthIcon,
    step: '02',
    title: 'Choose Date & Menu',
    titleBn: 'তারিখ ও মেনু বাছুন',
    description: 'Select your event date, enter guest count, and customize your menu from traditional options.',
    descriptionBn: 'ইভেন্টের তারিখ নির্বাচন করুন, অতিথির সংখ্যা দিন এবং ঐতিহ্যবাহী মেনু কাস্টমাইজ করুন।',
    color: '#7C3AED',
    bgColor: 'rgba(124,58,237,0.08)',
  },
  {
    icon: MenuBookIcon,
    step: '03',
    title: 'Review & Confirm',
    titleBn: 'রিভিউ ও নিশ্চিত করুন',
    description: "Review the full cost breakdown — chef fee, ingredients estimate, and service charges.",
    descriptionBn: 'পূর্ণ খরচের বিবরণ দেখুন — শেফের ফি, উপকরণের আনুমানিক খরচ এবং সার্ভিস চার্জ।',
    color: '#0284C7',
    bgColor: 'rgba(2,132,199,0.08)',
  },
  {
    icon: PaymentIcon,
    step: '04',
    title: 'Pay & Book',
    titleBn: 'পেমেন্ট ও বুকিং',
    description: 'Pay advance via bKash, Nagad, Rocket, or Card. Get instant booking confirmation.',
    descriptionBn: 'বিকাশ, নগদ, রকেট বা কার্ডে অগ্রিম পেমেন্ট করুন। তাৎক্ষণিক বুকিং নিশ্চিতকরণ পান।',
    color: '#059669',
    bgColor: 'rgba(5,150,105,0.08)',
  },
  {
    icon: RestaurantIcon,
    step: '05',
    title: 'Chef Arrives',
    titleBn: 'শেফ আসেন',
    description: 'Your baburchi arrives at your venue on the event day and handles everything end-to-end.',
    descriptionBn: 'আপনার বাবুর্চি ইভেন্টের দিন ভেন্যুতে আসেন এবং সবকিছু শেষ পর্যন্ত সামলান।',
    color: '#EF4444',
    bgColor: 'rgba(239,68,68,0.08)',
  },
  {
    icon: CheckCircleIcon,
    step: '06',
    title: 'Rate & Review',
    titleBn: 'রেট ও রিভিউ করুন',
    description: 'After the event, share your experience to help the community find great chefs.',
    descriptionBn: 'ইভেন্টের পরে, অভিজ্ঞতা শেয়ার করুন যাতে কমিউনিটি ভালো শেফ খুঁজে পায়।',
    color: '#D97706',
    bgColor: 'rgba(217,119,6,0.08)',
  },
];

interface HowItWorksProps {
  lang: 'en' | 'bn';
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,119,6,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label={lang === 'bn' ? 'এটি কীভাবে কাজ করে' : 'How It Works'}
            sx={{
              mb: 2,
              bgcolor: 'rgba(217,119,6,0.1)',
              color: 'primary.main',
              fontWeight: 600,
              border: '1px solid rgba(217,119,6,0.2)',
            }}
          />
          <Typography variant="h2" fontWeight={700} color="text.primary" mb={2}>
            {lang === 'bn' ? 'মাত্র ৬টি সহজ ধাপে' : 'Just 6 Simple Steps'}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480, mx: 'auto', lineHeight: 1.7 }}>
            {lang === 'bn'
              ? 'বাবুর্চিবিডিতে বুকিং করা অত্যন্ত সহজ। মিনিটের মধ্যে আপনার অনুষ্ঠানের জন্য পারফেক্ট শেফ পান।'
              : 'Booking on BaburchiBD is incredibly simple. Get the perfect chef for your event in minutes.'}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      borderColor: step.color,
                      boxShadow: `0 8px 32px ${step.color}15`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 16,
                      fontSize: '3.5rem',
                      fontWeight: 800,
                      color: step.color,
                      opacity: 0.08,
                      lineHeight: 1,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {step.step}
                  </Typography>

                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2.5,
                      bgcolor: step.bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    <Icon sx={{ color: step.color, fontSize: 26 }} />
                  </Box>

                  <Typography variant="h6" fontWeight={700} color="text.primary" mb={1}>
                    {lang === 'bn' ? step.titleBn : step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.65}>
                    {lang === 'bn' ? step.descriptionBn : step.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
