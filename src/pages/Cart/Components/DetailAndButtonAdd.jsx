import { useNavigate } from 'react-router-dom';
import {
  ContainerStyled,
  SectionStyled,
  HeaderH2Styled,
  PValueStyled,
  DivAllValuesStyled,
  DivAvisoStyled,
  PAvisoStyled,
  DivAddStyled,
  H2Styled,
} from '../StylizedTags.jsx';
import { SpanH2Styled } from '@pages/MyAccount/StylizedTags.jsx';
import { DivToCoverStyled } from '@components/GenericStylizedTags.jsx';
import Button from '@ui/button.jsx';
import { css } from 'styled-components';

const styles = {
  button: css`
    margin-bottom: 2rem;
    width: 100%;
  `,
};

const DetailAndButtonAdd = ({ totalAddedValue, scaleWarnnig }) => {
  const navigate = useNavigate();

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
    <ContainerStyled>
      <SectionStyled>
        <HeaderH2Styled>
          <SpanH2Styled className="material-symbols-rounded" $cart={true} $bigger={true}>
            data_info_alert
          </SpanH2Styled>
          <H2Styled>Detalhes</H2Styled>
        </HeaderH2Styled>

        <DivAllValuesStyled>
          {falta > 0 && totalAddedValue != 0 && (
            <DivToCoverStyled
              style={{
                backgroundColor: 'transparent',
                padding: '0px',
              }}>
              <DivAvisoStyled $scale={scaleWarnnig} id="warn">
                <PAvisoStyled>
                  Faltam R$ {faltaFormatada} para o valor mínimo de R$ 40,00
                </PAvisoStyled>
              </DivAvisoStyled>
            </DivToCoverStyled>
          )}
          <div>
            <PValueStyled>Compra:</PValueStyled>
            <PValueStyled>R$ {totalValue}</PValueStyled>
          </div>

          <div>
            <PValueStyled>Taxa de Entrega:</PValueStyled>
            <PValueStyled>R$ 4,00</PValueStyled>
          </div>

          <div style={{ borderBottom: 'none' }}>
            <PValueStyled>
              <strong>Total:</strong>
            </PValueStyled>
            <PValueStyled>
              <strong>R$ {totalFormatted}</strong>
            </PValueStyled>
          </div>
        </DivAllValuesStyled>
      </SectionStyled>

      <Button
        customStyles={styles.button}
        variant="outline"
        onClick={() => {
          navigate('/buscar-produtos');
        }}>
        Adicionar mais produtos
      </Button>
    </ContainerStyled>
  );
};

export default DetailAndButtonAdd;
