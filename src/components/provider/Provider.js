import * as React from 'react';

import Theme from './Theme';
import GlobalStyles from './GlobalStyles';
// import Fonts from './fonts';

const Provider = ({ children }) => {
  return (
    <Theme>
      {/* <Fonts /> */}
      <GlobalStyles />
      {children}
    </Theme>
  );
};

Provider.displayName = 'Provider';

export const Reset = () => <Provider />;

export default Provider;
