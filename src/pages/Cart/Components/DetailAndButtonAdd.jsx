import { useNavigate } from "react-router-dom";
import {
  ContainerStyled,
  SectionStyled,
  HeaderH2Styled,
  PValueStyled,
  DivAllValuesStyled,
  DivAvisoStyled,
  PAvisoStyled,
  DivAddStyled,
  PAddStyled,
  H2Styled,
} from "../StylizedTags.jsx";
import { SpanH2Styled } from "../../../pages/MyAccount/StylizedTags.jsx";

const DetailAndButtonAdd = ({ totalAddedValue, scaleWarnnig }) => {
  const navigate = useNavigate();

  const totalValue = totalAddedValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const falta = 40 - totalAddedValue > 0 ? 40 - totalAddedValue : 0;
  const faltaFormatada = falta.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const totalNumerico = totalAddedValue + 4;
  const totalFormatted = totalNumerico.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <ContainerStyled>
      <SectionStyled>
        <HeaderH2Styled>
          <SpanH2Styled
            className="material-symbols-rounded"
            $cart={true}
            $bigger={true}
          >
            data_info_alert
          </SpanH2Styled>
          <H2Styled>Detalhes</H2Styled>
        </HeaderH2Styled>

        <DivAllValuesStyled>
          {falta > 0 && totalAddedValue != 0 && (
            <DivAvisoStyled $scale={scaleWarnnig}>
              <PAvisoStyled>
                Faltam R$ {faltaFormatada} para o valor mínimo de R$ 40,00
              </PAvisoStyled>
            </DivAvisoStyled>
          )}
          <div>
            <PValueStyled>Compra:</PValueStyled>
            <PValueStyled>R$ {totalValue}</PValueStyled>
          </div>

          <div>
            <PValueStyled>Taxa de Entrega:</PValueStyled>
            <PValueStyled>R$ 4,00</PValueStyled>
          </div>

          <div style={{ borderBottom: "none" }}>
            <PValueStyled>
              <strong>Total:</strong>
            </PValueStyled>
            <PValueStyled>
              <strong>R$ {totalFormatted}</strong>
            </PValueStyled>
          </div>
        </DivAllValuesStyled>
      </SectionStyled>

      <DivAddStyled
        onClick={() => {
          navigate("/buscar-produtos");
        }}
      >
        <PAddStyled>Adicionar mais produtos</PAddStyled>
      </DivAddStyled>
    </ContainerStyled>
  );
};

export default DetailAndButtonAdd;
