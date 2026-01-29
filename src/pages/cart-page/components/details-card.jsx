import { Card, CardDescription, CardHeader, CardTitle, Separator } from '@ui/index';
import { MuiIcon } from '@ui/mui-icon';
import styled, { css } from 'styled-components';
import ValueWarn from './value-warn';

const WrapperStyled = styled.div`
  width: 100%;
  height: 136px;
  margin: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid var(--border);
  border-radius: 8px;
  position: relative;

  & div.data {
    width: auto;
    max-width: max-content;
    height: 44px;
    box-sizing: border-box;
    padding: 0 16px;
    display: flex;
    gap: 1ex;
    align-items: center;
    box-sizing: border-box;
  }

  @media screen and (min-width: 680px) {
    flex-direction: row;
    height: max-content;
  }
`;

const DetailsCard = ({ totalAddedValue, scaleWarnnig }) => {
  const totalValue = totalAddedValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const falta = 40 - totalAddedValue > 0 ? 40 - totalAddedValue : 0;
  const faltaFormatada = falta.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const totalNumerico = totalAddedValue + 4;
  const totalFormatted = totalNumerico.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Card>
      <CardHeader separator={false} mb={1}>
        <CardTitle>
          <MuiIcon icon="data_info_alert" size="h3" />
          <h3>Detalhes</h3>
        </CardTitle>
        <CardDescription>Leia os detalhes de sua compra</CardDescription>
      </CardHeader>
      {falta === 0 && totalAddedValue > 0 ? (
        <WrapperStyled>
          <div className="data">
            <p>Compra:</p>
            <p>
              <strong>R$ {totalValue}</strong>
            </p>
          </div>
          <Separators />
          <div className="data">
            <p>Taxa de Entrega:</p>
            <p>
              <strong>R$ 4,00</strong>
            </p>
          </div>
          <Separators />
          <div className="data">
            <p>Total:</p>
            <p>
              <strong>R$ {totalFormatted}</strong>
            </p>
          </div>
        </WrapperStyled>
      ) : (
        <ValueWarn scaleWarnnig={scaleWarnnig} faltaFormatada={faltaFormatada} />
      )}
    </Card>
  );
};

export default DetailsCard;

const Separators = () => {
  return (
    <>
      <Separator
        styles={css`
          @media screen and (min-width: 680px) {
            display: none;
          }
        `}
      />
      <Separator
        orientation="vertical"
        styles={css`
          @media screen and (max-width: 680px) {
            display: none;
          }
        `}
      />
    </>
  );
};

