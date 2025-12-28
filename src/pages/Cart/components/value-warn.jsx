import React from 'react';
import styled from 'styled-components';
import { CentralizeDiv } from '@components/GenericStylizedTags';

const ContainerStyled = styled(CentralizeDiv)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: var(--white-foreground);
  border-radius: 1.2rem;
`;

const WrapperStyled = styled.div`
  width: 100%;
  height: max-content;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.8rem 1.6rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  background-color: var(--secondary);
  overflow: hidden;
  scale: ${(props) => props.$scale};
  transition: scale 0.3s ease;

  @media screen and (min-width: 769px) {
    margin: 0;
    margin-bottom: 1.2rem;
  }
`;

const ValueWarn = ({ scaleWarnnig, faltaFormatada }) => {
  return (
    <ContainerStyled
      style={{
        backgroundColor: 'transparent',
        padding: '0px',
      }}>
      <WrapperStyled $scale={scaleWarnnig} id="warn">
        <p>Faltam R$ {faltaFormatada} para o valor mínimo de R$ 40,00</p>
      </WrapperStyled>
    </ContainerStyled>
  );
};

export default ValueWarn;
