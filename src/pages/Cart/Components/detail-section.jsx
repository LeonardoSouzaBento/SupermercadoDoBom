import Button from '@ui/button.jsx';
import { CardHeader } from '@ui/card.jsx';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import { DetailWrapperStyled, SectionStyled } from '../ui/index';
import ValueWarn from './value-warn';

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

        <DetailWrapperStyled>
          {falta > 0 && totalAddedValue != 0 && (
            <ValueWarn scaleWarnnig={scaleWarnnig} faltaFormatada={faltaFormatada} />
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
        </DetailWrapperStyled>
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
