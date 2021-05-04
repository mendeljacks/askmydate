import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './main'
import {toJS} from 'mobx'
import {ThemeProvider} from '@material-ui/core'
import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5e92f3',
      main: '#1565c0',
      dark: '#003c8f',
      contrastText: '#fff',
    },
    // secondary: {
    //   light: '#444',
    //   main: '#444',
    //   dark: '#444',
    //   contrastText: '#000',
    // },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

window.toJS = toJS