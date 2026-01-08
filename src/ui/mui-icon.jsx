import React from 'react';
import { styled } from 'styled-components';

const SpanStyled = styled.span`
  font-variation-settings: 'FILL' ${(props) => props.$fill}, 'wght' ${(props) => props.$weight};
  font-size: ${(props) => props.$size};
  ${(props) => props.$customStyles}
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

/* 
--text-h6: 1.067em;
--text-h5: 1.138489em;
--text-h4: 1.214768em;
--text-h3: 1.296157em;
*/

export const MuiIcon = ({ icon, size, fill = 0, weight = 600, margin = '0', customStyles }) => {
  return (
    <SpanStyled
      className="material-symbols-rounded"
      $fill={fill}
      $weight={weight}
      $size={iconSizes[size] || size || '1em'}
      $customStyles={customStyles}
      style={{ margin: margin }}>
      {icon}
    </SpanStyled>
  );
};
