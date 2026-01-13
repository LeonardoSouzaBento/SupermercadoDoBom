import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  max-width: max-content;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  position: relative;
  ${(props) => props.$customStyles && props.$customStyles}
  ${(props) => props.$secondCustomStyles && props.$secondCustomStyles}
`;

export const WrapperButtons = ({ children, customStyles, secondCustomStyles }) => {
  return (
    <WrapperStyled $customStyles={customStyles} $secondCustomStyles={secondCustomStyles}>
      {children}
    </WrapperStyled>
  );
};
