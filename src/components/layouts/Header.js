import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const Header = ({ history }) => (
  <HeaderContainer>
    <Logo onClick={() => history.push('/')}>pokedex</Logo>
  </HeaderContainer>
);

const HeaderContainer = styled('div')`
  padding: 24px 30px;
  background-color: #005bbd;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 9;
`;

const Logo = styled('h1')`
  color: white;
  font-weight: bold;
  font-size: 42px;
  line-height: 50px;
  margin: 0;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
`;

export default withRouter(Header);
