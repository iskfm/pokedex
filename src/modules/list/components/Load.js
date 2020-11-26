import React from 'react';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import styled from 'styled-components';

import { Button } from '../../../components/button';

const Load = ({ match, history, isLoading }) => {
  const page = get(match, 'params.page', '');
  const next = page && page ? parseInt(page, 10) + 1 : 2;
  return (
    <LoadContainer>
      <Button
        disabled={isLoading}
        onClick={() => history.push(`/page/${next}`)}
      >
        Load More
      </Button>
    </LoadContainer>
  );
};

const LoadContainer = styled('div')`
  text-align: center;
  margin-top: 50px;
`;

export default withRouter(Load);
