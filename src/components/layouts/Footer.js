import React from 'react';
import styled from 'styled-components';
// import { colors } from 'components/provider';

const Footer = () => (
  <FooterContainer>Copyright &copy; 2020 by Iskak Purnomo</FooterContainer>
);

const FooterContainer = styled('div')`
  padding: 20px;
  background-color: #f7f8f9;
  text-align: center;
`;

export default Footer;
