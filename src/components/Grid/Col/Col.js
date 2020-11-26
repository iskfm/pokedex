import styled from 'styled-components';

import css from './css';

const getGridColumns = (theme) => {
  if (!theme.styledBootstrapGrid) {
    return 12;
  }
  return theme.styledBootstrapGrid.getGridColumns();
};

const Col = styled.div.attrs()`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: ${(p) => {
    if (
      !p.theme ||
      !p.theme.styledBootstrapGrid ||
      !p.theme.styledBootstrapGrid.getColPadding
    ) {
      return 12;
    }
    return p.theme.styledBootstrapGrid.getColPadding();
  }}px;
  padding-left: ${(p) => {
    if (
      !p.theme ||
      !p.theme.styledBootstrapGrid ||
      !p.theme.styledBootstrapGrid.getColPadding
    ) {
      return 12;
    }
    return p.theme.styledBootstrapGrid.getColPadding();
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
`;

export default Col;
