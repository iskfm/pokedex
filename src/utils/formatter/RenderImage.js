const IMAGE_STORAGE =
  process.env.IMAGE_STORAGE ||
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world';

const RenderImage = (id) => `${IMAGE_STORAGE}/${id}.svg`;

export default RenderImage;
