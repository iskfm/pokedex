import * as React from 'react';
import { ThemeProvider } from 'styled-components';
// import {
//   colors,
//   space,
//   fonts,
//   typeScale,
//   elevation,
//   breakpoints,
//   shadows,
//   radii,
// } from './utils';

export const themeProps = {
  // Default styled-system theme props based on the theme specification:
  // https://styled-system.com/theme-specification
  // colors,
  // space,
  // fonts,
  // shadows,
  // radii,
  // breakpoints: [
  //   `${breakpoints.sm}px`,
  //   `${breakpoints.md}px`,
  //   `${breakpoints.lg}px`,
  //   `${breakpoints.xl}px`,
  // ],
  // Custom theme props based on custom component variants.
  //   typeScale,
  //   elevation,
};
// return <ThemeProvider theme={themeProps}>{children}</ThemeProvider>;

const Theme = ({ children }) => {
  return <ThemeProvider theme={themeProps}>{children}</ThemeProvider>;
};

export default Theme;
