import { DivToCoverStyled } from '@components/GenericStylizedTags.jsx';
import { SpanH2Styled } from '@pages/MyAccount/StylizedTags.jsx';
import Button from '@ui/button.jsx';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import {
  ContainerStyled,
  DivAllValuesStyled,
  DivAvisoStyled,
  H2Styled,
  HeaderH2Styled,
  PAvisoStyled,
  PValueStyled,
} from '../StylizedTags.jsx';
import { SectionStyled } from '../ui/index';
import { CardHeader } from '@ui/Card.jsx';

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
        <CardHeader
          icon={<span className="material-symbols-rounded">data_info_alert</span>}
          title="Detalhes"
        />

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
