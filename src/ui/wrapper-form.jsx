import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1ex;
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 16px;
  ${(props) => props.$styles && props.$styles}
`;

export const WrapperForm = ({ children, styles, pt = '16px', ...props }) => {
  return (
    <WrapperStyled $styles={styles} style={{ paddingTop: pt }} {...props}>
      {children}
    </WrapperStyled>
  );
};
