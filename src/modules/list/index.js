import React from 'react';
import { withRouter } from 'react-router';
import Card from './components/Card';
// import { get } from 'lodash';

// import api from '../../utils/api/api';
// import getAllPokemon from '../../utils/formatter';

// import { Container } from 'modules/components';
// import { Filter, List, LoadMore } from '../components';

const Pokemon = ({ match }) => {
  // const page = get(match, 'params.page', '');
  // const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  // api(getAllPokemon(page))
  //   .then((response) => setData(response.results))
  //   .finally(() => setLoading(false));
  React.useEffect(() => {
    setLoading(true);
  }, [match]);

  return (
    <>
      {console.log(isLoading)}
      <Card />
    </>
    // <Container>
    //   <Filter />
    //   <List data={data} />
    //   <LoadMore isLoading={isLoading} />
    // </Container>
  );
};

export default withRouter(Pokemon);
