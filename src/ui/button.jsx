import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 0.8rem;
  box-sizing: border-box;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:focus-visible {
    outline: 0.2rem solid transparent;
    outline-offset: 0.2rem;
    box-shadow: 0 0 0 0.2rem var(--focus-ring-color, currentColor),
      0 0 0 0.4rem var(--focus-ring-offset-color, currentColor);
  }
  & > svg {
    flex-shrink: 0;
  }

  ${({ $customStyles }) => $customStyles}

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          font-weight: 500;
          background-color: var(--primary);
          color: var(--white-foreground);
          &:hover {
            background-color: var(--primary-hover);
          }
        `;
      case 'secondary':
        return css`
          background-color: var(--secondary);
          color: var(--white-foreground);
          &:hover {
            background-color: var(--secondary-hover);
          }
        `;
      case 'outline':
        return css`
          color: var(--primary);
          outline: 0.15rem solid hsla(var(--primary-value), 0.5);
          background-color: transparent;
        `;
      case 'ghost':
        return css`
          background-color: var(--background);
          color: var(--primary);
          &:hover {
            background-color: var(--primary-hover);
          }
        `;
      case 'destructive':
        return css`
          background-color: var(--destructive);
          color: var(--destructive-foreground);
          &:hover {
            filter: brightness(1.07);
          }
        `;
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: 0.375rem 0.75rem;
          font-size: var(--text-sm-button);
        `;
      case 'normal':
        return css`
          padding: 1.389rem 1.5rem;
          font-size: var(--text-button);
        `;
      case 'large':
        return css`
          padding: 0.75rem 1.5rem;
          font-size: var(--text-lg-button);
        `;
      case 'lg-icon':
        return css`
          padding: 0;
          width: 4rem;
          height: 4rem;
        `;
      case 'icon':
        return css`
          width: 3.6rem;
          height: 3.6rem;
        `;
      case 'sm-icon':
        return css`
          padding: 0;
          width: 3.2rem;
          height: 3.2rem;
        `;
    }
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.33;
      filter: grayscale(1);
      cursor: not-allowed;
    `}
`;

const Button = ({
  variant = 'primary',
  size = 'normal',
  disabled = false,
  children,
  className,
  customStyles,
  ...rest
}) => {
  return (
    <StyledButton
      $customStyles={customStyles}
      $variant={variant}
      $size={size}
      disabled={disabled}
      className={className}
      {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
