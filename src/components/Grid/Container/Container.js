import styled from 'styled-components';

const Container = styled.div.attrs()`
  width: 100%;
  padding-right: ${(p) => {
    if (
      !p.theme ||
      !p.theme.styledGrid ||
      !p.theme.styledGrid.getContainerPadding
    ) {
      return 12;
    }
    return p.theme.styledGrid.getContainerPadding();
  }}px;
  padding-left: ${(p) => {
    if (
      !p.theme ||
      !p.theme.styledGrid ||
      !p.theme.styledGrid.getContainerPadding
    ) {
      return 12;
    }
    return p.theme.styledGrid.getContainerPadding();
  }}px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 576px) {
    padding-right: 16px;
    padding-left: 16px;
    max-width: 540px;
  }
  @media (max-width: 768px) {
    max-width: 720px;
  }
  @media (max-width: 992px) {
    max-width: 960px;
  }
  @media (max-width: 1200px) {
    max-width: 1140px;
  }
  @media (max-width: 1540px) {
    max-width: 1141px;
  }
`;

export default Container;
