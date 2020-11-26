import * as React from 'react';
import { ThemeProvider } from 'styled-components';

export const themeProps = {};

const Theme = ({ children }) => {
  return <ThemeProvider theme={themeProps}>{children}</ThemeProvider>;
};

export default Theme;
