import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#0085A3',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        height: '85vh',
        padding: '1rem 1.5rem',
        overflowY: 'scroll',
      }
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        marginTop: '1rem',
      }
    }
  },
})

export default theme;