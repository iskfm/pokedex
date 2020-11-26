import React from 'react';
import styled from 'styled-components';

import { Progress } from '../../../components/progress';

const Statistic = ({ data }) => (
  <CardInfo>
    {data.map((item) => (
      <InfoStats key={item.stat.name}>
        <TitleStats>{item.stat.name}</TitleStats>
        <Progress completed={item.base_stat} />
      </InfoStats>
    ))}
  </CardInfo>
);

const CardInfo = styled('div')`
  margin-bottom: 24px;
`;

const InfoStats = styled('div')`
  margin-bottom: 12px;
`;

const TitleStats = styled('span')`
  display: block;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export default Statistic;
