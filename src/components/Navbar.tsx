import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TranslateIcon from '@mui/icons-material/Translate';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', labelBn: 'হোম', path: '/' },
  { label: 'Find Baburchi', labelBn: 'বাবুর্চি খুঁজুন', path: '/find-baburchi' },
  { label: 'Catering Packages', labelBn: 'ক্যাটারিং', path: '/packages' },
  { label: 'How It Works', labelBn: 'কীভাবে কাজ করে', path: '/how-it-works' },
  { label: 'About Us', labelBn: 'আমাদের সম্পর্কে', path: '/about' },
];

interface NavbarProps {
  lang: 'en' | 'bn';
  onLangToggle: () => void;
}

export default function Navbar({ lang, onLangToggle }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? 'background.paper' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 }, py: 1, maxWidth: 1440, width: '100%', mx: 'auto' }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(217,119,6,0.3)',
              }}
            >
              <RestaurantIcon sx={{ color: 'white', fontSize: 22 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  lineHeight: 1,
                  letterSpacing: '-0.3px',
                }}
              >
                Baburchi
                <Box component="span" sx={{ color: 'secondary.main' }}>
                  BD
                </Box>
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'text.secondary', lineHeight: 1, fontSize: '0.6rem', letterSpacing: '0.5px' }}
              >
                ক্যাটারিং প্ল্যাটফর্ম
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5, mr: 2 }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  color: isActive(link.path) ? 'primary.main' : 'text.primary',
                  fontWeight: isActive(link.path) ? 600 : 500,
                  fontSize: '0.875rem',
                  px: 1.5,
                  '&:hover': { color: 'primary.main', bgcolor: 'rgba(217,119,6,0.06)' },
                  position: 'relative',
                  '&::after': isActive(link.path) ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 4,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: 2,
                    bgcolor: 'primary.main',
                    borderRadius: 1,
                  } : {},
                }}
              >
                {lang === 'bn' ? link.labelBn : link.label}
              </Button>
            ))}
          </Box>

          {/* Language Toggle */}
          <Chip
            icon={<TranslateIcon sx={{ fontSize: '16px !important' }} />}
            label={lang === 'en' ? 'বাংলা' : 'English'}
            onClick={onLangToggle}
            size="small"
            variant="outlined"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1.5,
              borderColor: 'divider',
              color: 'text.secondary',
              fontSize: '0.75rem',
              cursor: 'pointer',
              '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
            }}
          />

          {/* Auth Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<PersonOutlineIcon />}
              component={Link}
              to="/login"
              sx={{
                borderColor: 'divider',
                color: 'text.primary',
                '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
              }}
            >
              {lang === 'bn' ? 'লগইন' : 'Login'}
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              component={Link}
              to="/find-baburchi"
              sx={{ px: 2 }}
            >
              {lang === 'bn' ? 'শেফ বুক করুন' : 'Book a Chef'}
            </Button>
          </Box>

          {/* Mobile Menu */}
          <IconButton
            sx={{ display: { xs: 'flex', lg: 'none' }, ml: 1, color: 'text.primary' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280, p: 2 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" fontWeight={700} color="primary.main">
            BaburchiBD
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <List disablePadding>
          {NAV_LINKS.map((link) => (
            <ListItem
              key={link.path}
              component={Link}
              to={link.path}
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                bgcolor: isActive(link.path) ? 'rgba(217,119,6,0.08)' : 'transparent',
                color: isActive(link.path) ? 'primary.main' : 'text.primary',
                textDecoration: 'none',
                '&:hover': { bgcolor: 'rgba(217,119,6,0.06)' },
              }}
            >
              <ListItemText
                primary={lang === 'bn' ? link.labelBn : link.label}
                primaryTypographyProps={{ fontWeight: isActive(link.path) ? 600 : 400 }}
              />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<TranslateIcon />}
            onClick={onLangToggle}
            sx={{ borderColor: 'divider', color: 'text.secondary' }}
          >
            {lang === 'en' ? 'বাংলায় দেখুন' : 'View in English'}
          </Button>
          <Button
            variant="outlined"
            fullWidth
            component={Link}
            to="/login"
            onClick={() => setDrawerOpen(false)}
          >
            {lang === 'bn' ? 'লগইন' : 'Login'}
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={Link}
            to="/find-baburchi"
            onClick={() => setDrawerOpen(false)}
          >
            {lang === 'bn' ? 'শেফ বুক করুন' : 'Book a Chef'}
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
