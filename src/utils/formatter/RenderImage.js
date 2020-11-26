const IMAGE =
  process.env.IMAGE ||
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world';

const RenderImage = (id) => `${IMAGE}/${id}.svg`;

export default RenderImage;
