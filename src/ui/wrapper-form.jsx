import React from 'react';
import styled from 'styled-components';

const WrapperSc = styled.div`
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
    <WrapperSc $styles={styles} style={{ paddingTop: pt }} {...props}>
      {children}
    </WrapperSc>
  );
};
