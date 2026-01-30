import React from 'react';
import styled, { css } from 'styled-components';

const ButtonSc = styled.button`
  width: ${(props) => (props.$wFull ? '100%' : 'auto')};
  padding-inline: 1.1em;
  display: flex;
  flex: ${(props) => (props.$flex ? 'auto' : 'none')};
  align-items: center;
  justify-content: center;
  line-height: 1.1;
  gap: 0.8ex;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  z-index: 1;
  box-sizing: border-box;
  transition-property:
    color, box-shadow, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: var(--shadow-xs);
  }
  & > svg {
    flex-shrink: 0;
  }
  ${({ $optionButton }) => $optionButton && 'border-radius: 999px;'}
  ${({ $styles }) => $styles}

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          font-weight: 600;
          background-color: var(--primary);
          color: var(--white-foreground);
          box-shadow: inset 0 1px 4px hsla(var(--primary-value), 0.08);
          &:hover {
            background-color: var(--primary-hover);
          }
        `;
      case 'secondary':
        return css`
          margin-bottom: 1.5px;
          margin-left: 1.5px;
          color: var(--primary);
          box-shadow: inset 0 1px 4px hsla(var(--primary-100), 0.1);
          background-color: hsla(var(--primary-200), 0.5);
          backdrop-filter: blur(3px);
          &:hover {
            background-color: hsl(var(--primary-200));
          }
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
          margin-bottom: 1px;
          color: var(--primary);
          border: 2px solid hsl(var(--primary-600));
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

  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          height: 44px;
          font-size: var(--text-sm-button);
        `;
      case 'normal':
        return css`
          height: 48px;
          ${(props) => props.$variant !== 'outline' && 'padding: 13.89px 15px;'}
          font-size: var(--text-button);
        `;
      case 'lg':
        return css`
          height: 52px;
          font-size: var(--text-lg-button);
        `;
      case 'icon-lg':
        return css`
          padding: 0;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
        `;
      case 'icon':
        return css`
          padding: 0;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
        `;
      case 'icon-sm':
        return css`
          padding: 0;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
        `;
    }
  }}

  ${(props) =>
    props.$disabled &&
    css`
      opacity: 0.25;
      filter: grayscale(1);
      cursor: not-allowed;
    `}

  ${({ $selected }) =>
    $selected &&
    css`
      border: 2px solid hsl(var(--selected));
      background-color: hsla(var(--selected), 0.1);
    `}
`;

export const Button = ({
  variant = 'primary',
  size = 'normal',
  flex = false,
  wFull = false,
  optionButton = false,
  disabled = false,
  selected = false,
  children,
  className,
  styles,
  ...rest
}) => {
  return (
    <ButtonSc
      $styles={styles}
      $variant={variant}
      $size={size}
      $flex={flex}
      $optionButton={optionButton}
      $disabled={disabled}
      $selected={selected}
      className={className}
      $wFull={wFull}
      {...rest}>
      {children}
    </ButtonSc>
  );
};
