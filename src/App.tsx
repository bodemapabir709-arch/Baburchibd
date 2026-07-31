import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FindBaburchPage from './pages/FindBaburchPage';
import ChefProfilePage from './pages/ChefProfilePage';
import BookingPage from './pages/BookingPage';
import PackagesPage from './pages/PackagesPage';
import HowItWorks from './components/HowItWorks';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function HowItWorksPage({ lang }: { lang: 'en' | 'bn' }) {
  return (
    <Box sx={{ pt: { xs: 10, md: 12 }, pb: 4, bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ pb: 2 }}>
        <Typography variant="h2" fontWeight={700} mb={1}>
          {lang === 'bn' ? 'এটি কীভাবে কাজ করে' : 'How It Works'}
        </Typography>
      </Container>
      <HowItWorks lang={lang} />
    </Box>
  );
}

function AboutPage({ lang }: { lang: 'en' | 'bn' }) {
  return (
    <Box sx={{ pt: { xs: 10, md: 12 }, pb: 8, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Typography variant="h2" fontWeight={700} mb={3}>
          {lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About BaburchiBD'}
        </Typography>
        <Typography variant="body1" color="text.secondary" lineHeight={1.8} mb={3}>
          {lang === 'bn'
            ? 'BaburchiBD বাংলাদেশের প্রথম এবং বৃহত্তম অনলাইন ক্যাটারিং ও বাবুর্চি বুকিং প্ল্যাটফর্ম। আমরা ২০২৩ সালে প্রতিষ্ঠিত হয়েছিলাম একটি লক্ষ্য নিয়ে: প্রতিটি বাংলাদেশি পরিবারের জন্য ঐতিহ্যবাহী রান্নার সেরা শেফ এবং ক্যাটারিং পরিষেবা সহজলভ্য করা।'
            : "BaburchiBD is Bangladesh's first and largest online catering and baburchi booking platform. Founded in 2023 with one mission: to make the best traditional cooking chefs and catering services accessible to every Bangladeshi family."}
        </Typography>
        <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
          {lang === 'bn'
            ? 'আমাদের প্ল্যাটফর্মে ১,২০০+ যাচাইকৃত শেফ রয়েছেন যারা বাংলাদেশের ৬৪টি জেলায় পরিষেবা প্রদান করেন। বিবাহ থেকে কর্পোরেট ইভেন্ট, মিলাদ থেকে পারিবারিক পার্টি — আমরা সব ধরনের অনুষ্ঠানে ঐতিহ্যবাহী স্বাদ নিশ্চিত করি।'
            : 'Our platform has 1,200+ verified chefs serving all 64 districts of Bangladesh. From weddings to corporate events, milad to family parties — we ensure the authentic taste of tradition at every occasion.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default function App() {
  const [lang, setLang] = useState<'en' | 'bn'>('en');

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar lang={lang} onLangToggle={() => setLang((l) => (l === 'en' ? 'bn' : 'en'))} />
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/find-baburchi" element={<FindBaburchPage lang={lang} />} />
          <Route path="/chef/:id" element={<ChefProfilePage lang={lang} />} />
          <Route path="/booking/:chefId" element={<BookingPage lang={lang} />} />
          <Route path="/packages" element={<PackagesPage lang={lang} />} />
          <Route path="/how-it-works" element={<HowItWorksPage lang={lang} />} />
          <Route path="/about" element={<AboutPage lang={lang} />} />
        </Routes>
        <Footer lang={lang} />
      </ThemeProvider>
    </BrowserRouter>
  );
}
