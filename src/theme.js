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
    // background: { default: '#D3EDF3'},
    primary: {
      main: '#262938',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        height: '85vh',
        padding: '1em 0.5em',
        overflowY: 'scroll',
      }
    },
  },
})

export default theme;