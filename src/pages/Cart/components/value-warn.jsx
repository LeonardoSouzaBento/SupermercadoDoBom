import { MuiIcon } from '@ui/index';
import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.75ex;
  padding: 10px 12px 12px;
  margin-bottom: 1px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid hsla(var(--destructive-value), 0.33);
  box-shadow: var(--shadow-sm);
  background-color: hsla(var(--warn-value), 0.066);
  color: hsl(var(--destructive-value));
  scale: ${(props) => props.$scale};
  transition: scale 0.3s ease;

  & > div:first-child {
    height: 100%;
    display: flex;
    align-items: start;
    align-self: stretch;
    gap: 0.75ex;

    & > span {
      color: hsl(var(--destructive-value));
    }
  }
`;

const ValueWarn = ({ scaleWarnnig, faltaFormatada }) => {
  return (
    <WrapperStyled $scale={scaleWarnnig} id="warn">
      <div>
        <MuiIcon icon="error" size="h5" margin="3px 0 0 0" />
      </div>
      <div>
        <h6>Aviso</h6>
        <p>Faltam R$ {faltaFormatada} para o <strong>valor mínimo</strong> de R$ 40,00</p>
      </div>
    </WrapperStyled>
  );
};

export default ValueWarn;
