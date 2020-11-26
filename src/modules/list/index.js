import React from 'react';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import Card from './components/Card';

import api from '../../utils/api';
import { GetPokemon } from '../../utils/formatter/index';

import { Container, Row, Col } from '../../components/Grid';
// import { Filter, List, LoadMore } from '../components';

const Pokemon = ({ match }) => {
  const page = get(match, 'params.page', '');
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    api(GetPokemon(page))
      .then((response) => setData(response.results))
      .finally(() => setLoading(false));
  }, [match]);

  return (
    <>
      <Container>
        <Row>
          {data.map((item) => (
            <Col col={3} key={item.name}>
              <Card data={item} />
            </Col>
          ))}
        </Row>
      </Container>
      {console.log('test', isLoading)}
    </>
    // <Container>
    //   <Filter />
    //   <List data={data} />
    //   <LoadMore isLoading={isLoading} />
    // </Container>
  );
};

export default withRouter(Pokemon);
