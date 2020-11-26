import { LIMIT, OFFSET } from './constants';

const getAllPokemon = (page) => {
  const limit = page ? parseInt(page, 10) * LIMIT : LIMIT;
  return `/pokemon/?limit=${limit}&offset=${OFFSET}`;
};

export default { getAllPokemon };
