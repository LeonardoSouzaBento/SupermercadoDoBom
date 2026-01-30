import React from 'react';
import { styled } from 'styled-components';

const SpanSc = styled.span`
  font-variation-settings:
    'FILL' ${(props) => props.$fill},
    'wght' ${(props) => props.$weight};
  font-size: ${(props) => props.$size};
  ${(props) => props.$styles}
`;

const iconSizes = {
  xs: '0.937em',
  sm: '0.968em',
  md: '1em',
  lg: '1.033em',
  h6: '1.067em',
  h5: '1.138em',
  h4: '1.215em',
  h3: '1.296em',
  xl: '1.067em', // h6
  '2xl': '1.138em', // h5
  '3xl': '1.215em', // h4
  '4xl': '1.383em', // h3
};

export const MuiIcon = ({
  icon,
  size,
  fill = 0,
  weight = 600,
  margin = '0',
  styles,
  id,
  className,
  ...props
}) => {
  return (
    <SpanSc
      id={id}
      className={`material-symbols-rounded ${className || ''}`}
      $fill={fill}
      $weight={weight}
      $size={iconSizes[size] || size || '1em'}
      $styles={styles}
      style={{ margin: margin }}
      {...props}>
      {icon}
    </SpanSc>
  );
};
