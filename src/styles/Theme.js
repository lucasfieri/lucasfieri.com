import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Global';

const theme = {
  main: {
    colors: {
      primary: {
      },
    },
    fontSizes: {
      small: '1em',
      medium: '2em',
      large: '3em'
    }
  }
}

const Theme= ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{ children }</ThemeProvider>
  </>
);

export default Theme;
