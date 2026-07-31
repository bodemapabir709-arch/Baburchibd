import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';

const QUICK_LINKS = [
  { label: 'Find Baburchi', labelBn: 'বাবুর্চি খুঁজুন', href: '/find-baburchi' },
  { label: 'Catering Packages', labelBn: 'ক্যাটারিং প্যাকেজ', href: '/packages' },
  { label: 'How It Works', labelBn: 'কীভাবে কাজ করে', href: '/how-it-works' },
  { label: 'About Us', labelBn: 'আমাদের সম্পর্কে', href: '/about' },
  { label: 'Contact', labelBn: 'যোগাযোগ', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', labelBn: 'গোপনীয়তা নীতি', href: '#' },
  { label: 'Terms of Service', labelBn: 'সেবার শর্তাবলী', href: '#' },
  { label: 'FAQ', labelBn: 'সাধারণ প্রশ্ন', href: '#' },
  { label: 'Refund Policy', labelBn: 'ফেরত নীতি', href: '#' },
];

const CHEF_LINKS = [
  { label: 'Register as Baburchi', labelBn: 'বাবুর্চি হিসেবে নিবন্ধন', href: '#' },
  { label: 'Vendor Dashboard', labelBn: 'ভেন্ডর ড্যাশবোর্ড', href: '#' },
  { label: 'Chef Guidelines', labelBn: 'শেফ নির্দেশিকা', href: '#' },
  { label: 'Payout Information', labelBn: 'পেআউট তথ্য', href: '#' },
];

interface FooterProps {
  lang: 'en' | 'bn';
}

export default function Footer({ lang }: FooterProps) {
  const [email, setEmail] = useState('');

  return (
    <Box component="footer" sx={{ bgcolor: '#0A1628', color: 'white', pt: 8, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} mb={6}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <RestaurantIcon sx={{ color: 'white', fontSize: 22 }} />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1, letterSpacing: '-0.3px' }}>
                  Baburchi<Box component="span" sx={{ color: 'primary.main' }}>BD</Box>
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.6rem', letterSpacing: '0.5px' }}>
                  ক্যাটারিং প্ল্যাটফর্ম
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, mb: 3, maxWidth: 320 }}>
              {lang === 'bn'
                ? 'বাংলাদেশের বিশ্বস্ত ক্যাটারিং ও বাবুর্চি বুকিং প্ল্যাটফর্ম। যেকোনো অনুষ্ঠানের জন্য সেরা শেফ খুঁজুন নিমিষেই।'
                : "Bangladesh's trusted catering and baburchi booking platform. Find the best chef for any occasion instantly."}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              {[
                { icon: FacebookIcon, color: '#1877F2' },
                { icon: InstagramIcon, color: '#E1306C' },
                { icon: YouTubeIcon, color: '#FF0000' },
                { icon: WhatsAppIcon, color: '#25D366' },
              ].map(({ icon: Icon, color }, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.6)',
                    '&:hover': { bgcolor: color, color: 'white' },
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon sx={{ fontSize: 18 }} />
                </IconButton>
              ))}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { icon: LocationOnIcon, text: 'Dhaka, Bangladesh' },
                { icon: PhoneIcon, text: '+880 1XXX-XXXXXX' },
                { icon: EmailIcon, text: 'hello@baburchiBD.com' },
              ].map(({ icon: Icon, text }, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Icon sx={{ fontSize: 15, color: 'primary.main', flexShrink: 0 }} />
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={2.5} color="white">
              {lang === 'bn' ? 'দ্রুত লিংক' : 'Quick Links'}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {lang === 'bn' ? link.labelBn : link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* For Chefs */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={2.5} color="white">
              {lang === 'bn' ? 'শেফদের জন্য' : 'For Chefs'}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {CHEF_LINKS.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {lang === 'bn' ? link.labelBn : link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Legal */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={2.5} color="white">
              {lang === 'bn' ? 'আইনি' : 'Legal'}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {lang === 'bn' ? link.labelBn : link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid size={{ xs: 12, sm: 12, md: 2 }}>
            <Typography variant="subtitle2" fontWeight={700} mb={1.5} color="white">
              {lang === 'bn' ? 'নিউজলেটার' : 'Newsletter'}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block', mb: 2, lineHeight: 1.6 }}>
              {lang === 'bn'
                ? 'রেসিপি, অফার এবং নতুন শেফের আপডেট পান।'
                : 'Get recipes, offers, and new chef updates.'}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <TextField
                placeholder={lang === 'bn' ? 'আপনার ইমেইল' : 'Your email'}
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255,255,255,0.07)',
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                  },
                  '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.35)' },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                size="small"
                endIcon={<SendIcon sx={{ fontSize: '14px !important' }} />}
                sx={{ fontSize: '0.75rem' }}
              >
                {lang === 'bn' ? 'সাবস্ক্রাইব' : 'Subscribe'}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1.5 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)' }}>
            © 2025 BaburchiBD. {lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['bKash', 'Nagad', 'Rocket', 'Visa', 'Mastercard'].map((p) => (
              <Typography key={p} variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 600, fontSize: '0.65rem' }}>
                {p}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
