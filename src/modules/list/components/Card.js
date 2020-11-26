import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { RenderId } from '../../../utils/formatter/index';
// import { colors, fonts } from 'components/provider';
// import { ResponsiveFlex } from 'modules/components';

// import { renderPokemonId } from 'utils/formatter';

// const Card = ({ data, history }) => {
const Card = ({ data, history }) => {
  const pokemonId = RenderId(data);
  return (
    <CardItem onClick={() => history.push(`/pokemon/${pokemonId}`)}>
      {/* <CardContainer> */}
      <CardItemImageContainer>
        {/* <CardItemImage src={renderPokemonImage(pokemonId)} /> */}
        <CardItemImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
      </CardItemImageContainer>
      <CardContent>
        <CardContentTitle>{data.name}</CardContentTitle>
      </CardContent>
      {/* </CardContainer> */}
    </CardItem>
  );
};

// const CardContainer = styled('div')`
//   flex: 0 0 25%;
//   text-align: center;
//   padding: 25px;
//   ${ResponsiveFlex};
// `;

const CardItem = styled('div')`
  background: white;
  border-radius: 8px;
  margin-bottom: 24px;
  &:hover {
    filter: drop-shadow(0px 4px 8px rgba(137, 148, 159, 0.32));
  }
`;

// background: ${colors.gray3};
// padding: 20px;
const CardItemImageContainer = styled('div')`
  height: 180px;
  padding: 30px 10px;
`;

const CardItemImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CardContent = styled('div')`
  padding: 24px;
`;

// font-family: ${fonts.montserratMedium};
const CardContentTitle = styled('h2')`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  text-align: center;
`;

export default withRouter(Card);
