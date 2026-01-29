import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  max-width: max-content;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  position: relative;
  ${(props) => props.$styles && props.$styles}
  ${(props) => props.$secondstyles && props.$secondstyles}
`;

export const WrapperButtons = ({ children, styles, secondstyles, ...props }) => {
  return (
    <WrapperStyled $styles={styles} $secondstyles={secondstyles} {...props}>
      {children}
    </WrapperStyled>
  );
};
