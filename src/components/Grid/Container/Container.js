import styled from 'styled-components';

const Container = styled.div.attrs()`
  width: 100%;
  padding-right: ${(p) => {
    if (
      !p.theme ||
      !p.theme.styledBootstrapGrid ||
      !p.theme.styledBootstrapGrid.getContainerPadding
    ) {
      return 12;
    }
    return p.theme.styledBootstrapGrid.getContainerPadding();
  }}px;
  padding-left: ${(p) => {
    if (
      !p.theme ||
      !p.theme.styledBootstrapGrid ||
      !p.theme.styledBootstrapGrid.getContainerPadding
    ) {
      return 12;
    }
    return p.theme.styledBootstrapGrid.getContainerPadding();
  }}px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 576px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export default Container;
