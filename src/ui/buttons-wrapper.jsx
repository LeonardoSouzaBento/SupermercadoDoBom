import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
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
    <WrapperStyled $styles={styles} $secondstyles={secondstyles} {...props}>
      {children}
    </WrapperStyled>
  );
};
