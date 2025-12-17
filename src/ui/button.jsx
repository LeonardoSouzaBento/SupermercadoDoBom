import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  height: 4.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 0.8rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px var(--focus-ring-color, currentColor),
      0 0 0 4px var(--focus-ring-offset-color, currentColor);
  }

  ${({ $customStyles }) => $customStyles}

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: var(--primary);
          color: var(--white-foreground);
          &:hover {
            background-color: var(--primary-hover);
          }
        `;
      case 'secondary':
        return css`
          color: var(--secondary);
          border: 1px solid var(--border);
          &:hover {
            background-color: var(--secondary-hover);
          }
        `;
      case 'outline':
        return css`
          color: var(--primary);
          border: 1.5px solid var(--primary);
          background-color: transparent;
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: #374151; /* text-gray-800 */
          &:hover {
            background-color: #f3f4f6; /* hover:bg-gray-100 */
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
      case 'medium':
        return css`
          padding: 0.5rem 1rem;
          font-size: var(--text-button);
        `;
      case 'large':
        return css`
          padding: 0.75rem 1.5rem;
          font-size: var(--text-lg-button);
        `;
      case 'large-icon':
        return css`
          padding: 0;
          width: 4.4rem;
          height: 4.4rem;
        `;
      case 'icon':
        return css`
          padding: 0;
          width: 4rem;
          height: 4rem;
        `;
      case 'icon-sm':
        return css`
          padding: 0;
          width: 3.6rem;
          height: 3.6rem;
        `;
    }
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      filter: grayscale(1);
      cursor: not-allowed;
    `}
`;

const Button = ({
  variant = 'primary',
  size = 'medium',
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
