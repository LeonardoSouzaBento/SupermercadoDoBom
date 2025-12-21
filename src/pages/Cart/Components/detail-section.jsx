import { DivToCoverStyled } from '@components/GenericStylizedTags.jsx';
import Button from '@ui/button.jsx';
import { CardHeader } from '@ui/Card.jsx';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { DivAllValuesStyled, DivAvisoStyled } from '../StylizedTags.jsx';
import { SectionStyled } from '../ui/index';

const styles = {
  button: css`
    margin-bottom: 2rem;
    width: 100%;
  `,
};

const DetailSection = ({ totalAddedValue, scaleWarnnig }) => {
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
    <SectionStyled>
      <div>
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
                <p>Faltam R$ {faltaFormatada} para o valor mínimo de R$ 40,00</p>
              </DivAvisoStyled>
            </DivToCoverStyled>
          )}
          <div>
            <p>Compra:</p>
            <p>R$ {totalValue}</p>
          </div>

          <div>
            <p>Taxa de Entrega:</p>
            <p>R$ 4,00</p>
          </div>

          <div style={{ borderBottom: 'none' }}>
            <p>
              <strong>Total:</strong>
            </p>
            <p>
              <strong>R$ {totalFormatted}</strong>
            </p>
          </div>
        </DivAllValuesStyled>
      </div>

      <Button
        customStyles={styles.button}
        variant="outline"
        onClick={() => {
          navigate('/buscar-produtos');
        }}>
        Adicionar mais produtos
      </Button>
    </SectionStyled>
  );
};

export default DetailSection;
