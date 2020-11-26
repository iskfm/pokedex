import React from 'react';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import styled from 'styled-components';
import { Card } from '../list/components';

import api from '../../utils/api';

import { Container, Row, Col } from '../../components/grid';
import { LoadingScreen } from '../../components/loading';

const Pokemon = ({ match }) => {
  const page = get(match, 'params.type', '');
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    api(`/type/${page}`)
      .then((response) => setData(response.pokemon.map((item) => item.pokemon)))
      .finally(() => setLoading(false));
  }, [match]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Section>
      <Container>
        <Row>
          {data.map((item) => (
            <Col col={3} key={item.name}>
              <Card data={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

const Section = styled('div')`
  padding: 80px 0;
`;

export default withRouter(Pokemon);
