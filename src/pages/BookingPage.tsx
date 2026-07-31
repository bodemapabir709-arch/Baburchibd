import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useParams, useNavigate } from 'react-router-dom';
import { CHEFS } from '../components/ChefListing';

const MENU_ITEMS = [
  { id: 'kacchi', label: 'Kacchi Biryani', labelBn: 'কাচ্চি বিরিয়ানি', price: 350 },
  { id: 'tehari', label: 'Beef Tehari', labelBn: 'গরুর তেহারি', price: 280 },
  { id: 'polao', label: 'Morog Polao', labelBn: 'মোরগ পোলাও', price: 320 },
  { id: 'korma', label: 'Beef Korma', labelBn: 'গরুর কোরমা', price: 240 },
  { id: 'roast', label: 'Chicken Roast', labelBn: 'চিকেন রোস্ট', price: 220 },
  { id: 'kebab', label: 'Jali Kebab', labelBn: 'জালি কাবাব', price: 180 },
  { id: 'borhani', label: 'Borhani (drink)', labelBn: 'বোরহানি (পানীয়)', price: 60 },
  { id: 'firni', label: 'Firni / Zarda', labelBn: 'ফিরনি / জর্দা', price: 80 },
];

const PAYMENT_METHODS = [
  { id: 'bkash', label: 'bKash', color: '#E2136E' },
  { id: 'nagad', label: 'Nagad', color: '#F4821F' },
  { id: 'rocket', label: 'Rocket', color: '#8B008B' },
  { id: 'card', label: 'Card', color: '#1E293B' },
];

const STEPS = ['Event Details', 'Menu Selection', 'Cost Review', 'Payment'];
const STEPS_BN = ['ইভেন্টের বিবরণ', 'মেনু নির্বাচন', 'খরচের বিবরণ', 'পেমেন্ট'];

interface BookingPageProps {
  lang: 'en' | 'bn';
}

export default function BookingPage({ lang }: BookingPageProps) {
  const { chefId } = useParams();
  const navigate = useNavigate();
  const chef = CHEFS.find((c) => c.id === Number(chefId)) || CHEFS[0];

  const [activeStep, setActiveStep] = useState(0);
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [venue, setVenue] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [eventType, setEventType] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [successOpen, setSuccessOpen] = useState(false);

  const toggleMenuItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const chefFeePerPerson = 85;
  const guests = parseInt(guestCount) || 0;
  const chefFee = chefFeePerPerson * guests;
  const menuCost = selectedItems.reduce((sum, id) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return sum + (item ? item.price * Math.ceil(guests / 10) : 0);
  }, 0);
  const serviceCharge = Math.round((chefFee + menuCost) * 0.05);
  const total = chefFee + menuCost + serviceCharge;
  const advance = Math.round(total * 0.3);

  const handleNext = () => {
    if (activeStep === STEPS.length - 1) {
      setSuccessOpen(true);
    } else {
      setActiveStep((s) => s + 1);
    }
  };

  const steps = lang === 'bn' ? STEPS_BN : STEPS;

  return (
    <Box sx={{ pt: { xs: 10, md: 12 }, pb: 8, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mb: 3, color: 'text.secondary' }}
        >
          {lang === 'bn' ? 'ফিরে যান' : 'Go Back'}
        </Button>

        <Typography variant="h3" fontWeight={700} mb={1}>
          {lang === 'bn' ? 'বুকিং করুন' : 'Book a Chef'}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          {lang === 'bn' ? `${lang === 'bn' ? chef.nameBn : chef.name} — ${chef.specializationBn}` : `${chef.name} — ${chef.specialization}`}
        </Typography>

        {/* Stepper */}
        <Stepper activeStep={activeStep} sx={{ mb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel sx={{ '& .MuiStepLabel-label': { fontSize: { xs: '0.65rem', sm: '0.85rem' } } }}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Paper elevation={0} sx={{ p: { xs: 2.5, md: 4 }, border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
          {/* Step 1: Event Details */}
          {activeStep === 0 && (
            <Box>
              <Typography variant="h5" fontWeight={700} mb={3}>
                {lang === 'bn' ? 'ইভেন্টের বিবরণ' : 'Event Details'}
              </Typography>
              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label={lang === 'bn' ? 'ইভেন্টের তারিখ' : 'Event Date'}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label={lang === 'bn' ? 'সময়' : 'Time'}
                    type="time"
                    InputLabelProps={{ shrink: true }}
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label={lang === 'bn' ? 'ভেন্যুর ঠিকানা' : 'Venue Address'}
                    multiline
                    rows={2}
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    placeholder={lang === 'bn' ? 'পূর্ণ ঠিকানা লিখুন...' : 'Enter full venue address...'}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label={lang === 'bn' ? 'অতিথির সংখ্যা' : 'Guest Count'}
                    type="number"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    inputProps={{ min: 10 }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel>{lang === 'bn' ? 'ইভেন্টের ধরন' : 'Event Type'}</InputLabel>
                    <Select value={eventType} onChange={(e) => setEventType(e.target.value)} label={lang === 'bn' ? 'ইভেন্টের ধরন' : 'Event Type'}>
                      {['Wedding', 'Birthday', 'Corporate', 'Mehndhi', 'Milad', 'Family Party'].map((t) => (
                        <MenuItem key={t} value={t}>{t}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          )}

          {/* Step 2: Menu Selection */}
          {activeStep === 1 && (
            <Box>
              <Typography variant="h5" fontWeight={700} mb={1}>
                {lang === 'bn' ? 'মেনু নির্বাচন করুন' : 'Select Menu Items'}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={3}>
                {lang === 'bn' ? 'আপনার পছন্দের আইটেম বাছুন' : 'Choose items for your event menu'}
              </Typography>
              <FormGroup>
                <Grid container spacing={2}>
                  {MENU_ITEMS.map((item) => (
                    <Grid key={item.id} size={{ xs: 12, sm: 6 }}>
                      <Paper
                        elevation={0}
                        onClick={() => toggleMenuItem(item.id)}
                        sx={{
                          p: 2,
                          border: '2px solid',
                          borderColor: selectedItems.includes(item.id) ? 'primary.main' : 'divider',
                          borderRadius: 2,
                          cursor: 'pointer',
                          bgcolor: selectedItems.includes(item.id) ? 'rgba(217,119,6,0.05)' : 'transparent',
                          transition: 'all 0.2s',
                          '&:hover': { borderColor: 'primary.light' },
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Checkbox
                            checked={selectedItems.includes(item.id)}
                            color="primary"
                            sx={{ p: 0 }}
                          />
                          <Typography variant="body2" fontWeight={500}>
                            {lang === 'bn' ? item.labelBn : item.label}
                          </Typography>
                        </Box>
                        <Chip
                          label={`৳${item.price}/10`}
                          size="small"
                          sx={{ bgcolor: 'rgba(217,119,6,0.1)', color: 'primary.dark', fontWeight: 600 }}
                        />
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
            </Box>
          )}

          {/* Step 3: Cost Review */}
          {activeStep === 2 && (
            <Box>
              <Typography variant="h5" fontWeight={700} mb={3}>
                {lang === 'bn' ? 'খরচের বিবরণ' : 'Cost Breakdown'}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography color="text.secondary">
                    {lang === 'bn' ? 'শেফের ফি' : 'Chef Fee'} ({guests} {lang === 'bn' ? 'জন' : 'guests'} × ৳{chefFeePerPerson})
                  </Typography>
                  <Typography fontWeight={600}>৳{chefFee.toLocaleString()}</Typography>
                </Box>
                {selectedItems.map((id) => {
                  const item = MENU_ITEMS.find((m) => m.id === id)!;
                  const cost = item.price * Math.ceil(guests / 10);
                  return (
                    <Box key={id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography color="text.secondary">{lang === 'bn' ? item.labelBn : item.label}</Typography>
                      <Typography fontWeight={600}>৳{cost.toLocaleString()}</Typography>
                    </Box>
                  );
                })}
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography color="text.secondary">{lang === 'bn' ? 'সার্ভিস চার্জ (৫%)' : 'Service Charge (5%)'}</Typography>
                  <Typography fontWeight={600}>৳{serviceCharge.toLocaleString()}</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6" fontWeight={700}>{lang === 'bn' ? 'মোট' : 'Total'}</Typography>
                  <Typography variant="h6" fontWeight={700} color="primary.main">৳{total.toLocaleString()}</Typography>
                </Box>
                <Alert severity="info" sx={{ borderRadius: 2 }}>
                  {lang === 'bn'
                    ? `আজ অগ্রিম পরিশোধ: ৳${advance.toLocaleString()} (৩০%)। বাকি অনুষ্ঠানের দিন।`
                    : `Pay today: ৳${advance.toLocaleString()} (30% advance). Remainder due on event day.`}
                </Alert>
              </Box>
            </Box>
          )}

          {/* Step 4: Payment */}
          {activeStep === 3 && (
            <Box>
              <Typography variant="h5" fontWeight={700} mb={1}>
                {lang === 'bn' ? 'পেমেন্ট পদ্ধতি' : 'Payment Method'}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={3}>
                {lang === 'bn' ? `অগ্রিম: ৳${advance.toLocaleString()}` : `Advance: ৳${advance.toLocaleString()}`}
              </Typography>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {PAYMENT_METHODS.map((pm) => (
                  <Grid key={pm.id} size={{ xs: 6, sm: 3 }}>
                    <Paper
                      elevation={0}
                      onClick={() => setPaymentMethod(pm.id)}
                      sx={{
                        p: 2.5,
                        border: '2px solid',
                        borderColor: paymentMethod === pm.id ? pm.color : 'divider',
                        borderRadius: 2,
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s',
                        bgcolor: paymentMethod === pm.id ? `${pm.color}10` : 'transparent',
                        '&:hover': { borderColor: pm.color },
                      }}
                    >
                      <PaymentIcon sx={{ color: pm.color, fontSize: 32, mb: 0.5 }} />
                      <Typography variant="body2" fontWeight={700} sx={{ color: pm.color }}>
                        {pm.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              {paymentMethod && (
                <Alert severity="success" sx={{ borderRadius: 2 }}>
                  {lang === 'bn'
                    ? `${PAYMENT_METHODS.find((p) => p.id === paymentMethod)?.label} নম্বরে পাঠান: 01XXX-XXXXXX`
                    : `Send to ${PAYMENT_METHODS.find((p) => p.id === paymentMethod)?.label} number: 01XXX-XXXXXX`}
                </Alert>
              )}
            </Box>
          )}

          <Divider sx={{ my: 3 }} />

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              disabled={activeStep === 0}
              onClick={() => setActiveStep((s) => s - 1)}
            >
              {lang === 'bn' ? 'পিছনে' : 'Back'}
            </Button>
            <Button
              variant="contained"
              endIcon={activeStep === STEPS.length - 1 ? <CheckCircleIcon /> : <ArrowForwardIcon />}
              onClick={handleNext}
              disabled={activeStep === 3 && !paymentMethod}
            >
              {activeStep === STEPS.length - 1
                ? (lang === 'bn' ? 'বুকিং নিশ্চিত করুন' : 'Confirm Booking')
                : (lang === 'bn' ? 'পরবর্তী' : 'Next')}
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Success Dialog */}
      <Dialog open={successOpen} maxWidth="xs" fullWidth>
        <DialogContent sx={{ textAlign: 'center', p: 5 }}>
          <CheckCircleIcon sx={{ fontSize: 72, color: 'success.main', mb: 2 }} />
          <Typography variant="h5" fontWeight={700} mb={1}>
            {lang === 'bn' ? 'বুকিং নিশ্চিত হয়েছে!' : 'Booking Confirmed!'}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            {lang === 'bn'
              ? `আপনার বুকিং আইডি: #BB${Math.floor(Math.random() * 90000 + 10000)}`
              : `Your booking ID: #BB${Math.floor(Math.random() * 90000 + 10000)}`}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="outlined" fullWidth startIcon={<ReceiptIcon />}>
              {lang === 'bn' ? 'ইনভয়েস' : 'Invoice'}
            </Button>
            <Button variant="contained" fullWidth onClick={() => navigate('/')}>
              {lang === 'bn' ? 'হোমে ফিরুন' : 'Go Home'}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
