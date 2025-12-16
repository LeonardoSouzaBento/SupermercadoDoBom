import styled from "styled-components";

export const H1BaseStyled = styled.h1`
  color: var(--white-foreground);
  font-weight: 700;
  text-align: center;
  user-select: none;
`;

export const H2BaseStyled = styled.h2`
  color: var(--dark-primary);
  text-align: center;
  user-select: none;
  font-weight: 700;
`;

export const CentralizeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CentralizeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PButtonBase = styled.p`
  font-family: var(--font-button);
  font-weight: 550;
  cursor: pointer;
  color: var(--white-foreground);
`;

export const DivToCoverStyled = styled(CentralizeDiv)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: var(--white-foreground);
  border-radius: 12px;
`;
