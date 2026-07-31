import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useParams, useNavigate } from 'react-router-dom';
import { CHEFS } from '../components/ChefListing';

const REVIEWS = [
  { name: 'Farida Begum', rating: 5, date: 'Mar 2025', text: 'Absolutely amazing! The biryani was perfect for our wedding of 400 guests. Highly professional.' },
  { name: 'Mohammad Ali', rating: 5, date: 'Feb 2025', text: 'Outstanding korma and polao. Chef arrived on time and kept everything clean. Will book again!' },
  { name: 'Nasrin Akter', rating: 4, date: 'Jan 2025', text: 'Great food quality. The tehari was authentic and delicious. Guests loved every dish.' },
];

const GALLERY_IMAGES = [
  '/food-biryani.webp',
  '/food-korma.webp',
  '/food-tehari.webp',
  '/catering-setup.webp',
  '/cooking-action.webp',
  '/food-polao.webp',
];


interface ChefProfilePageProps {
  lang: 'en' | 'bn';
}

export default function ChefProfilePage({ lang }: ChefProfilePageProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [liked, setLiked] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const chef = CHEFS.find((c) => c.id === Number(id)) || CHEFS[0];

  return (
    <Box sx={{ pt: { xs: 10, md: 12 }, pb: 8, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Profile Header */}
        <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, mb: 3, border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 'auto' }}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Box
                  component="img"
                  src={chef.image}
                  alt={chef.name}
                  sx={{
                    width: { xs: 140, md: 200 },
                    height: { xs: 140, md: 200 },
                    borderRadius: 3,
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                  }}
                />
                {chef.verified && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      right: 8,
                      bgcolor: 'primary.main',
                      borderRadius: '50%',
                      width: 28,
                      height: 28,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid white',
                    }}
                  >
                    <VerifiedIcon sx={{ fontSize: 16, color: 'white' }} />
                  </Box>
                )}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 'grow' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                    <Typography variant="h3" fontWeight={700} color="text.primary">
                      {lang === 'bn' ? chef.nameBn : chef.name}
                    </Typography>
                    {chef.verified && (
                      <Chip
                        icon={<VerifiedIcon sx={{ fontSize: '14px !important', color: 'white !important' }} />}
                        label={lang === 'bn' ? 'যাচাইকৃত' : 'Verified'}
                        size="small"
                        sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 600, fontSize: '0.7rem' }}
                      />
                    )}
                  </Box>
                  <Typography variant="h6" color="primary.main" fontWeight={600} mb={1.5}>
                    {lang === 'bn' ? chef.specializationBn : chef.specialization}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">{lang === 'bn' ? chef.locationBn : chef.location}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <WorkIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {chef.experience} {lang === 'bn' ? 'বছরের অভিজ্ঞতা' : 'years experience'}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Rating value={chef.rating} precision={0.1} readOnly />
                    <Typography variant="body1" fontWeight={700}>{chef.rating}</Typography>
                    <Typography variant="body2" color="text.secondary">({chef.reviews} {lang === 'bn' ? 'রিভিউ' : 'reviews'})</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {(lang === 'bn' ? chef.tagsBn : chef.tags).map((tag) => (
                      <Chip key={tag} label={tag} size="small"
                        sx={{ bgcolor: 'rgba(217,119,6,0.1)', color: 'primary.dark', fontWeight: 500 }} />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, gap: 1 }}>
                  <Box sx={{ textAlign: { xs: 'left', md: 'right' }, mb: 1 }}>
                    <Typography variant="h4" fontWeight={700} color="primary.main">
                      {chef.startingPrice}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {lang === 'bn' ? 'শুরু থেকে' : 'starting from'}
                    </Typography>
                  </Box>
                  <Button variant="contained" size="large" onClick={() => navigate(`/booking/${chef.id}`)} sx={{ px: 4 }}>
                    {lang === 'bn' ? 'এখনই বুক করুন' : 'Book Now'}
                  </Button>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title={lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact'}>
                      <IconButton onClick={() => setContactOpen(true)} sx={{ border: '1px solid', borderColor: 'divider' }}>
                        <PhoneIcon sx={{ color: 'primary.main' }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={lang === 'bn' ? 'শেয়ার করুন' : 'Share'}>
                      <IconButton sx={{ border: '1px solid', borderColor: 'divider' }}>
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={liked ? (lang === 'bn' ? 'পছন্দ তালিকা থেকে বাদ দিন' : 'Remove from favorites') : (lang === 'bn' ? 'পছন্দ তালিকায় যোগ করুন' : 'Add to favorites')}>
                      <IconButton onClick={() => setLiked(!liked)} sx={{ border: '1px solid', borderColor: 'divider' }}>
                        {liked ? <FavoriteIcon sx={{ color: 'error.main' }} /> : <FavoriteBorderIcon />}
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Tabs */}
        <Paper elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden' }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ borderBottom: '1px solid', borderColor: 'divider', px: 2 }}>
            <Tab label={lang === 'bn' ? 'পরিচিতি' : 'About'} />
            <Tab label={lang === 'bn' ? 'গ্যালারি' : 'Gallery'} />
            <Tab label={lang === 'bn' ? 'রিভিউ' : 'Reviews'} />
            <Tab label={lang === 'bn' ? 'সময়সূচি' : 'Availability'} />
          </Tabs>

          <Box sx={{ p: { xs: 2.5, md: 4 } }}>
            {/* About Tab */}
            {tab === 0 && (
              <Box>
                <Typography variant="h5" fontWeight={700} mb={2}>
                  {lang === 'bn' ? 'পরিচিতি' : 'About'}
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8} mb={3}>
                  {lang === 'bn'
                    ? `উস্তাদ ${chef.nameBn} বাংলাদেশের একজন অভিজ্ঞ মাস্টার শেফ যিনি ${chef.experience} বছর ধরে বিভিন্ন বিবাহ ও বড় অনুষ্ঠানে রান্না করছেন। তিনি ${chef.location}ভিত্তিক এবং ঐতিহ্যবাহী রান্নায় তার দক্ষতার জন্য বিখ্যাত। তার বিশেষত্ব হলো ${chef.specializationBn}। প্রতিটি অনুষ্ঠানে তিনি সর্বোচ্চ মানের উপকরণ ব্যবহার করেন এবং সময়মতো ডেলিভারি নিশ্চিত করেন।`
                    : `${chef.name} is an experienced master chef from Bangladesh with ${chef.experience} years of cooking at weddings and major events. Based in ${chef.location}, he is renowned for his expertise in ${chef.specialization}. He uses the highest quality ingredients and ensures timely delivery at every event.`}
                </Typography>

                <Typography variant="h6" fontWeight={700} mb={2}>
                  {lang === 'bn' ? 'বিশেষত্ব' : 'Signature Dishes'}
                </Typography>
                <Grid container spacing={2}>
                  {(lang === 'bn' ? chef.tagsBn : chef.tags).map((dish) => (
                    <Grid key={dish} size={{ xs: 12, sm: 6, md: 4 }}>
                      <Paper elevation={0} sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                        <Typography variant="body2" fontWeight={500}>{dish}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Gallery Tab */}
            {tab === 1 && (
              <Box>
                <Typography variant="h5" fontWeight={700} mb={3}>
                  {lang === 'bn' ? 'কাজের গ্যালারি' : 'Work Gallery'}
                </Typography>
                <Grid container spacing={2}>
                  {GALLERY_IMAGES.map((img, i) => (
                    <Grid key={i} size={{ xs: 6, sm: 4, md: 4 }}>
                      <Box
                        component="img"
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        sx={{
                          width: '100%',
                          aspectRatio: '4/3',
                          objectFit: 'cover',
                          borderRadius: 2,
                          display: 'block',
                          transition: 'transform 0.3s',
                          '&:hover': { transform: 'scale(1.02)' },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Reviews Tab */}
            {tab === 2 && (
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" fontWeight={700} color="primary.main">{chef.rating}</Typography>
                    <Rating value={chef.rating} precision={0.1} readOnly />
                    <Typography variant="caption" color="text.secondary">{chef.reviews} {lang === 'bn' ? 'রিভিউ' : 'reviews'}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {REVIEWS.map((review, i) => (
                    <Paper key={i} elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                      <FormatQuoteIcon sx={{ color: 'primary.main', opacity: 0.5, mb: 1 }} />
                      <Typography variant="body1" color="text.secondary" lineHeight={1.7} mb={2}>{review.text}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36 }}>{review.name[0]}</Avatar>
                        <Box>
                          <Typography variant="subtitle2" fontWeight={600}>{review.name}</Typography>
                          <Typography variant="caption" color="text.secondary">{review.date}</Typography>
                        </Box>
                        <Box sx={{ ml: 'auto' }}>
                          <Rating value={review.rating} size="small" readOnly />
                        </Box>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              </Box>
            )}

            {/* Availability Tab */}
            {tab === 3 && (
              <Box>
                <Typography variant="h5" fontWeight={700} mb={3}>
                  {lang === 'bn' ? 'উপলব্ধতার সময়সূচি' : 'Availability Calendar'}
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 16, height: 16, bgcolor: 'success.main', borderRadius: 0.5 }} />
                    <Typography variant="body2">{lang === 'bn' ? 'উপলব্ধ' : 'Available'}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 16, height: 16, bgcolor: 'error.main', borderRadius: 0.5 }} />
                    <Typography variant="body2">{lang === 'bn' ? 'বুকড' : 'Booked'}</Typography>
                  </Box>
                </Box>
                <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2, textAlign: 'center' }}>
                  <CalendarMonthIcon sx={{ fontSize: 64, color: 'text.secondary', opacity: 0.3 }} />
                  <Typography variant="body1" color="text.secondary" mt={2}>
                    {lang === 'bn' ? 'বুকিং নিশ্চিত করতে এখনই বুকিং ফর্মে যান' : 'Go to the booking form to check and confirm availability'}
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate(`/booking/${chef.id}`)}>
                    {lang === 'bn' ? 'বুকিং করুন' : 'Book Now'}
                  </Button>
                </Paper>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>

      {/* Contact Dialog */}
      <Dialog open={contactOpen} onClose={() => setContactOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle fontWeight={700}>{lang === 'bn' ? 'যোগাযোগ' : 'Contact Chef'}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {lang === 'bn' ? 'বুকিংয়ের আগে সরাসরি শেফের সাথে যোগাযোগ করুন।' : 'Contact the chef directly before booking.'}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
              <PhoneIcon color="primary" />
              <Typography variant="body1" fontWeight={600}>+880 1XXX-XXXXXX</Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2.5 }}>
          <Button onClick={() => setContactOpen(false)} variant="outlined">
            {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </Button>
          <Button variant="contained" onClick={() => navigate(`/booking/${chef.id}`)}>
            {lang === 'bn' ? 'বুক করুন' : 'Book Now'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
