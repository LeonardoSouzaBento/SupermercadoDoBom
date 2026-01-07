import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1ex;
  border-radius: 0.9rem;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  transition-property: color, box-shadow, background-color, border-color, text-decoration-color,
    fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:focus-visible {
    outline: 0.2rem solid transparent;
    outline-offset: 0.2rem;
    box-shadow: var(--shadow-xs);
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
          box-shadow: inset 0 1px 4px hsla(var(--primary-value), 0.08);
          &:hover {
            background-color: var(--primary-hover);
          }
        `;
      case 'secondary':
        return css`
          padding: 1.245rem 1.5rem;
          margin-bottom: 1.5px;
          margin-left: 1.5px;
          color: var(--primary);
          box-shadow: inset 0 1px 4px hsla(var(--primary-100), 0.1);
          background-color: hsla(var(--primary-200), 0.5);
          backdrop-filter: blur(3px);
        `;
      case 'red':
        return css`
          background-color: var(--red-brand);
          color: var(--white-foreground);
          &:hover {
            background-color: var(--red-brand-hover);
          }
        `;
      case 'outline':
        return css`
          padding: 1.245rem 1.1rem;
          margin-bottom: 1px;
          color: var(--primary);
          border: 2.5px solid hsla(var(--primary-value), 0.88);
          background-color: transparent;
          backdrop-filter: blur(3px);
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          border: 1px solid var(--border);
          color: var(--primary);
          &:hover {
            box-shadow: var(--shadow-sm);
          }
        `;
      case 'link':
        return css`
          font-weight: 500;
          background-color: transparent;
          color: blue;
          font-size: var(--text-sm-button);
          &:hover {
            background-color: transparent;
          }
        `;
      case 'transparent':
        return css`
          background-color: transparent;
          &:hover {
            background-color: var(--background);
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

  ${({ $wFull }) =>
    $wFull &&
    css`
      width: 100%;
    `}

  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          height: 44px;
          padding-inline: 0.9em;
          font-size: var(--text-sm-button);
        `;
      case 'normal':
        return css`
          ${(props) => props.$variant !== 'outline' && 'padding: 1.389rem 1.5rem;'}
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
          width: 44px;
          height: 44px;
        `;
      case 'icon':
        return css`
          padding: 0;
          width: 40px;
          height: 40px;
        `;
      case 'sm-icon':
        return css`
          padding: 0;
          width: 38px;
          height: 38px;
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
  wFull = false,
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
      $wFull={wFull}
      disabled={disabled}
      className={className}
      {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
