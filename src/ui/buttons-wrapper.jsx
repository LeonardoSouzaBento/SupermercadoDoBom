import React from 'react';
import styled from 'styled-components';

const WrapperSc = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  position: relative;
  ${(props) => props.$styles && props.$styles}
  ${(props) => props.$secondstyles && props.$secondstyles}
`;

export const ButtonsWrapper = ({ children, styles, secondstyles, ...props }) => {
  return (
    <WrapperSc $styles={styles} $secondstyles={secondstyles} {...props}>
      {children}
    </WrapperSc>
  );
};
