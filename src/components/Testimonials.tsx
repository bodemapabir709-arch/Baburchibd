import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TESTIMONIALS = [
  {
    name: 'Farida Begum',
    nameBn: 'ফরিদা বেগম',
    event: 'Wedding, Dhaka',
    eventBn: 'বিবাহ, ঢাকা',
    rating: 5,
    text: 'Ustaz Karim cooked the most amazing Kacchi Biryani I have ever tasted at my daughter\'s wedding. Over 500 guests were completely satisfied. The service was seamless and professional.',
    textBn: 'উস্তাদ করিম আমার মেয়ের বিবাহে সবচেয়ে অসাধারণ কাচ্চি বিরিয়ানি রান্না করেছিলেন। ৫০০+ অতিথি সম্পূর্ণ সন্তুষ্ট ছিলেন। সার্ভিস ছিল নিখুঁত এবং পেশাদার।',
    avatar: 'F',
    avatarColor: '#D97706',
    date: 'March 2025',
  },
  {
    name: 'Mohammad Hossain',
    nameBn: 'মোহাম্মদ হোসেন',
    event: 'Corporate Event, Chattogram',
    eventBn: 'কর্পোরেট ইভেন্ট, চট্টগ্রাম',
    rating: 5,
    text: 'Booked Chef Rahim for our annual company dinner. The Beef Tehari and Korma were extraordinary. Our 200 employees were all impressed. Will definitely book again next year.',
    textBn: 'আমাদের বার্ষিক কোম্পানি ডিনারের জন্য শেফ রহিমকে বুক করেছিলাম। গরুর তেহারি ও কোরমা ছিল অসাধারণ। আমাদের ২০০ কর্মচারী সবাই মুগ্ধ ছিলেন।',
    avatar: 'M',
    avatarColor: '#7C3AED',
    date: 'January 2025',
  },
  {
    name: 'Sumaiya Islam',
    nameBn: 'সুমাইয়া ইসলাম',
    event: 'Birthday Party, Sylhet',
    eventBn: 'জন্মদিন পার্টি, সিলেট',
    rating: 5,
    text: 'Found an excellent baburchi for my son\'s birthday through BaburchiBD. The booking process was very easy, payment via bKash was smooth, and the chef arrived on time. Food was absolutely delicious!',
    textBn: 'বাবুর্চিবিডির মাধ্যমে আমার ছেলের জন্মদিনের জন্য একজন চমৎকার বাবুর্চি পেয়েছিলাম। বুকিং প্রক্রিয়া ছিল সহজ, বিকাশে পেমেন্ট মসৃণ এবং শেফ সময়মতো এসেছিলেন।',
    avatar: 'S',
    avatarColor: '#EF4444',
    date: 'April 2025',
  },
  {
    name: 'Abdul Kadir',
    nameBn: 'আব্দুল কাদের',
    event: 'Milad Mahfil, Rajshahi',
    eventBn: 'মিলাদ মাহফিল, রাজশাহী',
    rating: 5,
    text: 'Baburchi Hasan prepared the Tabarruk for our Milad Mahfil with great care and cleanliness. The food was halal and tasted authentic. BaburchiBD made the entire process effortless.',
    textBn: 'বাবুর্চি হাসান আমাদের মিলাদ মাহফিলের জন্য তাবাররুক প্রস্তুত করেছিলেন অত্যন্ত যত্ন ও পরিচ্ছন্নতার সাথে। খাবার ছিল হালাল এবং খাঁটি স্বাদে।',
    avatar: 'A',
    avatarColor: '#059669',
    date: 'February 2025',
  },
  {
    name: 'Rashida Khanam',
    nameBn: 'রাশিদা খানম',
    event: 'Mehndi Ceremony, Dhaka',
    eventBn: 'মেহেন্দি অনুষ্ঠান, ঢাকা',
    rating: 4,
    text: 'Great experience overall! The biryani at our mehndi night was incredible. Chef was very friendly and kept the kitchen spotlessly clean. Minor delay on arrival but totally worth it.',
    textBn: 'সামগ্রিকভাবে দারুণ অভিজ্ঞতা! আমাদের মেহেন্দি রাতের বিরিয়ানি ছিল অবিশ্বাস্য। শেফ অত্যন্ত বন্ধুত্বপূর্ণ ছিলেন এবং রান্নাঘর পরিষ্কার রেখেছিলেন।',
    avatar: 'R',
    avatarColor: '#DB2777',
    date: 'May 2025',
  },
  {
    name: 'Tanvir Rahman',
    nameBn: 'তানভীর রহমান',
    event: 'Family Reunion, Mymensingh',
    eventBn: 'পারিবারিক পুনর্মিলনী, ময়মনসিংহ',
    rating: 5,
    text: "Arranged catering for 150 family members through BaburchiBD. The polao and korma were restaurant quality. Everyone asked for the chef's contact. Highly recommended!",
    textBn: 'বাবুর্চিবিডির মাধ্যমে ১৫০ পরিবারের সদস্যদের জন্য ক্যাটারিং ব্যবস্থা করেছিলাম। পোলাও ও কোরমা ছিল রেস্তোরাঁর মানের। সবাই শেফের নম্বর চেয়েছিলেন।',
    avatar: 'T',
    avatarColor: '#0284C7',
    date: 'June 2025',
  },
];

interface TestimonialsProps {
  lang: 'en' | 'bn';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'secondary.main',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(217,119,6,0.08) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(124,58,237,0.06) 0%, transparent 50%)`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Chip
            label={lang === 'bn' ? 'গ্রাহকদের অভিজ্ঞতা' : 'Customer Experiences'}
            sx={{
              mb: 2,
              bgcolor: 'rgba(245,158,11,0.15)',
              color: 'primary.light',
              fontWeight: 600,
              border: '1px solid rgba(245,158,11,0.25)',
            }}
          />
          <Typography variant="h2" fontWeight={700} color="white" mb={2}>
            {lang === 'bn' ? 'তারা কী বলছেন' : 'What They\'re Saying'}
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 480, mx: 'auto' }}>
            {lang === 'bn'
              ? 'হাজারো সন্তুষ্ট গ্রাহক বাবুর্চিবিডিকে বিশ্বাস করেন তাদের বিশেষ মুহূর্তগুলোর জন্য।'
              : 'Thousands of satisfied customers trust BaburchiBD for their most special moments.'}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {TESTIMONIALS.map((t, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 3,
                  bgcolor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'background 0.2s, border-color 0.2s',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.08)',
                    borderColor: 'rgba(217,119,6,0.3)',
                  },
                }}
              >
                <FormatQuoteIcon sx={{ color: 'primary.main', fontSize: 32, mb: 1.5, opacity: 0.8 }} />

                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, flexGrow: 1, mb: 2.5 }}
                >
                  {lang === 'bn' ? t.textBn : t.text}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ bgcolor: t.avatarColor, width: 44, height: 44, fontWeight: 700 }}>
                    {t.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" color="white" fontWeight={600}>
                      {lang === 'bn' ? t.nameBn : t.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      {lang === 'bn' ? t.eventBn : t.event}
                    </Typography>
                  </Box>
                  <Box sx={{ ml: 'auto', textAlign: 'right' }}>
                    <Rating value={t.rating} size="small" readOnly sx={{ '& .MuiRating-iconFilled': { color: '#F59E0B' } }} />
                    <Typography variant="caption" sx={{ display: 'block', color: 'rgba(255,255,255,0.4)' }}>
                      {t.date}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
