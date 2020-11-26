import React from 'react';
import { withRouter } from 'react-router-dom';
// import { get } from 'lodash';
import styled from 'styled-components';

// import { Button } from '../../../components/button';

const Load = ({ data }) => {
  // const Load = ({ match, history, isLoading }) => {
  // const page = get(match, 'params.page', '');
  // const next = page && page ? parseInt(page, 10) + 1 : 2;
  return (
    <Select>
      <option value="">All</option>
      {data.map((item) => (
        <option key={item.url} value="4">
          {item.name}
        </option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  &:focus {
    outline: none;
  }
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default withRouter(Load);
