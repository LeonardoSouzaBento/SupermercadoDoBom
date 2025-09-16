import { useNavigate } from "react-router-dom";
import {
  DivOneStyled,
  DivH2StatusStyled,
  HeaderH2Styled,
  SpanH2Styled,
  H2v2Styled,
  DivStatusStyled,
  DivNameStatus,
  SpanStatusStyled,
  NameStatusStyled,
} from "../StylizedTags";
import {ButtonContinueStyled} from "../../Cart/StylizedTags";
import { PButtonBase } from "../../../components/GenericStylizedTags";

export const FinishShopping = ({ isDataComplete, orderInfo, userContact }) => {
  const enable =
    isDataComplete.contact &&
    isDataComplete.address &&
    userContact.email &&
    orderInfo.status === "pending";
  const navigate = useNavigate();

  function handleClickFinish() {
    if (!orderInfo.time) {
      navigate("/meu-carrinho")
    } else {
      navigate("/meus-pedidos")
    }
  }

  return (
    <DivOneStyled $orders={true}>
      <DivH2StatusStyled $orders={true}>
        <HeaderH2Styled $orders={true}>
          <SpanH2Styled className="material-symbols-rounded">
            shopping_bag
          </SpanH2Styled>
          <H2v2Styled style={{ marginBottom: "0px" }}>
            Minhas compras
          </H2v2Styled>
        </HeaderH2Styled>

        {orderInfo.status === "pending" && (
          <DivStatusStyled $finish={true}>
            <DivNameStatus $finish={true}>
              <SpanStatusStyled className="material-symbols-rounded">
                exclamation
              </SpanStatusStyled>
              <NameStatusStyled>Compra não finalizada</NameStatusStyled>
            </DivNameStatus>
          </DivStatusStyled>
        )}
      </DivH2StatusStyled>
      {orderInfo.status === "pending" && (
        <ButtonContinueStyled $myAccount={true} $enable={enable} onClick={handleClickFinish}>
          <PButtonBase>Finalizar a compra</PButtonBase>
        </ButtonContinueStyled>
      )}
    </DivOneStyled>
  );
};

export default FinishShopping;