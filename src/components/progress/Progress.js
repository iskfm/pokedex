import React from 'react';
import styled from 'styled-components';

const Progress = ({ completed }) => {
  return (
    <LoadingBarContainer>
      <LoadingBar width={`${completed}%`} />
    </LoadingBarContainer>
  );
};

const LoadingBarContainer = styled('div')`
  width: 100%;
  height: 20px;
  background-color: #e7f1fc;
  border-radius: 10px;
`;

const LoadingBar = styled('div')`
  transition: width 2.5s ease-in-out;
  height: 100%;
  background-color: #006fe6;
  border-radius: 10px;
  ${(props) => props.width && `width: ${props.width}`}
`;

export default Progress;
