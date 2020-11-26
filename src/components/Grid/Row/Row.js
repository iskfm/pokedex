import styled from 'styled-components';

import css from './css';

const Row = styled.div.attrs()`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -${(p) => {
      if (
        !p.theme ||
        !p.theme.styledBootstrapGrid ||
        !p.theme.styledBootstrapGrid.getRowPadding
      ) {
        return 12;
      }
      return p.theme.styledBootstrapGrid.getRowPadding();
    }}px;
  margin-left: -${(p) => {
      if (
        !p.theme ||
        !p.theme.styledBootstrapGrid ||
        !p.theme.styledBootstrapGrid.getRowPadding
      ) {
        return 12;
      }
      return p.theme.styledBootstrapGrid.getRowPadding();
    }}px;
  @media (max-width: 576px) {
    margin-right: -16px;
    margin-left: -16px;
  }

  ${(p) => p.alignItems && css.alignItems[p.alignItems]}

  ${(p) => p.justifyContent && css.justifyContent[p.justifyContent]}
`;

export default Row;
