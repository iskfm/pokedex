import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { RenderId, RenderImage } from '../../../utils/formatter/index';

const Card = ({ data, history }) => {
  const pokemonId = RenderId(data);
  return (
    <CardItem onClick={() => history.push(`/pokemon/${pokemonId}`)}>
      <CardItemImageContainer>
        <CardItemImage src={RenderImage(pokemonId)} />
      </CardItemImageContainer>
      <CardContent>
        <CardContentTitle>{data.name}</CardContentTitle>
      </CardContent>
    </CardItem>
  );
};

const CardItem = styled('div')`
  background: white;
  border-radius: 8px;
  margin-bottom: 24px;
  // &:hover {
  //   filter: drop-shadow(0px 4px 8px rgba(137, 148, 159, 0.32));
  // }
`;

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

const CardContentTitle = styled('h2')`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  text-align: center;
`;

export default withRouter(Card);
