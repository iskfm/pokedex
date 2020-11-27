import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '.';

describe('components', () => {
  describe('Button', () => {
    test('renders correctly', () => {
      const { container } = render(<Button>Button</Button>);
      expect(container).toBeInTheDocument();
    });
  });
});
