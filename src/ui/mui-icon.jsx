import React from 'react';
import { styled } from 'styled-components';

const SpanStyled = styled.span`
  font-variation-settings: 'FILL' ${(props) => props.$fill}, 'wght' ${(props) => props.$weight};
  font-size: ${(props) => props.$size};
`;

const iconSizes = {
  xs: '0.937em',
  sm: '0.968em',
  md: '1em',
  lg: '1.033em',
  h6: '1.067em',
  h5: '1.138em',
  h4: '1.215em',
  h3: '1.383em',
  xl: '1.067em', // h6
  '2xl': '1.138em', // h5
  '3xl': '1.215em', // h4
  '4xl': '1.383em', // h3
};

const MuiIcon = ({ icon, fill = 1, weight = 600 }) => {
  return (
    <div>
      <SpanStyled
        className="material-symbols-rounded"
        $fill={fill}
        $weight={weight}
        $size={iconSizes[size] || size || '1em'}>
        {icon}
      </SpanStyled>
    </div>
  );
};

export default MuiIcon;
