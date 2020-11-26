import * as React from 'react';

import Theme from './Theme';
import GlobalStyles from './GlobalStyles';

const Provider = ({ children }) => {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  );
};

Provider.displayName = 'Provider';

export const Reset = () => <Provider />;

export default Provider;
