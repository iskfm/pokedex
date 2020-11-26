import { LIMIT, OFFSET } from '../constants';

const GetPokemon = (page) => {
  const limit = page ? parseInt(page, 10) * LIMIT : LIMIT;
  return `/pokemon/?limit=${limit}&offset=${OFFSET}`;
};

export default GetPokemon;
