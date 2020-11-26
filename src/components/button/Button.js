import * as React from 'react';
import styled from 'styled-components';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { disabled, loading, onClick } = this.props;
    if (disabled || loading) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }
  }

  render() {
    const {
      className,
      color,
      type,
      loading,
      disabled,
      isIcon,
      children,
    } = this.props;

    return (
      <ButtonWrapper
        className={className}
        type={type}
        onClick={this.onClick}
        disabled={disabled || loading}
        color={color}
        isIcon={isIcon}
      >
        {children}
      </ButtonWrapper>
    );
  }
}

export default Button;

const ButtonWrapper = styled('button')`
  ${(props) =>
    props.disabled || props.loading ? 'pointer-events: none;' : ''};
  position: relative;
  width: ${(props) => (props.block ? '100%' : 'auto')};
  padding: ${(props) => (props.size === 'sm' ? '8px 20px' : '13px 20px')};
  border-radius: ${(props) => (props.rounded ? '50px' : '3px')};
  ${(props) =>
    props.disabled || props.loading
      ? `background: #005bbd63`
      : `background: #005bbd`};
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 1rem;
  border: ${(props) => props.color};
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.color};
    border-color: ${(props) => props.color};
    color: #fff;
    outline: 0;
  }

  &:focus {
    outline: 0;
  }
`;
