import { ThemeProvider } from 'styled-components';
import { darken } from 'polished'

export const lightTheme = {
  colors: {
    background: {
      primary: '#0071bc',
      secondary: '#00a99d',
      darkPrimary: darken(0.2, primary),
      darkSecondary: darken(0.2, secondary)
    }
  },
  sizes: {
    font: {
      small: '1em',
      medium: '2em',
      large: '3em'
    },
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;
