/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

import css from './css';

const getGridColumns = (theme) => {
  if (!theme.styledGrid) {
    return 12;
  }
  return theme.styledGrid.getGridColumns();
};

const Col = styled.div.attrs()`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: ${(p) => {
    if (!p.theme || !p.theme.styledGrid || !p.theme.styledGrid.getColPadding) {
      return 12;
    }
    return p.theme.styledGrid.getColPadding();
  }}px;
  padding-left: ${(p) => {
    if (!p.theme || !p.theme.styledGrid || !p.theme.styledGrid.getColPadding) {
      return 12;
    }
    return p.theme.styledGrid.getColPadding();
  }}px;
  @media (max-width: 576px) {
    padding-right: 16px;
    padding-left: 16px;
  }

  ${(p) => p.noGutter && css.noGutter}

  ${(p) => p.col && css.col(p.col, getGridColumns(p.theme))}
  ${(p) =>
    typeof p.offset !== 'undefined' &&
    css.offset(p.offset, getGridColumns(p.theme))}
  ${(p) => p.auto && css.col('auto', 0)}
  ${(p) => p.alignSelf && css.alignSelf[p.alignSelf]}
  ${(p) => p.order && css.order(p.order)}
  @media (max-width: 576px) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export default Col;
