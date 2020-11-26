import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import api from '../../utils/api';

const Header = ({ history, match }) => {
  const [type, setType] = React.useState([]);
  const [ability, setAbility] = React.useState([]);

  React.useEffect(() => {
    api(`/type`).then((response) => setType(response.results));
    api(`/ability`).then((response) => setAbility(response.results));
  }, [match]);

  return (
    <HeaderContainer>
      <Logo onClick={() => history.push('/')}>pokedex</Logo>
      <StyledUl>
        <DropDownLi>
          <Dropbtn>Ability</Dropbtn>
          <DropDownContent>
            {ability.map((item) => (
              <SubA
                onClick={() => history.push(`/ability/${item.name}`)}
                key={item.url}
              >
                {item.name}
              </SubA>
            ))}
          </DropDownContent>
        </DropDownLi>
        <DropDownLi>
          <Dropbtn>Type</Dropbtn>
          <DropDownContent>
            {type.map((item) => (
              <SubA
                onClick={() => history.push(`/type/${item.name}`)}
                key={item.url}
              >
                {item.name}
              </SubA>
            ))}
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    </HeaderContainer>
  );
};

const HeaderContainer = styled('div')`
  padding: 24px 30px;
  background-color: #005bbd;
  position: relative;
  display: flex;
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

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
  text-transform: capitalize;
`;

const StyledLi = styled.li``;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 100vw;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  flex-wrap: wrap;
  padding: 24px;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: flex;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  width: 25%;
  &:hover {
    background-color: #f1f1f1;
  }
  @media (max-width: 576px) {
    width: 50%;
  }
`;

export default withRouter(Header);
