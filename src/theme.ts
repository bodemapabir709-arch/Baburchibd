import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D97706',
      light: '#F59E0B',
      dark: '#B45309',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1E293B',
      light: '#334155',
      dark: '#0F172A',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#EF4444',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: '"Inter", "Noto Sans Bengali", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontWeight: 700, lineHeight: 1.2 },
    h2: { fontWeight: 700, lineHeight: 1.3 },
    h3: { fontWeight: 600, lineHeight: 1.3 },
    h4: { fontWeight: 600, lineHeight: 1.4 },
    h5: { fontWeight: 600, lineHeight: 1.4 },
    h6: { fontWeight: 600, lineHeight: 1.5 },
    subtitle1: { fontWeight: 500 },
    subtitle2: { fontWeight: 500 },
    button: { fontWeight: 600, textTransform: 'none' as const },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #334155 0%, #1E293B 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
