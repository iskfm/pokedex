/* eslint-disable import/no-unresolved */
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
        !p.theme.styledGrid ||
        !p.theme.styledGrid.getRowPadding
      ) {
        return 12;
      }
      return p.theme.styledGrid.getRowPadding();
    }}px;
  margin-left: -${(p) => {
      if (
        !p.theme ||
        !p.theme.styledGrid ||
        !p.theme.styledGrid.getRowPadding
      ) {
        return 12;
      }
      return p.theme.styledGrid.getRowPadding();
    }}px;
  @media (max-width: 576px) {
    margin-right: -16px;
    margin-left: -16px;
  }

  ${(p) => p.alignItems && css.alignItems[p.alignItems]}

  ${(p) => p.justifyContent && css.justifyContent[p.justifyContent]}
`;

export default Row;
